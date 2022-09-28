// Vendors
import { Dispatch, SetStateAction, useState } from "react";

export type useSelectionHandlersProps<TKey = string> = {};

export type useSelectionHandlersResponse<TKey = string> = {
  selectedElements: TKey[];
  onSelectionChanged: (keys: TKey[]) => void;
};

export const useSelectionHandlers = <
  TKey = string
>({}: useSelectionHandlersProps<TKey>): useSelectionHandlersResponse<TKey> => {
  const [selectedElements, setSelectedElements] = useState<TKey[]>([]);

  const onSelectionChanged = (keys: TKey[]) => {
    setSelectedElements(keys);
  };

  return { selectedElements, onSelectionChanged };
};
