import Logo from "../assets/image/image-logo-auth.png";

export const Loader = () => {
  return (
    <div className="w-20 h-20 p-5  border border-accent rounded-xl text-center">
      <img className="animate-pulse  w-10 h-10" src={Logo} alt="Loader" />
    </div>
  );
};
