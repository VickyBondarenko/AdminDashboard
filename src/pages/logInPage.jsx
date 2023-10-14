import Header from "../components/LogIn/Header";
import AuthForm from "../components/LogIn/Form";
import Pill from "../assets/image/white-round-pill.png";

const LogInPage = () => {
  return (
    <>
      <div className="px-5 py-6 ">
        <Header />
        <div className="relative max-w-[335px] font-semibold text-[28px] leading-[34px] mt-[148px]">
          <img
            className="absolute right-[20px] top-[-56px] w-[95px] h-[93px]"
            src={Pill}
            alt="My Image"
          />

          <p className="">Your medication,</p>
          <p>
            delivered Say goodbye to all{" "}
            <span className="text-accent">your healthcare</span> worries with us
          </p>
        </div>
        <AuthForm />
      </div>
    </>
  );
};

export default LogInPage;
