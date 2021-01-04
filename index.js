#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

const { green, red, magenta } = chalk;

const config = {
  defaultTemplate: 'react-dva-ts',
  CMD: {
    Vite: {
      'react-dva-ts': `Build apps based on React, Dvajs and TypeScript.`
    },
    Deno: {
      'deno-oak': `Creating a basic web server in Deno using Oak.`,
      'deno-vscode-cmd': 'Based `deno` and `vscode user snippets`, displaying all `"@cmd: "` commands in the project.',
    }
  }
};

function readCmd(conf) {
  const cmdItem = (cmd, info) => `\n   ${green(cmd)}${' '.repeat(20 - cmd.length)}${info}`;
  const cmdParse = (cmds) => {
    let str = '';
    Object.keys(cmds).forEach(c => {
      str += `\n ${magenta(`🔗 ${c}`)}`;
      if (typeof cmds[c] === 'object') {
        Object.keys(cmds[c]).forEach(item => {
          str += cmdItem(item, cmds[c][item])
        })
      }
      str += '\n';
    })
    return str;
  }
  return cmdParse(conf.CMD);
}

const cmdHelp = () => `
Command Help:
${magenta('[xc-app]')}: https://github.com/lencx/create-xc-app

Usage:
  ${green(`npm init xc-app <project-name> <-t|--template> [Options] [--force]`)}
  or
  ${green(`yarn create xc-app <project-name> <-t|--template> [Options] [--force]`)}

Example: ${green(`npm init xc-app myapp -t react-dva-ts`)}

Options:\n${readCmd(config)}`;

async function init() {
  const _argv0 = argv._[0];
  if (!_argv0) {
    if (argv.h || argv.help) {
      console.log(cmdHelp());
    } else {
      console.log(`\n${red('Error:')}\n  See '${green('npx create-xc-app -h')}' for more information on command.`);
    }
    process.exit(1);
  }
  const targetDir = _argv0 || '.';
  const cwd = process.cwd();
  const root = path.join(cwd, targetDir);
  const renameFiles = {
    _gitignore: '.gitignore',
  };
  console.log(`Scaffolding project in ${root}...`);

  await fs.ensureDir(root);
  const existing = await fs.readdir(root);

  if (existing.length && !argv.force) {
    console.error(`Error: target directory is not empty.`);
    process.exit(1);
  }

  const templateDir = path.join(
    __dirname,
    `template-${argv.t || argv.template || config.defaultTemplate}`
  );
  const write = async (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file);
    if (content) {
      await fs.writeFile(targetPath, content);
    } else {
      await fs.copy(path.join(templateDir, file), targetPath);
    }
  }

  const files = await fs.readdir(templateDir);
  let hasPkg = false;
  for (const file of files) {
    if (file !== 'package.json') {
      await write(file);
    } else {
      hasPkg = true;
    }
  }

  console.log(`\n✨Done!`);
  if (root !== cwd && !/^\.\/?$/.test(targetDir)) {
    console.log(`\nNow Run:\n$ ${green(`cd ${path.relative(cwd, root)}`)}`);
  }
  if (hasPkg) {
    const pkg = require(path.join(templateDir, `package.json`));
    pkg.name = path.basename(root);
    await write('package.json', JSON.stringify(pkg, null, 2));

    console.log(`$ ${green('npm install')} (or ${green('yarn')})`);
    console.log(`$ ${green('npm run dev')} (or ${green('yarn dev')})\n`);
  }
}

init().catch((e) => {
  console.error(e);
})
