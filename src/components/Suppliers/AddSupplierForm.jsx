import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { supplierSchema } from "../../helpers/yupShemas";

import { addSupplier } from "../../redux/suppliers/suppliersThunk";
import StyledDatepicker from "../DataPicker/DatePicker";

const AddSupplierForm = ({ handleCloseModal, fetchAlldata }) => {
  const dispatch = useDispatch();

  const schema = supplierSchema;

  const statusOptions = ["Active", "Deactive"];

  const suppliersValues = {
    name: "",
    address: "",
    suppliers: "",
    date: new Date(),
    amount: "",
    status: "",
  };

  const initialValues = { ...suppliersValues };

  const handleOnSubmit = (values, { resetForm }) => {
    dispatch(addSupplier(values));
    resetForm();
    fetchAlldata();
    handleCloseModal();
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
        setFieldValue,
      }) => (
        <Form className="flex flex-col flex-wrap pt-5 md:pt-10 ">
          <div className="flex flex-col md:flex-row md:gap-2 gap-[14px] pb-10 text-customXs text-[#9ca3af] ">
            <div className="flex flex-col  gap-[14px]">
              <label htmlFor="name" className="  ">
                <Field
                  autoComplete="off"
                  name="name"
                  type="name"
                  placeholder="Suppliers Info"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="border border-borderLight rounded-[60px] py-[13px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>

              <label htmlFor="suppliers" className="">
                <Field
                  autoComplete="off"
                  name="suppliers"
                  placeholder="Company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.suppliers}
                  className="border border-borderLight rounded-[60px] py-[13px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>
              <label htmlFor="amount" className="">
                <Field
                  autoComplete="off"
                  name="amount"
                  placeholder="Amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  className="border border-borderLight rounded-[60px] py-[13px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>
            </div>
            <div className="flex flex-col  gap-[14px]">
              <label htmlFor="address" className="]">
                <Field
                  autoComplete="off"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="border border-borderLight rounded-[60px] py-[13px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>
              <label htmlFor="date" className="">
                <Field
                  name="date"
                  component={StyledDatepicker}
                  value={values.date}
                  initialDate={values.date}
                  onBlur={handleBlur}
                  setSelectedOption={(value) => setFieldValue("date", value)}
                  selectedOption={values.date}
                  className="relative border border-borderLight rounded-[60px] py-[15px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                />
              </label>
              <label htmlFor="status" className="">
                <Field
                  autoComplete="off"
                  as="select"
                  name="status"
                  placeholder="Status"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.status}
                  className="border border-borderLight rounded-[60px] py-[13px] px-[18px] w-[295px] md:w-[224px] placeholder:text-[12px] placeholder:leading-[18px]  outline-accent"
                >
                  <option
                    className="bg-accent mt-2 text-white appearance-none"
                    value=""
                  >
                    Status
                  </option>
                  {statusOptions.map((status, index) => (
                    <option
                      key={index}
                      value={status}
                      className="bg-accent appearance-none text-white"
                    >
                      {status}
                    </option>
                  ))}
                </Field>
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              disabled={!isValid || !dirty}
              type="submit"
              className={`bg-accent cursor-pointer text-whiteText w-[146px] md:w-[132px] p-[13px] rounded-[60px] font-medium text-[14px] leading-[18px] ${
                !isValid || !dirty
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              Add
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-borderLight cursor-pointer text-gray-600 w-[146px] md:w-[132px] p-[13px] rounded-[60px] font-medium text-[14px] leading-[18px]"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddSupplierForm;
