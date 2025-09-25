import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setCount(value);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={decrement}
          disabled={count <= 1}
          className="h-10 w-10 p-0"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <Input
          type="number"
          min={1}
          max={stock}
          value={count}
          onChange={handleInputChange}
          className="w-20 text-center h-10"
        />
        
        <Button
          variant="outline"
          size="sm"
          onClick={increment}
          disabled={count >= stock}
          className="h-10 w-10 p-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <Button 
        onClick={handleAddToCart}
        className="w-full"
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Stock disponible: {stock} unidades
      </p>
    </div>
  );
};

export default ItemCount;