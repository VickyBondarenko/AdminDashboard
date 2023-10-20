import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import { Pagination } from "../components/Pagination/Pagination";
import { AddBtn } from "../components/Products/AddBtn";
import AddProductModal from "../components/Products/AddModal";
import AllProducts from "../components/Products/AllProducts";
import EditProductModal from "../components/Products/EditModal";
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

  const fetchData = (params) => {
    dispatch(fetchSearchedProducts(params));
  };

  const onChangePage = (currentPage) => {
    if (currentPage !== "...") {
      const number = Number(currentPage);

      const element = document.getElementById("ahcnor1");
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }

      setPage(number);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProduct(productId));
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
    console.log("isAddModalOpen", isAddModalOpen);

    setIsAddModalOpen(true);
  };

  return (
    <>
      <div className="px-10  ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <FilterForm
            page={page}
            limit={"5"}
            placeholder={"Product Name"}
            fetchData={fetchData}
            onChangePage={setPage}
            onChangeWordQuery={setWordQuery}
          />
          <div onClick={handleOpenAddModal}>
            <AddBtn />
          </div>
        </div>{" "}
        <AddProductModal
          isOpen={isAddModalOpen}
          setIsOpen={setIsAddModalOpen}
        />
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
        />
        {totalPages !== 1 && totalPages && (
          <Pagination
            totalPages={totalPages}
            currentpage={page}
            onChangePage={onChangePage}
          />
        )}
      </div>
    </>
  );
};

export default AllProductsPage;
