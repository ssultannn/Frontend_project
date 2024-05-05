import logo from "../../images/logo.webp";
import "./style.css";
import visa from "../../images/Visa.webp";
import master from "../../images/Master.webp";
import american from "../../images/American.webp";
import jsb from "../../images/JCB.webp";
import discover from "../../images/Discover.webp";
import union from "../../images/Union.webp";
import diners from "../../images/Diners.webp";
import paypal from "../../images/PayPal.webp";
import tiktok from "../../images/tiktok.webp";
import instagram from "../../images/instagram.webp";
import youtube from "../../images/youtube.webp";
import facebook from "../../images/facebook.webp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-logo">
          <img src={logo} alt="Arcade" />
        </div>
        <div className="footer-products">
          <h3>Products</h3>
          <p>Games</p>
          <p>Console</p>
          <p>Controllers</p>
          <p>Accessories</p>
        </div>
        <div className="footer-store">
          <h3>Store</h3>
          <p>500 Terry Francine Street San Francisco, CA 94158</p>
          <p>Mon - Fri: 9am - 9pm</p>
          <p>info@mysite.com</p>
          <p>123-456-7890</p>
        </div>
        <div className="footer-policy">
          <h3>Policy</h3>
          <p>Terms & Conditions</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>FAQ</p>
        </div>
      </div>
      <hr />
      <div className="payment-community d-flex">
        <div className="footer-payment">
          <h3>Payment Methods</h3>
          <div className="d-flex">
            <img src={visa} alt="" />
            <img src={master} alt="" />
            <img src={american} alt="" />
            <img src={jsb} alt="" />
            <img src={discover} alt="" />
            <img src={union} alt="" />
            <img src={diners} alt="" />
            <img src={paypal} alt="" />
          </div>
        </div>
        <div className="footer-community">
          <h3>Join the Community</h3>
          <div className="d-flex">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
