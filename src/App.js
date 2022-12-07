import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Video from "./pages/Video";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/watch/:videoKey' element={<Video />}/>
      <Route path='/search/:searchTerm' element={<SearchResults />}/>
    </Routes>
      
    </>
  );
}

export default App;
