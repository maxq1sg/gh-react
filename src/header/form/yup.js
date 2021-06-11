import * as yup from 'yup'
const validationSchema = yup.object({
  name: yup
    .string()
    .required("this fieldd is required!!!")
    .test("len", "must be at least 3 symbols", (value) =>
      value ? value.length >= 3 : false
    ),
  email: yup
    .string()
    .email("innvalid email")
    .required("this fieldd is required!!!"),
  password: yup.string().required("this fieldd is required!!!"),
  // .test("valid", "incorrect password!", (value) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
  facebook: yup
    .string()
    .required("this fieldd is required!!!")
    .test("len", "must be at least 3 symbols", (value) =>
      value ? value.length >= 3 : false
    ),
  twitter: yup
    .string()
    .required("this fieldd is required!!!")
    .test("len", "must be at least 3 symbols", (value) =>
      value ? value.length >= 3 : false
    ),
});
export default validationSchema;
