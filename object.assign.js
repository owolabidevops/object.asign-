//can be use to copy all enumerable own properties values to a target object from one or more source objects

const dest1={ a:1};
const source={ b:2,c:3};
 const dest=Object.assign(dest1,source);
console.log(dest)

const dest1={ a:1};
const source={ b:2,c:3};
const source2={ d:2,e:3};
 const dest=Object.assign(dest1,source,source2);
console.log(dest)