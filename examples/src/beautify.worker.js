// eslint-disable-next-line import/extensions
import { beautify } from '../..';

onmessage = async (e) => {
  postMessage(await beautify(e.data.source, e.data.language));
};
