import NavBar from "@/components/NavBar";
import ItemListContainer from "@/components/ItemListContainer";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <div className="flex-1">
        <ItemListContainer greeting="" />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;