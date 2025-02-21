import { ethers } from 'ethers';
import { Contract } from 'ethers';

import CertificationNFT from './CertificationNFT.json'; // Import your contract ABI

const CONTRACT_ADDRESS = ''; // Update with your deployed contract address

// Function to get the contract instance
export const getContract = async (signer) => {
    return new Contract(CONTRACT_ADDRESS, FinvestABI, signer);
};

// Function to Mint Certification NFT
export const mintCertificationNFT = async (metadataLink) => {
    try {
      const tx = await contract.mintCertificationNFT(metadataLink);
      console.log("Transaction sent: ", tx.hash);
  
      const receipt = await tx.wait(); // Wait for confirmation
      console.log("Transaction confirmed: ", receipt.transactionHash);
  
      const event = receipt.logs.find((log) =>
        log.topics.includes(ethers.id("NFTMinted(uint256,address,string)"))
      );
  
      if (!event) throw new Error("NFT minting failed!");
  
      const projectId = ethers.getBigInt(event.topics[1]);
      return projectId.toString();
    } catch (error) {
      console.error("Blockchain Error:", error);
      throw new Error("NFT minting failed!");
    }
  };
  

// Function to Register Project on Blockchain
export const registerProjectOnChain = async (projectId, name, description, location, creditsPricePerTon, carbonCreditsIssued) => {
    try {
      const tx = await contract.registerProject(
        projectId,
        name,
        description,
        location,
        ethers.parseUnits(creditsPricePerTon.toString(), 18),
        carbonCreditsIssued
      );
      console.log("Transaction sent: ", tx.hash);
  
      await tx.wait();
      console.log("Project registered successfully!");
      return true;
    } catch (error) {
      console.error("Blockchain Error:", error);
      throw new Error("Project registration failed on blockchain.");
    }
  };