import React, { createContext, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);

    const connectWallet = async () => {
        try {
            // Initialize Web3Modal
            const web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions: {}, 
            });

            const instance = await web3Modal.connect();

            // Create a provider using ethers.js
            const ethersProvider = new ethers.BrowserProvider(instance); // ✅ Fix applied

            // Get the signer
            const userSigner = await ethersProvider.getSigner();

            // Get wallet address
            const address = await userSigner.getAddress();

            setWalletAddress(address);
            setProvider(ethersProvider);
            setSigner(userSigner);

            localStorage.setItem("walletAddress", address);
            localStorage.setItem("provider", ethersProvider);
            localStorage.setItem("signer", userSigner);

            console.log("Connected Address:", address);
            
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    const disconnectWallet = () => {
        setWalletAddress('');
        setProvider(null);
        setSigner(null);
        localStorage.removeItem("walletAddress");
    };

    return (
        <WalletContext.Provider
            value={{
                walletAddress,
                provider,
                signer,
                connectWallet,
                disconnectWallet,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};
