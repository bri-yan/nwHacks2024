import React from "react";

function Banner() {
  return (
    <section id="home">
        <div class="container">
            <div class="row">
                <div className="home-text">
                    <div className="section-text__subtitle">Shop Local, Savor Fresh</div>
                    <div className="section-text__title-big">
                        Bringing Homegrown Goodness Straight to Your Door!
                    </div>
                    <div className="section-text__body">
                        Buying local has never been easier! Welcome to Homegrown, your gateway to fresh, locally sourced groceries delivered to your doorstep every week. Our goal is to foster and promote sustainable practice. Join us as we connect you with the finest produce from nearby farms, ensuring a weekly delivery of sustainably sourced goodness. Support local agriculture and simplify your grocery experience with us.
                    </div>
                    <a href="#Signup" className="signup-btn">     {/*make this button do something*/}
                        Sign up
                    </a>
                </div>
            </div>

            <div class="row">
                <div className="section-image">
                    <img src="./images/banner.png" alt="Banner" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;