import type { Product } from '@shared/schema';

// Mock products data for static deployment
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Meja Siswa Standar",
    description: "Meja siswa berkualitas tinggi dari kayu solid dengan desain ergonomis. Dilengkapi dengan laci untuk penyimpanan alat tulis. Cocok untuk ruang kelas SD, SMP, dan SMA.",
    price: 450000, // Rp 450.000
    imageUrl: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Meja"
  },
  {
    id: "2",
    name: "Kursi Siswa Ergonomis",
    description: "Kursi siswa dengan desain ergonomis yang nyaman untuk belajar dalam waktu lama. Terbuat dari kayu berkualitas dengan finishing halus dan tahan lama.",
    price: 300000, // Rp 300.000
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Kursi"
  },
  {
    id: "3",
    name: "Meja Komputer Lab",
    description: "Meja komputer khusus untuk laboratorium dengan desain modern. Dilengkapi dengan space management untuk CPU, monitor, dan aksesoris komputer lainnya.",
    price: 750000, // Rp 750.000
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Meja Komputer"
  },
  {
    id: "4",
    name: "Lemari Buku Perpustakaan",
    description: "Lemari buku dengan kapasitas besar untuk perpustakaan sekolah. Terbuat dari kayu solid dengan sistem rak yang dapat disesuaikan. Desain klasik yang elegan.",
    price: 1200000, // Rp 1.200.000
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Lemari"
  },
  {
    id: "5",
    name: "Meja Guru",
    description: "Meja guru dengan desain profesional dan fungsional. Dilengkapi dengan laci dan rak untuk menyimpan dokumen dan perlengkapan mengajar.",
    price: 950000, // Rp 950.000
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Meja"
  },
  {
    id: "6",
    name: "Bangku Aula Sekolah",
    description: "Bangku panjang untuk aula sekolah dengan kapasitas 4-6 orang. Konstruksi kuat dan tahan lama, cocok untuk acara sekolah dan upacara.",
    price: 800000, // Rp 800.000
    imageUrl: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Bangku"
  }
];

// Helper functions to filter products
export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};
