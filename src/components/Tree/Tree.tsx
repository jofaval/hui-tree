// Vendors
import React from "react";
import { useTree } from "../../hooks";
// Mocks
import * as treeData from "./mocks/treeData.json";

type ItemType = typeof treeData;

const Tree: React.FC = () => {
  const {} = useTree({
    data: treeData,
  });

  return <div className="tree_wrapper"></div>;
};

export default Tree;
