import { useState } from "react";
import { Search, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CartWidget from "./CartWidget";
import LoginModal from "./LoginModal";
import { categories } from "@/data/products";

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        ARMA TU SETUP CON LOS MEJORES PRODUCTOS TECH QUE TENEMOS PARA TI
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-foreground text-background px-3 py-1 rounded font-bold text-lg">
                Econo
              </div>
              <span className="text-xl font-bold text-foreground">Tech</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-4 pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <div>
                  <span className="text-muted-foreground">Contáctanos</span>
                  <br />
                  <span className="font-semibold">922 035 904</span>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsLoginOpen(true)}
                className="hidden md:flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Iniciar sesión</span>
              </Button>
              
              <CartWidget />
            </div>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 py-3 overflow-x-auto">
              <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
                <Link to="/">PRODUCTOS</Link>
              </Button>
              {categories.map((category) => (
                <Button 
                  key={category.id}
                  variant="ghost" 
                  size="sm" 
                  className="whitespace-nowrap" 
                  asChild
                >
                  <Link to={`/category/${category.id}`}>
                    {category.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  );
};

export default NavBar;