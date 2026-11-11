"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LayoutGrid, List, SearchX } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useStore } from "@/lib/storage";
import ProductCard from "@/components/ProductCard";
const CONDS=["New","Like New","Good","Used"];
function Explore(){
  const sp=useSearchParams();const {products}=useStore();
  const [q,setQ]=useState(sp.get("q")??"");const [cat,setCat]=useState(sp.get("category")??"");const [cond,setCond]=useState("");
  const [min,setMin]=useState("");const [max,setMax]=useState("");const [sort,setSort]=useState("new");const [list,setList]=useState(false);
  const res=useMemo(()=>{let r=products.filter(p=>(!q||(p.title+p.description+p.category).toLowerCase().includes(q.toLowerCase()))&&(!cat||p.category===cat)&&(!cond||p.condition===cond)&&(!min||p.price>=+min)&&(!max||p.price<=+max));
    return [...r].sort((a,b)=>sort==="low"?a.price-b.price:sort==="high"?b.price-a.price:b.posted.localeCompare(a.posted))},[products,q,cat,cond,min,max,sort]);
  const clear=()=>{setQ("");setCat("");setCond("");setMin("");setMax("");setSort("new")};
  return <div className="mx-auto max-w-6xl gap-8 px-4 py-10 lg:flex">
    <aside className="mb-6 space-y-4 lg:mb-0 lg:w-64 lg:shrink-0">
      <input className="input" placeholder="Search…" value={q} onChange={e=>setQ(e.target.value)}/>
      <select className="input" value={cat} onChange={e=>setCat(e.target.value)}><option value="">All categories</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
      <select className="input" value={cond} onChange={e=>setCond(e.target.value)}><option value="">Any condition</option>{CONDS.map(c=><option key={c}>{c}</option>)}</select>
      <div className="flex gap-2"><input className="input" type="number" min={0} placeholder="Min ₹" value={min} onChange={e=>setMin(e.target.value)}/><input className="input" type="number" min={0} placeholder="Max ₹" value={max} onChange={e=>setMax(e.target.value)}/></div>
      <button onClick={clear} className="btn-ghost w-full">Clear filters</button></aside>
    <div className="flex-1"><div className="mb-4 flex items-center justify-between gap-3"><p className="text-sm text-slate-500">{res.length} items</p>
      <div className="flex gap-2"><select className="input w-auto" value={sort} onChange={e=>setSort(e.target.value)}><option value="new">Newest</option><option value="low">Lowest price</option><option value="high">Highest price</option></select>
      <button aria-label="Grid" onClick={()=>setList(false)} className="btn-ghost px-3"><LayoutGrid className="h-4 w-4"/></button><button aria-label="List" onClick={()=>setList(true)} className="btn-ghost px-3"><List className="h-4 w-4"/></button></div></div>
      {res.length?<div className={list?"space-y-4":"grid gap-5 sm:grid-cols-2 xl:grid-cols-3"}>{res.map(p=><ProductCard key={p.id} p={p} list={list}/>)}</div>
      :<div className="rounded-2xl bg-white py-20 text-center"><SearchX className="mx-auto h-10 w-10 text-slate-300"/><p className="mt-3 font-semibold text-navy">No items match your filters</p><button onClick={clear} className="btn-primary mt-4">Clear filters</button></div>}</div></div>;
}
export default function Page(){return <Suspense fallback={<div className="p-10">Loading…</div>}><Explore/></Suspense>}
