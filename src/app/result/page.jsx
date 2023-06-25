"use client";
import { useState, useEffect } from "react";
const ResultPage = () => {
  const [dateNow, setdateNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setdateNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return (
    <div>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h1 className=" text-2xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
              <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                Result
              </span>
            </h1>
            <h1 class="mb-4 text-center mt-4 text-md text-white font-extrabold text-gray-400 dark:text-white md:text-lg lg:text-xl">
              {dateNow.toLocaleString("en-US", options)}
            </h1>
            <div class="flex items-center mt-10">
              <div class="relative flex-grow h-3 bg-gray-300 rounded-full">
                <div
                  class="absolute top-0 left-0 h-full bg-indigo-600"
                  style={{ width: "30%" }}
                ></div>
                <div
                  class="absolute top-0 right-0 h-full bg-purple-800"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-8">
          <div className=" py-6 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto">
                <h1 className="mb-8 text-xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                  <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                    Aldi
                  </span>
                </h1>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  10
                </h1>

                <h1 class="text-2xl text-center font-extrabold dark:text-white">
                  <small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                    SUARA
                  </small>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className=" py-6 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto">
                <h1 className="mb-8 text-xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                  <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                    Taher
                  </span>
                </h1>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  10
                </h1>

                <h1 class="text-2xl text-center font-extrabold dark:text-white">
                  <small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                    SUARA
                  </small>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
