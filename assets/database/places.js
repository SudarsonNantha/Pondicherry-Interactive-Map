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
        "lat": 11.909065848188925,
        "lng": 79.82966438513945,
        "description": "Rip off of a beach in Chennai. Still worth visiting though.",
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
        "lat": 11.936724313313498,
        "lng": 79.83397700081899,
        "description": "Founded in 1926, this spiritual community attracts seekers from around the world.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/B3kJEqd767dVCGQg9"
    },
    {
        "name": "Marbling Group",
        "lat": 11.93527769970863,
        "lng": 79.83573735892692,
        "description": "The marbling unit of Sti Aurobindo Ashram produces sarees, scarves, dupattas and many more items on pure silk or pure silk. chiffon",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/ZN8NJM7cf1WLtuVA6"
    },
    {
        "name": "Sacred Heart Basilica",
        "lat": 11.926049828469404,
        "lng": 79.82696682838316,
        "description": "Gothic-style church built in the 1900s, featuring beautiful stained glass panels.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/7Qu2hbHky311xjHT7"
    },
    {
        "name": "Botanical Garden",
        "lat": 11.930208013085682,
        "lng": 79.8224020221313,
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
        "lat": 11.935771796277553,
        "lng": 79.83367289067938,
        "description": "300-year-old temple dedicated to Lord Ganesha, known for its elephant Lakshmi.",
        "category": "attraction",
        "subCategory": "spiritual",
        "link": "https://maps.app.goo.gl/yh56iKHtUPPopzdR8"
    },
    {
        "name": "Arikamedu",
        "lat": 11.901203042538668,
        "lng": 79.82012221621407,
        "description": "Ruins of a Roman trading post established in 2nd Century BCE.",
        "category": "attraction",
        "subCategory": "heritage",
        "link": "https://maps.app.goo.gl/bBkLT4HD5Y8QrLpSA"
    },
    {
        "name": "Mahakavi Bharathiyar Memorial Centre",
        "lat": 11.939147810620522,
        "lng": 79.83249610431182,
        "description": "Museum in the former home of renowned writer & activist Mahakavi Bharathiyar, featuring historical artifacts & more.",
        "category": "attraction",
        "subCategory": "heritage",
        "link": "https://maps.app.goo.gl/atD8GVM7edBhJr9t8"
    },
    {
        "name": "Oussudu Lake (Ousteri Lake)",
        "lat": 11.94195159241126,
        "lng": 79.74677382656805,
        "description": "An important wetlands and migratory location home to over 200 species of birds. Popular destination for birdwatchers!",
        "category": "attraction",
        "subCategory": "nature",
        "link": "https://maps.app.goo.gl/Bgmt3aqsXz4WKLtg6"
    },
    {
        "name": "Puducherry Museum",
        "lat": 11.934484603007473,
        "lng": 79.83486952558371,
        "description": "Quaint museum known for its rare sculpture collection, including ancient bronze & stone artifacts.",
        "category": "attraction",
        "subCategory": "heritage",
        "link": "https://maps.app.goo.gl/pKkYKaTzWmeRRS3M6"
    },
    {
        "name": "Temple Adventures - Scuba Diving Experience Centre",
        "lat": 11.923550915169445,
        "lng": 79.82807786167832,
        "description": "",
        "category": "attraction",
        "subCategory": "adventure",
        "link": "https://maps.app.goo.gl/GZRbxkVf2CdWJb9b9"
    },
    {
        "name": "Urban Nomad Dive Adventures & Watersports",
        "lat": 11.931930238409869,
        "lng": 79.83136562393732,
        "description": "",
        "category": "attraction",
        "subCategory": "adventure",
        "link": "https://maps.app.goo.gl/iSbeieoq72vqS9D78"
    },
    {
        "name": "Hotel Madurai Veedu",
        "lat": 11.929071337916048,
        "lng": 79.83067827915048,
        "description": "A top restaurant serving high-quality South Indian dishes in a family-friendly atmosphere.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/qXtdYVd9iYTHbK5U9"
    },
    {
        "name": "Nalla Thambi Mess",
        "lat": 11.938207877644198,
        "lng": 79.83065387307084,
        "description": "Offers a delightful culinary experience steeped in traditional flavors and is renowned for its authentic South Indian dishes.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/TZWGdVMYNrnYxwnt5"
    },
    {
        "name": "Hotel Sri Kamatchi",
        "lat": 11.928134673071574,
        "lng": 79.80719979613585,
        "description": "Authentic Non-Veg Restaurant | Kamatchi Special Meals Some meals don't just fill your stomach - they take you back to tradition.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/JUyXvhHU6nKrqBV77"
    },
    {
        "name": "Hotel Sri Kamatchi, White Town branch",
        "lat": 11.9279523097894,
        "lng": 79.83234877860374,
        "description": "White Town Branch of the famous Hotel Sri Kamatchi.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/QLqDrpFAHKsFXhLx7"
    },
    {
        "name": "Ende Nadu",
        "lat": 11.940206863674314,
        "lng": 79.83424617553509,
        "description": "Authentic Kerala cuisine right here in Pondicherry.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/6XiaeEyxQaME6LjR7"
    },
    {
        "name": "Kamireddy Foods",
        "lat": 11.941986655721433,
        "lng": 79.80158648297805,
        "description": "Affordable, tasty, and huge variety of non-vegetarian dishes.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/dX3g1J288NqmiVyVA"
    },
    {
        "name": "Kushi Hyderabadi Biriyani",
        "lat": 11.943954592808938,
        "lng": 79.80328582564488,
        "description": "The best Hyderabadi Dum Biriyani in the city.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/LRKj3xna3h7Uop519"
    },
    {
        "name": "Kongu Kitchen",
        "lat": 11.929902015641348,
        "lng": 79.82569223495085,
        "description": "Offers Kongunadu Cuisine from 50 towns in the North Western part of Tamil Nadu like Coimbatore and neighboring areas like Salem, Erode, Tirupur and Dindugul. ",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/XWHuMXSYZZk73LXg7"
    },
    {
        "name": "Sri Murugan Cafe",
        "lat": 11.93738437967918,
        "lng": 79.82695007850299,
        "description": "Small outlet serving only the best vegetarian South-Indian food.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/RFtEXWrS5U5aDEqU9"
    },
    {
        "name": "Surguru Restaurant",
        "lat": 11.933894084795876,
        "lng": 79.83109458005201,
        "description": "One of the all time classics, serving a huge range of South-Indian vegetarian food.",
        "category": "food",
        "subCategory": "south-indian",
        "link": "https://maps.app.goo.gl/txzFFDPZbPbmiKe87"
    },
    {
        "name": "Punjabi Dhaba",
        "lat": 11.939628917826722,
        "lng": 79.83214904924948,
        "description": "Pondicherry's little slice of Amritsar.",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/oGtLZowCycMTC4fH7"
    },
    {
        "name": "Dilliwaala6",
        "lat": 11.936499585174754,
        "lng": 79.83506914287781,
        "description": "A colourful vegetarian restaurant with a wide array of North-Indian dishes.",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/9BuwvkD1gmgMUFws6"
    },
    {
        "name": "Bro's plan B",
        "lat": 11.999986016816496,
        "lng": 79.80076625666787,
        "description": "Delicious, affordable North-Indian food in Auroville.",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/RSxCN2apRE5ixRdQ8"
    },
    {
        "name": "Just Parathas",
        "lat": 11.938677550174274,
        "lng": 79.83319575138951,
        "description": "As the name suggests, come here for their delectable parathas.",
        "category": "food",
        "subCategory": "north-indian",
        "link": "https://maps.app.goo.gl/CGcQid1gu583eMbn7"
    },
    {
        "name": "Kokonut Lagoon",
        "lat": 11.944511602370412,
        "lng": 79.80122400614303,
        "description": "In their own words, \"Mallufied ambience with delicious Kerala cuisine in Pondicherry\"",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/7RgLigie48oo2EHfA"
    },
    {
        "name": "Copper Kitchen",
        "lat": 11.933089586462259,
        "lng": 79.80765928924365,
        "description": "Chennai's favourite multicuisine restaurant chain.",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/DtR2NfXzkD6WbNQE8"
    },
    {
        "name": "Prawn and Crab",
        "lat": 11.951745236913842,
        "lng": 79.81690482512971,
        "description": "Indulge in the freshest seafood delights at Prawn and Crab - The House of Seafood, Pondicherry's premier seafood restaurant!",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/MfyNiUgHcSXJULPX7"
    },
    {
        "name": "Terrassen Cafe",
        "lat": 11.987794838733246,
        "lng": 79.83563338773247,
        "description": "Family-friendly vegan restaurant and vegetarian cafe serving a diverse menu inspired by Mediterranean, North Indian, Italian, and American cuisines.",
        "category": "food",
        "subCategory": "multicuisine",
        "link": "https://maps.app.goo.gl/HUdXZcMeNVjtCSnX7"
    },
    {
        "name": "Conscious Cafe",
        "lat": 11.992552132566875,
        "lng": 79.81751969743776,
        "description": "Experience artisanal vegetarian & vegan food and beverages made with conscious ingredients at Conscious Cafe Auroville.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/PLTHXjyzqk9pooC1A"
    },
    {
        "name": "Hope Cafe",
        "lat": 11.930534201889571,
        "lng": 79.83330264277521,
        "description": "Get tiny bites and beverages in this artistic café.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/zPUgdmLjXC8w7G9a9"
    },
    {
        "name": "Cafe des Arts",
        "lat": 11.930485393801579,
        "lng": 79.8312667817077,
        "description": "This 19th-century building with vintage decor & garden seating offers French cafe fare & coffee.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/ACcLE1Adfx8ZhZ9V6"
    },
    {
        "name": "Hot Breads",
        "lat": 11.934993050307959,
        "lng": 79.83241635537009,
        "description": "Try it for a variety of breads, pastries, and cookies. Very popular amongst the locals.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/jLkv2Yiw5r85sjsEA"
    },
    {
        "name": "Bread & Chocolate",
        "lat": 11.936422537073383,
        "lng": 79.83509271643936,
        "description": "Lively rooftop cafe that servers French pastries.",
        "category": "food",
        "subCategory": "cafe",
        "link": "https://maps.app.goo.gl/Vrnok1HB4QsxSHtV8"
    },
    {
        "name": "Cafe 73",
        "lat": 11.990773101774653,
        "lng": 79.82988908259196,
        "description": "Café known for its burgers and dishes named after motorcycles.",
        "category": "food",
        "subCategory": "continental",
        "link": "https://maps.app.goo.gl/FFga9VtZVXHquYhaA"
    },
    {
        "name": "Daddy Amma Momo Shop",
        "lat": 11.865066262731863,
        "lng": 79.79338984991215,
        "description": "Rumoured to be the best momos in Pondy.",
        "category": "food",
        "subCategory": "asian",
        "link": "https://maps.app.goo.gl/K6y9K9CLuQxokugS6"
    },
    {
        "name": "Gelato Artigianale Italiano",
        "lat": 11.926046177114134,
        "lng": 79.83417789715229,
        "description": "Italian-style gelateria serving handcrafted gelato in classic and seasonal flavors.",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/or1Z3rFV1RdW9wEQ6"
    },
    {
        "name": "Tipsy cream",
        "lat": 11.929779053644927,
        "lng": 79.8273100887247,
        "description": "Dessert spot known for creative ice creams and alcohol-infused frozen treats.",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/2BaWHcbhVDuJxGUu5"
    },
    {
        "name": "Zuka",
        "lat": 11.929849063585785,
        "lng": 79.8302436116569,
        "description": "Snug desert shop offering decadent cakes, homemade chocolates, and other sweets.",
        "category": "food",
        "subCategory": "dessert",
        "link": "https://maps.app.goo.gl/P89xobMN8b776Thw6"
    },
    {
        "name": "Villa Shanti Hotel Restaurant",
        "lat": 11.929624668965248,
        "lng": 79.83310979657197,
        "description": "Refined restaurant blending Indian and European flavors within a heritage hotel setting.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/LeJVxD2KSthub8gw9"
    },
    {
        "name": "Pavilion",
        "lat": 11.933927715292997,
        "lng": 79.82433113870667,
        "description": "Luxury hotel restaurant offering an upscale multi-cuisine dining experience with polished service.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/AfveaGABdhUepUCH7"
    },
    {
        "name": "Anthé Restaurant",
        "lat": 11.925308008245187,
        "lng": 79.83291606872527,
        "description": "Fine-dining venue focusing on modern Indian cuisine with curated menus and elegant presentation.",
        "category": "food",
        "subCategory": "fine",
        "link": "https://maps.app.goo.gl/US7RJ9RrZt2BYsY76"
    },
    {
        "name": "Mel Whisks",
        "lat": 11.93508725059445,
        "lng": 79.83090459814862,
        "description": "A very happening bar with lots of great food options, fun activities, and karaoke nights.",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/3KgJfsUugyvJ5sMV6"
    },
    {
        "name": "Catamaran Brewing Company",
        "lat": 11.940332027633012,
        "lng": 79.82727457294368,
        "description": "Pondicherry's craft brewery offering house-brewed beers, pub food, and a vibrant social setting.",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/KmDgo1UKLJoy2ApaA"
    },
    {
        "name": "Asian House Pub",
        "lat": 11.925174066111287,
        "lng": 79.83337329947669,
        "description": "Offers a unique blend of Asian-inspired cuisine and a lively nightlife experience.",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/AD4rXmXMfVd8gYPs8"
    },
    {
        "name": "Bike & Barrel",
        "lat": 11.934004750840645,
        "lng": 79.8243482049046,
        "description": "Fashioned as an English pub in Puducherry, Bike & Barrel is the place to hit with your friends for a pint of beer!",
        "category": "nightlife",
        "link": "https://maps.app.goo.gl/rKLSExuRZTzwMnHZ7"
    },
    {
        "name": "Unpack Hostel",
        "lat": 11.952899443761543,
        "lng": 79.83359904812558,
        "description": "Affordable hostel catering to backpackers.",
        "category": "hotel",
        "link": "https://maps.app.goo.gl/2KtwdhpccjgC3RSK8"
    },
    {
        "name": "The Cradle",
        "lat": 11.933196414567936,
        "lng": 79.82528404582176,
        "description": "Couple friendly, uniquely designed, and thoughtfully decorated.",
        "category": "hotel",
        "link": "https://maps.app.goo.gl/btMFUk9avLwNGtpi8"
    },
    {
        "name": "Main Bus Station",
        "lat": 11.93258757865037,
        "lng": 79.81588828483888,
        "description": "",
        "category": "transport",
        "subCategory": "bus",
        "link": "https://maps.app.goo.gl/fQojwfE7yV3q2D3p8"
    },
    {
        "name": "Happy Ride",
        "lat": 11.926629964122228,
        "lng": 79.82543756465223,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/iWPeKH4k4cYs35rx6"
    },
    {
        "name": "Star Two Wheeler",
        "lat": 11.927111285221786,
        "lng": 79.82761535730413,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/dRPsyCNysshJAavp7"
    },
    {
        "name": "Bala Two Wheeler",
        "lat": 11.928917312239202,
        "lng": 79.83083715638317,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/9HvZi4LVoa17hK5v6"
    },
    {
        "name": "V Ambal Two Wheeler",
        "lat": 11.936846514550192,
        "lng": 79.83126619170726,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/rjngGgTJ8YnxAZsw7"
    },
    {
        "name": "Vijay Arya Bike Rentals",
        "lat": 11.932669282582616,
        "lng": 79.81881621927472,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/jbkxYHG2VikTkZ8RA"
    },
    {
        "name": "Sai Two Wheeler Rent",
        "lat": 11.936592843852509,
        "lng": 79.83139727158634,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/ErEbuRiFoTeGuVSz6"
    },
    {
        "name": "Joy ride's",
        "lat": 11.936507042286863,
        "lng": 79.8228472228518,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/f4dHkyL2kU4tGbBQ9"
    },
    {
        "name": "M.M.K Bike Rent",
        "lat": 11.931411148331138,
        "lng": 79.81902066283779,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/KRHobrDznZFQTapH8"
    },
    {
        "name": "SSS Bike Rental Service",
        "lat": 11.933393476757413,
        "lng": 79.81714496251028,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/aerinLEWHus9WUXeA"
    },
    {
        "name": "Royal Brothers",
        "lat": 11.937052924294779,
        "lng": 79.8315702821121,
        "description": "",
        "category": "transport",
        "subCategory": "scooty",
        "link": "https://maps.app.goo.gl/sEWUiPrJ2k16fB5o6"
    }
];
