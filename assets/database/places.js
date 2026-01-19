const locations = [
    {
        "name": "Promenade Beach",
        "lat": 11.931431413763924,
        "lng": 79.83606797917007,
        "description": "A 1.5 km long stretch along the Bay of Bengal, perfect for evening strolls with French colonial architecture.",
        "category": "beach",
        "link": "https://maps.app.goo.gl/fCnoR5SFwYmQxWnZ9"
    },
    {
        "name": "Pondy Marina Beach",
        "lat": 11.909228948551718,
        "lng": 79.83007227791347,
        "description": "Rip off of a beach in Chennai",
        "category": "beach",
        "link": "https://maps.app.goo.gl/AfhHVyo7eVnwEEfC9"
    },
    {
        "name": "Paradise Beach",
        "lat": 11.872367048817132,
        "lng": 79.82007396636845,
        "description": "A pristine beach accessible by boat, known for its golden sands and clear waters.",
        "category": "beach",
        "link": "https://maps.app.goo.gl/rufWef4qwV4YPnQt5"
    },
    {
        "name": "Serenity Beach",
        "lat": 11.969236686365763,
        "lng": 79.84459938985853,
        "description": "Popular surfing destination with laid-back beach shacks and surf schools.",
        "category": "beach",
        "link": "https://maps.app.goo.gl/F6w3gQpVLMb5dMwg7"
    },
    {
        "name": "Sri Aurobindo Ashram",
        "lat": 11.936959112352222,
        "lng": 79.83485528715974,
        "description": "Founded in 1926, this spiritual community attracts seekers from around the world.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/B3kJEqd767dVCGQg9"
    },
    {
        "name": "Sacred Heart Basilica",
        "lat": 11.926283730514424,
        "lng": 79.8275188681188,
        "description": "Gothic-style church built in the 1900s, featuring beautiful stained glass panels.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/7Qu2hbHky311xjHT7"
    },
    {
        "name": "Botanical Garden",
        "lat": 11.930528700891681,
        "lng": 79.82276392024244,
        "description": "22-acre garden dating back to 1826, featuring rare plant species and musical fountains.",
        "category": "attraction",
        "subCategory": "nature",
        "link": "https://maps.app.goo.gl/L8qdcxWwVMqVniSX9"
    },
    {
        "name": "Chunnambar Boat House",
        "lat": 11.88395947266875,
        "lng": 79.80124539695404,
        "description": "Backwater paradise offering boating experiences through mangrove forests.",
        "category": "attraction",
        "subCategory": "nature",
        "link": "https://maps.app.goo.gl/d7mFAzCBR42An54Q7"
    },
    {
        "name": "Manakula Vinayagar Temple",
        "lat": 11.936059003824385,
        "lng": 79.83445603133771,
        "description": "300-year-old temple dedicated to Lord Ganesha, known for its elephant Lakshmi.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/yh56iKHtUPPopzdR8"
    },
    {
        "name": "Hotel Madurai Veedu",
        "lat": 11.929300736948072,
        "lng": 79.83099500065575,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/qXtdYVd9iYTHbK5U9"
    },
    {
        "name": "Nalla Thambi Mess",
        "lat": 11.938338380684865,
        "lng": 79.83114197737152,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/TZWGdVMYNrnYxwnt5"
    },
    {
        "name": "Hotel Sri Kamatchi",
        "lat": 11.930099273024888,
        "lng": 79.81158911261103,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/JUyXvhHU6nKrqBV77"
    },
    {
        "name": "Hotel Sri Kamatchi, White Town branch",
        "lat": 11.929748020586782,
        "lng": 79.83770754858047,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/QLqDrpFAHKsFXhLx7"
    },
    {
        "name": "Ende Nadu",
        "lat": 11.940415734063683,
        "lng": 79.83482802155046,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/6XiaeEyxQaME6LjR7"
    },
    {
        "name": "Kamireddy Foods",
        "lat": 11.942762156844944,
        "lng": 79.80371160900435,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/dX3g1J288NqmiVyVA"
    },
    {
        "name": "Kushi Hyderabadi Biriyani",
        "lat": 11.944196809053619,
        "lng": 79.80384000986906,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/LRKj3xna3h7Uop519"
    },
    {
        "name": "Kongu Kitchen",
        "lat": 11.930107365208997,
        "lng": 79.82617637367049,
        "description": "",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/XWHuMXSYZZk73LXg7"
    },
    {
        "name": "Sri Murugan Cafe",
        "lat": 11.937665169374066,
        "lng": 79.82769305038626,
        "description": "Vegetarian restaurant",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/RFtEXWrS5U5aDEqU9"
    },
    {
        "name": "Surguru Restaurant",
        "lat": 11.934673707828539,
        "lng": 79.80826600805784,
        "description": "Vegetarian restaurant",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/easizLCWiK52CKCcA"
    },
    {
        "name": "Punjabi Dhaba",
        "lat": 11.939838434510971,
        "lng": 79.83275507922204,
        "description": "",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/oGtLZowCycMTC4fH7"
    },
    {
        "name": "Dilliwaala6",
        "lat": 11.936756124298093,
        "lng": 79.83540715832731,
        "description": "",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/9BuwvkD1gmgMUFws6"
    },
    {
        "name": "Bro's plan B",
        "lat": 12.000236842683277,
        "lng": 79.80136959641571,
        "description": "",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/RSxCN2apRE5ixRdQ8"
    },
    {
        "name": "Just Parathas",
        "lat": 11.938972997540521,
        "lng": 79.83350663315323,
        "description": "",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/CGcQid1gu583eMbn7"
    },
    {
        "name": "Kokonut Lagoon",
        "lat": 11.944798947984868,
        "lng": 79.80198720990835,
        "description": "",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/7RgLigie48oo2EHfA"
    },
    {
        "name": "Copper Kitchen",
        "lat": 11.933267451667582,
        "lng": 79.80834088107255,
        "description": "",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/DtR2NfXzkD6WbNQE8"
    },
    {
        "name": "Prawn and Crab",
        "lat": 11.951981402659154,
        "lng": 79.81742517367047,
        "description": "",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/MfyNiUgHcSXJULPX7"
    },
    {
        "name": "Terrassen Cafe",
        "lat": 11.987977186862354,
        "lng": 79.836079975521,
        "description": "Family-friendly vegan restaurant and vegetarian cafe serving a diverse menu inspired by Mediterranean, North Indian, Italian, and American cuisines.",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/HUdXZcMeNVjtCSnX7"
    },
    {
        "name": "Conscious Cafe",
        "lat": 11.992734618941885,
        "lng": 79.81796418901364,
        "description": "",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/PLTHXjyzqk9pooC1A"
    },
    {
        "name": "Hope Cafe",
        "lat": 11.930737229891328,
        "lng": 79.83376229880524,
        "description": "",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/zPUgdmLjXC8w7G9a9"
    },
    {
        "name": "Cafe des Arts",
        "lat": 11.930698141590135,
        "lng": 79.83172647552101,
        "description": "This 19th-century building with vintage decor & garden seating offers French cafe fare & coffee.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/ACcLE1Adfx8ZhZ9V6"
    },
    {
        "name": "Hot Breads",
        "lat": 11.93547771478086,
        "lng": 79.83303181774058,
        "description": "",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/jLkv2Yiw5r85sjsEA"
    },
    {
        "name": "Bread & Chocolate",
        "lat": 11.936584410769527,
        "lng": 79.83554999060065,
        "description": "",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/Vrnok1HB4QsxSHtV8"
    },
    {
        "name": "Cafe 73",
        "lat": 11.991008910553324,
        "lng": 79.8303409466852,
        "description": "Café known for its burgers and dishes named after motorcycles.",
        "category": "food",
        "subCategory": "continental",
        "link": "https://maps.app.goo.gl/FFga9VtZVXHquYhaA"
    },
    {
        "name": "Daddy Amma Momo Shop",
        "lat": 11.865184496066751,
        "lng": 79.79376283134205,
        "description": "",
        "category": "food",
        "subCategory": "asian",
        "link": "https://maps.app.goo.gl/K6y9K9CLuQxokugS6"
    },
    {
        "name": "Gelato Artigianale Italiano",
        "lat": 11.92627183052412,
        "lng": 79.83452511966038,
        "description": "Italian-style gelateria serving handcrafted gelato in classic and seasonal flavors.",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/or1Z3rFV1RdW9wEQ6"
    },
    {
        "name": "Tipsy cream",
        "lat": 11.929934447759063,
        "lng": 79.82782438103305,
        "description": "Dessert spot known for creative ice creams and alcohol-infused frozen treats.",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/2BaWHcbhVDuJxGUu5"
    },
    {
        "name": "Zuka",
        "lat": 11.930010414609383,
        "lng": 79.83056344457076,
        "description": "",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/P89xobMN8b776Thw6"
    },
    {
        "name": "Villa Shanti Hotel Restaurant",
        "lat": 11.929923519111252,
        "lng": 79.83341397181997,
        "description": "Refined restaurant blending Indian and European flavors within a heritage hotel setting.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/LeJVxD2KSthub8gw9"
    },
    {
        "name": "Pavilion",
        "lat": 11.93408715420923,
        "lng": 79.8247794466852,
        "description": "Luxury hotel restaurant offering an upscale multi-cuisine dining experience with polished service.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/AfveaGABdhUepUCH7"
    },
    {
        "name": "Anthé Restaurant",
        "lat": 11.925423153811817,
        "lng": 79.8334691945652,
        "description": "Fine-dining venue focusing on modern Indian cuisine with curated menus and elegant presentation.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/US7RJ9RrZt2BYsY76"
    },
    {
        "name": "Mel Whisks",
        "lat": 11.935340913857802,
        "lng": 79.8315701847342,
        "description": "A very happening bar with lots of great food options, fun activities, and karaoke nights.",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/3KgJfsUugyvJ5sMV6"
    },
    {
        "name": "Catamaran Brewing Company",
        "lat": 11.940546412310256,
        "lng": 79.82779706569006,
        "description": "Pondicherry's craft brewery offering house-brewed beers, pub food, and a vibrant social setting.",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/KmDgo1UKLJoy2ApaA"
    },
    {
        "name": "Asian House Pub",
        "lat": 11.925331359292917,
        "lng": 79.83304597050845,
        "description": "",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/AD4rXmXMfVd8gYPs8"
    },
    {
        "name": "Bike & Barrel",
        "lat": 11.934168841953701,
        "lng": 79.82477249880523,
        "description": "",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/rKLSExuRZTzwMnHZ7"
    },
    {
        "name": "Unpack Hostel",
        "lat": 11.953907695152067,
        "lng": 79.83492720091793,
        "description": "",
        "category": "hotel",
        "link": "https://maps.app.goo.gl/2KtwdhpccjgC3RSK8"
    },
    {
        "name": "Happy Ride",
        "lat": 11.92690453068376,
        "lng": 79.82574425216475,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/iWPeKH4k4cYs35rx6"
    },
    {
        "name": "Star Two Wheeler",
        "lat": 11.927272543346088,
        "lng": 79.8281059762935,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/dRPsyCNysshJAavp7"
    },
    {
        "name": "Bala Two Wheeler",
        "lat": 11.927524476221834,
        "lng": 79.82807378978613,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/9HvZi4LVoa17hK5v6"
    },
    {
        "name": "V Ambal Two Wheeler",
        "lat": 11.936985358850311,
        "lng": 79.83162448100055,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/rjngGgTJ8YnxAZsw7"
    },
    {
        "name": "Vijay Arya Bike Rentals",
        "lat": 11.932870742908678,
        "lng": 79.81959876326786,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/jbkxYHG2VikTkZ8RA"
    },
    {
        "name": "Sai Two Wheeler Rent",
        "lat": 11.936738122118946,
        "lng": 79.8322574669689,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/ErEbuRiFoTeGuVSz6"
    },
    {
        "name": "Joy ride's",
        "lat": 11.936667940953015,
        "lng": 79.82349172706257,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/f4dHkyL2kU4tGbBQ9"
    },
    {
        "name": "M.M.K Bike Rent",
        "lat": 11.931593849751781,
        "lng": 79.81940063867212,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/KRHobrDznZFQTapH8"
    },
    {
        "name": "SSS Bike Rental Service",
        "lat": 11.93380112410532,
        "lng": 79.81830215021199,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/aerinLEWHus9WUXeA"
    },
    {
        "name": "Royal Brothers",
        "lat": 11.937285230146806,
        "lng": 79.83212210004473,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/sEWUiPrJ2k16fB5o6"
    }
];
