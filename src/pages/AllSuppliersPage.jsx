import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import { Pagination } from "../components/Pagination/Pagination";
import { AddSuplier } from "../components/Suppliers/AddSupplier";
import AllSuppliers from "../components/Suppliers/AllSuppliers";
import {
  getIsLoading,
  selectSuppliers,
  selectTotalPages,
} from "../redux/suppliers/suppliersSelector";
import {
  fetchSearchedSuppliers,
  getAllSuppliers,
} from "../redux/suppliers/suppliersThunk";

import EditSuppliersModal from "../components/Suppliers/EditSuppliersModal";
import AddSupplierModal from "../components/Suppliers/AddSuppliersModal";
import FilterPlug from "../components/FilterPlug";
import { Loader } from "../components/Loader";

const AllSuppliersPage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [supplierData, setSupplierData] = useState("");
  const [page, setPage] = useState(1);
  const [wordQuery, setWordQuery] = useState("");
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const limit = "5";

  useEffect(() => {
    if (wordQuery === "") {
      dispatch(getAllSuppliers({ page, limit }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const data = useSelector(selectSuppliers);
  const isLoading = useSelector(getIsLoading);

  const fetchData = (params) => {
    dispatch(fetchSearchedSuppliers(params));
  };
  const fetchAlldata = () => {
    dispatch(getAllSuppliers({ page, limit }));
  };

  const onChangePage = (currentPage) => {
    const number = Number(currentPage);

    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    setPage(number);
  };

  const handleOpenEditModal = (data) => {
    setIsEditModalOpen(true);
    setSupplierData(data);
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
        <div className="px-10 md:w-screen xl:w-[1360px]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <FilterForm
              page={page}
              limit={"5"}
              placeholder={"User Name"}
              fetchData={fetchData}
              fetchAlldata={fetchAlldata}
              onChangePage={setPage}
              onChangeWordQuery={setWordQuery}
            />
            <div onClick={handleOpenAddModal}>
              <AddSuplier />
            </div>
          </div>
          <AddSupplierModal
            isOpen={isAddModalOpen}
            setIsOpen={setIsAddModalOpen}
            fetchAlldata={fetchAlldata}
          />
          {data.length === 0 ? (
            <FilterPlug />
          ) : (
            <>
              <AllSuppliers
                data={data}
                handleOpenEditModal={handleOpenEditModal}
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
              />
              <EditSuppliersModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                data={supplierData}
                fetchAlldata={fetchAlldata}
              />
              {totalPages !== 1 && totalPages && (
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

export default AllSuppliersPage;
