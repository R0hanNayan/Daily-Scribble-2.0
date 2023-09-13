import React from "react";
import './home.css';

function Home() {
    return (
        <div className="Home">

            <div className="Home-content">
                <div className="Home-img">
                    <img id="homeImg1" src="./assets/home.jpg" />
                </div>
                <div className="Home-intro">
                    <h1 id="homeTitle">Home</h1>
                    <img id="homeImg2" src="./assets/home2.jpg" />
                    <p id="homeIntro">Welcome to The Daily Scribble, where words come alive! We're a blog that's dedicated to bringing you daily doses of inspiration, insights, and ideas. Our mission is to provide you with a space to explore your creativity, cultivate your writing skills, and share your thoughts with the world. Whether you're a seasoned writer or a beginner, we believe that everyone has a story to tell and a unique perspective to share. So, join us on this journey of self-discovery and expression, and let your imagination run wild!</p>
                </div>
            </div>
        </div>
    )
}
export default Home;