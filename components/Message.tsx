import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const ischatGPT = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${ischatGPT && "bg-[#434654]"}`}>
      <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={message.user.avatar} alt='profile' className='h-8 w-8' />
        <p className='pt-1 text-sm '>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
