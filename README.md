# Carbonexis

## 🌍 Project Overview
Carbonexis is a **blockchain-based carbon credit trading platform** designed to bring **transparency, efficiency, and accountability** to the carbon credit market. By leveraging **NFTs (ERC1155) and Carbon Credit Tokens (ERC20)**, the platform enables organizations to **certify, tokenize, and trade carbon credits** while allowing individuals to support climate initiatives through **NFT purchases**.

### 🌱 The Problem We Solve
The current carbon credit market faces multiple challenges:
- **Lack of Transparency** – Many carbon credits lack verifiable authenticity, leading to fraud.
- **Cumbersome Bureaucracy** – Traditional trading processes are slow, inefficient, and involve excessive paperwork.
- **Limited Accessibility** – Small organizations and individuals often struggle to participate in the carbon economy.

### 💡 How Carbonexis Solves This
Carbonexis utilizes **blockchain technology** to create a **tamper-proof, verifiable, and user-friendly ecosystem** for carbon credit management.

### 🚀 Key Features
✅ **Dual Marketplace**
   - **NFT Marketplace (ERC1155):** Organizations mint and sell environmental artwork to raise funds.
   - **Carbon Credit Marketplace (ERC20):** Companies trade blockchain-backed carbon credits at a price per ton.

✅ **Soulbound Certification NFT (ERC721)**
   - All projects undergo **KYC verification** before trading carbon credits.
   - Certified projects receive a **non-transferable ERC721 NFT**, proving legitimacy.

✅ **Automated Smart Contract Workflows**
   - **EIP-2981 Royalty Compliant NFT Sales**
   - **Bulk Carbon Credit Purchases**
   - **Automated NFT Minting for Verified Organizations**

✅ **Seamless User Experience**
   - **Project Verification:** Organizations must be KYC verified before listing.
   - **Blockchain Storage:** All project data is securely stored on-chain.
   - **Effortless Transactions:** Buy, sell, and trade with just a few clicks.

### 🛠️ Technology Stack
- **Frontend:** React (MERN Stack), Tailwind CSS
- **Backend:** Node.js + Express
- **Blockchain:** Polygon (Mainnet), Sepolia (Testnet for development)
- **Storage:** IPFS for NFT metadata and project documents

---

## 📦 Dependencies
To run Carbonexis, ensure you have the following dependencies installed:

### **Backend Dependencies**
| Dependency      | Version  |
|---------------|---------|
| Node.js       | 18.x    |
| Express       | 4.18.x  |
| Web3.js       | 1.8.x   |
| IPFS HTTP Client | 51.x   |
| dotenv        | 16.x    |
| cors          | 2.8.x   |

### **Frontend Dependencies**
| Dependency      | Version  |
|---------------|---------|
| React.js      | 18.x    |
| Next.js       | 13.x    |
| Tailwind CSS  | 3.x     |
| ethers.js     | 5.7.x   |
| Redux Toolkit | 1.9.x   |
| Material-UI   | 5.x     |

### **Smart Contract Dependencies**
| Dependency      | Version  |
|---------------|---------|
| Solidity      | 0.8.20  |
| Hardhat       | 2.15.x  |
| OpenZeppelin Contracts | 4.9.x |
| Chai          | 4.3.x   |
| dotenv        | 16.x    |

Ensure all dependencies are installed using **npm** or **yarn** before running the project.

---

## 🚀 Installation & Setup

### **Clone the Repository**
```bash
# Clone the repo
git clone https://github.com/yourusername/carbonexis.git
cd carbonexis
```
## 🛠 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/carbonexis.git
cd carbonexis
```
### 2️⃣ Install Backend Dependencies
```sh
cd backend
npm install
```
### 3️⃣ Configure Environment Variables
Create a .env file in the backend folder and add:
```env
MONGO_URI=your_mongodb_uri
PRIVATE_KEY=your_wallet_private_key
INFURA_API_KEY=your_infura_api_key
```
### 4️⃣ Start Backend Server
```sh
npm run dev
```
### 5️⃣ Deploy Smart Contracts
```sh
npx hardhat run scripts/deploy.js --network sepolia
```
### 6️⃣ Install Frontend Dependencies
```sh
cd frontend
npm install
```
### 7️⃣ Run Frontend Application
```sh
npm run dev
```
## 📖 Usage Guide
- 🔹 **Buying & Selling NFTs**
   - Connect your **MetaMask wallet**.

   - Navigate to the **NFT Marketplace** (/nft-market).

   - Select an NFT, click **Buy Now**, and approve the transaction.

- 🔹 **Trading Carbon Credits**
   - Go to the **Credit Marketplace** (/credit-market).

   - Choose a **carbon credit package** and select **Buy**.

   - Approve the **ERC20** token transaction in your wallet.

- 🔹 **Project Registration & Certification**
   - Organizations complete KYC verification.

   - The system mints a Soulbound NFT as **certification**.

   - Once certified, organizations can sell carbon credits.
## Deployment link:
https://carbonexis.vercel.app/
## Figma :
https://www.figma.com/design/4gNpy5CzrPQEsitTkENY9I/Carbonexis?node-id=0-1&t=Y969tcwfgvejTSyU-1
## Clips :
![Registration](https://github.com/user-attachments/assets/6a0299cd-5fb2-490c-86d3-db941f12157d)
![Screenshot 2025-03-31 005918](https://github.com/user-attachments/assets/7e2ed9f9-39a5-43b4-992b-f40e2f395a31)
![Screenshot 2025-03-31 010833](https://github.com/user-attachments/assets/08b1604d-710d-4adc-ac76-a04636cb7610)
![image](https://github.com/user-attachments/assets/27a31015-d0c6-4162-b14f-7f9180f4c219)



