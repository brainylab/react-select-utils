import { arrayConvert } from "../src";
import arrayConvertDefault from "../src";

describe("ArrayConvert", () => {
  it("should be able for convert array in format to react-select", () => {
    const array = [
      {
        id: 1,
        description: "New Device",
        device: "Motorola",
        os: "android",
      },
      {
        id: 2,
        description: "New Device",
        device: "iPhone Xr",
        os: "ios",
      },
    ];

    const firstObject = {
      label: "Choose Option",
      value: "null",
    };

    const newArray = arrayConvert({
      array,
      arrayLabel: "device",
      arrayValue: "os",
    });

    const newArrayWithFirstObject = arrayConvert({
      firstObject: firstObject,
      array,
      arrayLabel: "device",
      arrayValue: "os",
    });

    const newArrayWithFirstObjectDefault = arrayConvertDefault({
      firstObject: firstObject,
      array,
      arrayLabel: "device",
      arrayValue: "os",
    });

    expect(newArray).toEqual(
      expect.arrayContaining([] as Array<{ labe: string; value: string }>)
    );
    expect(newArrayWithFirstObject).toEqual(
      expect.arrayContaining([] as Array<{ labe: string; value: string }>)
    );

    expect(newArrayWithFirstObjectDefault).toEqual(
      expect.arrayContaining([] as Array<{ labe: string; value: string }>)
    );
  });
});
