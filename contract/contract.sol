// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlipWithBet {

    // Event to show results on frontend
    event CoinFlipped(address player, uint betAmount, bool playerWon);

    // Function to flip a coin (0 = heads, 1 = tails)
    function flip(uint guess) public payable {
        require(msg.value > 0, "Place a bet to play!");
        require(guess == 0 || guess == 1, "Guess must be 0 or 1");

        // Very simple randomness (not secure but okay for beginners)
        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.difficulty, msg.sender)
            )
        ) % 2;

        bool won = (guess == random);

        if (won) {
            // Player gets double their money
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit CoinFlipped(msg.sender, msg.value, won);
    }

    // Function to allow contract owner to deposit funds for payouts
    receive() external payable {}

    // Check balance of contract
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}
