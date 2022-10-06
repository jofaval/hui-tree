// Vendors
import { useEffect, useState } from "react";
import { useSearch } from "../useSearch/useSearch";
import { useSelection } from "../useSelection/useSelection";
// Hooks
import { useTreeHandlers } from "./handlers/useTree.handlers";
// Types
import type {
  TreeGenericsType,
  UseTreeProps,
  UseTreeResponse,
} from "./types/useTree.types";

export const useTree = <TGenerics extends TreeGenericsType>(
  props: UseTreeProps<TGenerics>
): UseTreeResponse<TGenerics> => {
  const [availableItems, setAvailableItems] = useState<TGenerics["Item"][]>([]);

  const {} = useTreeHandlers({
    ...props,
  });
  const { onSelectionChanged } = useSelection<TGenerics["Key"]>({});
  const { filteredItems, onSearchTextChanged } = useSearch<TGenerics>({
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
