import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "@/data/products";
import ItemDetail from "./ItemDetail";
import { Skeleton } from "@/components/ui/skeleton";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      getProductById(id)
        .then((productData) => {
          setProduct(productData || null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Producto no encontrado
        </h2>
        <p className="text-muted-foreground mb-8">
          El producto que buscas no existe o ha sido removido.
        </p>
        <a href="/" className="text-primary hover:underline">
          Volver al inicio
        </a>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;