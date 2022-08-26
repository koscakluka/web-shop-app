import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutFormActions } from "../components/Checkout/CheckoutForm";

import {
  CheckoutFormReview,
  CheckoutFormReviewActions,
} from "../components/Checkout/CheckoutFormReview";
import useMultiPageForm from "./useMultiPageForm";

const useCheckoutPageModal = (getCart, formFields) => {
  const [checkoutPage, setCheckoutPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState(null);

  const navigate = useNavigate();
  const [formValues, updateFormValues, getFormPage] =
    useMultiPageForm(formFields);

  const submitForm = () => {
    //TODO Actually submit the form
    navigate("/thank-you");
  };

  const handleClickOpen = () => {
    if (getCart().length > 0) {
      setOpen(true);
    } else {
      throw Error(
        "You cannot start checkout until you have something in the cart"
      );
    }
  };

  const handleClose = () => {
    updateFormValues();
    setOpen(false);
  };

  const previousPage = () => {
    setCheckoutPage((page) => (page > 1 ? page - 1 : page));
  };

  const nextPage = () => {
    setCheckoutPage((page) => (page < formFields.length + 1 ? page + 1 : page));
  };

  const getPage = (page) => {
    const [form, formValidator] = getFormPage(page);
    if (form) {
      const validateAndNextPage = () => {
        const [isValid, errors] = updateFormValues(formValidator);
        setErrorMessages(errors);
        if (isValid) {
          nextPage();
        }
      };
      const updateAndPreviousPage =
        page > 1
          ? () => {
              updateFormValues();
              previousPage();
            }
          : undefined;
      return [
        form,
        <CheckoutFormActions
          nextPage={validateAndNextPage}
          previousPage={updateAndPreviousPage}
        />,
      ];
    } else {
      return [
        <CheckoutFormReview cart={getCart()} formValues={formValues} />,
        <CheckoutFormReviewActions
          submitForm={submitForm}
          previousPage={previousPage}
        />,
      ];
    }
  };

  return [
    open,
    handleClickOpen,
    handleClose,
    checkoutPage,
    getPage,
    errorMessages,
  ];
};

export default useCheckoutPageModal;
