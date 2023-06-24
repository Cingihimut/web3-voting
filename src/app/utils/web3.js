import { Web3 } from "web3";
let web3;
const setInfuraSepoliaNetwork = async () => {
  const networkName = "Sepolia ETH Amivote"; // Nama jaringan yang ingin diatur
  const rpcUrl = process.env.INFURA_API_KEY; // RPC URL Infura Sepolia

  try {
    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0xaa36a7", // ID jaringan, gunakan ID yang sesuai
          chainName: networkName,
          nativeCurrency: {
            name: "SepoliaETH", // Nama mata uang jaringan
            symbol: "SETH", // Simbol mata uang jaringan
            decimals: 18,
          },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: ["https://sepolia.etherscan.io/"], // URL explorer block jaringan
        },
      ],
    });
  } catch (error) {
    console.error("Gagal mengatur jaringan di Metamask:", error);
  }
};
export const connectWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      try {
        await setInfuraSepoliaNetwork();
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    } else {
      reject(new Error("Metamask tidak tersedia di browser"));
    }
  });
};

export { web3 };
