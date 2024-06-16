
# APT-Casino [Place Your Best Move with Move]

We decided to build APT-Casino after witnessing the frustrations and challenges faced by new users in the web3 space and online gambling ecosystems. Traditional online gambling platforms often suffer from issues such as lack of transparency, centralized control, and hidden restrictions. This experience highlighted the need for a transparent, fair, and user-centric gaming platform. Inspired by the potential of Aptos, Petra, and Okto, we set out to create APT-Casino - a platform that provides a safe, enjoyable, and transparent gaming experience.

APT-Casino is an innovative decentralized platform that provides a transparent, fair, and engaging gaming experience on the Aptos blockchain. Our mission is to empower users with true ownership of their assets, fair gameplay, and a secure environment free from exploitative practices. The platform currently features a proof of concept (MVP) of one game, a fully functional roulette game, allowing users to place various types of bets. Powered by Aptos on-chain randomness, the roulette wheel ensures fair and verifiable randomness. APT-Casino also offers a robust lending service where users can deposit tokens from any supported chain as collateral to borrow assets, facilitating seamless gameplay without the need to liquidate their holdings.

## Key Features

1. **Transparent and Fair Gaming**: Provably fair gameplay utilizing Aptos on-chain randomness module to ensure game outcomes are transparent and verifiably fair.
2. **Seamless Cross-Chain Integration**: Effortless asset management and transfers between Aptos and other supported networks using Petra and Okto.
3. **User-Friendly Wallet Integration**: Integrated Petra and Okto wallets provide a secure and user-friendly interface for managing funds, placing bets, and interacting with casino games.

## Technical Architecture

![captures_chrome-capture-2024-5-16 (2)](https://github.com/Kali-Decoder/Move_Roulette/assets/69464744/6f951ad3-510a-4bf6-9ace-f5d937467351)

Building APT-Casino involved the integration of multiple technologies to ensure a robust, transparent, and user-friendly platform. We started by utilizing Aptos capabilities to implement on-chain randomness for fair gameplay. The core gaming logic, specifically for the roulette game, was developed and deployed on the Aptos network, leveraging its fast transaction speeds and secure infrastructure. For user-friendly and secure wallet integration, we incorporated Petra and Okto's embedded wallet technologies, providing a seamless experience for managing funds and interacting with the platform. We also implemented a lending service that allows users to deposit tokens from any supported chain as collateral to borrow assets. The cross-chain compatibility facilitated seamless asset transfers and communication across different blockchain networks.

## TechStack

- Next.js
- Javascript
- Tailwind CSS
- Move
- Petra Wallet SDK
- Okto Wallet SDK
- Aptos randomness module: aptos_framework::randomness

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

## Bounty Tracks Applied for
1. **Ace of Spades Track**
2. **Bridge Builder Track**
3. **Okto Track**

## Deployed Contracts
- **Roulette Contract**: https://aptoscan.com/transaction/23795743?network=devnet
- **Roulette Reward Token Contract** : https://aptoscan.com/module/0x25e6d86a5a7083d9d61e40381e5238ab6d2e785825eba0183cebb6009483dab4/fa_coin?network=devnet
  
### Aptos Network
![captures_chrome-capture-2024-5-16 (1)](https://github.com/Kali-Decoder/Move_Roulette/assets/69464744/fb5d3382-6122-4e64-a251-78e89265fb52)

### Platform UI 
![IMAGE 2024-06-16 04:36:24](https://github.com/Kali-Decoder/Move_Roulette/assets/82640789/7ad111b0-f24e-466f-96b7-ad1a03b4cab3)
![IMAGE 2024-06-16 04:36:22](https://github.com/Kali-Decoder/Move_Roulette/assets/82640789/477bf1b5-abe9-4b0d-a510-fb09e9db6d29)
![IMAGE 2024-06-16 04:36:20](https://github.com/Kali-Decoder/Move_Roulette/assets/82640789/4047e5c0-6eaf-4320-8d08-722c9438fdf2)
![IMAGE 2024-06-16 04:36:14](https://github.com/Kali-Decoder/Move_Roulette/assets/82640789/14c9d9d5-14b4-4c1e-8e02-7b69878813d2)
![IMAGE 2024-06-16 04:36:25](https://github.com/Kali-Decoder/Move_Roulette/assets/82640789/d4e3b1dd-0627-469c-9956-38a9f3c95516)
![captures_chrome-capture-2024-5-16 (3)](https://github.com/Kali-Decoder/Move_Roulette/assets/69464744/02fa3ea9-d0bb-4ffe-b6d7-9ddba059629e)
