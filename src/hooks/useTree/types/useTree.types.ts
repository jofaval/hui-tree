export enum SelectAllStatusEnum {
  ALL = "ALL",
  SOME = "SOME",
  NONE = "NONE",
}

export type SearchDetailsType = {
  text?: string;
  caseSensitive?: boolean;
};

export type useTreeProps<TItem = any> = {
  data: TItem[];
  onMouseEnterItem: (e: Event) => void;
  searchDetails?: SearchDetailsType;
  searchKey?: string;
};

export type useTreeResponse<TItem = any, TKey = string> = {
  // allSelected: boolean;
  // getWrapper: () => JSX.Element;
  onSelectionChanged: (keys: TKey[]) => void;
};

export type useTreeType<TItem = any, TKey = string> = (
  props: useTreeProps<TItem>
) => useTreeResponse<TKey>;
