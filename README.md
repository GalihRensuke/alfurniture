<<<<<<< HEAD
# alfurniture
=======
# AL Furniture - Supplier Furnitur Kayu Berkualitas

Website showcase untuk AL Furniture, supplier furnitur kayu berkualitas yang mengkhususkan diri melayani institusi pendidikan di Indonesia.

## 🏢 Tentang AL Furniture

AL Furniture didirikan tahun 2025 oleh Agung dan Kholis sebagai workshop keluarga yang fokus pada craftsmanship furnitur kayu berkualitas tinggi. Dengan pengalaman melayani berbagai klien terutama sekolah-sekolah, kami memahami kebutuhan khusus furniture untuk lingkungan pendidikan.

**Lokasi:** Cilendek Timur, Kota Bogor  
**Kontak:** +62 877-8241-4638 | info@alfurniture.com

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Shadcn/UI Components  
- **Backend:** Node.js + Express.js
- **Database:** Drizzle ORM + PostgreSQL (Neon Database)
- **State Management:** TanStack Query
- **Routing:** Wouter
- **Form Handling:** React Hook Form + Zod

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd al-furniture

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm start        # Start production server
npm run check    # Type checking
npm run db:push  # Push database schema
```

## 📱 Features

- **Responsive Design** - Mobile-first design yang optimal di semua device
- **Product Showcase** - Galeri produk dengan kategori (Meja, Kursi)
- **Category Navigation** - Routing terpisah per kategori produk
- **Contact Forms** - Form kontak dengan validasi
- **Testimonials** - Social proof dari klien
- **Multiple CTAs** - Call-to-action strategis di seluruh site
- **SEO Optimized** - Meta tags dan struktur SEO-friendly

## 🗂️ Project Structure

```
├── client/          # Frontend React app
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components + routing
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities & configurations
├── server/          # Backend Express app  
├── shared/          # Shared types & schemas
└── dist/           # Production build output
```

## 🎨 Design System

Project menggunakan earth-tone color palette yang mencerminkan material kayu natural:

- **Primary:** Warm brown (#8B4513)
- **Accent:** Cream/beige tones
- **Background:** Neutral grays
- **Typography:** Playfair Display (headings) + Inter (body)

## 📦 Deployment

Project ini adalah full-stack application yang membutuhkan server. Deploy menggunakan:

- **Replit Autoscale Deployment** (recommended)
- **Reserved VM Deployment** 
- **Vercel/Netlify** (dengan serverless functions)

```bash
npm run build    # Build production files
npm start        # Start production server
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**AL Furniture**  
Cilendek Timur, Kota Bogor  
Email: info@alfurniture.com  
Phone: +62 877-8241-4638

---

Built with ❤️ for Indonesian furniture craftsmanship
>>>>>>> 679c0c8 (Showcase AL Furniture, a quality wood furniture supplier for education)
