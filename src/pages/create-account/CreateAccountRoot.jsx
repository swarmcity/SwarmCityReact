import React, { useState } from "react";

// Sub-pages
import ChooseUsername from "./pages/ChooseUsername";
import ChooseAvatar from "./pages/ChooseAvatar";

const chooseAvatarId = "chooseAvatarId";
const chooseUsernameId = "chooseUsernameId";

function CreateAccountRoot() {
  const [stage, setStage] = useState(chooseUsernameId);
  switch (stage) {
    case chooseUsernameId:
      return <ChooseUsername nextStage={() => setStage(chooseAvatarId)} />;
    case chooseAvatarId:
      return <ChooseAvatar nextStage={() => setStage("next")} />;
    default:
      return <h1>Ops</h1>;
  }
}

export default CreateAccountRoot;
