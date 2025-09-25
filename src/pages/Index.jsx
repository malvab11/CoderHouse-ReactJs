import NavBar from "@/components/NavBar";
import ItemListContainer from "@/components/ItemListContainer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <div className="flex-1">
        <ItemListContainer greeting="Descubre nuestros increíbles productos y ofertas especiales" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;