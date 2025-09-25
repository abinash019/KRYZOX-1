import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useGetData from "../../hooks/getData";
import { logout } from "../../store/slices/auth.slice";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { getData, loading } = useGetData();

    const handleLogout = async () => {
        console.log("Before remove:", localStorage.getItem("auth"));
        localStorage.removeItem("auth");
        console.log("After remove:", localStorage.getItem("auth"));

        dispatch(logout());
        navigate("/", { replace: true });

        try {
            if (getData) await getData("/auth/logout");
        } catch (err) {
            console.warn(
                "Server logout failed, but you are logged out locally."
            );
            toast.error(
                "Server logout failed, but you are logged out locally."
            );
        }
    };

    return (
        <button
            className="bg-red-500 text-white h-10 w-24 rounded-lg hover:bg-red-600 transition duration-300"
            onClick={handleLogout}
            disabled={loading}
        >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Logout"}
        </button>
    );
};

export default Logout;
