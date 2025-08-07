import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiLinkedinLine,
  RiTwitterFill,
  RiTwitterLine,
} from "@remixicon/react";

export const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Properties", href: "#properties" },
  { id: 4, label: "Contact", href: "#contact" },
];

export const cardItems = [
  {
    id: 1,
    imgURL: "./images/londonPark.jpg",
    price: "₦7,000,000",
    name: "London Park And Gardens",
    location: "Ologun-Eru, Ibadan.",
    bed: "",
    bath: "Oyo",
    area: "540 sqm.",
  },
  {
    id: 2,
    imgURL: "./images/otahead.png",
    price: "₦20,000,000",
    name: "Treasure Park and Gardens",
    location: "Shimawa,Ogun",
    bed: "Phase 3",
    bath: "Ogun",
    area: "600  sqm.",
  },
  {
    id: 3,
    imgURL: "./images/est3.png",
    price: "₦6,000,000",
    name: "West Park & Gardens",
    location: "Aiyegun-Oleyo, Ibadan.",
    bed: "Phase 1.Ext",
    bath: "Oyo",
    area: "270 sqm.",
  },
  {
    id: 4,
    imgURL: "./images/cpgasj.jpeg",
    price: "₦7,000,000",
    name: "City Park And Gardens",
    location: "Asejire,Ibadan",
    bed: "Phase 1",
    bath: "Oyo",
    area: "540 sqm.",
  },
  {
    id: 5,
    imgURL: "./images/Grandview2.jpeg",
    price: "₦3,500,000",
    name: "Grandview Park & Gardens",
    location: "Atan-Ota,Ogun State",
    bed: " Phase 1.Ext",
    bath: "Ogun",
    area: "648 sqm.",
  },
  {
    id: 6,
    imgURL: "./images/Rehoboth.jpg",
    price: "SOLD OUT",
    name: "Rehoboth Park And Gardens ",
    location: "Ibeju-Lekki",
    bed: "",
    bath: "Lagos",
    area: "500sqm",
  },
  {
    id: 7,
    imgURL: "./images/ekocity2.jpeg",
    price: "₦100,000,000",
    name: "Eko City, Ile-Aje ",
    location: "Lekki-Epe",
    bed: "Phase 1",
    bath: "Lagos",
    area: "500sqm",
  },
];

export const ServicesCardItem = [
  {
    id: 1,
    icon: "./images/Buying & Selling.png",
    title: "Buying & Selling",
    text: "Hassle-free property transactions with expert guidance.",
  },

  {
    id: 3,
    icon: "./images/Investment-Advice.png",
    title: "Affordable Housing",
    text: "Our properties have the essential requirements for a contempoary family to live in,with good road network, portable water, 24hrs light & round the clock security etc.within affordable budget cost",
  },
  {
    id: 4,
    icon: "./images/Home-Valuation.png",
    title: " Realty Experience",
    text: "Our commitment to delivering exceptional results ensures our clients benefit from the expertise of an in-house marketing team dedicated to making their real estate journey seamless and successful.",
  },
];

export const stats = [
  { id: 1, value: 582, label: "Properties Sold" },
  { id: 2, value: 1200, label: "Happy Clients" },
  { id: 3, value: 35, label: "Expert Agents" },
  { id: 4, value: 15, label: "Cities Served" },
];

export const teams = [
  {
    id: 1,
    name: "Michael Dike",
    role: "TCRO",
    img: "./images/micheal.JPG",
  },
  {
    id: 2,
    name: "Opadokun Deborah",
    role: "DRRO",
    img: "./images/deb.JPG",
  },
  {
    id: 3,
    name: "Lawanson Rasheed",
    role: " RRO",
    img: "./images/law.JPG",
  },
];
export const testimonialItems = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Agent",
    img: "./images/team-1.png",
  },
  {
    id: 2,
    name: "Mark Robinson",
    role: "Sales Manager",
    img: "./images/team-2.png",
  },
  {
    id: 3,
    name: "Linda Gomez",
    role: "Marketing Specialist",
    img: "./images/team-3.png",
  },
  {
    id: 4,
    name: "James Lee",
    role: "Client Consultant",
    img: "./images/team-4.png",
  },
];

export const blogSectionCard = [
  {
    id: 1,
    imgUrl: "/images/idan.jpeg",
    title: "IDAN",
    words:
      "IDAN is the ultimate real estate guru. As a savvy investor, IDAN stays ahead of the game by knowing where people are moving to and acquiring the land before they even get there. IDAN invests strategically, seizing prime land before it becomes the hottest spot in town.",
  },
  {
    id: 2,
    imgUrl: "/images/elevating.webp",
    title: "How Adron Homes Is Elevating Real Estate In Nigeria",
    words:
      " Adron Homes is a pioneering force, standing out as a beacon of excellence, building cities, communities, and homes. With a commitment to innovative infrastructure and a mission to create serene and harmonious environments.",
  },
  {
    id: 3,
    imgUrl: "/images/overcoming1.webp",
    title: "How To Overcome Property Ownership Fears",
    words:
      "Embarking on the journey to become a property owner can be daring.The fears of finding reliable and affordable property, often hold people back. However,fear not! We at Adron Homes;strategically positioned to provide solutions to these common concerns.",
  },
];

export const footerSocialIcons = [
  { icon: <RiFacebookFill /> },
  { icon: <RiInstagramLine /> },
  { icon: <RiTwitterFill /> },
  { icon: <RiLinkedinFill /> },
];
export const footerListItems = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      { label: "Home" },
      { label: "About Us" },
      { label: "Properties" },
      { label: "Services" },
      { label: "Contact Us" },
      { label: "Blog" },
    ],
  },

  {
    id: 3,
    title: "Contact Information",
    links: [
      { label: "Phone: +2348113349696" },
      { label: "Whatsapp: +2348113349696" },
      { label: "Email:  rasheed.lawanson@adronhomesproperties.com" },
    ],
  },
];
