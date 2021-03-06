import { Button } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

const Test3 = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [savedDate, setsavedDate] = useState(null);
  const options = [
    { key: "male", value: "male" },
    { key: "female", value: "female" },
    { key: "none", value: "none" },
  ];
  const initialValues = {
    name: "",
    age: "",
    social: {
      fb: "",
      tw: "",
    },
    // sex: "",
  };
  useEffect(async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsShowing(true);
        resolve();
      }, 1000);
    });
  }, []);
  useEffect(() => {
    console.log(savedDate);
  }, [savedDate]);
  const validationSchema = yup.object().shape({
    name: yup.string().required("this field is required").min(3),
    age: yup.number().required("age is required"),
    social: yup.object().shape({
      fb: yup.string().required("fb is required"),
      tw: yup.string().required("tw is required"),
    }),
    // sex: yup.string().required("sex is required"),
  });
  const onSubmit = (values, props) => {
    localStorage.setItem("formData", JSON.stringify(values));
    console.log("get", JSON.parse(localStorage.getItem("formData")));
    console.log("data", values);
    // setsavedDate(null);
    props.resetForm(initialValues);

    props.setSubmitting(false);
  };
  return (
    <Formik
      {...{
        initialValues: savedDate || initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
      }}
    >
      {(props) => {
        console.log(props.values);
        return (
          <Form>
            <div>
              {isShowing ? (
                <button
                  onClick={() => {
                    console.log("inside onclick");
                    setsavedDate(JSON.parse(localStorage.getItem("formData")));
                  }}
                >
                  ??????????????????
                </button>
              ) : null}
            </div>
            <div>
              <Field
                type="text"
                placeholder="name"
                name="name"
                onChange={props.handleChange}
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field type="text" placeholder="age" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>
            <div>
              <Field type="text" placeholder="fb" name="social.fb" />
              <ErrorMessage name="social.fb" component="div" />
            </div>
            <div>
              <Field type="text" placeholder="tw" name="social.tw" />
              <ErrorMessage name="social.tw" component="div" />
            </div>
            <div>
              {/* <Field name="sex">
                {({ field }) => {
                  return options.map((option) => {
                    return (
                      <>
                        <>
                          <input
                            type="radio"
                            name="sexx"
                            value={option.value}
                            id={option.value}
                            // checked={option.value === field.value}
                          />
                          <label htmlFor={option.value}>{option.value}</label>
                        </>
                        <ErrorMessage name="sex" component="div" />
                      </>
                    );
                  });
                }}
              </Field> */}
            </div>
            {/* <button type="submit">send</button> */}
            <Button
              disabled={!props.isValid}
              type="submit"
              variant="outlined"
              color="primary"
              disabled={props.isSubmitting}
            >
              ??????????????????
            </Button>
            {/* <button type="submit">send daat</button> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default Test3;
