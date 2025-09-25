import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useState } from "react";

const CartModal = ({ isOpen, onClose, cartCount, setCartCount }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      price: 4899,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: "5",
      name: "Sony WH-1000XM5",
      brand: "Sony", 
      price: 899,
      quantity: 2,
      image: "/placeholder.svg"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    
    const newCount = cartItems.reduce((total, item) => 
      item.id === id ? total + newQuantity - item.quantity : total + item.quantity, 0
    );
    setCartCount(newCount);
  };

  const removeItem = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    setCartCount(prevCount => prevCount - itemToRemove.quantity);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Carrito de Compras ({cartCount} productos)
          </DialogTitle>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Tu carrito está vacío</p>
            <Button onClick={onClose} className="mt-4">
              Continuar comprando
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    <h4 className="font-medium truncate">{item.name}</h4>
                    <p className="text-lg font-bold text-primary">
                      S/ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 p-0 ml-2"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  S/ {getTotalPrice().toLocaleString()}
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={onClose} className="flex-1">
                  Seguir comprando
                </Button>
                <Button className="flex-1">
                  Finalizar compra
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;