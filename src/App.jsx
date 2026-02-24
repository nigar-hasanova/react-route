import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import Campaigns from "./pages/Campaigns";
import CardDetailes from "./pages/CardDetailes";

export default function App() {
  return (
    <>
      <Router>
        < Header />
        <Routes>
          <Route path="/" element={<Home />} />
          < Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="*" element={<Error />} />
          <Route path="/cardDetailes" element={<CardDetailes />} />
        </Routes>
      </Router>
    </>
  )
}
