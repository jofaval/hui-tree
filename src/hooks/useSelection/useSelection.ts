import { useSelectionHandlers } from "./handlers/useSelection.handlers";

export type useSelectionProps<TKey = string> = {};

export type useSelectionResponse<TKey = string> = {
  selectedElements: TKey[];
  onSelectionChanged: (keys: TKey[]) => void;
};

export const useSelection = <
  TKey = string
>({}: useSelectionProps<TKey>): useSelectionResponse<TKey> => {
  const { selectedElements, onSelectionChanged } = useSelectionHandlers<TKey>(
    {}
  );

  return { selectedElements, onSelectionChanged };
};
