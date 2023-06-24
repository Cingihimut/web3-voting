// import web3 from "web3";
import { createContractInstance } from "./contract";

export const fetchCandidateData = async () => {
  try {
    const contract = await createContractInstance();
    const candidateCount = await contract.methods.candidatesCount().call();
    const candidates = [];

    for (let i = 1; i <= candidateCount; i++) {
      const candidate = await contract.methods.candidates(i).call();
      candidates.push(candidate);
    }
    return candidates;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch candidate data");
  }
};
