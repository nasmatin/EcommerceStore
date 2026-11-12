import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AddressItem from "./AddressItem";
import Button from "./Button";
import NoAddress from "../Components/NoAddress";
import { GetAddress } from "../Features/AddressListSlice";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DeleteAddress } from "../Features/DeleteAddressSlice";

function Address() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.login);

  const userId = account.id;
  const addresses = useSelector((state) => state.address.addresses);
  const statusbar = useSelector((state) => state.address.statusbar);
  const errorbar = useSelector((state) => state.address.errorbar);

  const useraddress = addresses?.[String(userId)] ?? [];

  useEffect(() => {
    if (userId) {
      dispatch(GetAddress(userId));
    }
  }, [dispatch, userId]);

  const handleRemove = async (id) => {
    if (!window.confirm("از حذف این آدرس مطمئنی؟")) return;

    try {
      await dispatch(
        DeleteAddress({
          userId: account.id,
          id,
        })
      ).unwrap();

      // دریافت دوباره لیست آدرس‌ها بعد از حذف موفق
      await dispatch(GetAddress(userId)).unwrap();
    } catch (error) {
      console.error("خطا در حذف آدرس:", error);
      alert("حذف آدرس انجام نشد.");
    }
  };

  const handleedit = (uaddress) => {
    navigate("/address/addressform", {
      state: { address: uaddress },
    });
  };

  return (
    <>
      <Header />
      <Menu />

      <main
        dir="rtl"
        className="
          min-h-[65vh] bg-[#faf8fc]
          px-4 py-10 font-myfont sm:py-14
        "
      >
        <div className="mx-auto max-w-4xl">
          {/* عنوان صفحه */}
          <div className="mb-8 text-center">
            <div
              className="
                mx-auto mb-4 flex size-16 items-center
                justify-center rounded-2xl
                bg-linear-to-br from-purple-900 to-fuchsia-700
                text-2xl text-white
                shadow-lg shadow-purple-200
              "
            >
              <i className="fa-solid fa-location-dot" />
            </div>

            <h1 className="text-2xl font-extrabold text-purple-950 sm:text-3xl">
              آدرس‌های من
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              آدرس‌های خود را مدیریت و ویرایش کن
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-l from-purple-800 to-fuchsia-600" />
          </div>

          {/* افزودن آدرس */}
          <div className="mb-6 flex justify-start">
            <button
              type="button"
              onClick={() => navigate("addressform")}
              className="
                inline-flex min-h-12 items-center justify-center
                gap-2 rounded-xl
                bg-linear-to-l from-purple-900 to-fuchsia-800
                px-5 py-3 text-sm font-bold text-white
                shadow-md shadow-purple-200/60
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
                hover:shadow-fuchsia-200/70
                active:scale-95
              "
            >
              <i className="fa-solid fa-plus" />
              افزودن آدرس جدید
            </button>
          </div>

          {/* لیست آدرس‌ها */}
          <div className="flex w-full flex-col items-center gap-5">
            {statusbar === "loading" ? (
              <div
                className="
                  flex w-full flex-col items-center gap-4
                  rounded-3xl border border-purple-100
                  bg-white py-14 shadow-sm
                "
              >
                <div className="size-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-800" />
                <p className="text-sm text-gray-500">
                  در حال دریافت آدرس‌ها...
                </p>
              </div>
            ) : statusbar === "failed" ? (
              <div
                className="
                  flex w-full flex-col items-center gap-4
                  rounded-3xl border border-red-100
                  bg-white px-5 py-10 shadow-sm
                "
              >
                <i className="fa-solid fa-circle-exclamation text-3xl text-red-500" />

                <p className="text-center text-sm text-red-600">
                  {errorbar || "دریافت آدرس‌ها با خطا مواجه شد."}
                </p>

                <Button
                  label="تلاش مجدد"
                  onClick={() => dispatch(GetAddress(userId))}
                />
              </div>
            ) : !useraddress || useraddress.length === 0 ? (
              <div className="w-full">
                <NoAddress />
              </div>
            ) : (
              <>
                <div className="flex w-full items-center justify-between px-1">
                  <h2 className="text-sm font-extrabold text-purple-950">
                    آدرس‌های ثبت‌شده
                  </h2>

                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                    {useraddress.length} آدرس
                  </span>
                </div>

                {useraddress.map((uaddress) => (
                  <AddressItem
                    key={uaddress.id}
                    id={uaddress.id}
                    title={uaddress.title}
                    postalCode={uaddress.postalCode}
                    fullAddress={uaddress.fullAddress}
                    onRemove={() => handleRemove(uaddress.id)}
                    onEdit={() => handleedit(uaddress)}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Address;
