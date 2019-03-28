import React, { useState } from "react";
import styles from "../../styles.module.css";

import newItem from "../../new-item.module.css";

// Sub-pages
import NewItemEdit from "./pages/NewItemEdit";
import ConfirmItem from "./pages/ConfirmItem";
import ProcessItem from "./pages/ProcessItem";

const newItemEditId = "newItemEditId";
const confirmItemId = "confirmItemId";
const processItemId = "processItemId";
const resultItemId = "resultItemId";
const errorItemId = "errorItemId";
const successItemId = "successItemId";

function NewItemRoot() {
  const [stage, setStage] = useState(newItemEditId);

  switch (stage) {
    case newItemEditId:
      return <NewItemEdit nextStage={() => setStage(confirmItemId)} />;
    case confirmItemId:
      return (
        <ConfirmItem
          nextStage={() => setStage(processItemId)}
          exitStage={() => setStage(newItemEditId)}
        />
      );
    case processItemId:
      return (
        <ProcessItem
          errorStage={() => setStage(errorItemId)}
          successStage={() => setStage(successItemId)}
        />
      );
    default:
      return <h1>Ops</h1>;
  }
}

export default NewItemRoot;
