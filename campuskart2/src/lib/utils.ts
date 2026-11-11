import { Book, Cpu, PenTool, BedDouble, Shirt, Dumbbell, Package } from "lucide-react";
export const CAT_ICON={"Books & Notes":Book,"Electronics":Cpu,"Academic Essentials":PenTool,"Hostel Essentials":BedDouble,"Fashion & Accessories":Shirt,"Sports Equipment":Dumbbell,"Other":Package} as const;
export const inr=(n:number)=>n===0?"Free":"₹"+n.toLocaleString("en-IN");
