import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import { Fragment, useEffect, useRef } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import ScrollToTopButton from './Components/ScrollToTop';

function App() {

  const formRef = useRef(null);

  return (
    <Fragment>
      {/* <Routes>
        <Route exact path={"/"} component={Header} /> */}
      {/* <Header />
      <About /> */}
      {/* </Routes> */}
      {/* <Header />
      <About /> */}

      {/* <Header />
      <About />
      <Experience />
      <Contact /> */}

      {/* <Router> */}
      {/* <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">Go to About Page</Link>
          <Link to="/experience">Go to experience Page</Link>
          <Link to="/contact">Go to contact Page</Link>
        </nav> */}


      <BrowserRouter>
        <Routes>


          <Route path="/" element={
            <>
              <Header />
              <About />
              <Experience />
              <Project />
              <Contact />
            </>
          } />
          {/* <Route path="/about" Component={About} />
            <Route path="/experience" Component={Experience} />
            <Route path="/contact" Component={Contact} /> */}
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
      {/* </Router> */}
    </Fragment>
  );
}

export default App;
