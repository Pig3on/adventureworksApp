import { getCurrentUserSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

export function useAuth() {
    const currentUser = useSelector(getCurrentUserSelector);

    return {isLoggedIn: currentUser !== null};
}