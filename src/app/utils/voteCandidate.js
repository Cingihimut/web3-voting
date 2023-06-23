import contract from "./contract";
import { connectWeb3 } from "./web3";
export const voteCandidate = async (id) => {
  try {
    const web3 = await connectWeb3();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    if (accounts.length < 0) {
      throw new Error("Silahkan hubungkan dengan metamask");
    }
    const result = await contract.methods.vote(id).send({
      from: accounts[0],
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
    throw new Error(`Error : ${error.message}`);
  }
};
