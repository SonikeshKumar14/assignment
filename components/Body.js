import Image from "next/image";
const Body = () => {
  return (
    <div
      className="w-full sm:h-80 bg-mycolor h-auto 
    "
    >
      <h3 className="text-white font-sans sm:text-2xl text-xl font-extrabold text-center pt-7">
        Transforming Lives-Financially!
      </h3>
      <div className="flex flex-wrap sm:p-5 ml-7">
        <div className="flex w-full sm:w-3/5 h-full mt-10 pl-5">
          <div className="pt-10">
            <Image src="/images/profile.png" alt="person" width={200} height={200} />
          </div>
          <div className="pt-10 ml-4">
            <h4 className="text-white font-medium device:text-base text-sm">Simrin Sirur</h4>
            <p className="text-white device:text-sm text-xs">Journalist</p>
            <p className="text-white device:text-sm text-xs">The Print, Gurugram</p>
            <p className="text-white device:text-sm mt-2 text-xs">
              "I was afraid to learn investments and savings because it seemed
              to fly over my head, but Ankit was extremely patient and walked me
              through everything... I now feel more confident to handle my own
              money."
            </p>
          </div>
          <div className="sm:mt-16 sm:pt-2  mt-16 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="sm:w-2/5  w-full flex justify-end sm:mb-10 pr-5 sm:pr-7" style={{ maxWidth:'100%', height: 'auto'}}>
          <Image
            src="/images/people.png"
            alt="people"
            width={230}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
