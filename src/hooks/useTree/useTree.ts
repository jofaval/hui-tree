// Vendors
import { useEffect, useState } from "react";
import { useSearch } from "../useSearch/useSearch";
import { useSelection } from "../useSelection/useSelection";
// Hooks
import { useTreeHandlers } from "./handlers/useTree.handlers";
// Types
import type {
  UseTreeProps,
  UseTreeResponse,
  UseTreeType,
} from "./types/useTree.types";

export const useTree = <TItem, TKey>(
  props: UseTreeProps<TItem>
): UseTreeResponse<TItem, TKey> => {
  const [availableItems, setAvailableItems] = useState<TItem[]>([]);

  const {} = useTreeHandlers({
    ...props,
  });
  const { onSelectionChanged } = useSelection<TKey>({});
  const { filteredItems, onSearchTextChanged } = useSearch<TItem, TKey>({
    ...props.searchDetails,
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
