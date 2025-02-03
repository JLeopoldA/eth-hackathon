'use client';

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import ArrowSvg from './svg/ArrowSvg';
import ImageSvg from './svg/Image';
import OnchainkitSvg from './svg/OnchainKit';

const components = [
  {
    name: 'Transaction',
    url: 'https://onchainkit.xyz/transaction/transaction',
  },
  { name: 'Swap', url: 'https://onchainkit.xyz/swap/swap' },
  { name: 'Checkout', url: 'https://onchainkit.xyz/checkout/checkout' },
  { name: 'Wallet', url: 'https://onchainkit.xyz/wallet/wallet' },
  { name: 'Identity', url: 'https://onchainkit.xyz/identity/identity' },
];

const templates = [
  { name: 'NFT', url: 'https://github.com/coinbase/onchain-app-template' },
  { name: 'Commerce', url: 'https://github.com/coinbase/onchain-commerce-template'},
  { name: 'Fund', url: 'https://github.com/fakepixels/fund-component' },
];

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="pt-4 pr-4">
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full p-4">
          <div className="w-1/3 mx-auto mb-6">
            <ImageSvg />
          </div>
          <div className="flex justify-center mb-6">
            <span className="dark:text-white text-black text-6xl font-bold">DJ SET NFT</span>
          </div>
          <p className="text-center mb-6">
            Sign In or Sign Up by connecting Wallet below.
          </p>
          <div className="flex flex-col items-center">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
