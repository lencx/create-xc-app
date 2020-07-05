/**
 * @author: lencx
 * @create_at: Jun 14, 2020
 * @cmd: deno run --allow-read --allow-write cmd.ts [--update[=tree]]
 */

// Deno + VS Code(User Snippets)
// see: https://code.visualstudio.com/docs/editor/userdefinedsnippets
// 1. `snippets` must contain `@cmd: ` string
// 2. the string must be in the first 10 lines of the file will be matched

import getFiles, { exists } from 'https://deno.land/x/getfiles/mod.ts';
import { yellow, green } from 'https://deno.land/std/fmt/colors.ts';

const args = Deno.args;
const decoder = new TextDecoder();
const encoder = new TextEncoder();
const pathMap = new Map<string, any>();
const isUpdate = /--update/.test(args[0]);
const isTree = args[0] === '--update=tree';
const FILE_NAME = './cmd.output';

try {
  // read cache file
  if (!isUpdate) {
    const cmdFile = await Deno.open(FILE_NAME);
    await Deno.copy(cmdFile, Deno.stdout)
    Deno.exit();
  } else {
    // update: delete cmd file
    await exists(FILE_NAME) && Deno.remove(FILE_NAME);
  }
} catch (e) {}

// options
// see: https://github.com/lencx/deno-getfiles
const files = getFiles({
  root: '.',
  // include: [''],
});

let cmdCount = 0;
for (const [index, file] of files.entries()) {
  const bytes = await Deno.readFile(file.path);
  const content = decoder.decode(bytes);
  let fmtTxt;

  content.split('\n').some((line, index) => {
    const matchStr = ` \* @cmd: `;
    if (new RegExp(matchStr).test(line)) {
      const cmd = line.replace(matchStr, '');

      if (isTree) {
        // format: tree
        let _path: any = file.path.split(`/${file.name}`);
        if (!pathMap.has(_path[0])) {
          pathMap.set(_path[0], null);
          _path = `[${_path[0]}]
|    \`-<${file.name}>`;
        } else {
          _path = `|    \`-<${file.name}>`;
        }
        fmtTxt = encoder.encode(`${yellow(`${_path}`)}: ${green(cmd)}\n`);
      } else {
        // format: default
        cmdCount += 1;
        const fmtCount = `[${String(cmdCount).padStart(2, '0')}]`;
        fmtTxt = encoder.encode(`${yellow(`${fmtCount} ${file.path}`)}: ${green(cmd)}\n`);
      }

      Deno.stdout.write(fmtTxt);
      Deno.writeFile(FILE_NAME, fmtTxt, { append: true });
      return true;
    }
    if (index > 10) return true;
  })
}