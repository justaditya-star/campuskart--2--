"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Menu, X, Search } from "lucide-react";
import { useStore } from "@/lib/storage";
const links=[["/","Home"],["/explore","Explore"],["/#categories","Categories"],["/#how","How It Works"]];
export default function Navbar(){
  const [open,setOpen]=useState(false);const [q,setQ]=useState("");const {wishlist}=useStore();const r=useRouter();
  const go=(e:React.FormEvent)=>{e.preventDefault();r.push(`/explore?q=${encodeURIComponent(q)}`);setOpen(false)};
  return <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
      <Link href="/" className="text-xl font-extrabold text-navy">Campus<span className="text-accent">Kart</span></Link>
      <nav className="ml-6 hidden gap-5 text-sm font-medium md:flex">{links.map(([h,l])=><Link key={l} href={h} className="hover:text-accent">{l}</Link>)}</nav>
      <form onSubmit={go} className="ml-auto hidden lg:block"><div className="relative"><Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search items" className="input w-56 pl-9"/></div></form>
      <Link href="/sell" className="btn-primary hidden md:inline-flex">Sell an Item</Link>
      <Link href="/wishlist" aria-label="Wishlist" className="relative ml-auto rounded-full p-2 hover:bg-slate-100 md:ml-0"><Heart className="h-5 w-5 text-navy"/>{wishlist.length>0&&<span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-white">{wishlist.length}</span>}</Link>
      <button className="md:hidden" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="space-y-3 border-t bg-white px-4 py-4 md:hidden">
      <form onSubmit={go}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search items" className="input"/></form>
      {links.map(([h,l])=><Link key={l} href={h} onClick={()=>setOpen(false)} className="block py-1 font-medium">{l}</Link>)}
      <Link href="/sell" onClick={()=>setOpen(false)} className="btn-primary w-full">Sell an Item</Link></div>}
  </header>;
}
