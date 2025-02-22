import { ethers, Contract } from 'ethers';
import CertificationNFT from './CertificationNFT.json'; 

const CONTRACT_ADDRESS = '0x37B9db7F5f1ec575E8D826a5b3b99E8043f1C3aa'; 

// Function to get the contract instance
export const getContract = (signer) => {
    return new Contract(CONTRACT_ADDRESS, CertificationNFT, signer);
};

// Function to Mint Certification NFT
export const mintCertificationNFT = async (metadataLink, signer) => {
    try {
        const contract = getContract(signer);
        const tx = await contract.mintCertificationNFT(metadataLink);
        console.log("Transaction sent: ", tx.hash);

        const receipt = await tx.wait(); // Wait for confirmation
        console.log("Transaction confirmed: ", receipt.transactionHash);

        const event = receipt.logs.find((log) =>
            log.topics.includes(ethers.id("NFTMinted(uint256,address,string)"))
        );

        if (!event) throw new Error("NFT minting failed!");

        const projectId = ethers.toBigInt(event.topics[1]);  // ✅ FIXED
        return projectId.toString();
    } catch (error) {
        console.error("Blockchain Error:", error);
        throw new Error("NFT minting failed!");
    }
};

// Function to Register Project on Blockchain
export const registerProjectOnChain = async (signer, projectId, name, description, location, creditsPricePerTon, carbonCreditsIssued) => {
    try {
        const contract = getContract(signer);
        const tx = await contract.registerProject(
            projectId,
            name,
            description,
            location,
            ethers.parseUnits(creditsPricePerTon.toString(), 18), // Ensure correct format
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
