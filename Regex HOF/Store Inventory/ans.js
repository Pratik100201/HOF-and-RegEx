let items = { milk:20 , water : 15 , furniture : 300 , laptop : 820}
let value = Object.values(items)
let key = Object.keys(items)
let converted
let news = value.map(myf)
    function myf(e){
    return  converted = e*80
  }
let obj = {}
key.map((ele,index)=>{
  obj[ele]=news[index]
})
console.log(obj)