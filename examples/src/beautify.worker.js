import { beautify } from '../../src/index.js';

onmessage = async (e) => {
  postMessage(await beautify(e.data.source, e.data.language));
};
