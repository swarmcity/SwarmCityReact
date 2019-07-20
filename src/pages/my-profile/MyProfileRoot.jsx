import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { getUsername, getUserAvatar } from "services/user/selectors";
import defaultAvatar from "images/defaultAvatar.png";
import {
  UPDATE_USER_NAME,
  UPDATE_USER_AVATAR
} from "./../../services/user/actionTypes";

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

function MyProfileRoot({ pUsername, pAvatar, updateAvatar, updateUsername }) {
  const [stage, setStage] = useState(myIdentityId);
  const [username, setUsername] = useState(pUsername || "");
  const [avatar, setAvatar] = useState(pAvatar || defaultAvatar);

  const saveAvatarToStore = avatar => {
    setAvatar(avatar);
    // store
    updateAvatar(avatar);
  };

  const saveUsernameToStore = username => {
    setUsername(username);
    // store
    updateUsername(username);
  };

  switch (stage) {
    case myIdentityId:
      return (
        <MyIdentity
          nextStage={() => setStage(chooseUsernameId)}
          exitStage={() => window.history.back()}
          avatarStage={() => setStage(chooseAvatarId)}
          avatar={avatar}
          setUsername={saveUsernameToStore}
          username={username}
        />
      );

    case chooseAvatarId:
      return (
        <ChooseAvatar
          nextStage={() => setStage(myIdentityId)}
          avatar={avatar}
          setAvatar={saveAvatarToStore}
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

MyProfileRoot.propTypes = {
  pUsername: PropTypes.string,
  pAvatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  updateUsername: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  pUsername: getUsername,
  pAvatar: getUserAvatar
});

const mapDispatchToProps = dispatch => ({
  updateAvatar: avatar =>
    dispatch({ type: UPDATE_USER_AVATAR, avatar: avatar }),
  updateUsername: username =>
    dispatch({ type: UPDATE_USER_NAME, username: username })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfileRoot);
