import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { mockProducts } from "@/lib/mockData";
import type { Product } from "@shared/schema";

const Products = () => {
  const products: Product[] = mockProducts;

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 sm:mb-6">Produk Kami</h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
            Temukan koleksi furnitur kayu berkualitas untuk berbagai kebutuhan, dengan spesialisasi di bidang pendidikan berkat pengalaman melayani banyak sekolah.
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
            <Link href="/products/tables">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Meja
              </Button>
            </Link>
            <Link href="/products/chairs">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Kursi
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA after products */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-accent/30 rounded-2xl p-6 sm:p-8 inline-block">
            <p className="text-base sm:text-lg text-foreground/80 mb-4">
              Tertarik dengan produk kami? Diskusikan kebutuhan spesifik Anda
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-4">
            Proyek Custom Disambut Baik
          </h3>
          <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto px-4">
            Punya kebutuhan furnitur khusus? Dengan pengalaman di berbagai proyek termasuk banyak sekolah, kami siap mewujudkan visi Anda.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Dapatkan Penawaran
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
