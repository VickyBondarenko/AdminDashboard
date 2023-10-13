import Header from "../components/LogIn/Header";
import AuthForm from "../components/LogIn/Form";

const LogInPage = () => {
  return (
    <>
      <div className="px-5 py-6 ">
        <Header />
        <div className="max-w-[335px] font-semibold text-[28px] leading-[34px]">
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
