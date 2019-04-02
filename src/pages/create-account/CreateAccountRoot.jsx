// Imports
import React, { useState } from "react";
import createAccountHelper from "helpers/createAccountHelper";
import defaultAvatar from "images/defaultAvatar.png";

// Sub-pages
import BackupWarning from "./pages/BackupWarning";
import ChooseAvatar from "./pages/ChooseAvatar";
import ChoosePassword from "./pages/ChoosePassword";
import ChooseUsername from "./pages/ChooseUsername";
import CreateOrRestore from "./pages/CreateOrRestore";
import ErrorAccount from "./pages/ErrorAccount";
import MakeBackup from "./pages/MakeBackup";
import PasswordWarning from "./pages/PasswordWarning";
import ProcessAccount from "./pages/ProcessAccount";
import StopCreation from "./pages/StopCreation";
import SuccessEnter from "./pages/SuccessEnter";

// Ids
const backupWarningId = "backupWarningId";
const chooseAvatarId = "chooseAvatarId";
const choosePasswordId = "choosePasswordId";
const chooseUsernameId = "chooseUsernameId";
const createOrRestoreId = "createOrRestoreId";
const errorAccountId = "errorAccountId";
const makeBackupId = "makeBackupId";
const passwordWarningId = "passwordWarningId";
const processAccountId = "processAccountId";
const stopCreationId = "stopCreationId";
const successEnterId = "successEnterId";

function CreateAccountRoot() {
  const [stage, setStage] = useState(chooseAvatarId);

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
