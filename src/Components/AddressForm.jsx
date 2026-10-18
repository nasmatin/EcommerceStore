import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AddressMap from "./AddressMap";
import { useState, useEffect } from "react";
import DROPDOWN from "./DropDown";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Address from "../Components/Address";
import { useDispatch, useSelector } from "react-redux";
import { GetProvince } from "../Features/ProvinceSlice";
import { GetCity } from "../Features/CitySlice";
import { PostAddress } from "../Features/AddAddressSlice";
import { useNavigate, Link } from "react-router";

function AddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.province.provinces);
  const cities = useSelector((state) => state.city.cities);
  const [form, setform] = useState({
    pid: "",
    cid: "",
    address: "",
    postalcode: "",
    lat: "",
    lon: "",
  });
    const account = useSelector((state) => state.login);

  const cityOptions = cities[form.pid] || [];

  const handlechangeprovince = (value) => {
    setform((prev) => ({
      ...prev,
      pid: value,
      cid: "",
    }));

    dispatch(GetCity(value));
  };

  const handlechangecity = (value) => {
    setform((prev) => ({
      ...prev,
      cid: value,
    }));
  };
  const handlesubmit = async (e) => {

    e.preventDefault(); 
         const id = account.id;

    try {
      const result = await dispatch(PostAddress({id:id,form:form})).unwrap();
      setform(result);
      navigate("address", { replace: true });
    } catch (error) {
      alert("ثبت‌نام ناموفق بود. اطلاعات را بررسی کن.");
      console.error("خطای ثبت آدرس:", error);
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;

    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLocationChange = (lat, lon) => {
  setform((prev) => ({
    ...prev,
    lat,
    lon,
  }));
};
  useEffect(() => {
    dispatch(GetProvince());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Menu />
      <form
        onSubmit={handlesubmit}
        dir="rtl"
        className="font-myfont bg-purple-50 py-12"
      >
        <div className="mx-auto max-w-6xl px-4">
          {/* عنوان صفحه */}
          <div className="mb-10">
            <h1 className=" font-myfont text-3xl font-bold text-purple-900">
              ثبت آدرس{" "}
            </h1>
          </div>

          {/* اطلاعات + نقشه */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* اطلاعات تماس */}
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-purple-100">
              {/* آدرس */}
              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">استان:</h3>

                  <DROPDOWN
                    name="pid"
                    options={provinces.map((province) => ({
                      value: province.id,
                      label: province.name,
                    }))}
                    value={form.pid}
                    onChange={handlechangeprovince}
                    placeholder="استان خود  را انتخاب کنید"
                    required
                  ></DROPDOWN>
                </div>
              </div>

              {/* شماره تماس */}
              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">شهر : </h3>

                  <DROPDOWN
                    name="city"
                    options={cityOptions.map((city) => ({
                      value: city.id,
                      label: city.name,
                    }))}
                    value={form.cid}
                    onChange={handlechangecity}
                    placeholder="شهر خود  را انتخاب کنید"
                    disabled={!form.pid}
                    required
                  ></DROPDOWN>
                </div>
              </div>

              {/* پشتیبانی */}
              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">آدرس دقیق :</h3>

                  <textarea
                    name="address"
                    className=" w-full 
        font-myfont
        my-2 ml-0
        px-5 py-8
        text-right
        bg-white
        border border-purple-900
        rounded-2xl
        text-[#333]
        outline-none
        shadow-[0_2px_5px_rgba(0,0,0,0.05)]
        transition duration-200 ease-in-out
        font-bold
        cursor-text"
                    value={form.address}
                    placeholder="ادرس دقیق"
                    onChange={handlechange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">کد پستی :</h3>

                  <Input
                    name="postalcode"
                    className="border-purple-900"
                    value={form.postalcode}
                    placeholder=" کد پستی "
                    onChange={handlechange}
                    required
                  ></Input>
                </div>
              </div>
            </div>

            {/* نقشه */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-purple-100">
              <div className=" w-full">
               <AddressMap onLocationChange={handleLocationChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button label="ثبت آدرس" />

          <Link
            to="/address"
            element={<Address />}
            className="text-purple-800 text-l font-semibold text-center mb-2"
          ></Link>
        </div>
      </form>
      <Footer />
    </>
  );
}
export default AddressForm;
