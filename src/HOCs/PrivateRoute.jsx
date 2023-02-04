// import { useSelector } from "react-redux";
// import { selectToken } from "redux/auth/auth-selectors";
// import { Navigate } from "react-router-dom";

// export const PrivateRoute = ({ children }) => {
//     const token = useSelector(selectToken)
//     return token ? children : <Navigate to = '/login' />
// }



// import { useAuth } from "redux/filter/hooks/useAuth";
// import { Navigate } from "react-router-dom";


// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn,selectIsFetchingCurrentUser } from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};