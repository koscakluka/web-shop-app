import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckoutFormP1,
  CheckoutFormP1Actions,
  CheckoutFormP2,
  CheckoutFormP2Actions,
  CheckoutFormP3,
  CheckoutFormP3Actions,
} from "../components/CheckoutForm/CheckoutForm";

const useCheckoutPageModal = () => {
  const [checkoutPage, setCheckoutPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/thank-you");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
          <CheckoutFormP2 />,
          <CheckoutFormP2Actions
            nextPage={nextPage}
            previousPage={previousPage}
          />,
        ];
      case 3:
        return [
          <CheckoutFormP3 />,
          <CheckoutFormP3Actions
            submitForm={submitForm}
            previousPage={previousPage}
          />,
        ];
      case 1:
      default:
        return [
          <CheckoutFormP1 />,
          <CheckoutFormP1Actions nextPage={nextPage} />,
        ];
    }
  };

  return [open, handleClickOpen, handleClose, checkoutPage, getPage];
};

export default useCheckoutPageModal;
