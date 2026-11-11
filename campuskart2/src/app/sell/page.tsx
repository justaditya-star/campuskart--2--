"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/data/products";
import { useStore } from "@/lib/storage";
import type { Category, Condition, ListingType } from "@/types";
export default function Sell(){
  const {addProduct,toast}=useStore();const r=useRouter();
  const [f,setF]=useState({title:"",category:"" as Category|"",price:"",orig:"",condition:"Good" as Condition,type:"sale" as ListingType,description:"",pickup:"",contact:"In-app chat"});
  const [err,setErr]=useState<Record<string,string>>({});const [img,setImg]=useState("");
  const set=(k:string,v:string)=>setF({...f,[k]:v});
  const submit=(e:React.FormEvent)=>{e.preventDefault();const x:Record<string,string>={};
    if(f.title.trim().length<3)x.title="Enter a title (min 3 characters)";if(!f.category)x.category="Select a category";
    if(f.type==="sale"&&!(+f.price>0))x.price="Enter a valid price";if(f.description.trim().length<10)x.description="Add a short description (min 10 characters)";if(!f.pickup.trim())x.pickup="Enter a pickup location";
    setErr(x);if(Object.keys(x).length)return;
    addProduct({id:"u"+Date.now(),title:f.title.trim(),category:f.category as Category,price:f.type==="free"?0:+f.price,originalPrice:+f.orig>0?+f.orig:undefined,condition:f.condition,type:f.type,description:f.description.trim(),seller:"You (demo)",pickup:f.pickup.trim(),posted:new Date().toISOString().slice(0,10)});
    toast("Listing published!");r.push("/explore")};
  const E=({k}:{k:string})=>err[k]?<p className="mt-1 text-xs text-red-600">{err[k]}</p>:null;
  const L=({t,req}:{t:string;req?:boolean})=><label className="mb-1 block text-sm font-medium text-navy">{t}{req&&<span className="text-accent"> *</span>}</label>;
  return <form onSubmit={submit} noValidate className="mx-auto max-w-2xl space-y-5 px-4 py-10"><h1 className="text-3xl font-bold text-navy">Sell an Item</h1>
    <div><L t="Product title" req/><input className="input" value={f.title} onChange={e=>set("title",e.target.value)}/><E k="title"/></div>
    <div className="grid gap-4 sm:grid-cols-2"><div><L t="Category" req/><select className="input" value={f.category} onChange={e=>set("category",e.target.value)}><option value="">Select…</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select><E k="category"/></div>
      <div><L t="Listing type"/><select className="input" value={f.type} onChange={e=>set("type",e.target.value)}><option value="sale">Sell</option><option value="exchange">Exchange</option><option value="free">Free giveaway</option></select></div></div>
    <div className="grid gap-4 sm:grid-cols-3"><div><L t="Price (₹)" req={f.type==="sale"}/><input className="input" type="number" min={0} disabled={f.type==="free"} value={f.price} onChange={e=>set("price",e.target.value)}/><E k="price"/></div>
      <div><L t="Original price (optional)"/><input className="input" type="number" min={0} value={f.orig} onChange={e=>set("orig",e.target.value)}/></div>
      <div><L t="Condition"/><select className="input" value={f.condition} onChange={e=>set("condition",e.target.value)}>{["New","Like New","Good","Used"].map(c=><option key={c}>{c}</option>)}</select></div></div>
    <div><L t="Description" req/><textarea className="input h-28" value={f.description} onChange={e=>set("description",e.target.value)}/><E k="description"/></div>
    <div><L t="Product image (preview only)"/><input type="file" accept="image/*" onChange={e=>{const fl=e.target.files?.[0];setImg(fl?URL.createObjectURL(fl):"")}}/>{img&&<img src={img} alt="Preview" className="mt-3 h-32 rounded-xl object-cover"/>}</div>
    <div className="grid gap-4 sm:grid-cols-2"><div><L t="Pickup location" req/><input className="input" value={f.pickup} onChange={e=>set("pickup",e.target.value)}/><E k="pickup"/></div>
      <div><L t="Contact preference"/><select className="input" value={f.contact} onChange={e=>set("contact",e.target.value)}><option>In-app chat</option><option>College email</option></select></div></div>
    <button className="btn-primary w-full">Submit listing</button></form>;
}
