import BlogCard from "../Components/BlogCard";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import ideasImage from "../assets/Reading Nook.png";
function Blog() {
  return (
    <>
    
      <Header />
      <Menu />
      <div className="my-10  text-center font-myfont">
        <h1 className="text-3xl font-bold text-fuchsia-900 transition-colors duration-300 hover:text-fuchsia-700">
          وبلاگ
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 px-8 py-10">
        <BlogCard  title="عنوان" image={ideasImage} link="#"/>
      <BlogCard  title="عنوان" image={ideasImage} link="#"/>
       <BlogCard  title="عنوان" image={ideasImage} link="#"/>
        <BlogCard  title="عنوان" image={ideasImage} link="#"/>
         <BlogCard  title="عنوان" image={ideasImage} link="#"/>
          <BlogCard  title="عنوان" image={ideasImage} link="#"/>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
