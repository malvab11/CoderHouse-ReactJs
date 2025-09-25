import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const providers = [
    { name: "Apple", logo: "/placeholder.svg" },
    { name: "Samsung", logo: "/placeholder.svg" },
    { name: "Sony", logo: "/placeholder.svg" },
    { name: "Dell", logo: "/placeholder.svg" },
    { name: "ASUS", logo: "/placeholder.svg" },
    { name: "Razer", logo: "/placeholder.svg" }
  ];

  return (
    <footer className="bg-muted mt-16">
      {/* Providers Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-xl font-semibold text-center mb-6">
            Nuestros Proveedores Oficiales
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {providers.map((provider, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <img 
                  src={provider.logo} 
                  alt={`${provider.name} logo`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-foreground text-background px-3 py-1 rounded font-bold text-lg">
                Econo
              </div>
              <span className="text-xl font-bold text-foreground">Tech</span>
            </div>
            <p className="text-muted-foreground">
              Tu tienda de tecnología de confianza. Los mejores productos tech al mejor precio.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Devoluciones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Garantías</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contáctanos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">948 474 409</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">marlonalvab@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Trujillo, Perú</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Horarios de atención:</p>
              <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 AM - 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Sáb: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Econo Tech. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;