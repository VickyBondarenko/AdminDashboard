import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authThunk";

const AuthForm = () => {
  const dispatch = useDispatch();

  //   const schema = LoginSchema;

  const userValues = {
    email: "",
    password: "",
  };

  const initialValues = { ...userValues };

  const handleOnSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    console.log("values", values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      //   validationSchema={schema}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        handleBlur,
        isValid,
        dirty,
      }) => (
        <Form className="flex flex-col md:w-[323px] pt-10 xl:pt-32">
          <label htmlFor="email" className="relative  mb-[14px]">
            <Field
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-full placeholder:text-[12px] placeholder:leading-[18px]"
            />
          </label>
          <label htmlFor="password" className="relative  mb-10">
            <Field
              autoComplete="off"
              name="password"
              //   type={passwordType}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-full placeholder:text-[12px] placeholder:leading-[18px]"
            />
          </label>
          <button
            disabled={!isValid || !dirty}
            type="submit"
            className="bg-accent text-whiteText w-full p-[13px] rounded-[60px] font-medium text-[14px] leading-[18px]"
          >
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
