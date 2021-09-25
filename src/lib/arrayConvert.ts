export interface ReturnArray {
  label: string;
  value: string;
}

type T2<T> = keyof T;

export interface ArrayConvertProps<T> {
  firstObject?: {
    label: string;
    value: string;
  };
  array: Array<T>;
  arrayLabel: T2<T>;
  arrayLabelConcat?: T2<T>;
  arrayValue: T2<T>;
}

export function arrayConvert<T = any>({
  firstObject,
  array,
  arrayLabel,
  arrayLabelConcat,
  arrayValue,
}: ArrayConvertProps<T>): Array<ReturnArray> {
  const arrayConverted: ReturnArray[] = [];

  /**
   * Add initial object in array
   */
  if (firstObject) arrayConverted.unshift(firstObject);

  const converted = array.map((item) => {
    const label = arrayLabelConcat
      ? `${item[arrayLabel]} - ${item[arrayLabelConcat]}`
      : item[arrayLabel];

    return {
      label: String(label),
      value: String(item[arrayValue]),
    };
  });

  arrayConverted.push(...converted);

  return arrayConverted;
}
