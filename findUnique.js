function find(arr,len){
let res = arr[0]
for(let i=1;i<len;i++){
    res = res^arr[i]
    }
    console.log(res);
    return res
}
let arr = [2, 3, 5, 4, 5, 3, 4]
let len = arr.length
find(arr,len)
