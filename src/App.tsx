import Header from "./components/Header";
import About from "./components/About";
import Video from "./components/Video";
import Service from "./components/Service";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <About />
      <Video />
      <Service />
      <Team />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<Video />}></Route>
          <Route path="/services" element={<Service />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
