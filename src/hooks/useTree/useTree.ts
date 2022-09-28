// Vendors
import { useEffect, useState } from "react";
import { useSelection } from "../useSelection/useSelection";
// Hooks
import { useTreeHandlers } from "./handlers/useTree.handlers";
// Types
import type {
  useTreeProps,
  useTreeResponse,
  useTreeType,
} from "./types/useTree.types";

export const useTree = <TItem, TKey>(
  props: useTreeProps<TItem>
): useTreeResponse<TItem, TKey> => {
  const [availableItems, setAvailableItems] = useState<TItem[]>([]);

  const { onSearchTextChanged } = useTreeHandlers({
    ...props,
    setAvailableItems,
    availableItems,
  });
  const { onSelectionChanged } = useSelection<TKey>({});

  useEffect(() => {
    onSearchTextChanged();
  }, [props.data, props.searchDetails?.text]);

  return {
    // getWrapper,
    onSelectionChanged,
  };
};
