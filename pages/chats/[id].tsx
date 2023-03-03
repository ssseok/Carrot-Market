import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="space-y-4 px-4 py-10">
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
          <p>이거 얼마에요?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
          <p>2만원이요</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700">
          <p>미쳤어</p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-2 mx-auto w-full max-w-md">
        <div className="relative flex items-center">
          <input
            className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="text"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 px-1.5">
            <button className="flex cursor-pointer items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
