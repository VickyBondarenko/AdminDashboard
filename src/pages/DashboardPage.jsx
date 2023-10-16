import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncomeExpenses from "../components/Dashboard/IncomeExpenses";
import RecentCustomers from "../components/Dashboard/RecentCustomers";
import Statistic from "../components/Dashboard/Statistic";
import { selectDashboard } from "../redux/dashboard/dashboardSelector";
import { getDashboardData } from "../redux/dashboard/dashboardThunk";

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  const data = useSelector(selectDashboard);
  console.log("data", data);
  const { statistic, recentCustomers, recentOperations } = data;
  return (
    <>
      <div className="px-5 py-5">
        <div className="  flex flex-wrap justify-between gap-5">
          <Statistic
            title="All products"
            icon="icon-money-finance"
            count={statistic.allProducts}
          />
          <Statistic
            title="All suppliers"
            icon="icon-money-finance"
            count={statistic.allSuppliers}
          />
          <Statistic
            title="All Customers"
            icon="icon-customer"
            count={statistic.allCustomers}
          />
        </div>
        <RecentCustomers data={recentCustomers} />
        <IncomeExpenses data={recentOperations} />
      </div>
    </>
  );
};

export default DashboardPage;
