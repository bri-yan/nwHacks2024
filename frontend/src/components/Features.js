import React from "react";

function Features() {
    return (
        <section id="features">
            <div class="container">
                <div class="row">
                    <div className="section-text">
                        <div className="section-text__title-centered">Features</div>
                        <div className="row">
                            <div className="feature-box col-50">
                                <div className="section-text__title-small">Interactive Map</div>
                                <div className="section-text__desc">
                                    Use our interactive map to easily find and shop from the local farms from the comfort of your own home. See the exact route for your delivery.
                                </div>
                            </div>

                            <div className="feature-box col-50">
                                <div className="section-text__title-small">Locally Sourced Produce</div>
                                <div className="section-text__desc">
                                    Quickly see all the farms near you with the map and select the farm of your choice to see their food products.
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="feature-box col-50">
                                <div className="section-text__title-small">In-Season Suggestions</div>
                                <div className="section-text__desc">
                                    We'll prioritize each farm's selection of in-season food items to add to your delivery.
                                </div>
                            </div>
                        </div>

                        <div className="section-image">
                            <img src="./images/farm-preview.webp" alt="Map" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
