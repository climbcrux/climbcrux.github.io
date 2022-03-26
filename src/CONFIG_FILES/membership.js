import React from 'react';


export const COVID_MEMBER_FREEZE = false; // FIXME: Renable before committing
export const MEMBERSHIP_ON_SALE = false;


export const LEVELS = {
  supporter: {
    price: "$30",
    sale: "$30",
    name: "Supporter",
    perks: (
    <div>
      <div>
        For those who want to support the CRUX community and participate
        in community events, but who does not climb or can’t at this time.
      </div>
      <div>
        This level of support is ideal for:
        <ul>
          <li> Non-climbers who belive in CRUX’s mission and want to be an
          ally in the work that we do.
          </li>
          <li>
            Climbers who are injured, taking a break, or climb irregularly and
            do not see themselves taking advantage of events geared toward
            routine climbers.
          </li>
        </ul>
      </div>
    </div>
    ),
  },
  student: {
    price: "$35",
    sale: "$25",
    name: "Student Climber",
    perks: (
      <div>
        Access to all of CRUX’s programming and community but with the
        understanding that students have different financial needs or
        may not be able to regularly attend events.
      </div>
    )
  },
  climber: {
    price: "$50",
    sale: "$40",
    name: "Climber",
    perks: (
      <div>
        <p>
          For climbers who want to make the best out of CRUX programming
          and community events. Includes access to climber only indoor and
          outdoor programming, community events (Pride, beach trips, etc),
          and CRUX exclusive discounts.
        </p>
        <p>Check out the full list of perks for more details</p>
      </div>
    ),
  },
  silver: {
    price: "$100",
    sale: "$90",
    name: "Climber – Silver Level Support",
    perks: (
      <div>
        <p>
          For climbers who want to give more back to the CRUX community,
          help us pursue our mission, and expand our programs.
        </p>
        <p>
          Want to give back in other ways? Consider volunteering. We’re
          always looking for enthusiastic and engaged community members
          who are willing to help out!
        </p>
      </div>
    ),
  },
  gold: {
    price: "$250",
    sale: "$240",
    name: "Climber – Gold Level Support",
    perks: (
      <div>
        <p>
          For climbers who want to give more back to the CRUX community,
          help us pursue our mission, and expand our programs.
        </p>
        <p>
          Want to give back in other ways? Consider volunteering. We’re
          always looking for enthusiastic and engaged community members
          who are willing to help out!
        </p>
      </div>
    ),
  },
};
