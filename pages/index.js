import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, settext] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Word Counter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <textarea
        value={text}
        onChange={function (e) {
          settext(e.target.value);

          let len = document.getElementById("len");
          let w = document.getElementById("w");

          len.innerHTML = `Number of letters: ${e.target.value.length}`;
          w.innerHTML = `Number of words: ${
            e.target.value.split(" ").filter((word) => word !== "").length
          }`;
        }}
        onLoad={function (e) {
          settext(e.target.value);

          let len = document.getElementById("len");
          let w = document.getElementById("w");

          len.innerHTML = `Number of letters: ${e.target.value.length}`;
          w.innerHTML = `Number of words: ${
            e.target.value.split(" ").filter((word) => word !== "").length
          }`;
        }}
        className="p-2.5 border-[1px] rounded-lg w-[500px] h-[300px] resize mt-[30px] absolute left-[50%] translate-x-[-50%]"
      ></textarea>
      <br />
      <div className="flex flex-col space-y-2 pl-[30px]">
        <h1 className="text-3xl font-bold">Summary</h1>
        <br />
        <span id="len"></span>
        <br />
        <span id="w"></span>
      </div>
    </div>
  );
}
