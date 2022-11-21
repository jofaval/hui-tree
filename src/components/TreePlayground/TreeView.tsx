import { useMemo } from "react";
import { getDynamicObjectKey } from "../../utils/getDynamicObjectKey";

type TNode = {
  id: number;
  name?: string;
  parent?: TNode | null;
};

type NodeProps = TNode & {
  children?: JSX.Element | JSX.Element[];
  onClick: () => void;
};

export function Node({ name }: NodeProps) {
  return <p>{name}</p>;
}

type TOptions = {
  idKey: string;
  parentIdKey: string;
};

type TreeViewNode = TNode & {
  selected?: boolean;
  expanded?: boolean;
};

type TreeViewProps = {
  nodes: TNode[];
  options?: TOptions;
};

const DEFAULT_OPTIONS = {
  idKey: "id",
  parentIdKey: "parent.id",
} as const;

type ParentId = number | string | null;

export function TreeView({ nodes, options = DEFAULT_OPTIONS }: TreeViewProps) {
  const { nodeMapById, nodeMapByParentId } = useMemo(() => {
    const nodeMapById = new Map<number | string, TNode>();
    const nodeMapByParentId = new Map<ParentId, TNode[]>();

    nodes.forEach((node) => {
      // FIXME: Not typesafe in the slightest
      const id = getDynamicObjectKey({ element: node, key: options.idKey });

      if (!id) {
        throw new Error(
          "No ID was found for node, or it was empty: ".concat(
            JSON.stringify(node)
          )
        );
      }

      if (nodeMapById.get(id)) {
        throw new Error(
          "There can not be two nodes with the same ID".concat(
            id.toString(),
            JSON.stringify({ saved: nodeMapById.get(id), found: node })
          )
        );
      }

      nodeMapById.set(id, node);

      const parentId = getDynamicObjectKey({
        element: node,
        key: options.parentIdKey,
      }) as ParentId;

      const parentChildren = nodeMapByParentId.get(parentId);
      if (!parentChildren) {
        nodeMapByParentId.set(parentId, [node]);
      } else {
        nodeMapByParentId.set(parentId, [...parentChildren, node]);
      }
    });

    return { nodeMapById, nodeMapByParentId };
  }, [nodes]);

  return (
    <div className="treeview">
      {nodes && nodes.length
        ? [...nodeMapById].map(([key, nodeProps]) => (
            <Node {...nodeProps} onClick={() => {}} key={key} />
          ))
        : null}
    </div>
  );
}
