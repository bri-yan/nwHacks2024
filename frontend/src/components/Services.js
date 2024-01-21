import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How It Works!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__text-container">
              <div className="section-text__title-small">Sign Up</div>
              <div className="section-text__desc">
                Quickly get started with our effortless sign up process and fill out the information form so we can immediately start finding farms near you. 
              </div>
              <a href="#Signup" className="signup-btn">     {/*make this button do something*/}
                Sign up
              </a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__text-container">
              <div className="section-text__title-small">Build You're Delivery Package</div>
              <div className="section-text__desc">
                Easily search for farms near you and browse their food items using our Interactive Map. Build the perfect box for you with fresh, local ingredients.
              </div>
              <a href="/" className="map-btn">     {/*make this button do something*/}
                See our map
              </a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__text-container">
              <div className="section-text__title-small">Receive Your Weekly Delivery</div>
              <div className="section-text__desc">
                Receive convenient deliveries right at your front door.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__text-container">
              <div className="section-text__title-small">Enjoy!</div>
              <div className="section-text__desc">
                Enjoy Your Fresh, Enviromentally Mindful Food Delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
