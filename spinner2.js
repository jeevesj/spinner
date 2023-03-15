function beyblade() {
const spin = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']
  for (let i = 0; i < spin.length; i++) {
    setTimeout(() => {
      process.stdout.write(spin[i]);
    }, 100 + (200 * i));
  }
};
beyblade();