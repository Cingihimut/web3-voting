import React from "react";

const SectionHeader = () => {
  return (
    <section className="bg-white overflow-hidden dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-blue-700">Transparansi </span>dan
            <span className="text-blue-700"> Keamanan</span> dalam Setiap
            <span className="text-blue-700"> Suara!</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Dapatkan kemudahan akses, keamanan terjamin, dan hasil yang
            transparan dengan AmiVote. Jadilah bagian dari revolusi demokrasi
            digital yang memperkuat suara Anda!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Mulai voting
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Pelajari dulu
            </a>
          </div>
        </div>
        <div>
          <div className="mx-auto lg:max-w-xl">
            <img
              src="voting.svg"
              className="w-3/4 h-auto auto mx-auto mt-14 hidden md:block"
              alt="Amivote Landing Page"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
