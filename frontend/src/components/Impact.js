import React from "react";

function Impact() {
    return (
        <section id="impact">
            <div class="container">
                <div class="row">
                    <div className="section-text">
                        <div className="section-text__title">Our Goal</div>
                            <div className="impact-text__desc">
                                Our website is committed to addressing many of the environmental concerns associated with the agriculture industry by prioritizing locally sourced and in-season foods.
                            </div>

                            <div
                                style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                            >
                                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

                                <div>
                                    <p style={{width: '70px', textAlign: 'center'}}>
                                        <img width="48" height="48" src="https://img.icons8.com/color-glass/48/co2.png" alt="co2"/>
                                    </p>
                                </div>

                                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                            </div>
                            <div className="impact-text__title-small">
                                Reduce CO2 Emissions
                            </div>
                            <div className="impact-text__desc">
                                Did you know that transporting food over extensive distances significantly contributes to elevated carbon dioxide emissions. However, the degree of pollution depends on the mode of transport. Airfreight, for instance, generates 50 times more CO2 than sea shipping. Due to the slower pace of sea shipping, the escalating demand for fresh food has led to a reliance on faster, but more environmentally taxing, transportation methods.
                            </div>

                            <div
                                style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                            >
                                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

                                <div>
                                    <p style={{width: '70px', textAlign: 'center'}}>
                                        <img width="50" height="50" src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Food-Waste-hunger-and-food-security-filled-color-icons-papa-vector.png" alt="external-Food-Waste-hunger-and-food-security-filled-color-icons-papa-vector"/>
                                    </p>
                                </div>

                                <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                            </div>
                            <div className="impact-text__title-small">
                                Reduce Food Waste
                            </div>
                            <div className="impact-text__desc">
                                The long distance of food transportation further has an effect on levels of food waste. One contribution is the food expiring as a result of possible failures in the cooling systems during long transportation. There is also an indirect cause. The constant availability of foods (often transported from all over the world) leads to a sense of abundance, leading to lower attention to timely consumption. However, this does not need to be the case as Homegrown is able to provide that same abundance from local suppliers.
                            </div>
                            <div className="impact-text__desc">
                                Our goal is to minimize, if not entirely eliminate, the adverse environmental impacts associated with global food transportation.
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Impact;
