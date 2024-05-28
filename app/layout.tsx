'use client'
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import PageWrapper from "./components/pagewrapper";
import { useState } from "react";

const karla = Karla({
  weight:["200","300","400","600","700","800"],
  subsets:['latin'],
  variable:"--font-karla"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggleCollapse,setToggleCollapse] = useState(false)
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="flex">
          <SideBar>
          </SideBar>
          <Header>
          </Header>
          <PageWrapper>
          {children}
          </PageWrapper>
        </div>
      
      </body>
    </html>
  );
}
