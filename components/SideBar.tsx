"use client";

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

const Sidebar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div className=''>
          <NewChat />
          <div className='hidden sm:inline'>
            <ModelSelection />
          </div>
          <div className='flex flex-col space-y-2 my-2'>
            {loading && (
              <div className='animate-pulse text-center text-white'>
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div className='flex'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            onClick={() => signOut()}
            src={session?.user?.image!}
            alt='Profile-Pic'
            className='h-12 w-12 rounded-full cursor-pointer ml-3 hover:opacity-50 mb-3'
          />
          <p className='text-white ml-3 mt-3 hidden sm:inline '>
            {session?.user?.name!}
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
