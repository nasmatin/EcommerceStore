import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import AddressItem from "./AddressItem";
import Button from "./Button";
import NoAddress from "../Components/NoAddress";
import { GetAddress } from "../Features/AddressSlice";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function Address() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.login);

  const userId = account.id;
  const addresses = useSelector((state) => state.address.addresses);

  const useraddress = addresses?.[String(userId)] ?? [];
  useEffect(() => {
    if (userId) {
      dispatch(GetAddress(userId));
    }
  }, [dispatch, userId]);
  return (
    <>
      <Header />
      <Menu />
      <div className=" ml-8">
        <Button label="+" onClick={() => navigate("addressform")} />
      </div>

      <div dir="rtl" className="text-center">
        <div 
        className=" flex w-full  flex-col items-center gap-4 px-4 py-4">
          {!useraddress || useraddress.length === 0 ? (
            <NoAddress />
          ) : (
            useraddress.map((uaddress) => (
              <AddressItem
                key={uaddress.id}
                id={uaddress.id}
                title={uaddress.title}
                postalCode={uaddress.postalCode}
                fullAddress={uaddress.fullAddress}
                // link={`/address/addressdetial?userId=${userId}&id=${uaddress.id}`}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Address;
