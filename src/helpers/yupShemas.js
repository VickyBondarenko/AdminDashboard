import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(16, "Password cannot be longer than 16 characters"),
});

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  stock: Yup.string().required("Stock is required"),
  price: Yup.string().required("Price is required"),
  category: Yup.string().required("Category is required"),
  suppliers: Yup.string().required("Suppliers preparation is required"),
});

export const supplierSchema = Yup.object().shape({
  name: Yup.string().required("Suppliers name is required"),
  address: Yup.string().required("Address is required"),
  suppliers: Yup.string().required("Company is required"),
  date: Yup.string().required("Delivery date is required"),
  amount: Yup.string().required("Amount preparation is required"),
  status: Yup.string().required("Status preparation is required"),
});
