import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CartModal from "./CartModal";

const CartWidget = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        className="relative p-2"
        onClick={() => setIsCartOpen(true)}
      >
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
          >
            {cartCount}
          </Badge>
        )}
      </Button>
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </>
  );
};

export default CartWidget;