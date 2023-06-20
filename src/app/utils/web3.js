import { Web3, Contract } from "web3";

let web3;

export const connectWeb3 = async () => {
  // Cek jika web3 sudah ada di browser
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      // Minta izin untuk mengakses akun pengguna
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // Buat instance Web3 dengan provider dari Metamask atau wallet lainnya
      web3 = new Web3("http://127.0.0.1:9545");
    } catch (error) {
      console.error(error);
      throw new Error("Gagal terhubung dengan provider Web3");
    }
  } else {
    throw new Error("Provider Web3 tidak ditemukan");
  }
};

export { web3 };
