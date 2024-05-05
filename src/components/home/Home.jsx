import React, { Component } from "react";
import cyber_kid from "../../images/cyber.webp";
import "./style.css";
import Bestsale from "../bestsale/Bestsale";
import Newsletter from "../newsletter/Newsletter";
import Shop from "../shop/Shop";
import Weakdeals from "../weakdeals/Weakdeals";
import Upgrade from "../upgrade/Upgrade";
import Spend from "../spend/Spend";
import Trending from "../trendig/Trending";

class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="homepage">
          <div className="home-bg">
            {/* <img
              src="https://oir.mobi/uploads/posts/2021-03/1616607161_39-p-fioletovo-chernii-fon-44.jpg"

              alt=""
            /> */}
            <img src="https://static.wixstatic.com/media/2c3bc6_00ccbe616559450283af8309688b200b~mv2.jpeg/v1/fill/w_2500,h_1663,al_c/2c3bc6_00ccbe616559450283af8309688b200b~mv2.jpeg" />
          </div>
          <div className="cyber">
            <p>Power up your game</p>
            <h2>CYBER KID INFINITE</h2>
            <p>Now Available on PC & Console</p>
            <button>Buy now</button>
          </div>
          <div className="home-img">
            <img src={cyber_kid} alt="" />
          </div>
        </div>
        {<Bestsale />}
        <Shop />
        <Weakdeals />
        <Upgrade />
        <Spend />
        <Trending />
        <Newsletter />
      </React.Fragment>
    );
  }
}

export default Home;
