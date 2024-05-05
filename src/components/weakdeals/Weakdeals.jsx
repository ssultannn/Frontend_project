import React, { useState, useEffect } from "react";
import "./style.css"; // Подключаем стили

function Weakdeals() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 2350) {
      document.getElementById("weakdeal").style.animation =
        "divToLeft 1s ease-out forwards";
      document.getElementById("img1").style.animation =
        "img1ToRight 1s ease-out forwards";
      document.getElementById("img2").style.animation =
        "img2ToRight 1s ease-out forwards";
      document.getElementById("img3").style.animation =
        "img3ToRight 1s ease-out forwards";
    } else {
      document.getElementById("weakdeal").style.animation = "none";
      document.getElementById("img1").style.animation = "none";
      document.getElementById("img2").style.animation = "none";
      document.getElementById("img3").style.animation = "none";
    }
  }, [scrollPosition]);

  return (
    <div className="deals">
      <div id="weakdeal">
        <p>THIS WEEK'S DEALS</p>
        <h1>10%</h1>
        <h4>off all games</h4>
        <button>Shop Now</button>
      </div>

      <div id="img1">
        <img
          src="https://static.wixstatic.com/media/c837a6_f1507c37d4234fe3b6847f4ab805d86d~mv2.jpg/v1/fill/w_582,h_785,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Chronosplit.jpg"
          alt=""
        />
      </div>
      <div id="img2">
        <img
          src="https://static.wixstatic.com/media/c837a6_e93c705ac75d4b1695316ad1e73dafd8~mv2.jpg/v1/fill/w_576,h_785,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dead%20at%20Last.jpg"
          alt=""
        />
      </div>
      <div id="img3">
        <img
          src="https://static.wixstatic.com/media/c837a6_e07b7f0bd83545608cf2cfce23b9b22f~mv2.jpg/v1/crop/x_151,y_74,w_1180,h_1597/fill/w_575,h_779,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kira.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Weakdeals;
