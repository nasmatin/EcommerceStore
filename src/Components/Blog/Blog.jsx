import BlogCard from "../Components/BlogCard";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import ideasImage from "../assets/Reading Nook.png";

function Blog() {
  const blogs = [
    { id: 1, title: "عنوان", image: ideasImage, link: "#" },
    { id: 2, title: "عنوان", image: ideasImage, link: "#" },
    { id: 3, title: "عنوان", image: ideasImage, link: "#" },
    { id: 4, title: "عنوان", image: ideasImage, link: "#" },
    { id: 5, title: "عنوان", image: ideasImage, link: "#" },
    { id: 6, title: "عنوان", image: ideasImage, link: "#" },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-linear-to-b from-purple-50/60 via-white to-fuchsia-50/40 font-myfont"
    >
      <Header />
      <Menu />

      {/* PAGE TITLE */}

      <section className="relative overflow-hidden px-4 py-12 sm:py-16">
        <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-fuchsia-300/20 blur-3xl" />

        <div className="relative text-center">
          <span className="inline-block mb-3 rounded-full border border-purple-200 bg-white/70 px-5 py-2 text-sm text-purple-700 shadow-sm">
            دنیای زیبایی و مراقبت
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-950">
            وبلاگ ما
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-l from-fuchsia-500 to-purple-600" />

          <p className="mt-5 text-sm sm:text-base text-gray-500">
            تازه‌ترین مطالب، نکات و ایده‌ها در دنیای زیبایی و مراقبت
          </p>
        </div>
      </section>

      {/* BLOG CARDS */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-purple-950">
            آخرین مطالب
          </h2>

          <span className="text-sm text-purple-500">{blogs.length} مقاله</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                group rounded-2xl
                border border-purple-100
                bg-white/80
                p-2
                shadow-[0_4px_20px_rgba(139,92,246,0.06)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-purple-300
                hover:shadow-[0_12px_30px_rgba(139,92,246,0.15)]
              "
            >
              <BlogCard
                title={blog.title}
                image={blog.image}
                link={blog.link}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
