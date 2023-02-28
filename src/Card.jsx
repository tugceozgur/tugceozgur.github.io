import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Rectangle from "./components/Rectangle"
import AboutBox from "./components/AboutBox"
import About from "./components/About"


export default function Card() {

    return (
        <div className="container">
            <Header />
            <Rectangle />
            <Body />
            <AboutBox />
            <About />
            <Footer />
        </div>

    )
}