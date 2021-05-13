import React from "react";
import FeaturePanel from "./featurepanel";
import Footer from "./footer";
import Header from "./header";
import HeroPanel from "./heropanel";
import RegisterPanel from "./registerpanel";

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <HeroPanel/>
                <FeaturePanel/>
                <RegisterPanel/>
            </main>
            <Footer />
        </>
    )
}   

export default HomePage;