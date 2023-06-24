import contractABI from "../../contracts/Voting";
import { connectWeb3 } from "./web3";
// Membuat instance Web3

export const createContractInstance = async () => {
  try {
    const web3 = await connectWeb3();

    const contract = new web3.eth.Contract(
      contractABI.abi,
      "0xf02aD093B043Df2115474A4A07e670Bd635018A5"
    );
    return contract;
  } catch (error) {
    console.log(error);
    return null;
  }
};
