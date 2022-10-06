// Vendors
import { Dispatch, SetStateAction } from "react";
import { SearchDetailsType } from "./useSearch.types";

export type UseSearchHandlersProps<TItem = any> = SearchDetailsType & {
  availableItems: TItem[];
  setFilteredItems: Dispatch<SetStateAction<TItem[]>>;
};

export type UseSearchHandlersResponse<TItem = any> = {
  onSearchTextChanged: () => void;
};
