import { parseString as parseXml } from 'xml2js';

const parse = <T>(xml: string): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    parseXml(xml, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

export default {
  parse,
};
