// src/data/hisitory.ts
/// <reference types="astro/client" />　
//　env.d.tsにも書いてあるがなぜか効かないためここにも記述

import type { ImageMetadata } from "astro";

import History1 from "@/assets/images/history1.png";
import History2 from "@/assets/images/history2.png";
import History3 from "@/assets/images/history3.png";
import History4 from "@/assets/images/history4.png";
import History5 from "@/assets/images/history5.png";
import History6 from "@/assets/images/history6.png";
import birthdaycakeIcon from "@/assets/icons/birthdaycake_icon.png";
import heartIcon from "@/assets/icons/heart_icon.png";
import ambulanceIcon from "@/assets/icons/ambulance_icon.png";
import medicineIcon from "@/assets/icons/medicine_icon.png";
import starIcon from "@/assets/icons/star_icon.png";
import campIcon from "@/assets/icons/camp_icon.png";

export interface HistoryItem {
    title: string;
    text: string;
    image?: ImageMetadata;
    alt: string;
    decorations?: {
        image: ImageMetadata;
        alt: string;
        position: string;
    }[];
}

export const historyItems: HistoryItem[] = [
    {
        title: "BORN！",
        text: "I was born in Kagawa Prefecture and am the eldest of three siblings.",
        alt: "",
        decorations: [
            {
                image: birthdaycakeIcon,
                alt: "足跡のアイコン",
                position: "-top-[90px] -left-[20px] w-[200px]",
            },
            {
                image: heartIcon,
                alt: "ハートのアイコン",
                position: "-top-40 -right-10 w-80 rotate-[10deg]",
            },
            {
                image: heartIcon,
                alt: "ハートのアイコン",
                position: "top-0 -right-10 w-60 rotate-[40deg]",
            },
        ],
    },
    {
        title: "２ mos",
        text: "I met my human at the pet shop.They fell in love with me at first sight.",
        image: History1,
        alt: "",
    },
    {
        title: "３ mos",
        text: "My walking debut! Everyone said, 「You're so cute!」",
        image: History2,
        alt: "",
    },
    {
        title: "４ mos",
        text: "I got sick late at night and had to be rushed to the hospital.",
        alt: "",
        decorations:[
            {
                image: ambulanceIcon,
                alt: "救急車のアイコン",
                position: "-top-[80px] left-[200px] w-[200px]",
            },
            {
                image: medicineIcon,
                alt: "薬のアイコン",
                position: "top-[130px] left-[250px] w-[150px]",
            },
        ],
    },
    {
        title: "１ yr",
        text: "I grew up and became a energetic property destroyer!",
        image: History3,
        alt: "",
        decorations:[
            {
                image: starIcon,
                alt: "星のアイコン",
                position: "top-[180px] left-[320px] w-[100px] rotate-[25deg]",
            },
        ],
    },
    {
        title: "２-４ yrs",
        text: "We went everywhere to play, like dog parks and regular parks!",
        image: History4,
        alt: "",
    },
    {
        title: "５ yrs",
        text: "My camping debut! It was my first time sleeping in a tent.",
        image: History5,
        alt: "",
        decorations:[
            {
                image: campIcon,
                alt: "キャンプのアイコン",
                position: "top-[150px] left-[290px] w-[150px]",
            },
        ],
    },
    {
        title: "Now",
        text: "「Let's keep making lots more fun memories together!」😃❤️",
        image: History6,
        alt: "",
    },
];