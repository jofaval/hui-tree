import { useState } from "react";
import { useSearchHandlers } from "./handlers/useSearch.handlers";

export type useSearchProps<TItem = any, TKey = string> = {
  availableItems: TItem[];
  text?: string;
  caseSensitive?: boolean;
};

export type useSearchResponse<TItem = any> = {
  filteredItems: TItem[];
  onSearchTextChanged: () => void;
};

export const useSearch = <TItem, TKey>(
  props: useSearchProps<TItem, TKey>
): useSearchResponse<TItem> => {
  const [filteredItems, setFilteredItems] = useState<TItem[]>([]);

  const { onSearchTextChanged } = useSearchHandlers({
    ...props,
    setFilteredItems,
  });

  return { filteredItems, onSearchTextChanged };
};
