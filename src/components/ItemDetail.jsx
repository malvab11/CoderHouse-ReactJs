import { Star, Package, Truck, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidades de ${product.name} al carrito`);
    // Aquí se implementaría la lógica para agregar al carrito
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover rounded-lg"
          />
          {product.discount > 0 && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-lg px-3 py-1">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground font-medium mb-2">
              {product.brand}
            </p>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{product.reviews}</span>
              </div>
              <span className="text-muted-foreground">
                ({Math.floor(Math.random() * 500) + 50} reseñas)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-primary">
                S/ {product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-muted-foreground line-through">
                  S/ {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.discount > 0 && (
              <p className="text-green-600 font-medium">
                ¡Ahorra S/ {(product.originalPrice - product.price).toLocaleString()}!
              </p>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-muted-foreground" />
            <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
              {product.stock > 0 ? `${product.stock} unidades disponibles` : 'Sin stock'}
            </span>
          </div>

          {/* Add to Cart */}
          <div className="bg-muted/50 p-6 rounded-lg">
            <ItemCount 
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
            />
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">Envío gratis a todo el país</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Garantía oficial de 1 año</span>
            </div>
          </div>

          {/* Description */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-3">Descripción</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;