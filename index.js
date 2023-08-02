

const moment = require('moment'); // require
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log(moment().format('MMMM'))
console.log(moment().format("MMM Do YY"))

console.log(moment('2020-01-01').isValid())
console.log(moment('2020-14-01').isValid())
console.log(moment('2024-18-01').isValid())
console.log(moment('2025-01-01').isValid())
console.log(moment().calendar())
console.log(moment().add(7, 'days').calendar())
console.log(moment().add(7, 'month').calendar())
console.log(moment().add(7, 'years').calendar())
console.log(moment().subtract(7, 'days').calendar())
console.log(moment().subtract(7, 'month').calendar())
console.log(moment().subtract(7, 'y').calendar());
var a = moment("2015-11-11")
var b = moment("2015-12-01")
console.log(a.diff(b, 'days'))

var c = moment("2015-11-27")
var d = moment("2015-09-16")
console.log(c.diff(d, 'days'))
console.log(moment('2020-01-01').isAfter('2018-01-01'))
console.log(moment('2010-01-01').isAfter('2018-01-01'))
console.log(moment([2019]).isLeapYear())
console.log(moment([2020]).isLeapYear())


const lodash = require("lodash");

let characters = ["a", "b", "c", "d","e","f"]
let chunkd = lodash.chunk(characters, 2)
console.log(chunkd)

let mix = [0, 1, false, 2, '', 3]
let compact= lodash.compact(mix)
console.log(compact)

let array = [1,2]
let concat = lodash.concat(array,3,[4],[[5]],[6])
console.log(concat)
console.log(lodash.difference([2,1],[2,3]))

let drop = lodash.drop(characters,2)
console.log(drop)

let dropRight=lodash.dropRight(characters,2)
console.log(dropRight)