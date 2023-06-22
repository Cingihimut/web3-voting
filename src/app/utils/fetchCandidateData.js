// import web3 from "web3";
import { Contract, Web3 } from "web3";
import contractABI from "../../../build/contracts/TestVote"; // Import ABI dari smart contract
const web3 = new Web3("http://localhost:9545");
const contractAddress = "0x004cB9e3e476460a63F14F5E5212C7114d0A0aB6"; // Alamat kontrak smart contract
const contract = new Contract(contractABI.abi, contractAddress, web3);

export const fetchCandidateData = async () => {
  try {
    const candidateCount = await contract.methods.candidatesCount().call();
    const candidates = [];

    for (let i = 1; i <= candidateCount; i++) {
      const candidate = await contract.methods.candidates(i).call();
      candidates.push(candidate);
    }
    return candidates;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch candidate data");
  }
};
