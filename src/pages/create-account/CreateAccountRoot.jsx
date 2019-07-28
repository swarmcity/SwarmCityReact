// Imports
import React, { useState } from "react";
import defaultAvatar from "images/defaultAvatar.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

// External
import { createAccount } from "services/user/actions";
import { getUserKeystore } from "services/user/selectors";
import { createStructuredSelector } from "reselect";

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

function CreateAccountRoot({ keystore, createAccount }) {
  const [stage, setStage] = useState(createOrRestoreId);

  // User Creation state
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("No error");

  // Methods
  async function onCreateAccount() {
    console.log("Creating user", { username, avatar });
    setStage(processAccountId);
    try {
      createAccount({ username, avatar, password });
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
          onCreateAccount={onCreateAccount}
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

CreateAccountRoot.propTypes = {
  createAccount: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  keystore: getUserKeystore
});

const mapDispatchToProps = {
  createAccount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountRoot);
