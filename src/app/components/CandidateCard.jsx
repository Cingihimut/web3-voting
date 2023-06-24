"use client";
import Image from "next/image";
import VoteButton from "./VoteButton";
const CandidateCard = ({ img, nama, deskripsi, id, isVoted, handleVote }) => {
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
            <VoteButton
              id_kandidat={id}
              handleVote={handleVote}
              isVoted={isVoted}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateCard;
