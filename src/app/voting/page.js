"use client";
import CandidateCard from "../components/CandidateCard";
import { fetchCandidateData } from "../utils/fetchCandidateData";
import { useEffect, useState } from "react";
const Voting = () => {
  let [voting, setVoting] = useState([]);

  useEffect(() => {
    const getVoting = async () => {
      let data = await fetchCandidateData();
      setVoting(data);
    };

    getVoting();
  }, []);
  voting.map((a) => {
    console.log(a);
  });
  return (
    <div className="flex flex-wrap mt-6">
      {voting.map((kandidat) => (
        <div
          className="w-full flex md:w-1/2 p-8 justify-center"
          key={kandidat.id}
        >
          <h1>Total Vote {kandidat.voteCount}</h1>
          <CandidateCard
            img={"/person2.png"}
            nama={kandidat.name}
            deskripsi={kandidat.deskripsi}
          />
        </div>
      ))}
    </div>
  );
};

export default Voting;

{
  /* <div className="w-full flex md:w-1/2 p-8 justify-center">
        <CandidateCard
          img={"/person1.png"}
          nama={"Kandidat 1"}
          deskripsi={
            "Deskripsi singkat kandidat Deskripsi singkat kandidat Deskripsi singkat kandidat"
          }
        />
      </div> */
}
