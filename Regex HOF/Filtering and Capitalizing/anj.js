let data  = [ { book: "Harvey Spector" , author : "Mark Wood" , year : 2011} , { book: "Jai Hind" , author : "Suresh Kamath" , year : 2008},{ book: "The Test" , author : "Jsutin Langer" , year : 2015} , { book: "Zero to One" , author : "Simon Sinek" , year : 2001}, { book: "Do it ! Now " , author : "Mohit Wani" , year : 2020},{ book: "Atomic Habits" , author : "Marcus Dell" , year : 1998}]
let result1 = data.filter(op => {
 return  op.year > 2010
})

let s = result1.map(e=>{
 return e.author.toUpperCase()
})


for(let i=0; i<result1.length;i++){
 result1[i].author = s[i]
 
}
// Books Published After 2010 with Author Name Capitalized 
console.log(result1)

let result2 = data.filter(op => {
  return op.year < 2010 
})
// Books Published Before 2010
console.log(result2)



