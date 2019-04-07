import React, { useState } from "react";
import defaultAvatar from "images/defaultAvatar.png";

// Sub-pages
import MyIdentity from "./pages/MyIdentity";
import ChooseAvatar from "./pages/ChooseAvatar";
import StopCreation from "./pages/StopCreation";
import PasswordWarning from "./pages/PasswordWarning";
import ChoosePassword from "./pages/ChoosePassword";
import BackupWarning from "./pages/BackupWarning";
import MakeBackup from "./pages/MakeBackup";
import SuccessEnter from "./pages/SuccessEnter";

const myIdentityId = "myIdentityId";
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
  const [stage, setStage] = useState(myIdentityId);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);

  switch (stage) {
    case myIdentityId:
      return (
        <MyIdentity
          nextStage={() => setStage(chooseUsernameId)}
          exitStage={() => window.history.back()}
          avatarStage={() => setStage(chooseAvatarId)}
          avatar={avatar}
          setUsername={setUsername}
          username={username}
        />
      );

    case chooseAvatarId:
      return (
        <ChooseAvatar
          nextStage={() => setStage(myIdentityId)}
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
