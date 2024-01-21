import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          How it works!
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="phone-portrait-outline" />    {/* Replace with images or smth */}
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Sign Up</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="people-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Build You're Delivery Package Using The Interactive Map</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Enjoy Your Fresh, Enviromentally Mindful Groceries</div>
              <div className="section-text__desc">
                Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                tempor incididunt ut laborea.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
