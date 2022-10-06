// Utils
import type {
  UseSearchHandlersProps,
  UseSearchHandlersResponse,
} from "../types/useSearch.handlers.types";
import { searchClosure } from "../utils/search";

export const useSearchHandlers = <TItem = any>({
  availableItems,
  caseSensitive,
  setFilteredItems,
  text,
}: UseSearchHandlersProps<TItem>): UseSearchHandlersResponse<TItem> => {
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
