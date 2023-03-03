import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10 ">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex cursor-pointer items-center space-x-3 px-4 py-3"
        >
          <div className="h-12 w-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">현석</p>
            <p className="text-sm  text-gray-500">2시까지와</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
