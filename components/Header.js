import Image from "next/image";
const Header = () => {
  return (
    <div
      className="w-screen h-44"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(21, 156, 152, 1), rgba(19, 143, 158, 1))",
      }}
    >
      <div className="pt-3">
        <h1
          className="leading-10 font-sans text-white sm:text-4xl  text-3xl font-semibold text-center"
        >
          Backed by the best
        </h1>
        <p className="leading-7 font-sans text-white sm:text-xl text-lg  text-center">
          Wealth is backed and supported by
        </p>
      </div>
      <div className="flex justify-center pb-3">
        <Image
          src="/images/company.png"
          alt="company_name"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Header;
