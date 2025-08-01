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
        name: "Rustic Oak Dining Table",
        description: "A stunning centerpiece crafted from solid oak with beautiful natural grain patterns. Perfect for family gatherings and special occasions.",
        price: 129900, // $1,299.00
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Tables"
      },
      {
        id: "2",
        name: "Classic Walnut Armchair",
        description: "Elegant armchair featuring rich walnut wood and ergonomic design. Upholstered with premium fabric for ultimate comfort.",
        price: 89900, // $899.00
        imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Chairs"
      },
      {
        id: "3",
        name: "Modern Pine Bookshelf",
        description: "Sleek bookshelf with clean lines and ample storage. Crafted from sustainable pine with a natural finish that highlights the wood grain.",
        price: 54900, // $549.00
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Storage"
      },
      {
        id: "4",
        name: "Live Edge Maple Coffee Table",
        description: "Unique coffee table featuring a live edge maple slab with metal hairpin legs. Each piece is one-of-a-kind with natural edge variations.",
        price: 74900, // $749.00
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Tables"
      },
      {
        id: "5",
        name: "Custom Cherry Kitchen Cabinet",
        description: "Handcrafted kitchen cabinet in rich cherry wood with soft-close hinges and adjustable shelving. Custom sizing available.",
        price: 189900, // $1,899.00
        imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Cabinets"
      },
      {
        id: "6",
        name: "Platform Ash Bed Frame",
        description: "Minimalist platform bed frame crafted from sustainable ash wood. Features integrated nightstands and a low-profile design.",
        price: 159900, // $1,599.00
        imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "Bedroom"
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
