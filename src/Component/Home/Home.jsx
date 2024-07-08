import React, { useRef } from "react";
import "./Home.css";
import homeimg from "../Assets/homeimg.png";
import { FaInstagramSquare, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products'); 
  };
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.clientWidth;
    }
  };

  return (
    <div className="home">
      <div className="home1">
        <div className="headingdiv">
          <div className="heading">
            <h1>
              BECAUSE <br />
              BEING{" "}
              <span style={{ fontWeight: "bold", color: "rgb(211, 10, 121)" }}>
                STYLISH
              </span>
              <br />
              NEVER SUCKS
            </h1>
          </div>
          <div className="btn" onClick={handleClick}>GET STARTED & BUY FROM FASHIONISTA</div>
        </div>

        <div className="imgdiv">
          <img src={homeimg} alt="Home Image" />
        </div>
      </div>

      <div className="Arrival">
        <h3>New Arrivals</h3>
        <div className="latestimg" ref={containerRef}>
         
        <img
            src={
              "https://m.media-amazon.com/images/I/711AatnujVL._AC_UL480_FMwebp_QL65_.jpg"
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
            <img
            src={
              "https://m.media-amazon.com/images/I/71E5GSrmRAL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
            <img
            src={
              "https://m.media-amazon.com/images/I/51RgKA1pC1L._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
            <img
            src={
              "https://m.media-amazon.com/images/I/61Pu5bS4zYL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
            <img
            src={
              "https://m.media-amazon.com/images/I/81KpE2l+ehL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
            <img
            src={
              "https://m.media-amazon.com/images/I/61mRmbJ-j3L._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
        </div>
      </div>

      <div className="Arrival">
        <h3>Trending Collections</h3>
        <div class="latestimg">
        <img
            src={
              "https://m.media-amazon.com/images/I/71ZqIMS9USL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71ZqIMS9USL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/812Q0bMv7WL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71mRYklHcjL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          <img
            src={
              "https://m.media-amazon.com/images/I/71EW3oNFprL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
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
              "https://m.media-amazon.com/images/I/812Q0bMv7WL._AC_UL480_FMwebp_QL65_.jpg"
            }
          ></img>
          
        </div>
      </div>

      <div className="Arrival">
        <h3>Shop By Categories</h3>
        <div className="latestimg">
          <img
            src={
              "https://m.media-amazon.com/images/I/61wyfIo5XvL._AC_UL480_FMwebp_QL65_.jpg"
            }
            alt="Category 1"
          />
          <img
            src={
              "https://m.media-amazon.com/images/I/712naEHTSUL._AC_UL480_FMwebp_QL65_.jpg"
            }
            alt="Category 1"
          />
          <img
            src={
              "https://m.media-amazon.com/images/I/51qqv3viQ+L._AC_UL480_FMwebp_QL65_.jpg"
            }
            alt="Category 1"
          />
          <img
            src={
              "https://m.media-amazon.com/images/I/71-mU6d7lmL._AC_UL480_FMwebp_QL65_.jpg"
            }
            alt="Category 1"
          />
          <img
            src={
              "https://m.media-amazon.com/images/I/51byp5tQ86L._AC_UL480_FMwebp_QL65_.jpg"
            }
            alt="Category 1"
          />
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
          <FaInstagramSquare />
          <FaYoutubeSquare />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Home;
