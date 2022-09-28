import { searchClosure } from "../../useSearch/utils/search";
import { useTreeProps } from "../types/useTree.types";
import { Dispatch, SetStateAction } from "react";

export type useTreeHandlersProps<Item = any> = useTreeProps<Item> & {};

export type UseTreeHandlersResponse = {};

export const useTreeHandlers = <
  Item = any
>({}: useTreeHandlersProps<Item>): UseTreeHandlersResponse => {
  return {};
};
