import { STATES } from './states';

export const schema = {
  title: "Membership Form",
  type: "object",
  properties: {
    name: { type: "string" },
    pronoun: { type: "string" },
    email: { type: "email" },
    phone: { type: "tel" },

    // Address
    address: { type: "string" },
    city: { type: "string" },
    state: { type: "string", enum: STATES},
    zip: { type: "string" },

    // Emergency Contact Info
    contact_name: { type: "string" },
    contact_phone: { type: "string" },
    contact_relation: { type: "string" },

    // Waiver Agreed To
    waived: { type: "boolean", default: false },
  },
  required: [
    "name",
    "email",
    "address",
    "city",
    "state",
    "zip",
  ]
};
