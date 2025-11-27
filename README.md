# 🪙 CoinFlipWithBet – Solidity Smart Contract

A simple and beginner-friendly blockchain betting game built using Solidity.  
This contract allows users to place a small ETH bet and guess the result of a virtual coin flip. If they win, they earn **2× their bet** instantly.

This project is great for learning smart contract logic such as:
- Handling ETH  
- Events  
- Randomness (pseudo-random)  
- Basic betting mechanics  
- Writing clean, readable Solidity code  

---

## 📌 Project Description

CoinFlipWithBet is a decentralized coin-toss game where players bet ETH and try their luck by selecting **Heads (0)** or **Tails (1)**.  
The contract generates a simple pseudo-random number (0 or 1) and rewards the player with double their bet amount if they win.

It’s designed to be **super simple**, **educational**, and perfect for:
- Web3 beginners  
- Hackathon submissions  
- DApp starter projects  
- Learning Solidity betting patterns  

---

## 🎮 What It Does

- Accepts a user’s bet in ETH  
- Lets the user guess **0 or 1**  
- Generates a pseudo-random outcome  
- Pays **double the bet** if the user wins  
- Emits an event to help frontend apps display results  
- Allows contract funding via `receive()`  
- Provides a function to check contract balance  

---

## ✨ Features

- **Beginner-friendly Solidity** (easy to read & understand)
- **No constructor inputs** — deploy instantly  
- **Double-reward payout system**  
- **Event logging** (`CoinFlipped`)  
- **Supports frontend integrations**  
- **Safe require validations**  
- **Simple randomness for learning** (not for production)  
- **Useful utility: `getContractBalance()`**  

---

## 🔗 Deployed Smart Contract

**Address:** XXX  
(Replace XXX with your deployed contract address when ready)

---

## 📄 Smart Contract Code

```solidity
//paste your code
# coinflipwithbet
