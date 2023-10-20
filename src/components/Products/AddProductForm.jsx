import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { productSchema } from "../../helpers/yupShemas";
import { addProduct } from "../../redux/products/productsThunk";

const AddProductForm = () => {
  const dispatch = useDispatch();

  const schema = productSchema;

  const categoryOptions = [
    "Medicine",
    "Head",
    "Hand",
    "Dental Care",
    "Skin Care",
    "Eye Care",
    "Vitamins & Supplements",
    "Orthopedic Products",
    "Baby Care",
  ];

  const productValues = {
    name: "",
    stock: "",
    price: "",
    category: "",
    suppliers: "",
  };

  const initialValues = { ...productValues };

  const handleOnSubmit = (values, { resetForm }) => {
    dispatch(addProduct(values));
    console.log("values", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={schema}
    >
      {({
        values,
        // errors,
        // touched,
        handleChange,
        handleBlur,
        isValid,
        dirty,
        resetForm,
      }) => (
        <Form className="flex flex-col flex-wrap pt-10 ">
          <div className="flex gap-2 pb-10 text-customXs text-[#9ca3af] ">
            <div className="flex flex-col  gap-[14px]">
              <label htmlFor="name" className="  ">
                <Field
                  autoComplete="off"
                  name="name"
                  type="name"
                  placeholder="Product Info"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>
              <label htmlFor="stock" className="]">
                <Field
                  autoComplete="off"
                  name="stock"
                  //   type={passwordType}
                  placeholder="Stock"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stock}
                  className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-[224px]  placeholder:text-[12px] placeholder:leading-[18px] outline-accent"
                />
              </label>
              <label htmlFor="price" className="">
                <Field
                  autoComplete="off"
                  name="price"
                  //   type={passwordType}
                  placeholder="Price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-[224px]  placeholder:text-[12px] placeholder:leading-[18px] outline-accent"
                />
              </label>
            </div>
            <div className="flex flex-col  gap-[14px]">
              <label htmlFor="category" className="">
                <Field
                  autoComplete="off"
                  as="select"
                  name="category"
                  placeholder="Category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-[224px]  placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                >
                  <option
                    className="bg-accent mt-2 text-white appearance-none"
                    value=""
                  >
                    Category
                  </option>
                  {categoryOptions.map((category, index) => (
                    <option
                      key={index}
                      value={category}
                      className="bg-accent appearance-none text-white"
                    >
                      {category}
                    </option>
                  ))}
                </Field>
              </label>
              <label htmlFor="suppliers" className="">
                <Field
                  autoComplete="off"
                  name="suppliers"
                  //   type={passwordType}
                  placeholder="Suppliers"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.suppliers}
                  className="border border-borderLight rounded-[60px] py-[10px] px-[18px] w-[224px]  placeholder:text-[12px] placeholder:leading-[18px] outline-accent"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              disabled={!isValid || !dirty}
              type="submit"
              className="bg-accent cursor-pointer text-whiteText w-[132px] p-[13px] rounded-[60px] font-medium text-[14px] leading-[18px]"
            >
              Add
            </button>
            <button
              disabled={!isValid || !dirty}
              type="button"
              onClick={resetForm}
              className="bg-borderLight cursor-pointer text-gray-600 w-[132px] p-[13px] rounded-[60px] font-medium text-[14px] leading-[18px]"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
