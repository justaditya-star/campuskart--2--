"use client";
import Link from "next/link";
import { useStore } from "@/lib/storage";
import ProductCard from "@/components/ProductCard";
export default function Wishlist(){
  const {products,wishlist}=useStore();const items=products.filter(p=>wishlist.includes(p.id));
  return <div className="mx-auto max-w-6xl px-4 py-10"><h1 className="text-3xl font-bold text-navy">Your Wishlist</h1>
    {items.length?<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(p=><ProductCard key={p.id} p={p}/>)}</div>
    :<div className="mt-6 rounded-2xl bg-white py-20 text-center"><p className="font-semibold text-navy">Nothing saved yet</p><Link href="/explore" className="btn-primary mt-4">Explore Marketplace</Link></div>}</div>;
}
