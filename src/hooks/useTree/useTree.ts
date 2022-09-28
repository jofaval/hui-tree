// Vendors
import { useEffect, useState } from "react";
// Hooks
import { useTreeHandlers } from "./handlers/useTree.handlers";
// Types
import type {
  useTreeProps,
  useTreeResponse,
  useTreeType,
} from "./types/useTree.types";

export const useTree = <Item>(props: useTreeProps): useTreeResponse => {
  const [availableItems, setAvailableItems] = useState<Item[]>([]);
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  const { onSearchTextChanged } = useTreeHandlers({
    ...props,
    setAvailableItems,
    availableItems,
  });

  useEffect(() => {
    onSearchTextChanged();
  }, [props.data, props.searchDetails?.text]);

  const onSelectionChanged = () => {};

  return {
    // getWrapper,
    onSelectionChanged,
  };
};
