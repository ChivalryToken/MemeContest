# MemeContest

MemeContest is a smart contract that allows users to submit memes to a contest, with rewards distributed to winners based on the scores of their submissions.

## Requirements

- Node.js
- Hardhat

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/MemeContest.git`
2. Install dependencies: `npm install`

## Usage

1. Compile the smart contract: `npx hardhat compile`
2. Deploy the smart contract: `npx hardhat run scripts/deploy.js --network arbitrumOne`
3. Verify the smart contract on Etherscan: `npx hardhat verify --network arbitrumOne DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" "Constructor argument 2"`
4. Interact with the smart contract through the frontend or the Hardhat console: `npx hardhat console --network arbitrumOne`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
