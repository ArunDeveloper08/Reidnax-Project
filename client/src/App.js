
import LoginPage from "./components/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import UserData from "./components/UserData";

import { useState } from "react";
import BarChart from "./components/BarChart";

const PrivateRoute = ({ isAuth, ...props }) => {
  return isAuth ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />

        <Route path="/barchart" element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/barchart" element={<BarChart />} />
        </Route>
       
        <Route path="/user" element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/user" element={<UserData />} />
        </Route>
     
      </Routes>
    </Router>
  );
}
// }

export default App;
