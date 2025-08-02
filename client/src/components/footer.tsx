import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">AL Furniture</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Menyediakan furnitur kayu berkualitas untuk sekolah sejak 2025. Kualitas, tradisi, dan keahlian dalam setiap produk.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/">
                  <span className="hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                    Beranda
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                    Produk
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                    Tentang Kami
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
                    Kontak
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 AL Furniture. Semua hak dilindungi. | Dibuat dengan cinta oleh pengrajin lokal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
