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

  const { onSearchTextChanged } = useTreeHandlers({
    ...props,
    setAvailableItems,
    availableItems,
  });

  useEffect(() => {
    onSearchTextChanged();
  }, [props.data, props.searchDetails?.text]);

  return {
    // getWrapper,
    onSelectionChanged,
  };
};
