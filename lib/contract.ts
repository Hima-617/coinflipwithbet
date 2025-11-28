export const contractAddress = "0xe4dC532e8748615b91250f9046b69219E80cbdb1";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "betAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "playerWon",
        "type": "bool"
      }
    ],
    "name": "CoinFlipped",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "guess",
        "type": "uint256"
      }
    ],
    "name": "flip",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;