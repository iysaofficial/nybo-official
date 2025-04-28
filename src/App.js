import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer'
import HomePage from './pages/home/HomePage.jsx'
import NewsPage from "./pages/news/NewsPage.jsx";
import NewsContentPage1 from "./pages/news/NewsContentPage1.jsx";
import ListOfWinnerAllPage from './pages/after event/ListOfWinnerAllPage';
import ListOfWinnerDetail2024Page from './pages/after event/ListOfWinnerDetail2024Page';
import ListOfWinnerDetail2025Page from './pages/after event/ListOfWinnerDetail2025Page';
import GalleryComp from './components/GalleryComp';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        {/* News Start */}
        <Route path='/NewsPage' element={<NewsPage/>}/>
        <Route path='/NewsContentPage1' element={<NewsContentPage1/>}/>
        {/* News End */}

        <Route path="/ListOfWinnerAllPage" element={<ListOfWinnerAllPage/>} />
        <Route path="/ListOfWinnerDetail2024Page" element={<ListOfWinnerDetail2024Page/>} />  
        <Route path="/ListOfWinnerDetail2025Page" element={<ListOfWinnerDetail2025Page/>} />  
      </Routes>
    </Router>
    {/* <br></br>
    <br></br>
    <br></br>
    <br></br>
    <GalleryComp></GalleryComp>
    <br></br>
    <br></br>
    <br></br>
    <br></br> */}
    <Footer></Footer>
    </>
  );
}

export default App;
