
    function hello(){
        console.log("Your Random Number is : " + Math.random()*100)
    }
    // x will be timeout in seconds 8000 = 8 sec
    let x = 8000
    setTimeout(hello,x)
    
    let num = x/1000
    let arr = []
    for(let i = 0 ; i < num ; i++ ){
    
            let sum = num - i
            
            arr.push(sum)
          
    
    }
    let interval = 1000; 
    arr.forEach((value, index) => {
    
      setTimeout(() => {
        console.log(value)
      }, index * interval)
    })
    