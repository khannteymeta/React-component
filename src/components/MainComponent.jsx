import { FooterComponent } from "./FooterComponent";
import { Input } from "./Input";
import { NavBar } from "./Navbar";
import { ProductCard } from "./ProductCard";

const MainComponent = () => {
  return (
    <>
      <NavBar />
      <ProductCard />
      <ProductCard />
      <Input />
      <FooterComponent />
    </>
  );
};

export default MainComponent;
