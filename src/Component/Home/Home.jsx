import React from "react";
import "./Home.css";
import homeimg from "../Assets/homeimg.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div class="home">
      <div class="home1">
        <div class="heading">
          <h1>
            BECAUSE <br />
            BEING{" "}
            <span style={{ fontWeight: "bold", color: "rgb(211, 10, 121)" }}>
              STYLISH
            </span>
            <br />
            NEVER SUCKS
          </h1>
          <div className="btn">GET STARTED & BUY FROM FASHIONISTA</div>
        </div>

        <div className="imgdiv">
          <img src={homeimg}></img>
        </div>
      </div>

      <div className="Arrival">
        <h3>New Arrivals</h3>
        <div class="latestimg">
          <img
            src={
              "https://m.media-amazon.com/images/I/61VdudS+wBL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71kE75JMKjL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71NR4MwqkjL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/81boXIR+s3L._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
        </div>
      </div>

      <div className="Arrival">
        <h3>Trending Collections</h3>
        <div class="latestimg">
          <img
            src={
              "https://m.media-amazon.com/images/I/612pnIERmkL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/61tkDZYbVbL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/51O600pRw+L._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71ZqIMS9USL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
        </div>
      </div>

      <div className="Arrival">
        <h3>Shop By Categories</h3>
        <div class="latestimg">
          <img
            src={
              "https://m.media-amazon.com/images/I/61wyfIo5XvL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71tF9O0WgwL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/51ndJwiUnoL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71IA8O5waeL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
        </div>
      </div>

      <div className="About">
        <h3>About us</h3>
        <div>
          Welcome to Fashionista, your ultimate destination for stylish clothing
          that empowers you to express yourself confidently. We believe that
          style is more than just what you wear—it's a reflection of your
          personality, creativity, and individuality. At Fashionista, we curate
          the latest trends and timeless classics to offer you a diverse
          collection that suits every occasion and mood. Whether you're dressing
          up for a special event or looking for everyday essentials, our
          carefully selected range ensures you'll find something that resonates
          with your unique style. Our mission is simple: to inspire and empower
          you to embrace your inner fashionista. Because we believe that being
          stylish is not just about following trends—it's about celebrating who
          you are, one outfit at a time. Join us on this stylish journey where
          being fashionable never sucks!
        </div>
        <div className="ico">
        <FaSquareInstagram />
        <FaYoutube />
        <FaLinkedin />

        </div>
        
      </div>
    </div>
  );
};

export default Home;

