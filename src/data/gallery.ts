// src/data/gallery.ts

import Gallery1 from "@/assets/images/gallery_1.jpeg";
import Gallery2 from "@/assets/images/gallery_2.jpg";
import Gallery3 from "@/assets/images/gallery_3.jpeg";
import Gallery4 from "@/assets/images/gallery_4.jpeg";
import Gallery5 from "@/assets/images/gallery_5.jpeg";
import Gallery6 from "@/assets/images/gallery_6.jpeg";

export const dogImages = [
    { src: Gallery1, alt: "リビングのソファの横に伏せって顔を上げている愛犬がじゅまる" },
    { src: Gallery2, alt: "ソファの上に仰向けになって、こちらを見上げている愛犬がじゅまる" },
    { src: Gallery3, alt: "室内でおすわりをした状態でこちらを見上げている愛犬がじゅまる" },
    { src: Gallery4, alt: "カーテンの前に伏せった状態の愛犬がじゅまるのお尻と尻尾" },
    { src: Gallery5, alt: "こちらから少し距離を取って、ソファの下に潜り込み、そっぽを向いている愛犬がじゅまる" },
    { src: Gallery6, alt: "キャンプ場でテントの中に横向きに立っている愛犬がじゅまる" },
];

export const navButtons = [
    { id: "btn-prev", label: "前の画像へ", isNext: false },
    { id: "btn-next", label: "次の画像へ", isNext: true },
];
