let check = document.getElementById("submit")
check.addEventListener("click",()=>{
    let input = document.getElementById("input").value 
    let op = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    let result = op.test(input)
    let output = document.getElementById("output")
    if(result==true){
        output.innerText="Input Matches The Conditions"
        output.style.color= "green"
    }
    else if(input ==""){
        output.innerHTML="Please Enter Valid Inputs"
        output.style.color="red"
    }
    else{
        output.innerHTML="Input Does Not Matches The Conditions"
        output.style.color="red"
    }
    
})