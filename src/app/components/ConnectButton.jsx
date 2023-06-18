"use client";
import { useState } from "react";
import { connectWeb3, web3 } from "../utils/web3";

const ConnectButton = () => {
  const [connectedAddress, setConnectedAddress] = useState(null);

  const handleConnect = async () => {
    try {
      await connectWeb3();

      // Di sini, Anda dapat menggunakan `web3` untuk mengakses fungsi dan data Web3
      // Contoh: memanggil smart contract, mendapatkan saldo akun, dsb.

      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setConnectedAddress(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleConnect}
      disabled={!!connectedAddress}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {connectedAddress ? connectedAddress : "CONNECT"}
    </button>
  );
};

export default ConnectButton;
