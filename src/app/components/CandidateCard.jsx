import Image from "next/image";
const CandidateCard = ({ img, nama, deskripsi }) => {
  return (
    <>
      <div className="w-2/3 mx-4 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
        <div className="flex w-40 h-40 rounded-full overflow-hidden">
          <div className="mx-auto aspect-w-[1] aspect-h-[1]">
            <Image
              src={img}
              alt="Gambar Anda"
              width={400}
              height={400}
              className="object-fit rounded-full"
            />
          </div>
        </div>

        <div className="p-5">
          <div className="order-1">
            <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-700 dark:text-white">
              {nama}
            </h5>
          </div>
          <div className="order-2">
            <p className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">
              {deskripsi}
            </p>
          </div>
          <div className="order-3 flex justify-center items-center">
            <a
              href="#"
              className="inline-flex text-center  items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              VOTE
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
