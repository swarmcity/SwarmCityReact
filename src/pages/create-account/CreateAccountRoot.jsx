// Imports
import React, { useState } from "react";
import createAccountHelper from "helpers/createAccountHelper";
import defaultAvatar from "images/defaultAvatar.png";

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
import ErrorAccount from "./pages/ErrorAccount";
import ProcessAccount from "./pages/ProcessAccount";

// Ids
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
const errorAccountId = "errorAccountId";
const processAccountId = "processAccountId";

function CreateAccountRoot() {
  const [stage, setStage] = useState(chooseUsernameId);

  // User Creation state
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("No error");

  // Methods
  async function createAccount() {
    console.log({ username, avatar, password });
    setStage(processAccountId);
    try {
      await createAccountHelper({ username, avatar, password });
      setStage(makeBackupId);
    } catch (e) {
      setStage(errorAccountId);
      setError(e.message);
    }
  }

  // Router
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
          avatar={avatar}
          setUsername={setUsername}
          username={username}
        />
      );
    case chooseAvatarId:
      return (
        <ChooseAvatar
          nextStage={() => setStage(chooseUsernameId)}
          setAvatar={setAvatar}
        />
      );
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
          createAccount={createAccount}
          exitStage={() => setStage(stopCreationId)}
          setPassword={setPassword}
          password={password}
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
    case errorAccountId:
      return <ErrorAccount error={error} />;
    case processAccountId:
      return <ProcessAccount />;
    case successEnterId:
      return <SuccessEnter />;
    default:
      return <h1>Ops</h1>;
  }
}

export default CreateAccountRoot;
