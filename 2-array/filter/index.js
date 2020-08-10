function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(i => i % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (!result.includes(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
