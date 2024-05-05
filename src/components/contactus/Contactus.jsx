import React, { Component, useState } from "react";
import "./style.css";

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      invalidFields: [],
      isOpen1: true,
    };

    this.toggleGeneral = this.toggleGeneral.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);

    this.toggleGeneral();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const invalidFields = [];

    if (firstName.trim() === "") {
      invalidFields.push("firstName");
      document.getElementById("firstName").style.backgroundColor = "red";
    } else {
      document.getElementById("firstName").style.backgroundColor = "";
    }
    if (lastName.trim() === "") {
      invalidFields.push("lastName");
      document.getElementById("lastName").style.backgroundColor = "red";
    } else {
      document.getElementById("lastName").style.backgroundColor = "";
    }
    if (email.trim() === "") {
      invalidFields.push("email");
      document.getElementById("email").style.backgroundColor = "red";
    } else {
      document.getElementById("email").style.backgroundColor = "";
    }
    if (phone.trim() === "") {
      invalidFields.push("phone");
      document.getElementById("phone").style.backgroundColor = "red";
    } else {
      document.getElementById("phone").style.backgroundColor = "";
    }

    if (invalidFields.length > 0) {
      this.setState({ formSubmitted: true, invalidFields });
    } else {
      console.log("Form submitted!");
      // Очищаем значения полей ввода
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      this.setState({
        formSubmitted: true,
        invalidFields: [],
      });
    }
  };

  togglePanel1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
  };

  togglePanel2 = () => {
    this.setState({ isOpen2: !this.state.isOpen2 });
  };

  togglePanel3 = () => {
    this.setState({ isOpen3: !this.state.isOpen3 });
  };
  togglePanel4 = () => {
    this.setState({ isOpen4: !this.state.isOpen4 });
  };

  togglePanel5 = () => {
    this.setState({ isOpen5: !this.state.isOpen5 });
  };

  togglePanel6 = () => {
    this.setState({ isOpen6: !this.state.isOpen6 });
  };
  toggleGeneral = () => {
    const generalElement = document.getElementById("general");
    const settingsElement = document.getElementById("setting");
    const general_btn = document.getElementById("general_btn");
    const setting_btn = document.getElementById("setting_btn");
    if (generalElement && settingsElement) {
      generalElement.style.display = "block";
      settingsElement.style.display = "none";
      general_btn.style.color = "rgb(136, 88, 237)";
      setting_btn.style.color = "white";
    }
  };

  toggleSettings = () => {
    const generalElement = document.getElementById("general");
    const settingsElement = document.getElementById("setting");
    const general_btn = document.getElementById("general_btn");
    const setting_btn = document.getElementById("setting_btn");
    if (generalElement && settingsElement) {
      settingsElement.style.display = "block";
      generalElement.style.display = "none";
      setting_btn.style.color = "rgb(136, 88, 237)";
      general_btn.style.color = "white";
    }
  };

  render() {
    return (
      <>
        <div className="contactus">
          <div className="hand">
            <h1>NEED A HAND?</h1>
            <h3>Contact Us</h3>
            <p>info@mysite.com</p>
            <p>
              500 Terry Francine Street San <br />
              Francisco, CA 94158
            </p>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24299.333987850925!2d49.86014924317964!3d40.42176992843506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e0!3m2!1sru!2saz!4v1711054191885!5m2!1sru!2saz"
                allowFullScreen=""
                width={500}
                height={300}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-names">
                <div>
                  <label htmlFor="firstname">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    className={
                      this.state.formSubmitted &&
                      this.state.invalidFields.includes("firstName")
                        ? "invalid"
                        : ""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    className={
                      this.state.formSubmitted &&
                      this.state.invalidFields.includes("lastName")
                        ? "invalid"
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="email-phone">
                <div>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className={
                      this.state.formSubmitted &&
                      this.state.invalidFields.includes("email")
                        ? "invalid"
                        : ""
                    }
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" />
                </div>
              </div>
              <div className="message">
                <label htmlFor="message">Leave us a message</label>
                <textarea type="text" id="message" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="frequently">
          <div className="question">
            <h1>Frequently Asked Question</h1>

            <div class="input-group">
              <div class="form-outline" data-mdb-input-init>
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Frequently asked questions"
                />

                {/* <label class="form-label" for="form1">
                  Search
                </label> */}
              </div>
            </div>
            <div className="btn-group">
              <button id="general_btn" onClick={this.toggleGeneral}>
                General
              </button>
              <button id="setting_btn" onClick={this.toggleSettings}>
                Setting up FAQs
              </button>
            </div>
            <div className="general" id="general">
              <div>
                <button onClick={this.togglePanel1}>
                  What is an FAQ section?
                </button>
                {this.state.isOpen1 && (
                  <div>
                    <p>
                      An FAQ section can be used to quickly answer common
                      questions about your business like "Where do you ship
                      to?", "What are your opening hours?", or "How can I book a
                      service?".
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
                {/* {this.state.isOpen1 && <hr />} */}
              </div>
              <hr />
              <div>
                <button onClick={this.togglePanel2}>Why do FAQs matter?</button>

                {this.state.isOpen2 && (
                  <div>
                    <p>
                      FAQs are a great way to help site visitors find quick
                      answers to common questions about your business and create
                      a better navigation experience?
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
                {/* {this.state.isOpen2 && <hr />} */}
              </div>
              <hr />
              <div>
                <button onClick={this.togglePanel3}>
                  Where can I add my FAQs?
                </button>
                {this.state.isOpen3 && (
                  <div>
                    <p>
                      FAQs can be added to any page on your site or to your Wix
                      mobile app, giving access to members on the go.
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
                {/* {this.state.isOpen3 && <hr />} */}
              </div>
              <hr />
            </div>
            <div className="setting" id="setting" style={{ display: "none" }}>
              <div>
                <button onClick={this.togglePanel4}>
                  How do I add a new question & answer?
                </button>
                {this.state.isOpen4 && (
                  <div>
                    <p>
                      To add a new FAQ follow these steps: 1. Manage FAQs from
                      your site dashboard or in the Editor 2. Add a new question
                      & answer 3. Assign your FAQ to a category 4. Save and
                      publish. You can always come back and edit your FAQs..
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
              </div>
              <hr />
              <div>
                <button onClick={this.togglePanel5}>
                  Can I insert an image, video, or GIF in my FAQ?
                </button>

                {this.state.isOpen5 && (
                  <div>
                    <p>
                      Yes. To add media follow these steps: 1. Manage FAQs from
                      your site dashboard or in the Editor 2. Create a new FAQ
                      or edit an existing one 3. From the answer text box click
                      on the video, image or GIF icon
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
              </div>
              <hr />
              <div>
                <button onClick={this.togglePanel6}>
                  How do I edit or remove the 'Frequently Asked Questions'
                  title?
                </button>
                {this.state.isOpen6 && (
                  <div>
                    <p>
                      You can edit the title from the FAQ 'Settings' tab in the
                      Editor. To remove the title from your mobile app go to the
                      'Site & App' tab in your Owner's app and customize.
                    </p>
                    {/* <div className="img-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/2703/2703978.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;
