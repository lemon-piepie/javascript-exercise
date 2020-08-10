export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  function transform(num) {
    return String.fromCharCode(num + 96);
  }
  return collection.map(transform);
}
