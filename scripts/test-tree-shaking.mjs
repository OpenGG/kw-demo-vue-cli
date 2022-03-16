import fg from 'fast-glob';
import color from 'ansi-colors-es6';
import fs from 'fs/promises';
import path from 'path';

const cwd = process.argv[2]

if (!cwd) {
    throw new Error('Path not provided')
}

const keyword = 'not_used';

const files = await fg(['**/*.js'], { dot: true, cwd });

for (const f of files) {
  const content = await fs.readFile(path.resolve(cwd, f), 'utf8');
  if (content.includes(keyword)) {
    process.exitCode = 1;
    console.log(color.red('ERROR: tree shaking failed'));

    console.log(
      content.replace(new RegExp(keyword, 'g'), (m) => {
        return color.red(m);
      })
    );
  }
}
