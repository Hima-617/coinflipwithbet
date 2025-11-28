# Coin Flip Betting DApp on Flare (Coston2 Testnet)

## **Contract Address**
`0xe4dC532e8748615b91250f9046b69219E80cbdb1`  
Explorer: https://coston2-explorer.flare.network/address/0xe4dC532e8748615b91250f9046b69219E80cbdb1

---

## **Project Description**
This project is a decentralized Coin Flip betting game built on the Flare Coston2 Testnet.  
Users can connect their wallet, place a bet in FLR, choose **heads or tails**, and let the smart contract decide the outcome using on-chain logic.

If the user wins, the contract pays out double the bet.  
If the user loses, the bet amount remains in the contract.

The DApp is built using:
- **Next.js**
- **Wagmi + Viem**
- **Smart contract deployed on Flare Coston2**

---

## **Features**
###  **Core Features**
- **Real-time wallet connection** using Wagmi
- **Bet FLR** in a decentralized manner
- **Choose heads or tails**
- **Smart contract resolves winner instantly**
- **Automatic payout** to winner
- **Displays contract balance in real-time**
- **Tx status tracking** (pending → confirming → confirmed)
- **Full error handling + loading states**

### 🛠 **Developer Features**
- Clean and modular hooks (`useContract`)
- Reusable components with clear UI/UX
- Fully typed TypeScript contract interaction
- Easy to integrate into any Next.js Wagmi app

---

## **How It Solves the Problem**

### Traditional Web Betting Problems
- Centralized control → risk of manipulation  
- No transparency in payouts  
- Slow settlement  
- Requires trust in operator  

### How This DApp Fixes It
This project uses **blockchain transparency** and a **non-custodial smart contract** to ensure:
- **Trustless gaming** → results cannot be manipulated  
- **Instant payouts** → handled automatically by contract  
- **Full transparency** → all bets + flips are visible on-chain  
- **Self-custody** → player controls funds at all times  
- **No middlemen** → reduces cost, increases fairness  

### Use Cases
- Fun on-chain betting games  
- Blockchain gaming demonstrations  
- Web3 education & workshops  
- Smart contract testing and interactive demos  

---

## **Summary**
This project demonstrates how a decentralized betting mechanism can be implemented using Flare smart contracts, Wagmi hooks, and a clean Next.js UI.  
It prioritizes **fairness, transparency, and simplicity**, making it a great example for Web3 beginners and developers integrating smart contract interactions.

