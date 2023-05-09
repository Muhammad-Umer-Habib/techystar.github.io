import React from 'react'
// import vg from '../assets/2.jpg'
import vg1 from '../assets/2.webp'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"


const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solutions to all tech problems</p>
                </main>
            </div>

            <div className="home2">
                {/* <img src={vg} alt="VectorGraphics" /> */}
                <img src={vg1} alt="VectorGraphics" />

                <div>
                    <p>We are your one and only solution to the tech problems you face
                        everyday. We are leading tech company whose aim is to increase
                        the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who are we ?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Dignissimos laudantium asperiores harum non?
                        Corporis dolor praesentium neque,
                        cupiditate ipsa accusantium.</p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}>
                            <AiFillAmazonCircle />
                            <p>Amazaon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}>
                            <AiFillInstagram />
                            <p>Instgram</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>

            </div>


        </>

    )
}

export default Home
