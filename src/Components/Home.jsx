import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Slider from "../Components/Slider";
import BestSelling from "../Components/BestSelling";
import BestFestival from "./BestFestival";
import Category from "../Components/Category";
import Footer from "../Components/Footer";
import BlogView from "../Components/BlogView";

function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Slider />
         
      <Category />
       <BlogView/>
      <BestSelling />
      <BestFestival/>
  
      <Footer />
    </>
  );
}

export default Home;
