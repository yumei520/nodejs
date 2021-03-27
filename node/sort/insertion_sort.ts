
//随机生成1~100中的一个数字，并存储在一个数组中
function generateRandomNumberGroup(randomNumberGroupLength) {
    let randomNumberGroup = [];
    for (let i = 0; i < randomNumberGroupLength; i++) {
        randomNumberGroup[i] = Math.floor(Math.random() * 100);
    }
    return randomNumberGroup;
}
//插入排序函数
function insertionSort() {
    console.log('排序前的数组');
    let randomNumberGroup = generateRandomNumberGroup(10);
    console.log(randomNumberGroup);
    console.log('排序后的数组');
    for(let j = 2; j< randomNumberGroup.length;j++){
        let key = randomNumberGroup[j];
        let i = j-1;
        while(i>=0 && randomNumberGroup[i]> key){
            randomNumberGroup[i+1]=randomNumberGroup[i];
            i--;
        }
        randomNumberGroup[i+1]=key;
    }
    console.log(randomNumberGroup);

}

insertionSort();