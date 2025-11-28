"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseEther, formatEther } from "viem"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractData {
  contractBalance: string
}

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export interface ContractActions {
  flipCoin: (guess: number, amount: string) => Promise<void>
}

export const useWillContract = () => {
  const { address } = useAccount()
  const [isLoading, setIsLoading] = useState(false)

  const { data: contractBalance, refetch: refetchBalance } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getContractBalance",
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      refetchBalance()
    }
  }, [isConfirmed, refetchBalance])

  const flipCoin = async (guess: number, amount: string) => {
    if (guess !== 0 && guess !== 1) return

    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "flip",
        args: [BigInt(guess)],
        value: parseEther(amount),
      })
    } catch (err) {
      console.error("Flip error:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const data: ContractData = {
    contractBalance: contractBalance ? formatEther(contractBalance as bigint) : "0",
  }

  const actions: ContractActions = {
    flipCoin,
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return { data, actions, state }
}
