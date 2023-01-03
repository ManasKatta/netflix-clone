import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Video from "./pages/Video";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/watch/:videoKey" element={<Video />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
