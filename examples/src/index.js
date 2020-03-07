import Worker from './beautify.worker.js';

export const worker = new Worker();

worker.onmessage = (e) => {
  console.log(e.data);
};

worker.postMessage({
  source: 'const \n x \n = (((\n 5 \n + \n 10)))',
  language: 'javascript',
});
