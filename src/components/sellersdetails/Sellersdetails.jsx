import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import star from "../../images/star.png";
import star2 from "../../images/star2.png";
import like from "../../images/like.png";
import reply from "../../images/reply.png";
import dots from "../../images/dots.png";
import Mightall from "../mightall/Mightall";

function Sellersdetails(props) {
  const { sellers } = props;
  const { index } = useParams();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const sellersIndex = parseInt(index);

  const selectedProduct = sellers[sellersIndex]; // Исправлено имя переменной

  const togglePanel1 = () => {
    setIsOpen1(!isOpen1);
  };
  const togglePanel2 = () => {
    setIsOpen2(!isOpen2);
  };
  const togglePanel3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <>
      <div className="productdetails">
        <div className="img-info-flex">
          <div className="img-container">
            <img src={selectedProduct.img_url} alt="" />
            <p>
              I'm a product description. This is a great place to "sell" your
              product and grab buyers' attention. Describe your product clearly
              and concisely. Use unique keywords. Write your own description
              instead of using manufacturers' copy.
            </p>
          </div>
          <div className="info-container">
            <h1>{selectedProduct.name}</h1>

            <div className="star-flex">
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star2} alt="" />
              </div>
              <div>
                <p>4.6| 10 reviews</p>
              </div>
            </div>
            <h4> {selectedProduct.price}</h4>
            <h5>Quantity</h5>
            <input type="number" placeholder="1" min={1} />
            <div className="add-buy">
              <button id="addbtn">Add to cart</button>

              <button id="buybtn">Buy now</button>
            </div>
            <div className="product-info">
              <div>
                <button onClick={togglePanel1}>Product Info</button>
                {isOpen1 && (
                  <div>
                    <p>
                      I'm a product detail. I'm a great place to add more
                      information about your product such as sizing, material,
                      care and cleaning instructions. This is also a great space
                      to write what makes this product special and how your
                      customers can benefit from this item. Buyers like to know
                      what they’re getting before they purchase, so give them as
                      much information as possible so they can buy with
                      confidence and certainty.
                    </p>
                  </div>
                )}
              </div>
              <hr />
              <div>
                <button onClick={togglePanel2}>Return and Refund Policy</button>
                {isOpen2 && (
                  <div>
                    <p>
                      I’m a Return and Refund policy. I’m a great place to let
                      your customers know what to do in case they are
                      dissatisfied with their purchase. Having a straightforward
                      refund or exchange policy is a great way to build trust
                      and reassure your customers that they can buy with
                      confidence.
                    </p>
                  </div>
                )}
              </div>
              <hr />
              <div>
                <button onClick={togglePanel3}>Shipping Info</button>
                {isOpen3 && (
                  <div>
                    <p>
                      I'm a shipping policy. I'm a great place to add more
                      information about your shipping methods, packaging and
                      cost. Providing straightforward information about your
                      shipping policy is a great way to build trust and reassure
                      your customers that they can buy from you with confidence.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="selectors">
          <p> Filter by rating: </p>
          <select>
            <option value="All stars">All stars</option>
            <option value="5 stars">5 stars</option>
            <option value="4 stars">4 stars</option>
            <option value="3 stars">3 stars</option>
            <option value="2 stars">2 stars</option>
            <option value="1 star">1 star</option>
          </select>
          <p> Sort by: </p>
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Most helpful">Most helpful</option>
            <option value="Highest rated">Highest rated</option>
            <option value="Lowest rated">Lowest rated</option>
          </select>
        </div>
        <h6>7 reviews</h6>
        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Dan Terez • June 12, 2024</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star2} alt="" />
          <img src={star2} alt="" />

          <h3>Amazing product</h3>
          <p>
            This product is amazing. I bought it twice already and honestly it's
            a game changer, especially for its value. I used to get something
            similar from larger retail stores but it was just overpriced and the
            quality was average. No thanks! I'll get something way cheaper and
            higher quality from sites like these, thank you very much. Highly
            recommend this to everyone!
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Todd Boward • Apr 22, 2022</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star2} alt="" />

          <h3>Julia is awesome</h3>
          <p>
            I don't leave a lot of reviews but I just had to for this store
            because I'm just so impressed! Julia is one of their sales agents
            and she was so helpful and knowledgeable through the entire shopping
            experience (which was awesome). I chatted with her after 8 pm and
            she walked me through all the possible options, was eager to
            understand my needs and suggested the best product. I look forward
            to a smooth delivery!
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Dennis Hathaway • March 22, 2022</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <h3>Negative reviews are over critical</h3>
          <p>
            Great quality, beautifully built and easy to use! I think a lot of
            the lower reviews are harsh. Experienced no problems mentioned by
            other reviewers. It is a bit expensive, but what you get is well
            worth the price. Wanted to try different colors but decided to go
            with white - was not disappointed at all!
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Annie Lee • Apr 22, 2022</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <h3>Lovely product</h3>
          <p>
            Excellent seller (not my first purchase), fast delivery, product as
            described and glad to see they reduced their packaging amounts!
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Ava Howard • Apr 25, 2022</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <h3>Highly recommend</h3>
          <p>
            The online shopping experience was very easy and smooth. I was a bit
            hesitant if this is right for me. Though there is a lot of relevant
            information on their site I still wanted to double-check some
            product specs, like the material and dimensions. Their agents were
            so professional, attentive and provided very accurate information.
            Overall, I am quite satisfied with their quality.
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>

        <hr />
        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Todd Boward • May 27, 2023</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />

          <h3>Great present</h3>
          <p>
            Very good quality for its price. Got this as a gift for my nan, she
            loved it! Will definitely keep this site in mind when gift shopping
            the next time.
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="review">
          <div className="dots">
            <img src={dots} alt="" />
          </div>
          <h4>Ingrid Brown • May 17, 2021</h4>

          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star2} alt="" />
          <img src={star2} alt="" />
          <img src={star2} alt="" />

          <h3>Too pricey</h3>
          <p>
            Was not impressed with the quality at this price range. The delivery
            came on time, but the packaging was cheap and everything inside was
            shaken. Definitely not worth the price tag!
          </p>

          <div>
            <h6>Was this helpful?</h6>
            <div className="review-yes">
              <img src={like} alt="" />
              <p>Yes</p>
            </div>
            <div className="review-no">
              <img src={reply} alt="" />
              <p>Reply</p>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <Mightall />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    sellers: state.sellers,
  };
};

export default connect(mapStateToProps)(Sellersdetails);
