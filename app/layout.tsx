import SessionProvider from "@/components/SessionProvider";
import Sidebar from "@/components/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import Head from "next/head";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT clone for educational purpose",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body>
        <Head>
          <title>Chat</title>
        </Head>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] '>
                <Sidebar />
              </div>
              <ClientProvider />
              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
