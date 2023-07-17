import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to="the-wild-oasis/dashboard" />}
            />
            <Route path="the-wild-oasis/dashboard" element={<Dashboard />} />
            <Route path="the-wild-oasis/bookings" element={<Bookings />} />
            <Route path="the-wild-oasis/cabins" element={<Cabins />} />
            <Route path="the-wild-oasis/users" element={<Users />} />
            <Route path="the-wild-oasis/settings" element={<Settings />} />
            <Route path="the-wild-oasis/account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
