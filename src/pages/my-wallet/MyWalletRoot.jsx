import React, { useState } from "react";

// Sub-pages
import WalletAccountList from "./pages/WalletAccountList";
import WalletMainnet from "./pages/WalletMainnet";
import WalletBridged from "./pages/WalletBridged";
import WalletConfirm from "./MyWalletConfirm";
import WalletSuccess from "./MyWalletSuccess";

const walletAccountListId = "walletAccountListId";
const walletMainnetId = "walletMainnetId";
const walletBridgedId = "walletBridgedId";
const walletConfirmId = "walletConfirmId";
const walletSuccessId = "walletSuccessId";

function MyWalletRoot() {
  const [stage, setStage] = useState(walletAccountListId);

  switch (stage) {
    case walletAccountListId:
      return (
        <WalletAccountList
          mainnetStage={() => setStage(walletMainnetId)}
          bridgedStage={() => setStage(walletBridgedId)}
        />
      );
    case walletMainnetId:
      return (
        <WalletMainnet
          backStage={() => setStage(walletAccountListId)}
          confirmStage={() => setStage(walletConfirmId)}
        />
      );
    case walletBridgedId:
      return (
        <WalletBridged
          toBackStage={() => setStage(walletAccountListId)}
          toConfirmStage={() => setStage(walletConfirmId)}
        />
      );
    case walletConfirmId:
      return <WalletConfirm toSuccessStage={() => setStage(walletSuccessId)} />;
    case walletSuccessId:
      return <WalletSuccess toBackStage={() => setStage(walletBridgedId)} />;

    default:
      return <h1>Ops</h1>;
  }
}

export default MyWalletRoot;
