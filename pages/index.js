import React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Publications from "../components/Publications";
import News from "../components/News";
import Members from "../components/Members";

const Index = () => (
  <div>
    <Header />
    <Banner />
    <Publications />
    <News />
    <Members />
  </div>
);

export default Index;
