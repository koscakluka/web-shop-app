import React from "react";
import { CheckoutForm } from "../components/CheckoutForm/CheckoutForm";

const useMultiPageForm = () => {
  const [formValues, setFormValues] = React.useState({});

  const formElements = React.useRef({});
  const addElementToRef = (key, el) => {
    formElements.current[key] = el;
  };

  const updateFormValues = () => {
    const newFormValues = Object.entries(formElements.current)
      .filter(([key, value]) => value)
      .map(([key, value]) => [
        key,
        value.type === "checkbox" ? value.checked : value.value,
      ]);
    setFormValues((formValues) =>
      Object.assign({}, formValues, Object.fromEntries(newFormValues))
    );
  };

  const getFormPage = (page) => {
    if (page < 1 || page > formFields.length) {
      return undefined;
    }

    return (
      <CheckoutForm
        formFields={formFields[page - 1]}
        formValues={formValues}
        page={page}
        elementsRegistration={addElementToRef}
      />
    );
  };

  return [formValues, updateFormValues, getFormPage];
};

const formFields = [
  {
    "First Name": {
      type: "text",
      split: true,
      required: true,
    },
    "Last Name": {
      type: "text",
      split: true,
      required: true,
    },
    "Address Line 1": {
      type: "text",
      split: false,
      required: true,
    },
    "Address Line 2": {
      type: "text",
      split: false,
      required: false,
    },
    City: {
      type: "text",
      split: true,
      required: true,
    },
    "State/Province/Region": {
      type: "text",
      split: true,
    },
    "Zip / Postal code": {
      type: "number",
      split: true,
      required: true,
    },
    Country: {
      type: "text",
      split: true,
      required: true,
    },
    "Use this address for payment details": {
      type: "checkbox",
      split: false,
      required: false,
      checked: true,
    },
  },
  {
    "Name on card": {
      type: "text",
      split: true,
      required: true,
    },
    "Card number": {
      type: "text",
      split: true,
      required: true,
    },
    "Expiry date": {
      type: "text",
      split: true,
      required: true,
    },
    CVV: {
      type: "text",
      split: true,
      required: true,
      help: "Last three digits on signature strip",
    },

    "Remember credit card details for next time": {
      type: "checkbox",
      split: false,
      required: false,
      checked: false,
    },
  },
];

export default useMultiPageForm;
