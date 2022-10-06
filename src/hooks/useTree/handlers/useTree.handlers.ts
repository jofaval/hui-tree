/** Utils */
import { searchClosure } from "../../useSearch/utils/search";
/** Types */
import type { TreeGenericsType, UseTreeProps } from "../types/useTree.types";
import type { Dispatch, SetStateAction } from "react";

export type useTreeHandlersProps<TGenerics extends TreeGenericsType> =
  UseTreeProps<TGenerics> & {};

export type UseTreeHandlersResponse<TGenerics extends TreeGenericsType> = {};

export const useTreeHandlers = <
  TGenerics extends TreeGenericsType
>({}: useTreeHandlersProps<TGenerics>): UseTreeHandlersResponse<TGenerics> => {
  return {};
};
