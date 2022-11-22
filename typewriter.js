const sentence = "hooked on the creed of their COLONY";

const typewriter = () => {
  newsentence = sentence + '\n';
  let timer = 50;


  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)
    }, timer += 50)
  }

};

typewriter();