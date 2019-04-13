import * as fs from 'fs';

const readFile: (path: string) => Promise<string> = async (path: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data.toString());
    });
  });
};

export default {
  readFile,
};
