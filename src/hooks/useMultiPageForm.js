import React from "react";
import { CheckoutForm } from "../components/Checkout/CheckoutForm";
import * as yup from "yup";

const useMultiPageForm = (formFields) => {
  const [formValues, setFormValues] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({});

  const formElements = React.useRef({});
  const addElementToRef = (key, el) => {
    formElements.current[key] = el;
  };

  const updateFormValues = (formValidator = undefined) => {
    const newFormValues = {};
    Object.entries(formElements.current)
      .filter(([key, element]) => element)
      .forEach(
        ([key, input]) =>
          (newFormValues[key] =
            input.type === "checkbox" ? input.checked : input.value)
      );

    setFormValues((formValues) => Object.assign({}, formValues, newFormValues));

    if (formValidator) {
      const errorMessages = {};
      try {
        formValidator.validateSync(newFormValues, { abortEarly: false });
      } catch (errors) {
        errors.inner.forEach((error) => {
          if (!errorMessages[error.path]) {
            errorMessages[error.path] = error.message;
          }
        });
        setFormErrors(errorMessages);
        return [false, errorMessages];
      }
      setFormErrors();
    }

    return [true, {}];
  };

  const getFormPage = (page) => {
    if (page < 1 || page > formFields.length) {
      return [undefined, undefined];
    }

    const pageValidationSchematic = {};
    Object.entries(formFields[page - 1]).forEach(([key, field]) => {
      pageValidationSchematic[key] = field.schema;
    });

    return [
      <CheckoutForm
        formFields={formFields[page - 1]}
        formValues={formValues}
        formErrors={formErrors}
        page={page}
        elementsRegistration={addElementToRef}
      />,
      yup.object().shape(pageValidationSchematic),
    ];
  };

  return [formValues, updateFormValues, getFormPage];
};

export default useMultiPageForm;
