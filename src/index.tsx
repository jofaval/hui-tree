import React from "react";
import ReactDOM from "react-dom/client";
import { TreeView } from "./components/TreePlayground/TreeView";

function App() {
  return (
    <TreeView
      nodes={[
        { id: 0, name: "Node 0", parent: null },
        { id: 1, name: "Node 1", parent: { id: 1 } },
        { id: 2, name: "Node 2", parent: { id: 2 } },
        { id: 3, name: "Node 3", parent: { id: 1 } },
      ]}
      options={{
        parentIdKey: "parent.id",
        idKey: "id",
      }}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
