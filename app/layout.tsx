"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "./components/navbar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <Navbar />
        <div className="container mt-3">{children}</div>
      </body>
    </html>
  );
}
