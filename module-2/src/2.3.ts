{
  //

  // Generics types

  type GenericsArray<T> = Array<T>;

  const RollNumber: GenericsArray<number> = [1, 2, 3, 5];
  const Mentors: GenericsArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const user: GenericsArray<{ name: string; age: number }> = [
    { name: "rubel", age: 100 },
    { name: "alu mia", age: 110 },
  ];

  // Generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const mans: GenericTuple<number, { name: string; age: number }> = [
    123,
    { name: "rubel", age: 120 },
  ];
  //
}
