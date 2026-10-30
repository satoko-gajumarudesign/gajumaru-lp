// src/data/history.ts
/// <reference types="astro/client" />　
// env.d.tsにも書いてあるがなぜか効かないためここにも記述

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
        title: "BORN !",
        text: "I was born in Kagawa Prefecture and am the eldest of three siblings.",
        alt: "",
        decorations: [
            {
                image: birthdaycakeIcon,
                alt: "",
                position: "-top-90 -left-20 w-200",
            },
            {
                image: heartIcon,
                alt: "",
                position: "-top-40 -right-10 w-80 rotate-10",
            },
            {
                image: heartIcon,
                alt: "",
                position: "top-0 -right-10 w-60 rotate-40",
            },
        ],
    },
    {
        title: "2 mos",
        text: "I met my human at the pet shop. They fell in love with me at first sight.",
        image: History1,
        alt: "ペットショップで店員に持たれている生後２ヶ月のがじゅまる",
    },
    {
        title: "3 mos",
        text: "My walking debut! Everyone said, ”You're so cute!”",
        image: History2,
        alt: "散歩中に階段に座って休んでいるがじゅまる",
    },
    {
        title: "4 mos",
        text: "I got sick late at night and had to be rushed to the hospital.",
        alt: "",
        decorations:[
            {
                image: ambulanceIcon,
                alt: "",
                position: "top-[-40%] md:top-[-30%] left-[40%] md:left-[50%] w-200",
            },
            {
                image: medicineIcon,
                alt: "",
                position: "top-[55%] md:top-[60%] left-[50%] w-150",
            },
        ],
    },
    {
        title: "1 yr",
        text: "I grew up and became an energetic property destroyer!",
        image: History3,
        alt: "飼い主のセーターを噛んでいるがじゅまる",
        decorations:[
            {
                image: starIcon,
                alt: "",
                position: "top-[75%] right-[-10%] w-80 md:w-100 rotate-25",
            },
        ],
    },
    {
        title: "2-4 yrs",
        text: "We went everywhere to play, like dog parks and regular parks!",
        image: History4,
        alt: "草原を飛ぶように走るがじゅまる",
    },
    {
        title: "5 yrs",
        text: "My camping debut! It was my first time sleeping in a tent.",
        image: History5,
        alt: "テントの中で空を見上げるがじゅまる",
        decorations:[
            {
                image: campIcon,
                alt: "",
                position: "top-[70%] md:top-[60%] left-[75%] w-100 md:w-150",
            },
        ],
    },
    {
        title: "Now",
        text: "”Let's keep making lots more fun memories together! 😃❤️”",
        image: History6,
        alt: "お気に入りのコットの上でくつろぎながら、こちらを見ているがじゅまる",
    },
];