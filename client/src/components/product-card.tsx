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
    <Card className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-display font-semibold text-primary mb-3">
          {product.name}
        </h3>
        <p className="text-foreground/70 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Lihat Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
