import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import Layout from "@/components/layout";
import Item from "@/components/item";
import FloatingButton from "@/components/floating-button";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y">
        {[...Array(10)].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
