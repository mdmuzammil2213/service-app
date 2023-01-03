import React from "react";
import vg from "../assets/2imgg.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>PickupBiz</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are you one and only solution to the tech problems you face every
            day.We are leading tech company whose aim is to increase the
            problems solving ability in children
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            veritatis alias molestias voluptatem esse quae voluptatum neque
            eaque! Nemo ad modi rem, voluptatum iste ea accusantium dolorem
            ducimus dolor.Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nam ipsa veritatis alias molestias voluptatem esse quae
            voluptatum neque eaque! Nemo ad modi rem, voluptatum iste ea
            accusantium dolorem ducimus dolor.Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nam ipsa veritatis alias molestias
            voluptatem esse quae voluptatum neque eaque! Nemo ad modi rem,
            voluptatum iste ea accusantium dolorem ducimus dolor.Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Nam ipsa veritatis
            alias molestias voluptatem esse quae voluptatum neque eaque! Nemo ad
            modi rem, voluptatum iste ea accusantium dolorem ducimus dolor.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <a href="https://www.google.com/">
                <AiFillGoogleCircle />
                <p>Google</p>
              </a>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
