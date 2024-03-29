import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/footer/footer';
import Footer from './components/footer/footer';
import resumeData from './resumedata/resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        {/* <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
