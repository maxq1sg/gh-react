import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const Checkboxes = (props) => {
  const cOptions = [
    { key: 12, value: 12 },
    { key: 15, value: 15 },
    { key: 19, value: 19 },
  ];
  const initialValues = {
    answers: [],
  };
  const validationSchema = yup.object().shape({
    answers: yup.array().required("Дайте хотя бы один вариант ответа!"),
  });
  const onSubmit = (values, props) => {
    
  };
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      <Form>
        <Field name="answers">
          {({ field }) => {
            return cOptions.map((option) => {
              return (
                <>
                  <input
                    type="checkbox"
                    // onChange={field.onChange}
                    // name={field.name}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                    id={option.key}
                  />
                  <label htmlFor={option.key}>ключ номер {option.key}</label>
                </>
              );
            });
          }}
        </Field>
      </Form>
    </Formik>
  );
};

export default Checkboxes;
