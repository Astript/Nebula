import Frame from "@/components/Frame";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  );
}
