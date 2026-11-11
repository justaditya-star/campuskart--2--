"use client";
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import type { Product } from "@/types";
import { PRODUCTS } from "@/data/products";
interface Ctx{products:Product[];wishlist:string[];ready:boolean;addProduct:(p:Product)=>void;removeProduct:(id:string)=>void;toggleWish:(id:string)=>void;toast:(m:string)=>void}
const C=createContext<Ctx>(null as unknown as Ctx);
export const useStore=()=>useContext(C);
const load=<T,>(k:string,d:T):T=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}};
export function StoreProvider({children}:{children:ReactNode}){
  const [mine,setMine]=useState<Product[]>([]);const [wishlist,setW]=useState<string[]>([]);const [ready,setReady]=useState(false);const [msg,setMsg]=useState("");
  useEffect(()=>{setMine(load("ck_mine",[]));setW(load("ck_wish",[]));setReady(true)},[]);
  useEffect(()=>{if(ready){localStorage.setItem("ck_mine",JSON.stringify(mine));localStorage.setItem("ck_wish",JSON.stringify(wishlist))}},[mine,wishlist,ready]);
  const toast=useCallback((m:string)=>{setMsg(m);setTimeout(()=>setMsg(""),2200)},[]);
  const toggleWish=(id:string)=>{const has=wishlist.includes(id);setW(has?wishlist.filter(x=>x!==id):[...wishlist,id]);toast(has?"Removed from wishlist":"Saved to wishlist")};
  return <C.Provider value={{products:[...mine,...PRODUCTS],wishlist,ready,addProduct:p=>setMine([{...p,mine:true},...mine]),removeProduct:id=>setMine(mine.filter(p=>p.id!==id)),toggleWish,toast}}>
    {children}{msg&&<div role="status" className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-navy px-5 py-3 text-sm text-white shadow-lg">{msg}</div>}
  </C.Provider>;
}
