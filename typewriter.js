const sentence = "Hello my name is jamie";
let delay = 0;
const type = () => {
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 100;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
};
type();
