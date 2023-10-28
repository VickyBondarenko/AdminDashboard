import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import FilterPlug from "../components/FilterPlug";
import { Loader } from "../components/Loader";
import { Pagination } from "../components/Pagination/Pagination";
import { AddBtn } from "../components/Products/AddBtn";
import AddProductModal from "../components/Products/AddModal";
import AllProducts from "../components/Products/AllProducts";
import EditProductModal from "../components/Products/EditModal";
import { getIsLoading } from "../redux/auth/authSelector";
import {
  selectProducts,
  selectTotalPages,
} from "../redux/products/productsSelector";

import {
  deleteProduct,
  fetchSearchedProducts,
  getAllProducts,
} from "../redux/products/productsThunk";

const AllProductsPage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [productData, setProductData] = useState("");
  const [page, setPage] = useState(1);
  const [wordQuery, setWordQuery] = useState("");
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const limit = "5";

  useEffect(() => {
    if (wordQuery === "") {
      dispatch(getAllProducts({ page, limit }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const data = useSelector(selectProducts);
  const isLoading = useSelector(getIsLoading);

  const fetchData = (params) => {
    dispatch(fetchSearchedProducts(params));
  };
  const fetchAlldata = () => {
    dispatch(getAllProducts({ page, limit }));
  };

  const onChangePage = (currentPage) => {
    const number = Number(currentPage);

    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    setPage(number);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProduct(productId));
      if (data.length === 1) {
        setPage(page - 1);
      }
      dispatch(getAllProducts({ page, limit }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEditModal = (data) => {
    setIsEditModalOpen(true);
    setProductData(data);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      {isLoading && (
        <div className="w-screenMinusSideBar h-screenMinusHeader flex justify-center items-center">
          <Loader />
        </div>
      )}

      {!isLoading && (
        <div className="px-10 pb-10 md:w-screen xl:w-[1360px]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <FilterForm
              page={page}
              limit={"5"}
              placeholder={"Product Name"}
              fetchData={fetchData}
              fetchAlldata={fetchAlldata}
              onChangePage={setPage}
              onChangeWordQuery={setWordQuery}
            />
            <div onClick={handleOpenAddModal}>
              <AddBtn />
            </div>
          </div>
          <AddProductModal
            isOpen={isAddModalOpen}
            setIsOpen={setIsAddModalOpen}
            fetchAlldata={fetchAlldata}
          />
          {data.length === 0 ? (
            <FilterPlug />
          ) : (
            <>
              <AllProducts
                data={data}
                handleDeleteProduct={handleDeleteProduct}
                handleOpenEditModal={handleOpenEditModal}
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
              />
              <EditProductModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                data={productData}
                fetchAlldata={fetchAlldata}
              />
              {totalPages !== 1 && totalPages && totalPages !== 0 && (
                <Pagination
                  totalPages={totalPages}
                  currentpage={page}
                  onChangePage={onChangePage}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AllProductsPage;
