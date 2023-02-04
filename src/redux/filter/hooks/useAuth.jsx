import { useSelector } from 'react-redux';
import { selectName,selectIsFetchingCurrentUser,selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const user = useSelector(selectName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};