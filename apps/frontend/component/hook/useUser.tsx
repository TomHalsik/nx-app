import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { UserState } from "../redux/user/userStore";

const useUser = (): UserState | null | undefined => {
  const user: {
    payload?: UserState;
    type?: string;
  } = useSelector((state: RootState) => state.userStore.value);
  return user ? user.payload : null;
};

export default useUser;
