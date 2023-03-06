import Layout from "@/components/layout";
import Message from "@/components/message";
import type { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 py-10  px-4">
        <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">당근</h1>
          <span className="mt-3 block text-2xl text-gray-900">$140</span>
          <p className=" my-6 text-gray-700">
            당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근
            당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근
            당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근당근
            당근당근당근당근당근당근당근당근당근
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className="h-[50vh] space-y-4 overflow-y-scroll py-10 px-4  pb-16 scrollbar-hide">
            <Message message="안뇽" />
            <Message message="2만원" reversed />
            <Message message="미쳤어" />
          </div>
          <div className="fixed inset-x-0 bottom-0  bg-white py-2">
            <div className="relative mx-auto flex w-full  max-w-md items-center">
              <input
                type="text"
                className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
