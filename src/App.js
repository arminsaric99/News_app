import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

//pages
import HomePage from "./pages/HomePage";

import Login from "./pages/LoginPage/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/">
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
