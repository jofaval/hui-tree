import { useState } from "react";
import type { TreeGenericsType } from "../useTree/types/useTree.types";
import { useSearchHandlers } from "./handlers/useSearch.handlers";

export type useSearchProps<TGenerics extends TreeGenericsType> = {
  availableItems: TGenerics["Item"][];
  text?: string;
  caseSensitive?: boolean;
};

export type useSearchResponse<TGenerics extends TreeGenericsType> = {
  filteredItems: TGenerics["Item"][];
  onSearchTextChanged: () => void;
};

export const useSearch = <TGenerics extends TreeGenericsType>(
  props: useSearchProps<TGenerics>
): useSearchResponse<TGenerics> => {
  const [filteredItems, setFilteredItems] = useState<TGenerics["Item"][]>([]);

  const { onSearchTextChanged } = useSearchHandlers({
    ...props,
    setFilteredItems,
  });

  return { filteredItems, onSearchTextChanged };
};
