import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Pickem from './components/Pickem';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Subscribe from './components/Subscribe';
// import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="bg-dark-grey text-broxworx-turq font-chakra-petch flex flex-col min-h-screen justify-between">
        <Header />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
