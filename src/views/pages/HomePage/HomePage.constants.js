import * as yup from "yup";

const CHECKOUT_FORM_FIELDS = [
  {
    "First Name": {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    "Last Name": {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    "Address Line 1": {
      type: "text",
      required: true,
      schema: yup.string().required(),
    },
    "Address Line 2": {
      type: "text",
      schema: yup.string(),
    },
    City: {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    "State/Province/Region": {
      type: "text",
      split: true,
      schema: yup.string(),
    },
    "Zip / Postal code": {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    Country: {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    "Use this address for payment details": {
      type: "checkbox",
      checked: true,
      schema: yup.boolean(),
    },
  },
  {
    "Name on card": {
      type: "text",
      split: true,
      required: true,
      schema: yup.string().required(),
    },
    "Card number": {
      type: "text",
      split: true,
      required: true,
      schema: yup
        .string()
        .length(16)
        .matches(/[0-9]{16}/, "Card number must be only digits 0-9")
        .required(),
    },
    "Expiry date": {
      type: "text",
      split: true,
      required: true,
      schema: yup
        .string()
        .matches(
          /(0[1-9]|1[0-2])\/[0-9]{4}/,
          "Expiry date must follow the format MM/YYYY"
        )
        .required(),
    },
    CVV: {
      type: "text",
      split: true,
      required: true,
      help: "Last three digits on signature strip",
      schema: yup
        .string()
        .matches(/[0-9]{3}/, "CVV needs to be a number between 000 and 999")
        .required(),
    },

    "Remember credit card details for next time": {
      type: "checkbox",
      split: false,
      required: false,
      checked: false,
      schema: yup.boolean(),
    },
  },
];

export { CHECKOUT_FORM_FIELDS };
