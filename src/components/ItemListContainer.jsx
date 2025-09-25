import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "@/data/products";
import ItemList from "./ItemList";
import { Skeleton } from "@/components/ui/skeleton";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = categoryId ? 
      getProductsByCategory(categoryId) : 
      getProducts();

    fetchProducts
      .then((productData) => {
        setProducts(productData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const getTitle = () => {
    if (categoryId) {
      const categoryNames = {
        smartphones: "Smartphones",
        laptops: "Laptops",
        audio: "Audio",
        tablets: "Tablets",
        wearables: "Wearables",
        gaming: "Gaming"
      };
      return categoryNames[categoryId] || "Categoría";
    }
    return "Todos los productos";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!categoryId && (
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¡GRAN SORTEO!</h2>
          <p className="text-lg mb-4">
            🎉 Participa y gana un iPhone 15 Pro Max completamente GRATIS 🎉
          </p>
          <p className="text-sm opacity-90">
            Por cada compra mayor a S/ 500 automáticamente entras al sorteo mensual
          </p>
        </div>
      )}
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {getTitle()}
        </h1>
        {greeting && (
          <p className="text-lg text-muted-foreground">
            {greeting}
          </p>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-1/3" />
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No se encontraron productos
          </h3>
          <p className="text-muted-foreground">
            No hay productos disponibles en esta categoría.
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;