import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Banner from "./Components/Banner";
import dummyText from "./dummyText";
import YandexMap from "./Components/YandexMap";
import Card from "./Components/Card";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <YandexMap id="section6" />
        <div id="section1" className="wrap">
          <Card label="Hellow" text=" Hello World" />
          <Card label="Hellow" text=" Hello World" />
          <Card label="Hellow" text=" Hello World" />
        </div>
        <Section
          title="Автопарк"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Грузчики"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="О Нас"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Контакты"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
