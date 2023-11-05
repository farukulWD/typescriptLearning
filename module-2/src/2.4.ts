{
  //
  // generic interface

  interface Developer<T, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }

  type AppleWatch = {
    name: string;
    model: string;
    price: number;
  };

  const poorDeveloper: Developer<AppleWatch> = {
    name: "poorDev",
    computer: {
      brand: "HP",
      model: "ba-234",
      releaseYear: 2014,
    },
    smartWatch: {
      model: "hsdfjioj",
      name: "MiddleBaba",
      price: 24547,
    },
  };

  interface bike {
    name: string;
    engineCapacity: string;
  }
  const riceDeveloper: Developer<AppleWatch, bike> = {
    name: "riceDev",
    computer: {
      brand: "apple",
      model: "ba-23sdf4",
      releaseYear: 2023,
    },
    smartWatch: {
      model: "hsdfjioj",
      name: "MiddleBaba",
      price: 24547,
    },
    bike: {
      name: "yamaha",
      engineCapacity: "200cc",
    },
  };

  //
}
