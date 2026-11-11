"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Heart, MapPin, MessageCircle, Tag } from "lucide-react";
import { useStore } from "@/lib/storage";
import { CAT_ICON, inr } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
export default function Detail(){
  const {id}=useParams<{id:string}>();const {products,ready,wishlist,toggleWish,toast}=useStore();
  const [offer,setOffer]=useState("");const [status,setStatus]=useState("");
  const p=products.find(x=>x.id===id);
  if(!p)return <div className="py-24 text-center">{ready?<><p className="text-xl font-bold text-navy">Listing not found</p><Link href="/explore" className="btn-primary mt-4">Back to Explore</Link></>:"Loading…"}</div>;
  const Icon=CAT_ICON[p.category];const sim=products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
  return <div className="mx-auto max-w-6xl px-4 py-10">
    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-100 to-orange-50"><Icon className="h-24 w-24 text-navy/30"/></div>
      <div className="space-y-4"><h1 className="text-3xl font-bold text-navy">{p.title}</h1>
        <p className="text-3xl font-extrabold text-accent">{inr(p.price)} {p.originalPrice&&<span className="text-base font-normal text-slate-400 line-through">{inr(p.originalPrice)}</span>}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600"><span className="flex items-center gap-1"><Tag className="h-4 w-4"/>{p.category} · {p.condition}</span><span className="flex items-center gap-1"><MapPin className="h-4 w-4"/>{p.pickup}</span><span>Posted {p.posted}</span></p>
        <p className="text-slate-700">{p.description}</p>
        <p className="rounded-xl bg-white p-3 text-sm shadow-sm">Seller: <b>{p.seller}</b> <span className="text-xs text-slate-400">(demo profile)</span></p>
        <div className="flex flex-wrap gap-3"><button className="btn-navy" onClick={()=>toast("Demo: message sent to seller")}><MessageCircle className="h-4 w-4"/>Contact Seller</button>
          <button className="btn-ghost" onClick={()=>toggleWish(p.id)}><Heart className={`h-4 w-4 ${wishlist.includes(p.id)?"fill-accent text-accent":""}`}/>{wishlist.includes(p.id)?"Saved":"Add to Wishlist"}</button></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="mb-2 text-sm font-semibold text-navy">Make an Offer</p>
          <div className="flex gap-2"><input className="input" type="number" min={1} placeholder="Your offer (₹)" value={offer} onChange={e=>setOffer(e.target.value)}/><button className="btn-primary" onClick={()=>{if(+offer>0){setStatus(`Offer of ₹${offer} sent — status: Pending (demo)`);setOffer("")}else toast("Enter a valid offer")}}>Send</button></div>
          {status&&<p className="mt-2 text-sm text-green-700">{status}</p>}</div></div></div>
    {sim.length>0&&<><h2 className="mt-14 text-xl font-bold text-navy">Similar products</h2><div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{sim.map(s=><ProductCard key={s.id} p={s}/>)}</div></>}</div>;
}
