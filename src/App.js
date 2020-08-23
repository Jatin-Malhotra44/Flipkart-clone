import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import CarouselComponent from './components/HomeCarousel/CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from './components/Header2';

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <Router>
        <div className="app">
            <Header2/>
            <Section />
        </div>
        </Router>
      </DataProvider>
    );
  }
}

export default App;
