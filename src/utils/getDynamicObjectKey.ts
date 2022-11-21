type DynamicObjectKeyProps = {
  /** The element to evaluate */
  element: Record<string, any>;
  /** The key of the element, if not found in the element, an error might be thrown */
  key: string;
  /** Key separator */
  separator?: string;
};

type DynamicObjectKey = string | number | undefined | null;

/**
 * Dynamic access each key
 */
export const getDynamicObjectKey = ({
  element,
  key,
  separator = ".",
}: DynamicObjectKeyProps): DynamicObjectKey =>
  key.split(separator).reduce(
    (prevElement, key) => {
      return key in prevElement ? prevElement[key] : null;
    },
    { ...element }
  ) as unknown as DynamicObjectKey;
