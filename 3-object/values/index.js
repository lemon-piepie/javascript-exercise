export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  const values = Object.values(source);
  for (let i = 0; i < values.length; i++) {
    sum += parseInt(values[i]);
  }
  return sum;
}
