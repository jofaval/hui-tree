// Utils
import type {
  useSearchHandlersProps,
  UseSearchHandlersResponse,
} from "../types/useSearch.handlers.types";
import { searchClosure } from "../utils/search";

export const useSearchHandlers = <TItem = any>({
  availableItems,
  caseSensitive,
  setFilteredItems,
  text,
}: useSearchHandlersProps<TItem>): UseSearchHandlersResponse<TItem> => {
  const onSearchTextChanged = () => {
    if (!text || !length) {
      return;
    }

    const search = searchClosure({
      original: text,
      caseSensitive,
    });

    setFilteredItems(
      availableItems
      // TODO: implement a search key(s) prop
      // .map((element: TItem) => (searchKey ? element[searchKey] : element))
      // .filter(search)
    );
  };

  return { onSearchTextChanged };
};
