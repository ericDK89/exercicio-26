const multiply = (a: number, b: number): number => {
  const result = a * b;
  console.log(result);
  return result;
};

const sayHello = (name: string): string => {
  const result = `Olá ${name}`;
  console.log(result);
  return result;
};

multiply(10, 5);
sayHello("Eric");
