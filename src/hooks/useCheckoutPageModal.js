import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckoutForm,
  CheckoutFormActions,
} from "../components/CheckoutForm/CheckoutForm";

import {
  CheckoutFormReview,
  CheckoutFormReviewActions,
} from "../components/CheckoutForm/CheckoutFormReview";

const useCheckoutPageModal = (getCart) => {
  //TODO Validation
  const [checkoutPage, setCheckoutPage] = React.useState(1);
  const [formValues, setFormValues] = React.useState({});
  const [open, setOpen] = React.useState(false);

  let formElements = React.useRef({});
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

  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/thank-you");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    updateFormValues();
    setOpen(false);
  };

  const previousPage = () => {
    setCheckoutPage((page) => (page > 1 ? page - 1 : page));
  };

  const nextPage = () => {
    setCheckoutPage((page) => (page < 3 ? page + 1 : page));
  };

  const getPage = (page) => {
    switch (page) {
      case 2:
        return [
          <CheckoutForm
            formFields={PAGE2_FIELDS}
            formValues={formValues}
            page={2}
            elementsRegistration={addElementToRef}
          />,
          <CheckoutFormActions
            nextPage={() => {
              updateFormValues();
              nextPage();
            }}
            previousPage={() => {
              updateFormValues();
              previousPage();
            }}
          />,
        ];
      case 3:
        return [
          <CheckoutFormReview cart={getCart()} formValues={formValues} />,
          <CheckoutFormReviewActions
            submitForm={submitForm}
            previousPage={previousPage}
          />,
        ];
      case 1:
      default:
        return [
          <CheckoutForm
            formFields={PAGE1_FIELDS}
            formValues={formValues}
            page={1}
            elementsRegistration={addElementToRef}
          />,
          <CheckoutFormActions
            nextPage={() => {
              updateFormValues();
              nextPage();
            }}
          />,
        ];
    }
  };

  return [open, handleClickOpen, handleClose, checkoutPage, getPage];
};

const PAGE1_FIELDS = {
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
};

const PAGE2_FIELDS = {
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
};

export default useCheckoutPageModal;
