let ary = [6, 11, 1, 2, 3, 4, 5, 22, 33, 44, 55, 66]
console.log(ary.sort())//sort lay yeslai string jasto treat garchha jastaoi apple aanda ball banda cat canada//1,12,13,4,2,12,1,5,54
let ary2 = (a, b) => {
    return a - b
}
ary.sort(ary2)
console.log(ary)
//swap/ exchange any 2 value
let value1 = 21;
let value2 = 23;
let value3 = undefined;
value3 = value1
value1 = value2
value2 = value3

console.log(value1,value2)
