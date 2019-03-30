import React, { useState } from "react";

// Sub-pages
import CreateOrRestore from "./pages/CreateOrRestore";
import ChooseUsername from "./pages/ChooseUsername";
import ChooseAvatar from "./pages/ChooseAvatar";
import StopCreation from "./pages/StopCreation";
import PasswordWarning from "./pages/PasswordWarning";
import ChoosePassword from "./pages/ChoosePassword";
import BackupWarning from "./pages/BackupWarning";
import MakeBackup from "./pages/MakeBackup";
import SuccessEnter from "./pages/SuccessEnter";

const createOrRestoreId = "createOrRestoreId";
const chooseAvatarId = "chooseAvatarId";
const chooseUsernameId = "chooseUsernameId";
const stopCreationId = "stopCreationId";
const passwordWarningId = "passwordWarningId";
const choosePasswordId = "choosePasswordId";
const backupWarningId = "backupWarningId";
const unlockAccountId = "unlockAccountId";
const makeBackupId = "makeBackupId";
const successEnterId = "successEnterId";

function MyProfileRoot() {
  const [stage, setStage] = useState(createOrRestoreId);

  switch (stage) {
    case createOrRestoreId:
      return (
        <CreateOrRestore
          nextStage={() => setStage(chooseUsernameId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case chooseUsernameId:
      return (
        <ChooseUsername
          avatarStage={() => setStage(chooseAvatarId)}
          nextStage={() => setStage(passwordWarningId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case chooseAvatarId:
      return <ChooseAvatar nextStage={() => setStage(chooseUsernameId)} />;
    case stopCreationId:
      return <StopCreation nextStage={() => setStage(stopCreationId)} />;
    case passwordWarningId:
      return (
        <PasswordWarning
          nextStage={() => setStage(choosePasswordId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case choosePasswordId:
      return (
        <ChoosePassword
          nextStage={() => setStage(backupWarningId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case backupWarningId:
      return (
        <BackupWarning
          nextStage={() => setStage(backupWarningId)}
          exitStage={() => setStage(stopCreationId)}
          unlockStage={() => setStage(unlockAccountId)}
        />
      );
    case makeBackupId:
      return (
        <MakeBackup
          nextStage={() => setStage(successEnterId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case successEnterId:
      return <SuccessEnter />;
    default:
      return <h1>Ops</h1>;
  }
}

export default MyProfileRoot;
