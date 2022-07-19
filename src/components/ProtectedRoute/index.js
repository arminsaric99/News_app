import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  // we assume the auth data is stored in local storage
  // we can check it easily, if yes we return the <Route />
  // ...otherwise we re-route to /login again

  const user = localStorage.getItem("UPSTART_USER");
  const jwt = localStorage.getItem("UPSTART_JWT");

  const shouldRedirect = !(user || jwt);
  console.log("[ProtectedRoute]", { shouldRedirect });

  return !shouldRedirect ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
