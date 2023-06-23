"use client";
import CandidateCard from "../components/CandidateCard";
import { fetchCandidateData } from "../utils/fetchCandidateData";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
const Voting = () => {
  let [voting, setVoting] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const getVoting = async () => {
      try {
        let data = await fetchCandidateData();
        setVoting(data);
        setIsHidden(!isHidden);
        console.log(data);
      } catch (error) {
        setIsHidden(!isHidden);
        console.log(error.message);
      }
    };

    getVoting();
  }, []);
  return (
    <div className="flex flex-wrap mt-6">
      {isHidden ? (
        voting.map((kandidat) => (
          <div
            className="w-full flex md:w-1/2 p-8 justify-center"
            key={kandidat.id}
          >
            <CandidateCard
              img={"/person2.png"}
              nama={kandidat.name}
              deskripsi={kandidat.deskripsi}
              id={kandidat.id}
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
