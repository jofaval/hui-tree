export enum SelectAllStatusEnum {
  ALL = "ALL",
  SOME = "SOME",
  NONE = "NONE",
}

export type SearchDetailsType = {
  text?: string;
  caseSensitive?: boolean;
};

export type useTreeProps<Item = any> = {
  data: Item[];
  onMouseEnterItem: (e: Event) => void;
  searchDetails?: SearchDetailsType;
  searchKey?: string;
};

export type useTreeResponse = {
  // allSelected: boolean;
  // getWrapper: () => JSX.Element;
  onSelectionChanged: () => void;
};

export type useTreeType<Item = any> = (
  props: useTreeProps<Item>
) => useTreeResponse;
