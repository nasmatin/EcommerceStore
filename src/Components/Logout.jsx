import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../Features/LoginSlice";
function Logout() {
  const navigate = useNavigate();
const dispatch = useDispatch();

  const handleLogout = () => {
   
    dispatch(logout());
     navigate("/", { replace: true });
  };

  return <button onClick={handleLogout}>خروج</button>;
}
export default Logout;