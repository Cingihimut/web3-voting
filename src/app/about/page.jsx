import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div classNameName="mt-16 pt-4 overflow-hidden">
      <div classNameName="py-10">
        <div classNameName="container mx-auto px-4">
          <div classNameName="max-w-xl mx-auto">
            <h1 className="mb-12 text-2xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
              <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                About us
              </span>
            </h1>

            <p className="text-lg mt-4 text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Kami adalah tim yang berkomitmen untuk menghadirkan platform
              voting online yang memprioritaskan transparansi dan keamanan dalam
              setiap suara. Dengan tagline "Transparansi dan keamanan dalam
              setiap suara", kami ingin memastikan bahwa setiap pengguna dapat
              memiliki keyakinan dan kepercayaan penuh dalam proses pemilihan
              online.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" p-4 ">
          <div classNameName=" py-10 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-8">
            <div classNameName="container mx-auto px-4">
              <div classNameName="max-w-xl mx-auto">
                <h1 className="mb-8 text-lg text-center font-medium leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                  <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                    Our Vision
                  </span>
                </h1>

                <p className="text-md mt-4 text-center font-normal text-gray-500 lg:text-base dark:text-gray-400">
                  Menciptakan sebuah platform yang tidak hanya memberikan
                  kemudahan dan kecepatan dalam voting online, tetapi juga
                  menjaga integritas dan keamanan setiap suara yang diberikan.
                  Kami ingin menjadi pilihan utama bagi individu, organisasi,
                  dan komunitas yang menghargai transparansi dan ingin
                  memastikan bahwa setiap suara mereka dihitung dengan jujur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4 ">
          <div classNameName=" py-10 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-8">
            <div classNameName="container mx-auto px-4">
              <div classNameName="max-w-xl mx-auto">
                <h1 className="mb-8 text-lg text-center font-medium leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                  <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                    Our Mission
                  </span>
                </h1>

                <p className="text-md mt-4 text-center font-normal text-gray-500 lg:text-base dark:text-gray-400">
                  Menyediakan infrastruktur teknologi yang kuat dan sistem
                  keamanan yang terpercaya untuk menjaga integritas setiap
                  pemilihan online. Kami berkomitmen untuk mengimplementasikan
                  protokol keamanan yang tinggi dan mekanisme verifikasi yang
                  transparan guna memastikan bahwa setiap suara yang masuk valid
                  dan tidak terpengaruh oleh manipulasi atau kecurangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="py-10">
        <div classNameName="container mx-auto">
          <div classNameName="max-w-4xl mx-auto">
            <h1 className="mb-12 text-2xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
              <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                Our Team
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4">
              <div className=" p-4">
                <div className="flex flex-col items-center pb-10">
                  <Image
                    width={24}
                    height={24}
                    alt={"Profile Icons"}
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/man.png"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Singgih Brilian Tara
                  </h5>
                  <span className="text-base text-gray-500 dark:text-gray-400">
                    Teknik Informatika
                  </span>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex flex-col items-center pb-10">
                  <Image
                    width={24}
                    height={24}
                    alt={"Profile Icons"}
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/woman.png"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Eunique Lydia Stephany
                  </h5>
                  <span className="text-base text-gray-500 dark:text-gray-400">
                    Informatika
                  </span>
                </div>
              </div>
              <div className=" p-4">
                <div className="flex flex-col items-center pb-10">
                  <Image
                    width={24}
                    height={24}
                    alt={"Profile Icons"}
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="/man2.png"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Muhammad Aris
                  </h5>
                  <span className="text-base text-gray-500 dark:text-gray-400">
                    Teknik Informatika
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
