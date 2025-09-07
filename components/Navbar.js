"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "15px", background: "#f0f0f0" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
