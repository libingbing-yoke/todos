function deepClone(obj) {
    let isArr = Array.isArray(obj);
    let isObj = Object.prototype.toString.call(obj) === '[Object Object]'
    if (isArr) {
        let newObj = [];
        for (const key in obj) {
            newObj[key] = deepClone(obj[key])
        }
        return newObj
    } else if (isObj) {
        let newObj = {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                newObj[key] = deepClone(obj[key])
            }
        }
        return newObj
    } else {
        return obj
    }
}

// function deepClone(obj) {
//     // 先检测是不是数组和Object
//     // let isMap = Object.prototype.toString.call(obj) === '[object Map];
//     // let isSet = Object.prototype.toString.call(obj) === '[object Set];
//     // let isArr = Object.prototype.toString.call(obj) === '[object Array]';
//     let isArr = Array.isArray(obj);
//     let isJson = Object.prototype.toString.call(obj) === '[object Object]';
//     if (isArr) {
//         // 克隆数组
//         let newObj = [];
//         for (let i = 0; i < obj.length; i++) {
//             newObj[i] = deepClone(obj[i]);
//         }
//         return newObj;
//     } else if (isJson) {
//         // 克隆Object
//         let newObj = {};
//         for (let i in obj) {
//             newObj[i] = deepClone(obj[i]);
//         }
//         return newObj;
//     }
//     // 不是引用类型直接返回
//     return obj;
// };

let obj = [1, 2, {
        name: 'apple'
    }, {
        age: 18,
    },
    [3, 4, {
        sex: 'male'
    }]
]

console.log(deepClone(obj), deepClone(obj) === obj);