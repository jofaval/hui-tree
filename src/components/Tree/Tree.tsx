// Vendors
import React from "react";
import { useTree } from "../../hooks";
// Mocks
import * as treeData from "./mocks/treeData.json";

const Tree: React.FC<> = () => {
  const {} = useTree<typeof treeData>();
};

export default Tree;
