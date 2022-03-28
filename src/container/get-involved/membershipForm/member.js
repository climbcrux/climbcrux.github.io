import { STATES } from './states';

export const AddressForm = {
  type: "object",
  properties: {
    address: {
      type: "string",
      title: "Address"
    },
    city: {
      type: "string",
      title: "City"
    },
    state: {
      type: "string",
      title: "State"
    },
    zip: {
      type: "string",
      title: "Zip Code"
    }
  },
  required: [
    "address",
    "city",
    "state",
    "zip"
  ]
};

export const MemberFormV2 = {
  definitions: {
    "address": AddressForm,
  },
  type: "object",
  properties: {
    membership_info: {
      type: "object",
      properties: {
        level: {
          type: "string"
        },
        price: {
          type: "number"
        }
      }
    },
    personal_information: {
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "Full Name"
        },
        pronoun:{
          type: "string",
          title: "Pronoun"
        },
        email: {
          type: "string",
          title: "Email",
          format: "email"
        },
        phone: {
          type: "string",
          title: "Phone",
          minLength: 10
        },
      },
      required: [
          "name",
          "email"
      ]
    },
    member_address: {
      type: "object",
      $ref: "#/definitions/address"
    },
    emergency_contact: {
      type: "object",
      title: "Emergency Contact",
      properties: {
        contact_name: {
          type: "string",
          title: "Emergency Contact Name"
        },
        contact_phone: {
          type: "string",
          minLength: 10,
          title: "Contact Phone"
        },
        contact_relation: {
          type: "string",
          title: "Contact Relationship"
        },
      },
      required: [
        "contact_name",
        "contact_phone",
        "contact_relation"
      ]
    },
    climbing_info: {
      type: "object",
      properties: {
        climbing_gym: {
          type: "string",
          title: "Climbing Gym",
          description: "Where do you usually climbing?"
        },
        volunteer_interests: {
          type: "array",
          title: "Volunteer Interests",
          description: "Interested in volunteering? Let us know how you'd like to contribute.",
          uniqueItems: true,
          items: {
            type: "string",
            enum: [
              "Indoor Hosting",
              "Outdoor Leads",
              "Outreach & Advocacy",
              "Administrative",
              "Creative"
            ]
          }
        }
      }
    },
    waiver: {
      type: "boolean",
      title: "Agree to Waiver"
    }
  },
  required: [
    "waiver"
  ]
};

export const MemberFormUISchema = {
  membership_info: {
    "ui:widget": "hidden",
  },
  personal_information: {
    "ui:classNames": "halfWidth",
    "ui:title": "Personal Info"
  },
  member_address: {
    "ui:title": null,
    "ui:classNames": "halfWidth"
  },
  emergency_contact: {
    "ui:classNames": "halfWidth",
    "ui:title": "Emergency Contact"
  },
  climbing_info: {
    "ui:title": "Climbing Interests"
  },
  waiver: {
    "ui:widget": "WaiverWidget",
  },
}
