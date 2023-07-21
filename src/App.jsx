import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Checkin from "./pages/Checkin";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 100,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
            <Route
              path="the-wild-oasis/bookings/:bookingId"
              element={<Booking />}
            ></Route>
            <Route
              path="the-wild-oasis/checkin/:bookingId"
              element={<Checkin />}
            />

            <Route path="the-wild-oasis/cabins" element={<Cabins />} />
            <Route path="the-wild-oasis/users" element={<Users />} />
            <Route path="the-wild-oasis/settings" element={<Settings />} />
            <Route path="the-wild-oasis/account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
