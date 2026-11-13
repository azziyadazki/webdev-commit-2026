import type { Recipe } from '../types';

export const RECIPES_DB: Recipe[] = [
    {
        id: "rec-1",
        name: "Nasi Telur Pontianak Hemat",
        category: "Telur & Praktis",
        difficulty: "Sangat Mudah",
        cookingTime: 10,
        outsidePrice: 15000,
        image: "https://images.unsplash.com/photo-1525351484163-7529414342d8?auto=format&fit=crop&w=800&q=80",
        description: "Menu penyelamat tanggal tua anak kos Jogja. Telur ceplok siram kecap bawang putih gurih di atas nasi hangat.",
        equipment: ["Kompor", "Wajan", "Rice cooker"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Telur Ayam", qty: 2, unit: "butir" },
            { name: "Bawang Putih", qty: 2, unit: "siung" },
            { name: "Kecap Manis", qty: 2, unit: "sdm" },
            { name: "Minyak Goreng", qty: 30, unit: "ml" }
        ],
        instructions: [
            "Masak beras menggunakan rice cooker hingga matang.",
            "Cincang halus bawang putih lalu tumis sebentar hingga harum.",
            "Ceplok 2 butir telur ayam, tuang kecap manis dan sedikit air di atasnya.",
            "Sajikan telur beserta kuah kecap bawang di atas nasi hangat."
        ]
    },
    {
        id: "rec-2",
        name: "Tumis Tempe Kecap Pedas",
        category: "Tempe & Tahu",
        difficulty: "Mudah",
        cookingTime: 15,
        outsidePrice: 14000,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        description: "Tempe potong dadu ditumis dengan bawang merah, cabai rawit, dan kecap manis. Lauk tinggi protein super murah.",
        equipment: ["Kompor", "Wajan", "Pisau", "Talenan"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Tempe", qty: 0.5, unit: "papan" },
            { name: "Bawang Merah", qty: 3, unit: "siung" },
            { name: "Bawang Putih", qty: 2, unit: "siung" },
            { name: "Cabai Rawit", qty: 4, unit: "buah" },
            { name: "Kecap Manis", qty: 2, unit: "sdm" },
            { name: "Minyak Goreng", qty: 30, unit: "ml" }
        ],
        instructions: [
            "Potong tempe berbentuk dadu kecil, iris tipis bawang merah, bawang putih, dan cabai.",
            "Goreng tempe setengah kering agar tidak mudah hancur.",
            "Tumis bawang dan cabai hingga layu, masukkan tempe dan kecap manis.",
            "Aduk rata dengan sedikit air hingga bumbu meresap, sajikan dengan nasi."
        ]
    },
    {
        id: "rec-3",
        name: "Tumis Kangkung Bawang Putih",
        category: "Sayuran",
        difficulty: "Sangat Mudah",
        cookingTime: 10,
        outsidePrice: 13000,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        description: "Sayur hijau segar wajib anak kos biar tetap sehat. Masak cepat kurang dari 10 menit.",
        equipment: ["Kompor", "Wajan", "Pisau"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Kangkung", qty: 1, unit: "ikat" },
            { name: "Bawang Putih", qty: 3, unit: "siung" },
            { name: "Cabai Rawit", qty: 3, unit: "buah" },
            { name: "Minyak Goreng", qty: 20, unit: "ml" }
        ],
        instructions: [
            "Petik daun dan batang muda kangkung, lalu cuci bersih dengan air mengalir.",
            "Tumis bawang putih geprek dan irisan cabai dengan api besar.",
            "Masukkan kangkung, tambahkan garam dan sedikit air, aduk cepat selama 2 menit.",
            "Angkat selagi kangkung masih hijau segar dan renyah."
        ]
    },
    {
        id: "rec-4",
        name: "Tahu Crispy Tepung Bumbu",
        category: "Tempe & Tahu",
        difficulty: "Mudah",
        cookingTime: 15,
        outsidePrice: 14000,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        description: "Tahu putih renyah di luar lembut di dalam, cocok jadi lauk utama maupun camilan nugas.",
        equipment: ["Kompor", "Wajan", "Pisau"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Tahu Putih", qty: 0.6, unit: "bungkus" },
            { name: "Tepung Bumbu", qty: 0.5, unit: "bungkus" },
            { name: "Minyak Goreng", qty: 60, unit: "ml" }
        ],
        instructions: [
            "Potong tahu putih menjadi ukuran dadu sedang.",
            "Balurkan potongan tahu ke dalam adonan basah lalu tepung bumbu kering.",
            "Goreng dalam minyak panas hingga berwarna kuning keemasan.",
            "Tiriskan dan nikmati bersama nasi hangat serta cabai rawit."
        ]
    },
    {
        id: "rec-5",
        name: "Ayam Teriyaki Kos Praktis",
        category: "Ayam Spesial",
        difficulty: "Sedang",
        cookingTime: 20,
        outsidePrice: 22000,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
        description: "Dada ayam filet dimasak dengan saus teriyaki instan. Rasa ala resto Jepang dengan biaya anak kos.",
        equipment: ["Kompor", "Wajan", "Pisau", "Talenan"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Dada Ayam", qty: 125, unit: "gram" },
            { name: "Saus Teriyaki", qty: 1, unit: "sachet" },
            { name: "Bawang Putih", qty: 2, unit: "siung" },
            { name: "Minyak Goreng", qty: 20, unit: "ml" }
        ],
        instructions: [
            "Potong dadu dada ayam, marinasi dengan 1 sachet saus teriyaki selama 10 menit.",
            "Tumis bawang putih cincang hingga wangi.",
            "Masukkan ayam beserta bumbu marinasinya, masak hingga ayam matang dan saus mengental.",
            "Sajikan hangat di atas nasi putih."
        ]
    },
    {
        id: "rec-6",
        name: "Sayur Sop Sosis & Sayuran",
        category: "Sayuran",
        difficulty: "Mudah",
        cookingTime: 20,
        outsidePrice: 15000,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        description: "Kuah hangat menyegarkan saat musim hujan di Jogja. Bisa dimasak pakai panci kompor maupun rice cooker.",
        equipment: ["Panci", "Pisau", "Talenan"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Wortel & Kentang", qty: 1, unit: "bungkus" },
            { name: "Sosis Ayam", qty: 2, unit: "buah" },
            { name: "Bawang Putih", qty: 2, unit: "siung" }
        ],
        instructions: [
            "Potong wortel, kentang, dan sosis sesuai selera.",
            "Didihkan 400 ml air di panci atau rice cooker bersama bawang putih geprek.",
            "Masukkan wortel dan kentang hingga empuk, lalu masukkan sosis dan daun bawang.",
            "Bumbui dengan garam dan merica secukupnya, angkat dan sajikan."
        ]
    },
    {
        id: "rec-7",
        name: "Nasi Goreng Rice Cooker Kilat",
        category: "Rice Cooker Only",
        difficulty: "Sangat Mudah",
        cookingTime: 25,
        outsidePrice: 16000,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        description: "Tanpa kompor dan tanpa wajan! Semua bahan dimasukkan langsung ke dalam rice cooker.",
        equipment: ["Rice cooker"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Sosis Ayam", qty: 2, unit: "buah" },
            { name: "Telur Ayam", qty: 1, unit: "butir" },
            { name: "Kecap Manis", qty: 2, unit: "sdm" },
            { name: "Bawang Putih", qty: 2, unit: "siung" }
        ],
        instructions: [
            "Cuci beras, masukkan ke panci rice cooker bersama air takaran normal.",
            "Masukkan irisan sosis, bawang putih cincang, dan kecap manis, lalu tekan tombol Cook.",
            "Saat air hampir menyusut, pecahkan 1 butir telur di atasnya dan tutup kembali.",
            "Setelah tombol berpindah ke Warm, aduk rata dan siap disantap."
        ]
    },
    {
        id: "rec-8",
        name: "Orak-Arik Telur Sawi Hijau",
        category: "Telur & Praktis",
        difficulty: "Sangat Mudah",
        cookingTime: 12,
        outsidePrice: 14000,
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
        description: "Kombinasi protein telur dan serat sawi hijau dalam satu wajan. Praktis dan mengenyangkan.",
        equipment: ["Kompor", "Wajan", "Pisau"],
        ingredients: [
            { name: "Beras", qty: 150, unit: "gram" },
            { name: "Telur Ayam", qty: 2, unit: "butir" },
            { name: "Sawi Hijau", qty: 0.5, unit: "ikat" },
            { name: "Bawang Putih", qty: 2, unit: "siung" },
            { name: "Minyak Goreng", qty: 20, unit: "ml" }
        ],
        instructions: [
            "Potong sawi hijau dan cincang bawang putih.",
            "Tumis bawang putih, masukkan telur lalu orak-arik hingga matang.",
            "Masukkan sawi hijau, tambahkan sedikit air dan garam, aduk hingga layu.",
            "Sajikan bersama nasi putih hangat."
        ]
    },
    {
        id: "rec-9",
        name: "Mie Goreng Telur Sayur",
        category: "Telur & Praktis",
        difficulty: "Sangat Mudah",
        cookingTime: 12,
        outsidePrice: 15000,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
        description: "Mie telur kenyal dimasak dengan sawi dan telur orak-arik. Lebih sehat dan mengenyangkan dibanding mie instan biasa.",
        equipment: ["Kompor", "Panci", "Wajan"],
        ingredients: [
            { name: "Mie Telur", qty: 1, unit: "keping" },
            { name: "Telur Ayam", qty: 1, unit: "butir" },
            { name: "Sawi Hijau", qty: 0.5, unit: "ikat" },
            { name: "Kecap Manis", qty: 2, unit: "sdm" },
            { name: "Bawang Putih", qty: 2, unit: "siung" }
        ],
        instructions: [
            "Rebus mie telur selama 3 menit, tiriskan.",
            "Tumis bawang putih, masukkan telur orak-arik dan potongan sawi.",
            "Masukkan mie dan kecap manis, aduk rata dengan api sedang.",
            "Angkat dan sajikan hangat."
        ]
    }
];
