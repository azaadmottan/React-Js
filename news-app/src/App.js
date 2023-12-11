import React, { Component } from 'react';
import News from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


export default class App extends Component {
  pageSize = 8;
  render() {
    
    return (
      <>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home key="/" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            {/* <Route exact path="/topHeadlines" element={<News key="topHeadlines" pageSize={this.pageSize} country="in" category="topHeadlines" />} /> */}
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}


