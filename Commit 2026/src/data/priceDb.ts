import type { PriceEntry } from '../types';

// Referensi harga pasar Kranggan & Demangan, Yogyakarta
export const YOGYA_PRICE_DB: Record<string, PriceEntry> = {
    "Beras": { unit: "gram", pricePerUnit: 15, marketPackQty: 1000, marketPackPrice: 15000, packLabel: "1 kg" },
    "Telur Ayam": { unit: "butir", pricePerUnit: 2000, marketPackQty: 4, marketPackPrice: 8000, packLabel: "1/4 kg (4 butir)" },
    "Tempe": { unit: "papan", pricePerUnit: 4000, marketPackQty: 1, marketPackPrice: 4000, packLabel: "1 papan" },
    "Tahu Putih": { unit: "bungkus", pricePerUnit: 5000, marketPackQty: 1, marketPackPrice: 5000, packLabel: "1 bungkus (isi 5)" },
    "Kangkung": { unit: "ikat", pricePerUnit: 3000, marketPackQty: 1, marketPackPrice: 3000, packLabel: "1 ikat" },
    "Sawi Hijau": { unit: "ikat", pricePerUnit: 3000, marketPackQty: 1, marketPackPrice: 3000, packLabel: "1 ikat" },
    "Dada Ayam": { unit: "gram", pricePerUnit: 45, marketPackQty: 250, marketPackPrice: 11250, packLabel: "250 gram" },
    "Sosis Ayam": { unit: "buah", pricePerUnit: 1500, marketPackQty: 3, marketPackPrice: 4500, packLabel: "3 buah" },
    "Bawang Merah": { unit: "siung", pricePerUnit: 400, marketPackQty: 10, marketPackPrice: 4000, packLabel: "1 ons" },
    "Bawang Putih": { unit: "siung", pricePerUnit: 450, marketPackQty: 8, marketPackPrice: 3600, packLabel: "1 ons" },
    "Cabai Rawit": { unit: "buah", pricePerUnit: 250, marketPackQty: 15, marketPackPrice: 3750, packLabel: "1/2 ons" },
    "Kecap Manis": { unit: "sdm", pricePerUnit: 500, marketPackQty: 10, marketPackPrice: 5000, packLabel: "1 sachet sedang" },
    "Saus Teriyaki": { unit: "sachet", pricePerUnit: 2500, marketPackQty: 1, marketPackPrice: 2500, packLabel: "1 sachet" },
    "Minyak Goreng": { unit: "ml", pricePerUnit: 18, marketPackQty: 250, marketPackPrice: 4500, packLabel: "250 ml" },
    "Tepung Bumbu": { unit: "bungkus", pricePerUnit: 3000, marketPackQty: 1, marketPackPrice: 3000, packLabel: "1 bungkus kecil" },
    "Wortel & Kentang": { unit: "bungkus", pricePerUnit: 5000, marketPackQty: 1, marketPackPrice: 5000, packLabel: "1 paket sayur sop" },
    "Mie Telur": { unit: "keping", pricePerUnit: 2500, marketPackQty: 2, marketPackPrice: 5000, packLabel: "1 bungkus (2 keping)" }
};
