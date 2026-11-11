"use client";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import type { Product } from "@/types";
import { CAT_ICON, inr } from "@/lib/utils";
import { useStore } from "@/lib/storage";
export default function ProductCard({p,list}:{p:Product;list?:boolean}){
  const {wishlist,toggleWish}=useStore();const Icon=CAT_ICON[p.category];const on=wishlist.includes(p.id);
  return <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${list?"flex":""}`}>
    <Link href={`/product/${p.id}`} className={list?"flex flex-1":"block"}>
      <div className={`flex items-center justify-center bg-gradient-to-br from-slate-100 to-orange-50 ${list?"w-40 shrink-0":"h-44"}`}><Icon className="h-14 w-14 text-navy/40"/></div>
      <div className="space-y-1.5 p-4">
        <div className="flex gap-2 text-xs"><span className="rounded-full bg-navy/10 px-2 py-0.5 font-medium text-navy">{p.condition}</span>{p.type!=="sale"&&<span className="rounded-full bg-accent/10 px-2 py-0.5 font-medium text-accent capitalize">{p.type}</span>}</div>
        <h3 className="font-semibold text-navy line-clamp-1">{p.title}</h3>
        <div className="flex items-baseline gap-2"><span className="text-lg font-bold text-accent">{p.type==="exchange"?`${inr(p.price)} / swap`:inr(p.price)}</span>{p.originalPrice&&<span className="text-sm text-slate-400 line-through">{inr(p.originalPrice)}</span>}</div>
        <p className="text-xs text-slate-500">{p.category} · {p.seller}</p>
        <p className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3"/>Campus pickup: {p.pickup}</p>
      </div>
    </Link>
    <button aria-label="Toggle wishlist" onClick={()=>toggleWish(p.id)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow transition hover:scale-110"><Heart className={`h-4 w-4 ${on?"fill-accent text-accent":"text-slate-500"}`}/></button>
  </div>;
}
