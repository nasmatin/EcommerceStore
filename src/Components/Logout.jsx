import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../Features/LoginSlice";
function LogoutClient() {
  const navigate = useNavigate();
const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/login", { replace: true });
    dispatch(logout());
  };

  return <button onClick={handleLogout}>خروج</button>;
}
export default LogoutClient;