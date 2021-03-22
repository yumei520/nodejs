import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import * as chile_process from 'child_process';
import * as chokidar from 'chokidar';

@injectable({scope: BindingScope.TRANSIENT})
export class PushshService {
  constructor(/* Add @inject to inject parameters */) { }
  private isUpdate = false;
  /*
   * Add service methods here
   */
  //监控nodejs下的文件是否有更新的，如果，则在周一到周五下午5点执行脚本将代码push到github
  watchFile() {
    chokidar.watch('.', {
      //忽略的文件
      ignored: ['node_modules', 'dist', '.dockerignore', '.eslintignore', '.eslintrc.js', '.gitignore', '.mocharc.json', '.npmrc', '.prettierignore', '.prettierrc', '.yo-rc.json', 'DEVELOPING.md', 'tsconfig.tsbuildinfo', '.vscode'],
      cwd: '.',//表示当前目录
      depth: 5
    }).on('change', (event, path) => {
      console.log(event, path);

      this.isUpdate=true;
      console.log(this.isUpdate)
      this.push();
    })
  }


  push() {
    const cmd = 'ping github .com';
    chile_process.exec(cmd, function (error, stdout, stderr) {
      if (error) {
        console.log(error);
      }
      else {
        console.log("成功");
      }
    })
   
  }

}
