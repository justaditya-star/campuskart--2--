import Link from "next/link";
export default function Footer(){return <footer className="mt-20 bg-navy text-slate-300"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
<div><p className="text-xl font-extrabold text-white">Campus<span className="text-accent">Kart</span></p><p className="mt-2 text-sm">About: a student-to-student campus marketplace. Frontend prototype.</p></div>
<div className="space-y-2 text-sm"><Link href="/explore" className="block hover:text-white">Explore Marketplace</Link><Link href="/sell" className="block hover:text-white">Start Selling</Link></div>
<div className="space-y-2 text-sm"><a href="mailto:hello@campuskart.demo" className="block hover:text-white">Contact</a><span className="block">Privacy Policy</span><span className="block">Terms &amp; Conditions</span></div></div></footer>}
