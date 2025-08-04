import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";
import {WalletBatchLimitsTester} from "./components/WalletBatchLimitsTester/WalletBatchLimitsTester";
import {SignDataTester} from "./components/SignDataTester/SignDataTester";
import { MerkleExample } from "./components/MerkleExample/MerkleExample";
import { FindTransactionDemo } from './components/FindTransactionDemo/FindTransactionDemo';
import { TransferUsdt } from './components/TransferUsdt/TransferUsdt';

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "GateWallet-Test",
                name: "GateWallet-Test",
                imageUrl: "https://img.gatedataimg.com/prd-ordinal-imgs/036f07bb8730716e/gateio-0925.png",
                aboutUrl: "https://www.gate.io/",
                jsBridgeKey: "gatetonwallet",
                bridgeUrl: "https://web3-ton-bridge-test.gateweb3.cc/tonbridge_api/bridge/v1",
                platforms: ["ios", "android"],
                universalLink: "https://gate.onelink.me/Hls0/web3?gate_web3_wallet_universal_type=ton_connect",
                features: [
                  {
                    name: "SendTransaction",
                    maxMessages: 4,
                    extraCurrencySupported: false
                  }
                ]
              },
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
      >
        <div className="app">
            <Header />
            <TxForm />
            <WalletBatchLimitsTester />
            <SignDataTester />
            <TransferUsdt/>
            <CreateJettonDemo />
            <TonProofDemo />
            <FindTransactionDemo />
            <MerkleExample />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
