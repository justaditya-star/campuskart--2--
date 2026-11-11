export type Category="Books & Notes"|"Electronics"|"Academic Essentials"|"Hostel Essentials"|"Fashion & Accessories"|"Sports Equipment"|"Other";
export type Condition="New"|"Like New"|"Good"|"Used";
export type ListingType="sale"|"free"|"exchange";
export interface Product{id:string;title:string;price:number;originalPrice?:number;category:Category;condition:Condition;description:string;seller:string;pickup:string;posted:string;type:ListingType;mine?:boolean}
