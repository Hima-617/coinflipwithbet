// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract CoinFlipWithBet {

    event CoinFlipped(address player, uint betAmount, bool playerWon);

    function flip(uint guess) public payable {
        require(msg.value > 0, "Place a bet to play!");
        require(guess == 0 || guess == 1, "Guess must be 0 or 1");

        // Updated randomness (using prevrandao instead of difficulty)
        uint random = uint(
            keccak256(
                abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)
            )
        ) % 2;

        bool won = (guess == random);

        if (won) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit CoinFlipped(msg.sender, msg.value, won);
    }

    receive() external payable {}

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}
