import React, { useState } from "react";
import Modal from "./Modal";

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connectWeb3();

      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setConnectedAddress(accounts[0]);
      }
    } catch (error) {
      setIsModalOpen(true);
      console.error(error);
      console.log(isModalOpen);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleConnect}>Connect</button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>Error connecting to web3 provider</p>
        </Modal>
      )}
    </div>
  );
};

export default ParentComponent;
