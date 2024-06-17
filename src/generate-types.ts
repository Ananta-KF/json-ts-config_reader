import { compileFromFile } from 'json-schema-to-typescript';
import * as fs from 'fs';
import * as path from 'path';

const schemaDir = path.join(process.cwd(), './schemas');
const outputDir = path.join(process.cwd(), './dist');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(schemaDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
  if (err) {
    console.error('Error reading schema directory:', err);
    return;
  }

  files.forEach((file: string) => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(schemaDir, file);
      const outputFileName = path.basename(file, '.json') + '.ts';
      const outputPath = path.join(outputDir, outputFileName);

      compileFromFile(filePath)
        .then(ts => fs.writeFileSync(outputPath, ts))
        .catch(error => console.error('Error generating typescript:', error));
    }
  });
});