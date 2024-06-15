# APT-Casino

We decided to build APT-Casino after witnessing the frustrations and challenges faced by new users in the web3 space and online gambling ecosystems. Traditional online gambling platforms often suffer from issues such as lack of transparency, centralized control, and hidden restrictions. This experience highlighted the need for a transparent, fair, and user-centric gaming platform. Inspired by the potential of Aptos, Petra, and Okto, we set out to create APT-Casino - a platform that provides a safe, enjoyable, and transparent gaming experience.

APT-Casino is an innovative decentralized platform that provides a transparent, fair, and engaging gaming experience on the Aptos blockchain. Our mission is to empower users with true ownership of their assets, fair gameplay, and a secure environment free from exploitative practices. The platform currently features a proof of concept (MVP) of one game, a fully functional roulette game, allowing users to place various types of bets. Powered by Aptos on-chain randomness, the roulette wheel ensures fair and verifiable randomness. APT-Casino also offers a robust lending service where users can deposit tokens from any supported chain as collateral to borrow assets, facilitating seamless gameplay without the need to liquidate their holdings.

## Key Features

1. **Transparent and Fair Gaming**: Provably fair gameplay utilizing Aptos on-chain randomness module to ensure game outcomes are transparent and verifiably fair.
2. **Seamless Cross-Chain Integration**: Effortless asset management and transfers between Aptos and other supported networks using Petra and Okto.
3. **User-Friendly Wallet Integration**: Integrated Petra and Okto wallets provide a secure and user-friendly interface for managing funds, placing bets, and interacting with casino games.

## Techstack

![captures_chrome-capture-2024-5-16](https://github.com/Kali-Decoder/Move_Roulette/assets/69464744/b2c1d284-c72b-442e-b80a-95178e00ec6d)

Building APT-Casino involved the integration of multiple technologies to ensure a robust, transparent, and user-friendly platform. We started by utilizing Aptos capabilities to implement on-chain randomness for fair gameplay. The core gaming logic, specifically for the roulette game, was developed and deployed on the Aptos network, leveraging its fast transaction speeds and secure infrastructure. For user-friendly and secure wallet integration, we incorporated Petra and Okto's embedded wallet technologies, providing a seamless experience for managing funds and interacting with the platform. We also implemented a lending service that allows users to deposit tokens from any supported chain as collateral to borrow assets. The cross-chain compatibility facilitated seamless asset transfers and communication across different blockchain networks.

## Challenges and Solution
- **Implementing On-Chain Randomness**
Ensuring fair play in the casino games was critical, and implementing on-chain randomness was a significant challenge. We utilized Aptos randomness module: aptos_framework::randomness to achieve provably fair outcomes for our games. This required a deep understanding of the randomness mechanisms and careful integration into our smart contracts. All though the docs provided by the Aptos were super useful.

- **Wallet Integration and User Experience**
Integrating Pedra and Okto's embedded wallet technology presented its own set of challenges. We had to ensure that the wallet packages and versions were compatible to our needs. We worked closely with couple of friends who were previously part of Aptos Winter School IIT Bombay for Pedra integration and aptos github to resolve integration issues and optimize the wallet's functionality for our needs.

- **Ensuring Cross-Chain Compatibility**
One of the major challenges we faced was ensuring smooth cross-chain compatibility. Integrating multiple blockchains and facilitating seamless asset transfers between them required meticulous planning and extensive testing.

- **Security and Testing**
Ensuring the security of our platform was a top priority, but it also posed significant challenges. We conducted extensive smart contract testing via test scripts and code reviews to identify and fix potential vulnerabilities. Implementing robust security measures for user funds and encryption of on-chain data was crucial.

- **User Onboarding**
Simplifying the onboarding process for new users was another challenge. Many users are not familiar with blockchain technology and can find it intimidating. We focused on creating a user-friendly interface and streamlined the onboarding process with Aptos Pedra and Okto easy-to-use wallet solution. This involved iterative design and testing to ensure a smoother user experience.

## Deployed Contracts

### Aptos Network
![captures_chrome-capture-2024-5-16 (1)](https://github.com/Kali-Decoder/Move_Roulette/assets/69464744/fb5d3382-6122-4e64-a251-78e89265fb52)

- **Roulette Contract**: https://aptoscan.com/transaction/23795743?network=devnet
