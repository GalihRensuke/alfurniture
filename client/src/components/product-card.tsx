import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (priceInCents: number) => {
    return `Rp ${priceInCents.toLocaleString('id-ID')}`;
  };

  return (
    <Card className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group touch-manipulation">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-2 sm:mb-3">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-foreground/70 mb-4 leading-relaxed line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-4 py-2">
            Lihat Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
