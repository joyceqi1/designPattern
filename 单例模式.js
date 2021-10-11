/**
 * 保证一个类仅有一个实现，并提供一个全局访问
 * 通过一个创建函数实现单例模式，如果已经创建过，则直接返回现有实例
 */
function SetManager(name) {
    this.manager = name
}
SetManager.prototype.getName = function () {
    console.log(this.manager)
}
function SetHr(name) {
    this.hr = name
}
SetHr.prototype.getName = function () {
    console.log('HR: ', this.hr)
}
// SingletonSetManager  = function (){
//     let manager = null;
//     return (name) => {
//         if(!manager) {
//             manager = new SetManager(name)
//         }
//         return manager
//     }
// }()
getSingleton = function (fn) {
    let instance = null;
    return function () {
        if (!instance) {
            instance = fn.apply(this, arguments)
        }
        return instance
    }
}
SingletonSetManager = getSingleton(function (name) {
    let manager = new SetManager(name);
    return manager
})
SingletonSetHr = getSingleton(function (name) {
    let hr = new SetHr(name);
    return hr
})
SingletonSetManager('aa').getName()
SingletonSetManager('b').getName()
SingletonSetManager('c').getName()
SingletonSetHr('qq').getName()
