/**
 * 获取一个用户喜欢的品牌列表。（这是已经实现的方法，你调用它即可，无需实现。）
 * @param user 用户对象。
 * @returns [{id, name}] 品牌对象的数组。
 * @throws error Error 对象。
*/
async function getUserLikedBrands(user) {
    // 此处仅是模拟实现
    return [
      { id: 1, name: '哇哈哈' },
      { id: 10, name: '喜之郎' },
    ];
  }
  
  /**
   * 获取某种性别喜欢的品牌排行榜列表。（这是已经实现的方法，你调用它即可，无需实现。）
   * @param gender 性别 0: 男, 1: 女。
   * @returns [{id, name}] 品牌对象的数组。
   * @throws error Error 对象。
   */
  async function getTopBrandsForGender(gender) {
    // 此处仅是模拟实现
    return [
      { id: 6, name: '七匹狼' },
      { id: 3, name: '海澜之家' },
    ];
  }
  
  // 自定义错误类
  
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  // 从这里开始书写你的代码（上面是已经实现的代码，你只需调用，无需再实现）。
  
  // 一个 user 对象
  
  const user = {
    id: 100,
    // 性别 0: 男, 1: 女
    gender: 0,
  };

  var promise1 = new Promise(function(resolve, reject) {
      var user='';
    getUserLikedBrands(user);
  });
  var promise2 = new Promise(function(resolve, reject) {
      var gender='';
    getTopBrandsForGender(gender);
  });
  
  Promise.all([promise1, promise2]).then(function(values) {
    console.log('values');
    console.log(values);
  });
  
  