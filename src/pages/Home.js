import react, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashbord from "../components/Dashbord";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Dashbord></Dashbord>
            <Footer></Footer>
        </div>
    )
}

export default Home