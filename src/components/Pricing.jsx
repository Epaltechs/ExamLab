import React from "react";
import { Box } from "@mui/system";

import rectangle from "../../src/assets/rectangle.png";
import { pricingData } from "../utils/constant";

const Pricing = () => {
  return (
    <>
      <section id="pricing">
        <Box className="pricing-header">
          <h3 style={{ textAlign: "center" }}>
            Our Pricing Plan{" "}
            <img
              src={rectangle}
              alt=""
              style={{ display: "block", margin: "auto", marginTop: "-1px" }}
              width="140px"
              height="3px"
            />
          </h3>
          <p className="choose-plan-content">
            Choose a plan that suits your wants and works for you.
          </p>
          <p style={{ textAlign: "center" }}>Cancel anytime, anywhere.</p>
        </Box>
        <div className="pricing-listing">
          {pricingData &&
            pricingData.map((pricing) => {
              const { id, title, price, paymentRange, features, button } =
                pricing;
              return (
                <div className="card-body" key={id}>
                  <div className="packages">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                      {price}
                      <span className="payment-range">{paymentRange}</span>
                    </p>
                    <ul className="pricing-list">
                      {features.map((feature) => {
                        const { id, icon, text } = feature;
                        return (
                          <li className="list-item" key={id}>
                            <span className="list-icon">{icon}</span>
                            <p className="list-text">{text}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button className="button_card">{button}</button>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
