import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Package } from "lucide-react";

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                  -{product.discount}%
                </Badge>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground font-medium mb-1">
                {product.brand}
              </p>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm ml-1">{product.reviews}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({Math.floor(Math.random() * 500) + 50} reseñas)
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">
                  S/ {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    S/ {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>Stock: {product.stock} unidades</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              Agregar al carrito
            </Button>
            <Button size="sm" className="flex-1" asChild>
              <Link to={`/item/${product.id}`}>
                Ver detalles
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ItemList;