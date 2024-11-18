export function getPlacesDatas() {
    return([
        {
            name: "Brown Bear Car Wash",
            location: "Bekasi Raya Blok 3 No 2, Jakasetia",
            rating: 4.7,
            features: ["Promo", "Full Car Wash","Detailing", "Undercarriage"],
            imgSource: "/gleam_wheels/assetsImg/BrownBear.png",
            pricing: 3,
            queue: 12,
            capacity: 10,
        },
        {
            name: "Elang Car Wash",
            location: "Jalan Galaxy Boulevard Blok 1 No 2, Jakasampurna",
            rating: 3.4,
            features: ["Full Car Wash"],
            imgSource: "/gleam_wheels/assetsImg/ElangCarWash.png",
            pricing: 2,
            queue: 0,
            capacity: 4,
        },
        {
            name: "Myjnia Kalinowa Car Wash",
            location: "Griya JM Blok 17 No 269, Jatiasih",
            rating: 4.5,
            features: ["Promo", "Full Car Wash", "Interior"],
            imgSource: "/gleam_wheels/assetsImg/MyjniaCarWash.png",
            pricing: 2,
            queue: 5,
            capacity: 7,
        },
    ])
}