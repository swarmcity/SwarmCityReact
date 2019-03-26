import React, { useState } from "react";

// Sub-pages
import CreateOrRestore from "./pages/CreateOrRestore";
import ChooseUsername from "./pages/ChooseUsername";
import ChooseAvatar from "./pages/ChooseAvatar";

const createOrRestoreId = "createOrRestoreId";
const chooseAvatarId = "chooseAvatarId";
const chooseUsernameId = "chooseUsernameId";

function CreateAccountRoot() {
  const [stage, setStage] = useState(createOrRestoreId);

  switch (stage) {
    case createOrRestoreId:
      return <CreateOrRestore nextStage={() => setStage(chooseUsernameId)} />;
    case chooseUsernameId:
      return <ChooseUsername nextStage={() => setStage(chooseAvatarId)} />;
    case chooseAvatarId:
      return <ChooseAvatar nextStage={() => setStage("next")} />;
    default:
      return <h1>Ops</h1>;
  }
}

export default CreateAccountRoot;
