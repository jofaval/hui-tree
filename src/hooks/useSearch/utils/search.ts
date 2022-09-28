export type SearchClosureProps = {
  /**
   * The first string
   */
  original: string;
  /** Will it ignore case or look for an exact match?
   *
   * It will look for an exact match by default
   */
  caseSensitive?: boolean;
};

export type SearchProps = SearchClosureProps & {
  compare: string;
};

export const areEqual = ({
  original,
  compare,
  caseSensitive = true,
}: SearchProps) => {
  let fakeOriginal = original;
  let fakeCompare = compare;

  if (!caseSensitive) {
    fakeOriginal = fakeOriginal.toLocaleUpperCase();
    fakeCompare = fakeCompare.toLocaleUpperCase();
  }

  return fakeOriginal === fakeCompare;
};

export type SearchClosureResponse = (compare: string) => boolean;

export const searchClosure = (
  props: SearchClosureProps
): SearchClosureResponse => {
  return (compare: string) => areEqual({ ...props, compare });
};
