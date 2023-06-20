import web3 from "./web3";
// import { Contract } from "web3";
import contractABI from "../contracts/VotingContract.json"; // Import ABI dari smart contract

const contractAddress = "0x723ce50ec19690f391f7823bcDf5d178fE0D2805"; // Alamat kontrak smart contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

export const fetchCandidateData = async () => {
  try {
    const candidateCount = await contract.methods.candidateCount().call();
    const candidates = [];

    for (let i = 0; i < candidateCount; i++) {
      const candidate = await contract.methods.getCandidate(i).call();
      candidates.push(candidate);
    }

    return candidates;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch candidate data");
  }
};
