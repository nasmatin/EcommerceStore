import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AddressMap from "./AddressMap";
import { useState, useEffect } from "react";
import DROPDOWN from "./DropDown";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { GetProvince } from "../Features/ProvinceSlice";
import { GetCity } from "../Features/CitySlice";
import { PostAddress } from "../Features/AddAddressSlice";
import { useNavigate, Link, useLocation } from "react-router";
import { EditAddress } from "../Features/EditAddressSlice";

function AddressForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const selectedAddress = location.state?.address;
  const isEditMode = Boolean(selectedAddress);

  const provinces = useSelector((state) => state.province.provinces);
  const cities = useSelector((state) => state.city.cities);
  const account = useSelector((state) => state.login);

  const [form, setform] = useState(() => ({
    title: selectedAddress?.title || "",
    provinceId: selectedAddress?.provinceId
      ? String(selectedAddress.provinceId)
      : "",
    cityId: selectedAddress?.cityId ? String(selectedAddress.cityId) : "",
    address: selectedAddress?.address || "",
    postalCode: selectedAddress?.postalCode || "",
    latitude: selectedAddress?.latitude || "",
    longitude: selectedAddress?.longitude || "",
  }));

  const cityOptions = cities[form.provinceId] || [];

  useEffect(() => {
    dispatch(GetProvince());
  }, [dispatch]);

  useEffect(() => {
    if (selectedAddress?.provinceId) {
      dispatch(GetCity(selectedAddress.provinceId));
    }
  }, [dispatch, selectedAddress]);

  const handlechangeprovince = (value) => {
    setform((prev) => ({
      ...prev,
      provinceId: value,
      cityId: "",
    }));

    dispatch(GetCity(value));
  };

  const handlechangecity = (value) => {
    setform((prev) => ({
      ...prev,
      cityId: value,
    }));
  };

  const handlechange = (e) => {
    const { name, value } = e.target;

    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = (latitude, longitude) => {
    setform((prev) => ({
      ...prev,
      latitude,
      longitude,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const id = account.id;

    try {
      if (isEditMode) {
        await dispatch(
          EditAddress({
            userId: id,
            id: selectedAddress.id,
            formdata: form,
          })
        ).unwrap();
      } else {
        await dispatch(
          PostAddress({
            userId: id,
            formdata: form,
          })
        ).unwrap();
      }

      navigate("/address", { replace: true });
    } catch (error) {
      console.error("خطای کامل:", error);
      alert("ذخیره آدرس انجام نشد.");
    }
  };

  return (
    <>
      <Header />
      <Menu />

      <form
        onSubmit={handlesubmit}
        dir="rtl"
        className="font-myfont bg-fuchsia-100 py-12"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <h1 className="font-myfont text-3xl font-bold text-fuchsia-900 transition-colors duration-300 hover:text-fuchsia-700">
              ثبت آدرس
            </h1>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-fuchsia-100 transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">استان:</h3>

                  <DROPDOWN
                    name="provinceId"
                    options={provinces.map((province) => ({
                      value: province.id,
                      label: province.name,
                    }))}
                    value={form.provinceId}
                    onChange={handlechangeprovince}
                    placeholder="استان خود را انتخاب کنید"
                    required
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">شهر:</h3>

                  <DROPDOWN
                    name="cityId"
                    options={cityOptions.map((city) => ({
                      value: city.id,
                      label: city.name,
                    }))}
                    value={form.cityId}
                    onChange={handlechangecity}
                    placeholder="شهر خود را انتخاب کنید"
                    disabled={!form.provinceId}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">عنوان آدرس:</h3>

                  <Input
                    name="title"
                    className="border-fuchsia-900"
                    value={form.title}
                    placeholder="عنوان آدرس"
                    onChange={handlechange}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">آدرس دقیق:</h3>

                  <textarea
                    name="address"
                    className="my-2 ml-0 w-full rounded-2xl border border-fuchsia-900 bg-white px-5 py-8 text-right font-myfont font-bold text-[#333] shadow-[0_2px_5px_rgba(0,0,0,0.05)] outline-none transition duration-300 ease-in-out hover:border-fuchsia-700 hover:shadow-md focus:border-fuchsia-700 focus:ring-2 focus:ring-fuchsia-200"
                    value={form.address}
                    placeholder="آدرس دقیق"
                    onChange={handlechange}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <div>
                  <h3 className="mb-1 font-bold text-gray-800">کد پستی:</h3>

                  <Input
                    type="number"
                    name="postalCode"
                    className="border-fuchsia-900"
                    value={form.postalCode}
                    placeholder="کد پستی"
                    onChange={handlechange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="h-full min-h-96 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-fuchsia-100 transition-shadow duration-300 hover:shadow-lg">
              <div className="h-full w-full">
                <AddressMap
                  onLocationChange={handleLocationChange}
                  latitude={form.latitude}
                  longitude={form.longitude}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="transition-transform duration-300 hover:scale-[1.03] active:scale-95">
            <Button label={isEditMode ? "ذخیره تغییرات" : "ثبت آدرس"} />
          </div>

          <Link
            to="/address"
            className="mb-2 text-center text-l font-semibold text-fuchsia-800 transition-colors duration-300 hover:text-fuchsia-950"
          />
        </div>
      </form>

      <Footer />
    </>
  );
}

export default AddressForm;
