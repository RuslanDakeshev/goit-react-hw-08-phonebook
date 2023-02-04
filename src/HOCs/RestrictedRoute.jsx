// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/auth-selectors';
// import { Navigate } from 'react-router-dom';

// export const PublicRoute = ({ children, restricted = false }) => {
//   const token = useSelector(selectToken);
//   const shouldRedirect = token && restricted;
//   return shouldRedirect ? <Navigate to="/" /> : children;
// };



// import { useAuth } from "redux/filter/hooks/useAuth";
// import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
