import React, { useState } from "react";

// Sub-pages
import CreateOrRestore from "./pages/CreateOrRestore";
import ChooseUsername from "./pages/ChooseUsername";
import ChooseAvatar from "./pages/ChooseAvatar";
import StopCreation from "./pages/StopCreation";

const createOrRestoreId = "createOrRestoreId";
const chooseAvatarId = "chooseAvatarId";
const chooseUsernameId = "chooseUsernameId";
const stopCreationId = "stopCreationId";

function CreateAccountRoot() {
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
          nextStage={() => setStage(chooseAvatarId)}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case chooseAvatarId:
      return (
        <ChooseAvatar
          nextStage={() => setStage("next")}
          exitStage={() => setStage(stopCreationId)}
        />
      );
    case stopCreationId:
      return <StopCreation nextStage={() => setStage("chooseUsernameId")} />;
    default:
      return <h1>Ops</h1>;
  }
}

export default CreateAccountRoot;
