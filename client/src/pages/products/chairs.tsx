import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ProductCard from "@/components/product-card";
import { getProductsByCategory } from "@/lib/mockData";
import type { Product } from "@shared/schema";

const Chairs = () => {
  // Filter for chair products
  const chairs = getProductsByCategory('kursi');

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 sm:mb-6">Koleksi Kursi</h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            Kursi ergonomis dan nyaman untuk berbagai kebutuhan, dirancang khusus untuk mendukung aktivitas belajar yang optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {chairs?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation to other categories */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-6">
            Jelajahi Kategori Lainnya
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/products">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Semua Produk
              </Button>
            </Link>
            <Link href="/products/tables">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Meja
              </Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-4">
            Butuh Kursi Custom?
          </h3>
          <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto px-4">
            Kami dapat membuat kursi sesuai dengan kebutuhan ergonomis dan desain khusus Anda. Konsultasikan kebutuhan kursi impian Anda dengan tim ahli kami.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Konsultasi Kursi Custom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chairs;