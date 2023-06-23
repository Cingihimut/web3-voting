import { Web3 } from "web3";

let web3;
export const connectWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } else {
      reject(new Error("Metamask tidak tersedia di browser"));
    }
  });
};

export { web3 };
