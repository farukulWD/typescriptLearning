{
  //
  // type assertion
  let anything = "next level development";
  anything as string;

  const kgToGr = (value: string | number): string | number | undefined => {
    if (typeof value == "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (value) {
      const convertedValue = value * 1000;
      return convertedValue;
    }
  };

  const result1 = kgToGr("10") as string;
  const result2 = kgToGr(10) as number;

  type customError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as customError).message);
  }

  //
}
