1. npm install -D eslint
2. 使用npx eslint 可以看到命令 （注意npx的用法）
3. npx eslint --init
4. 在 src/index.js 文件中写入bad code
vscode 未安装eslint插件前，此时页面上无任何提示
执行  npx eslint src/*.js 可以看到终端里显示的错误信息，终端提示 --fix 命令
执行  npx eslint src/*.js --fix  错误已修复

5. 将上面的命令放到scripts里  
  "scripts": {
    "lint": "eslint '**/*.js'",
    "lint:fix":"eslint '**/*.js' --fix"
  },
  上面的命令可以写成
  npm run lint
  npm run lint:fix

6. 命令检查修复麻烦，使用编辑器的力量
安装eslint插件 退出重启  界面上可以看到错误提示

7. 目录下新增.vscode文件夹，新增 settings.json
{
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true,
}
页面上保存时代码会自动修复错误