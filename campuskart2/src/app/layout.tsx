import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/lib/storage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter=Inter({subsets:["latin"]});
export const metadata:Metadata={title:"CampusKart — Your Campus. Your Marketplace.",description:"Buy, sell, exchange and give away items within your campus."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.className}><StoreProvider><Navbar/><main>{children}</main><Footer/></StoreProvider></body></html>}
