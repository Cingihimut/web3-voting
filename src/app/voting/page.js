"use client";
import CandidateCard from "../components/CandidateCard";

const Voting = () => {
  return (
    <div class="flex flex-wrap mt-6">
      <div class="w-full flex md:w-1/2 p-8 justify-center">
        <CandidateCard
          img={"/person1.png"}
          nama={"Kandidat 1"}
          deskripsi={
            "Deskripsi singkat kandidat Deskripsi singkat kandidat Deskripsi singkat kandidat"
          }
        />
      </div>
      <div class="w-full  flex md:w-1/2 p-8 justify-center">
        <CandidateCard
          img={"/person2.png"}
          nama={"Kandidat 1"}
          deskripsi={
            "Deskripsi singkat kandidat Deskripsi singkat kandidat Deskripsi singkat kandidat"
          }
        />
      </div>
    </div>
  );
};

export default Voting;
