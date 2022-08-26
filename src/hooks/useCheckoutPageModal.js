import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutFormActions } from "../components/CheckoutForm/CheckoutForm";

import {
  CheckoutFormReview,
  CheckoutFormReviewActions,
} from "../components/CheckoutForm/CheckoutFormReview";
import useMultiPageForm from "./useMultiPageForm";

const useCheckoutPageModal = (getCart) => {
  const [checkoutPage, setCheckoutPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const [formValues, updateFormValues, getFormPage] = useMultiPageForm();

  const submitForm = () => {
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
    setCheckoutPage((page) => (page < 3 ? page + 1 : page));
  };

  const getPage = (page) => {
    const form = getFormPage(page);
    if (form) {
      return [
        form,
        <CheckoutFormActions
          nextPage={() => {
            updateFormValues();
            nextPage();
          }}
          previousPage={
            page > 1
              ? () => {
                  updateFormValues();
                  previousPage();
                }
              : undefined
          }
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

  return [open, handleClickOpen, handleClose, checkoutPage, getPage];
};

export default useCheckoutPageModal;
