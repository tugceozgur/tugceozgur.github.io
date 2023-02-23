import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Button from "./components/Button"
import Rectangle from "./components/Rectangle"
import AboutBox from "./components/AboutBox"
import About from "./components/About"
import RectangleFooter from "./components/RectangleFooter"


export default function Card() {
    return (
        <div className="container">
            <Header />
            <Rectangle />
            <Button />
            <Body />
            <AboutBox />
            <About />
            <RectangleFooter />
            <Footer />
        </div>

    )
}