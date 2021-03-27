import { /* inject, */ BindingScope, injectable} from '@loopback/core';
// import * as chile_process from 'child_process';
import * as chokidar from 'chokidar';
import * as fs from 'fs';

@injectable({scope: BindingScope.TRANSIENT})
export class PushshService {
  constructor(/* Add @inject to inject parameters */) { }
  /*
   * Add service methods here
   */
  //监控nodejs下的文件是否有更新的，返回数据
  watchFile() {
    chokidar.watch('./config/', {
      //忽略的文件
      ignored: ['node_modules', 'dist', '.dockerignore', '.eslintignore', '.eslintrc.js', '.gitignore', '.mocharc.json', '.npmrc', '.prettierignore', '.prettierrc', '.yo-rc.json', 'DEVELOPING.md', 'tsconfig.tsbuildinfo', '.vscode'],
      cwd: '.',//表示当前目录
      depth: 5
    }).on('change', (event, path) => {
      // console.log(event, path);
      console.log(event);
      this.readFile(`${event}`);
    })
  }
  //读取文件
  readFile(path:string){
   const data =  fs.readFileSync(path,'utf8');
   console.log(data);
  }
  // push() {
  //   const cmd = 'npm run rebuild';
  //   chile_process.exec(cmd, function (error, stdout, stderr) {
  //     if (error) {
  //       console.log(error);
  //     }
  //     else {
  //       // console.log("成功");
  //     }
  //   })
  //   // console.log('hello')
  // }

}
