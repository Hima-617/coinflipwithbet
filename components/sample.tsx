"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useWillContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const [guess, setGuess] = useState("0")
  const [betAmount, setBetAmount] = useState("")

  const { data, actions, state } = useWillContract()

  const handleFlip = async () => {
    try {
      await actions.flipCoin(Number(guess), betAmount)
      setBetAmount("")
    } catch (err) {
      console.error("Flip error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Coin Flip Game</h2>
          <p className="text-muted-foreground">Please connect your wallet to play.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Coin Flip Game</h1>
          <p className="text-muted-foreground text-sm mt-1">Bet FLR & guess heads or tails</p>
        </div>

        {/* Contract Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-xs uppercase mb-2">Contract Balance</p>
            <p className="text-2xl font-semibold">{data.contractBalance} FLR</p>
          </div>
        </div>

        {/* Guess */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Your Guess</label>
            <select
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
            >
              <option value="0">Heads (0)</option>
              <option value="1">Tails (1)</option>
            </select>
          </div>

          {/* Bet Input */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Bet Amount (FLR)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
            />
          </div>

          <button
            onClick={handleFlip}
            disabled={state.isLoading || state.isPending || !betAmount}
            className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50"
          >
            {state.isLoading ? "Flipping..." : "Flip Coin"}
          </button>
        </div>

        {/* Status */}
        {state.hash && (
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground uppercase mb-2">Transaction Hash</p>
            <p className="text-sm font-mono break-all mb-3">{state.hash}</p>
            {state.isConfirming && <p className="text-primary text-sm">Waiting for confirmation...</p>}
            {state.isConfirmed && <p className="text-green-500 text-sm">Transaction confirmed!</p>}
          </div>
        )}

        {state.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default SampleIntregation
