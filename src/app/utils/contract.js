import Web3 from "web3";
import contractABI from "../contracts/VotingContract.json";

// Membuat instance Web3
let web3;

// Mengecek jika Web3 sudah terhubung dengan Metamask
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Menggunakan Web3 dari Metamask
  web3 = new Web3("http://localhost:9545");
} else {
  // Menggunakan provider lokal (misalnya Ganache)
  const provider = new Web3.providers.HttpProvider("http://localhost:9545");
  web3 = new Web3(provider);
}

// Mendefinisikan alamat kontrak pintar
const contractAddress = "0xa085afEDfa1922E6eAA13da5C11dd2A97a465B7d"; // Ganti dengan alamat kontrak pintar yang sesuai

// Mendefinisikan instance kontrak pintar
const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

export default contract;
