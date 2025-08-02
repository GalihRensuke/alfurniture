import { type User, type InsertUser, type Product, type InsertProduct, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: Product[] = [
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

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date().toISOString()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

export const storage = new MemStorage();
