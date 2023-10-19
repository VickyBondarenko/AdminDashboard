import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import { Pagination } from "../components/Pagination/Pagination";
import { AddSuplier } from "../components/Suppliers/AddSupplier";
import AllSuppliers from "../components/Suppliers/AllSuppliers";
import {
  selectSuppliers,
  selectTotalPages,
} from "../redux/suppliers/suppliersSelector";
import {
  fetchSearchedSuppliers,
  getAllSuppliers,
} from "../redux/suppliers/suppliersThunk";

import EditSuppliersModal from "../components/Suppliers/EditSuppliersModal";
import AddSupplierModal from "../components/Suppliers/AddSuppliersModal";

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

  const fetchData = (params) => {
    dispatch(fetchSearchedSuppliers(params));
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

  const handleOpenEditModal = (data) => {
    setIsEditModalOpen(true);
    setSupplierData(data);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      <div className="px-10 ">
        <div className="flex justify-between items-end">
          <FilterForm
            page={page}
            limit={"5"}
            placeholder={"User Name"}
            fetchData={fetchData}
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
        />
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

export default AllSuppliersPage;
