var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function SysConvert(){
    let temp =[];
    // rl.question('输入十进制数字:   ', (answer) => {
        
    //     temp.push(answer);
    //     // rl.close();
    // }); 
    // rl.question('请输入需要转换成多少进制数:   ', (answer) => {
    //     temp.push(answer);
    //     rl.close();
    // });
    let i = 1;
    console.log('请输入十进制数值：');
    rl.on('line', (input)=> {
        if(i===1){ 
            temp.push(input);
            i++;
            console.log('请输入十进制数值：');
        }else if(i===2){
            temp.push(input);
            decbin(temp[0],temp[1])
            i++;
        }else{
            rl.close();
        }
    }); 
}
function decbin(dexNumber,hexadecimalNum) {
    //十进制转换成其他进制
    var remainders = [];
    var remainder = '';
    while (dexNumber > 0) {
        //取余
        remainders.push(dexNumber % hexadecimalNum);
        //取整
        dexNumber = parseInt(dexNumber / hexadecimalNum);
    }
    for (let i = remainders.length - 1; i > -1; i--) {
        remainder += remainders[i] + '';
    }
    //补齐八位数
    if (remainder.length !== 8) {
        let length = 8 - remainder.length;

        for (let i = 0; i < length; i++) {
            remainder = 0 + remainder;

        }
    }
    console.log('转换成二进制的值为： '+remainder);
}
SysConvert();
