// Sidebar imports
import React from 'react';
import { IoHome } from "react-icons/io5";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoReaderOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { IoBarbell } from "react-icons/io5";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

// Recent Card Imports
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

// Sidebar Data
export const SidebarData: { icon: React.ElementType, heading: string }[] = [
{
    icon: IoHome,
    heading: "Dashboard",
},
{
    icon: IoReaderOutline,
    heading: "Orders",
},
{
    icon: IoPeopleOutline,
    heading: "Customers",
},
{
    icon: IoFileTrayFullOutline,
    heading: 'Products'
},
{
    icon: IoBarChartOutline,
    heading: 'Analytics'
},
];

// Analytics Cards Data
export const cardsData: {
    title: string,
    color: { backGround: string, boxShadow: string },
    barValue: number,
    value: string,
    png: React.ElementType,
    series: { name: string, data: number[] }[],
}[] = [
{
    title: "Sales",
    color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: FaRegMoneyBillAlt,
    series: [
    {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
    },
    ],
},
{
    title: "Revenue",
    color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: IoBarbell,
    series: [
    {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
    },
    ],
},
{
    title: "Expenses",
    color: {
    backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
    boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: FaUser,
    series: [
    {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
    },
    ],
},
];

// Recent Update Card Data
export const UpdatesData: {
    img: string,
    name: string,
    noti: string,
    time: string,
}[] = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, Samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];
