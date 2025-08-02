import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/product-card";
import type { Product } from "@shared/schema";

const Products = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-foreground/70">Memuat furnitur berkualitas kami...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <p className="text-lg text-destructive mb-4">Gagal memuat produk</p>
            <p className="text-foreground/70">Silakan coba lagi nanti atau hubungi kami untuk bantuan.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-primary mb-6">Produk Kami</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Temukan koleksi furnitur kayu berkualitas untuk berbagai kebutuhan, dengan spesialisasi di bidang pendidikan berkat pengalaman melayani banyak sekolah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-display font-bold text-primary mb-4">
            Proyek Custom Disambut Baik
          </h3>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Punya kebutuhan furnitur khusus? Dengan pengalaman di berbagai proyek termasuk banyak sekolah, kami siap mewujudkan visi Anda.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
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
