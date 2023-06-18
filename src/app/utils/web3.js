import Web3 from "web3";

export let web3 = null;

export const connectWeb3 = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      web3 = new Web3(window.ethereum);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to connect to Web3 provider");
    }
  } else {
    throw new Error("Web3 provider not found");
  }
};
