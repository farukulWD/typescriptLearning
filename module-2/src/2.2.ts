{
  //
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole = User1 & {
    role: string;
  };

  interface User2 {
    name: string;
    age: number;
  }
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user: UserWithRole2 = {
    name: "Farukul islam",
    age: 23,
    role: "manager",
  };

  interface User2 {
    name: string;
    age: number;
  }

  //   interface with array
  type Roll1 = number[];
  const roll1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }
  const Roll2: Roll2 = [1, 3, 5];
  //

  // function with interface
  type add1 = (num1: number, num2: number) => number;
  interface add2 {
    (num1: number, num2: number): number;
  }
  const add: add2 = (num1, num2) => {
    return num1 + num2;
  };

  //
}
