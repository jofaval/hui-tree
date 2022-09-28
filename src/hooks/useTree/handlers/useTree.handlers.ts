import { searchClosure } from "../utils/search";
import { useTreeProps } from "../types/useTree.types";
import { Dispatch, SetStateAction } from "react";

export type useTreeHandlersProps<Item = any> = useTreeProps<Item> & {
  availableItems: Item[];
  setAvailableItems: Dispatch<SetStateAction<Item[]>>;
};

export type UseTreeHandlersResponse = {
  onSearchTextChanged: () => void;
};

export const useTreeHandlers = <Item = any>({
  availableItems,
  searchDetails,
  searchKey,
  setAvailableItems,
}: useTreeHandlersProps<Item>): UseTreeHandlersResponse => {
  const onSearchTextChanged = () => {
    if (!searchDetails?.text || !availableItems?.length) {
      return;
    }

    const search = searchClosure({
      ...searchDetails,
      original: searchDetails?.text,
    });

    setAvailableItems(
      availableItems
        .map((element) => (searchKey ? element[searchKey] : element))
        .filter(search)
    );
  };

  return { onSearchTextChanged };
};
