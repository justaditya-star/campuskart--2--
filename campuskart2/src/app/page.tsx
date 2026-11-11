"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Leaf, Wallet, Users, GraduationCap } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { CAT_ICON } from "@/lib/utils";
import { useStore } from "@/lib/storage";
import ProductCard from "@/components/ProductCard";
export default function Home(){
  const [q,setQ]=useState("");const r=useRouter();const {products}=useStore();
  const recent=[...products].sort((a,b)=>b.posted.localeCompare(a.posted)).slice(0,8);
  return <>
  <section className="bg-navy text-white"><div className="mx-auto max-w-6xl px-4 py-20 text-center">
    <h1 className="text-4xl font-extrabold sm:text-6xl">Don&apos;t Buy New. <span className="text-accent">Buy Campus.</span></h1>
    <p className="mx-auto mt-5 max-w-xl text-slate-300">Discover affordable essentials, sell what you don&apos;t need, and connect with students across your campus.</p>
    <form onSubmit={e=>{e.preventDefault();r.push(`/explore?q=${encodeURIComponent(q)}`)}} className="mx-auto mt-8 flex max-w-xl gap-2 rounded-2xl bg-white p-2"><Search className="ml-2 mt-2.5 h-5 w-5 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search books, calculators, keyboards…" className="flex-1 text-slate-800 outline-none"/><button className="btn-primary">Search</button></form>
    <div className="mt-6 flex flex-wrap justify-center gap-3"><Link href="/explore" className="btn-primary">Explore Marketplace</Link><Link href="/sell" className="btn border border-white/40 hover:bg-white/10">Start Selling</Link></div>
  </div></section>
  <section id="categories" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-16"><h2 className="text-2xl font-bold text-navy">Browse by category</h2>
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">{CATEGORIES.map(c=>{const I=CAT_ICON[c];return <Link key={c} href={`/explore?category=${encodeURIComponent(c)}`} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:shadow-md"><span className="rounded-xl bg-orange-50 p-3"><I className="h-6 w-6 text-accent"/></span>{c}</Link>})}</div></section>
  <section className="mx-auto max-w-6xl px-4 pt-16"><div className="flex items-end justify-between"><h2 className="text-2xl font-bold text-navy">Recently added</h2><Link href="/explore" className="text-sm font-semibold text-accent">View all →</Link></div>
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{recent.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>
  <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-16"><h2 className="text-2xl font-bold text-navy">How it works</h2>
    <div className="mt-6 grid gap-5 sm:grid-cols-3">{["Find what you need.","Connect with the student seller.","Meet at a safe campus pickup point and complete the exchange."].map((t,i)=><div key={i} className="rounded-2xl bg-white p-6 shadow-sm"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-white">{i+1}</span><p className="mt-3 font-medium text-navy">{t}</p></div>)}</div></section>
  <section className="mx-auto max-w-6xl px-4 pt-16"><h2 className="text-2xl font-bold text-navy">Why CampusKart?</h2>
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[[Wallet,"Affordable student prices"],[GraduationCap,"Campus-focused marketplace"],[Leaf,"Reuse and sustainability"],[Users,"Student-to-student connections"]].map(([I,t]:any)=><div key={t} className="rounded-2xl border border-slate-200 p-5"><I className="h-6 w-6 text-accent"/><p className="mt-3 font-semibold text-navy">{t}</p></div>)}</div></section>
  </>;
}
