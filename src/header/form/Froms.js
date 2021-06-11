import { Button, makeStyles } from "@material-ui/core";
import { ErrorSharp } from "@material-ui/icons";
import {
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as yup from "yup";
import CustomButton from "./CustomButton";
import ErrorWrapper from "./ErrorWrapper";
import TextFieldCustom from "./TextField";
import validationSchema from "./yup";

const useStyles = makeStyles({
  input: {
    fontSize: "32px",
  },
});
const Forms = () => {
  const styles = useStyles();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phNumbers: [""],
  };
  //   const onSubmit = (values) => {
  //     //автоматический event.preventDefault()
  //     console.log("values", values);
  //     console.log('submit!!!!')
  //   };
  return (
    <>
      <Formik {...{ validationSchema, initialValues }}>
        {(props) => {
          return (
            <Form id="test">
              <div>
                {/* {field не нужно указывать onBlur...или getFieldProps} */}
                <Field
                  component={TextField}
                  autoFocus
                  type="text"
                  label="name"
                  name="name"
                />
                {/* <div>{formik.errors.name && formik.touched.name ? formik.errors.name : null}</div> */}
                {/* <ErrorMessage name="name" component={ErrorWrapper} /> */}
              </div>
              <div>
                <FastField type="text" name="email" placeholder="email" />
                {/* <div>{formik.errors.email && formik.touched.email ? formik.errors.email : null}</div> */}
                <ErrorMessage name="email" component={ErrorWrapper} />
              </div>
              <div>
                <Field
                  component={TextField}
                  name="password"
                  placeholder="password"
                />
                {/* <div>{formik.errors.password && formik.touched.password ? formik.errors.password : null}</div> */}
                <ErrorMessage name="password" component={ErrorWrapper} />
              </div>
              <div>
                <Field
                  as="textarea"
                  type="text"
                  name="social.facebook"
                  placeholder="fb"
                />
                {/* <div>{formik.errors.password && formik.touched.password ? formik.errors.password : null}</div> */}
                <ErrorMessage name="social.facebook" component={ErrorWrapper} />
              </div>
              <div>
                <Field
                  as="textarea"
                  type="text"
                  name="social.twitter"
                  placeholder="tw"
                />
                {/* <div>{formik.errors.password && formik.touched.password ? formik.errors.password : null}</div> */}
                <ErrorMessage name="social.twitter" component={ErrorWrapper} />
              </div>
              {/* <div>
              <FieldArray name="phNumbers">
                {(props) => {
                  const { form, remove, push } = props;
                  const { phNumbers } = form.values;
                  return phNumbers.map((item, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      <button onClick={() => push("")}>+</button>
                      {phNumbers.length > 0 && (
                        <button onClick={() => remove(index)}>-</button>
                      )}
                    </div>
                  ));
                }}
              </FieldArray>
              <ErrorMessage name="phNumbers" component={ErrorWrapper} />
            </div> */}
              <Button type="submit" form="test">
                {" "}
                отправить
              </Button>
              <button
                onClick={() => {
                  props.setTouched();
                  props.validateForm();
                }}
              >
                validation
              </button>
            </Form>
          );
        }}
      </Formik>
      <TextFieldCustom />
      <CustomButton/>
    </>
  );
};

export default Forms;
