import React from "react";

function Features() {
    return (
        <section id="features">
            <div class="container">
                <div class="row">
                    <div className="section-text">
                        <div className="section-text__title">Features</div>

                        <div className="row">
                            <div className="feature-box col-50">
                                <div className="section-text__title-small">Interactive Map</div>
                                <div className="section-text__desc">
                                    Provide Description. Also want to put an image/preview to the left.
                                </div>
                            </div>

                            <div className="feature-box col-50">
                                <div className="section-text__title-small">
                                    In-Season Suggestions
                                </div>
                                <div className="section-text__desc">
                                    Provide Description.
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="feature-box col-50">
                                <div className="section-text__title-small">
                                    AI Suggest/Generated Recipes?
                                </div>
                                <div className="section-text__desc">
                                    We still doing this? Maximizes the use of your ingredients to ensure all your ingredients are fresh while they're fresh.
                                </div>
                            </div>

                            <div className="feature-box col-50">
                                <div className="section-text__title-small">Locally Sourced Produce</div>
                                <div className="section-text__desc">
                                    Provide Description.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
