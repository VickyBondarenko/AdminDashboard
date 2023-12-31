import AuthForm from "../components/LogIn/Form";
import Header from "../components/LogIn/Header";
import Pill from "../assets/image/white-round-pill.png";
import { getIsLoading } from "../redux/auth/authSelector";
import { Loader } from "../components/Loader";
import { useSelector } from "react-redux";

const LogPage = () => {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      {isLoading && (
        <div className="w-screenMinusSideBar h-screenMinusHeader flex justify-center items-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="px-5 pt-[28px] pb-[234px] md:pb-[276px] xl:pb-[262px] bg-local bg-no-repeat  bg-auto bg-authPage_mob md:bg-authPage_tab bg-right-bottom w-screen">
          <Header />
          <div className="xl:flex xl:justify-around xl:items-center ">
            <div className="relative max-w-[335px] md:max-w-[614px] font-semibold text-[28px] md:text-[54px] leading-[34px] md:leading-[60px] mt-[148px] xl:mt-[130px]">
              <img
                className="absolute right-[20px]  top-[-56px] md:top-[-105px] w-[95px] md:w-[179px] h-[93px] md:h-[175px]"
                src={Pill}
                alt="My Image"
              />

              <p className="">Your medication,</p>
              <p>
                delivered Say goodbye to all{" "}
                <span className="text-accent">your healthcare</span> worries
                with us
              </p>
            </div>
            <AuthForm />
          </div>
        </div>
      )}
    </>
  );
};

export default LogPage;
