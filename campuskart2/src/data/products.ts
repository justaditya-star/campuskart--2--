import type { Product, Category } from "@/types";
export const CATEGORIES: Category[]=["Books & Notes","Electronics","Academic Essentials","Hostel Essentials","Fashion & Accessories","Sports Equipment","Other"];
type R=[string,string,number,number,Category,Product["condition"],string,string,Product["type"]];
const rows:R[]=[
["Engineering Mathematics Textbook","1",350,700,"Books & Notes","Good","B.S. Grewal, 44th edition. Light highlighting in first 3 chapters.","Library Gate","sale"],
["Casio Scientific Calculator fx-991","2",650,1100,"Academic Essentials","Like New","Used one semester. Works perfectly, cover included.","Main Canteen","sale"],
["Mechanical Keyboard (Blue Switch)","3",1200,2400,"Electronics","Good","87-key, RGB backlight. A few keycaps slightly worn.","Hostel Block A","sale"],
["Lab Coat (Size M)","4",250,500,"Academic Essentials","Good","Washed and ironed. Only used for one lab course.","Chemistry Lab","sale"],
["Hostel Storage Organizer","5",300,600,"Hostel Essentials","Like New","Foldable 4-tier organizer, easy to carry.","Hostel Block B","sale"],
["Wired Headphones","6",800,1500,"Electronics","Good","Over-ear, good bass, 3.5mm jack. Cushions in good shape.","Main Canteen","sale"],
["Data Structures Notes (Handwritten)","7",0,0,"Books & Notes","Good","Complete semester notes with solved examples. Free to a junior.","Library Gate","free"],
["Badminton Racket Pair","8",400,900,"Sports Equipment","Good","Two rackets and 3 shuttlecocks. Regrip recommended.","Sports Complex","sale"],
["Study Table Lamp (LED)","9",350,700,"Hostel Essentials","Like New","USB rechargeable, 3 brightness modes.","Hostel Block C","sale"],
["Drafter and Geometry Box","10",200,450,"Academic Essentials","Good","Mini drafter, set squares, compass. Complete set.","Admin Block","sale"],
["Denim Jacket (L)","11",500,1400,"Fashion & Accessories","Like New","Worn twice. Open to exchange for a hoodie of similar value.","Student Plaza","exchange"],
["Cricket Bat (Kashmir Willow)","12",600,1200,"Sports Equipment","Used","Well-used but solid. Includes grip and cover.","Sports Complex","sale"],
["Power Bank 10000mAh","13",550,1200,"Electronics","Good","Fast charge, 2 USB ports, battery health good.","Library Gate","sale"],
["Bucket and Mug Set","14",0,0,"Hostel Essentials","Used","Giving away since I am moving out. First come first served.","Hostel Block A","free"],
["Backpack (30L)","15",450,1300,"Fashion & Accessories","Good","Laptop compartment, water resistant. Zip works smoothly.","Student Plaza","sale"],
["Digital Electronics Textbook","16",300,650,"Books & Notes","Good","Morris Mano. Clean pages, no missing sheets.","Library Gate","sale"]];
export const PRODUCTS:Product[]=rows.map((r,i)=>({id:`p${r[1]}`,title:r[0],price:r[2],originalPrice:r[3]||undefined,category:r[4],condition:r[5],description:r[6],seller:`Demo Seller ${String.fromCharCode(65+(i%6))}`,pickup:r[7],posted:new Date(2026,9,30-i).toISOString().slice(0,10),type:r[8]}));
