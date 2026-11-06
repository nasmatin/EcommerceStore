import BlogCard from "../Components/BlogCard";
import readingImage from "../assets/Reading Nook.png";
import ideasImage from "../assets/Reading Nook.png";

function BlogView() {
  const blogItems = [
    {
      title: "کرم پودر",
      image: readingImage,
      link: "#",
    },
    {
      title: " آبرسان",
      image: ideasImage,
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 px-8 py-10">
      {blogItems.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  );
}

export default BlogView;
