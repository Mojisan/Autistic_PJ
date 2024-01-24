import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Providers } from "../../store/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Providers>
        
      </Providers>
    </>
  );
}
