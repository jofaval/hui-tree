import { SearchDetailsType } from "../../useSearch/types/useSearch.types";

export enum SelectAllStatusEnum {
  ALL = "ALL",
  SOME = "SOME",
  NONE = "NONE",
}

export type useTreeProps<TGenerics extends TreeGenericsType> = {
  data: TGenerics["Item"][];
  onMouseEnterItem: (e: Event) => void;
  searchDetails?: SearchDetailsType;
  /**
   * It'll generate a Map, and for it to properly work, it needs and id for each element,
   */
  IdKey?: string;
  /**
   * The key inside the item that will identify it's parent, if possible
   */
  ParentKey?: string;
};

export type useTreeResponse<TGenerics extends TreeGenericsType> = {
  // allSelected: boolean;
  // getWrapper: () => JSX.Element;
  onSelectionChanged: (keys: TGenerics["Key"][]) => void;
};

export type useTreeType<TGenerics extends TreeGenericsType> = (
  props: useTreeProps<TGenerics>
) => useTreeResponse<TGenerics>;

export type TreeGenericsType = {
  /**
   * The type of the element, or item, that will be used all throughout the hook.
   * This is the element that will be iterated, and it's properties, you can not define it,
   * you don't even have to pass a type, but it'd be better if you would.
   */
  Item?: any;
  /**
   * The [ID] key type could be infered, but it'd be nicer if you were to explicitely provide it.
   */
  Key?: any;
};
