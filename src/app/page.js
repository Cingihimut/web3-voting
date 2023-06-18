"use client";
import { useEffect, useState } from "react";
import Web3 from "web3";
import ContractABI from "../../contracts/Pemilih.json";
import SectionHeader from "./components/home/SectionHeader";
const Home = () => {
  const [contractInstance, setContractInstance] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    const init = async () => {
      // Menginisialisasi Web3
      if (window.ethereum) {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ContractABI.networks[networkId];
        const contract = new web3.eth.Contract(
          ContractABI.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContractInstance(contract);
      }
    };

    init();
  }, []);
  const fetchData = async () => {
    try {
      // Mendapatkan data dari kontrak
      const result = await contractInstance.methods.getData().call();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SectionHeader />
    </>
  );
};

export default Home;
