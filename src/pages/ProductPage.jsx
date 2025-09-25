import NavBar from "@/components/NavBar";
import ItemDetailContainer from "@/components/ItemDetailContainer";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <div className="flex-1">
        <ItemDetailContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;