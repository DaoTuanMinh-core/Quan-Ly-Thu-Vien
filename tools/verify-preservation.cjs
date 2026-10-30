const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const base = 'a0354412f65fbe20c53bcc91b3ed5a7b4ba15290';
const files = execFileSync('git', ['ls-tree', '-r', '--name-only', base], {cwd: root, encoding: 'utf8'}).trim().split('\n');
let errors = 0;
for (const file of files) {
 const original = execFileSync('git', ['show', base + ':' + file], {cwd: root});
 const currentPath = path.join(root, file);
 if (!fs.existsSync(currentPath)) { console.error('Missing:', file); errors++; continue; }
 const current = fs.readFileSync(currentPath);
 if (file === 'README.md') {
  if (!current.toString('utf8').replace(/\r\n/g, '\n').endsWith(original.toString('utf8').replace(/\r\n/g, '\n'))) { console.error('Original README content was not preserved'); errors++; }
 } else if (original.toString('utf8').replace(/\r\n/g, '\n') !== current.toString('utf8').replace(/\r\n/g, '\n')) { console.error('Changed existing file:', file); errors++; }
}
if (errors) process.exit(1);
console.log('Preserved all ' + files.length + ' original tracked files; README additions are prepended.');
