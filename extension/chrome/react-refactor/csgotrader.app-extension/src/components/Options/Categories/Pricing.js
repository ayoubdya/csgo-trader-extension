/* global currencies */
// Currencies comes from enums.js
import React, { Fragment } from "react";

import Category from "../Category/Category";
import Row from "../Row";

const pricing = () => {
  const transformCurrencies = () => {
    const transformedCurrencies = [];
    for (const currency in currencies) {
      transformedCurrencies.push({
        key: currencies[currency].short,
        text: `${currencies[currency].short} - ${currencies[currency].long}`
      });
    }

    return transformedCurrencies;
  };
  return (
    <Category
      title="Pricing"
      subTitle={
        <Fragment>
          <span className="countdown">DISCLAIMER:</span> No pricing provider is
          100% accurate all the time. Take these prices as advisory, always with
          a pinch of salt. You should not rely on them solely when doing your
          trades.
        </Fragment>
      }
    >
      <Row
        name="Pricing"
        type="flipSwitchStorage"
        id="itemPricing"
        description="Shows item prices in inventories and trade offers"
      />
      <Row
        name="Currency"
        type="select"
        id="currency"
        description="The currency you want prices to show in for you"
        options={transformCurrencies()}
      />
    </Category>
  );
};

export default pricing;
