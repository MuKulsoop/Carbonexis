import asyncHandler from "express-async-handler";
import Transaction from "../models/transaction.model.js";
import SupportNFT from "../models/supportNFT.model.js"; // SupportNFT model
import CarbonCredit from "../models/certification.model.js"; // CarbonCredit model
import User from "../models/user.model.js"; 

// Record a new transaction
const createTransaction = asyncHandler(async (req, res) => {
  const { buyerId, sellerId, type, itemId, amount, transactionHash } = req.body;

  // Validate the buyer and seller exist
  const buyer = await User.findById(buyerId);
  const seller = await User.findById(sellerId);
  
  if (!buyer || !seller) {
    res.status(404).json({ message: "Buyer or Seller not found" });
    return;
  }

  // Validate item based on type (SupportNFT or Carbon Credit)
  let item;
  if (type === "NFT") {
    item = await SupportNFT.findById(itemId);
    if (!item) {
      res.status(404).json({ message: "SupportNFT item not found" });
      return;
    }
  } else if (type === "CarbonCredit") {
    item = await CarbonCredit.findById(itemId);
    if (!item) {
      res.status(404).json({ message: "Carbon Credit item not found" });
      return;
    }
  } else {
    res.status(400).json({ message: "Invalid item type" });
    return;
  }

  // Create the transaction
  const newTransaction = new Transaction({
    buyer: buyerId,
    seller: sellerId,
    type,
    itemId,
    amount,
    transactionHash,
  });

  const savedTransaction = await newTransaction.save();
  res.status(201).json(savedTransaction);
});

// Get all transactions for a specific user (buyer or seller)
const getTransactionsByUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // Fetch all transactions where the user is either the buyer or the seller
  const transactions = await Transaction.find({
    $or: [{ buyer: userId }, { seller: userId }],
  }).populate("buyer seller itemId");

  if (transactions.length === 0) {
    res.status(404).json({ message: "No transactions found" });
    return;
  }

  res.status(200).json(transactions);
});

// Get a specific transaction by transaction hash
const getTransactionByHash = asyncHandler(async (req, res) => {
  const { transactionHash } = req.params;

  const transaction = await Transaction.findOne({ transactionHash }).populate("buyer seller itemId");

  if (!transaction) {
    res.status(404).json({ message: "Transaction not found" });
    return;
  }

  res.status(200).json(transaction);
});

export { createTransaction, getTransactionsByUser, getTransactionByHash };
