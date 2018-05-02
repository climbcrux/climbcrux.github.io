import React from 'react';


export const MEMBERSHIP_ON_SALE = false;


export const LEVELS = {
  hardship: {
    price: "$35",
    sale: "$35",
    name: "Student / Hardship",
    className: "muted",
    perks: (
      <ul>
        <li>Everything included in <strong>Standard</strong></li>
        <li>For students, as well as those experiencing financial hardship due
        to unemployment, disability, etc.</li>
      </ul>
    )
  },
  standard: {
    price: "$50",
    sale: "$40",
    name: "Standard",
    perks: (
      <ul>
        <li>Exclusive access to CRUX social outings and member events</li>
        <li>Access to CRUX outdoor programming, including specially priced
        outdoor education classes through the EMS School</li>
        <li>Discounted day passes during CRUX nights</li>
        <li>Free belay class at The Cliffs LIC during CRUX nights</li>
        <li>50% off Sport Lead Basic class at The Cliffs LIC</li>
      </ul>
    ),
  },
  silver: {
    price: "$100",
    sale: "$90",
    name: "Silver",
    perks: (
      <ul>
        <li><i>all the above plus</i></li>
        <li>Special <strong>Thank You</strong> on CRUX website</li>
        <li>Premium member exclusive swag</li>
      </ul>
    ),
  },
  gold: {
    price: "$250",
    sale: "$240",
    name: "Gold",
    perks: (
      <ul>
        <li><i>all the above plus</i></li>
        <li>Free admission to CRUX annual holiday party</li>
      </ul>
    ),
  },
  platinum: {
    price: "$500",
    sale: "$490",
    name: "Platinum",
    perks: (
      <ul>
        <li><i>all the above plus</i></li>
      </ul>
    ),
  },
};
