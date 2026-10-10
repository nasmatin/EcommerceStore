import { Link } from "react-router";
function Profile() {
  return (
    <div dir="ltr" className="flex items-center gap-4 sm:gap-5 shrink-0">
      
  <Link
        to="/cart"
        className="flex items-center justify-center"
      >
                <i
          className="
            fa-solid fa-cart-shopping
            text-purple-600
            text-xl sm:text-2xl
          "
        ></i>
        </Link>

 <Link
        to="/account"
        className="flex items-center justify-center"
      >        <i
          className="
            fa-solid fa-circle-user
            text-purple-600
            text-xl sm:text-2xl
          "
        ></i>
      </Link>

    </div>
  );
}

export default Profile;