"use client";
import { fetchCandidateData } from "../utils/fetchCandidateData";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
const ResultPage = () => {
  const [dateNow, setdateNow] = useState(new Date());
  const [isHidden, setIsHidden] = useState(false);
  const [candidates, setCandidates] = useState([]);
  let percentA = 50;
  let percentB = 50;
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
  useEffect(() => {
    const getCandidates = async () => {
      try {
        let data = await fetchCandidateData();
        setCandidates(data);
        setIsHidden(!isHidden);
        const totalVotes =
          parseInt(data[0].voteCount) + parseInt(data[1].voteCount);

        percentA = (votesA / totalVotes) * 100;
        percentB = (votesB / totalVotes) * 100;
      } catch (error) {
        setIsHidden(!isHidden);
        console.log(error);
      }
    };

    getCandidates();
    const timer = setInterval(() => {
      setdateNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
            <h1 class="mb-4 text-center mt-6 text-md font-medium text-gray-400 dark:text-white md:text-lg lg:text-xl">
              <div suppressHydrationWarning>
                {dateNow.toLocaleString("en-US", options)}
              </div>
            </h1>
            <div class="flex items-center mt-10">
              <div class="relative flex-grow h-3 bg-gray-300 rounded-full">
                <div
                  class="absolute top-0 left-0 h-full bg-indigo-600"
                  style={{ width: `${percentA}%` }}
                ></div>
                <div
                  class="absolute top-0 right-0 h-full bg-purple-800"
                  style={{ width: `${percentB}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isHidden ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {candidates.map((can) => (
            <div className="px-8" key={can.id}>
              <div className=" py-6 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
                <div className="container mx-auto px-4">
                  <div className="max-w-xl mx-auto">
                    <h1 className="mb-8 text-xl text-center font-medium leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
                      <span className="underline underline-offset-8 text-center decoration-4 decoration-blue-400 dark:decoration-blue-600">
                        {can.name}
                      </span>
                    </h1>
                    <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                      {parseInt(can.voteCount)}
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
          ))}
        </div>
      ) : (
        <Loading pesan="Sedang mendapatkan data..." />
      )}
    </div>
  );
};

export default ResultPage;
