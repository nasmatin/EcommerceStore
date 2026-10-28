function ShareButton({ productName, productUrl }) {
  const handleShare = async () => {
    const url = productUrl || window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: productName,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("لینک محصول کپی شد");
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="اشتراک‌گذاری محصول"
      title="اشتراک‌گذاری"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:scale-110 hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:text-fuchsia-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:rotate-6"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.7 10.7 6.6-4.4" />
        <path d="m8.7 13.3 6.6 4.4" />
      </svg>
    </button>
  );
}

export default ShareButton;
