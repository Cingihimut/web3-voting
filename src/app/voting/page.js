"use client";
import CandidateCard from "../components/CandidateCard";
import { fetchCandidateData } from "../utils/fetchCandidateData";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { voteCandidate } from "../utils/voteCandidate";
const Voting = () => {
  let [voting, setVoting] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    const getVoting = async () => {
      try {
        let data = await fetchCandidateData();
        setVoting(data);
        setIsHidden(!isHidden);
      } catch (error) {
        setIsHidden(!isHidden);
        console.log(error);
      }
    };

    getVoting();
  }, []);
  const handleVote = async (id_kandidat) => {
    try {
      if (!isVoted) {
        let result = await voteCandidate(id_kandidat);
        if (result) {
          setIsVoted(true);
        }
      }
    } catch (err) {
      setIsVoted(false);
    }
  };
  return (
    <div className="flex flex-wrap mt-6">
      {isHidden ? (
        voting.map((kandidat) => (
          <div
            className="w-full flex md:w-1/2 p-8 justify-center"
            key={kandidat.id}
          >
            <CandidateCard
              img={`/person${kandidat.id}.png`}
              nama={kandidat.name}
              deskripsi={kandidat.deskripsi}
              id={kandidat.id}
              isVoted={isVoted}
              handleVote={handleVote}
            />
          </div>
        ))
      ) : (
        <Loading pesan="Sedang mendapatkan data kandidat" />
      )}
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
