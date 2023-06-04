let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    let input = document.getElementById("input").value 
    let check = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/gi
    let result = check.test(input)
    let output = document.getElementById("output")
    if(result=="true"){
        output.innerText = "Valid LinkedIn Profile URL"
        output.style.color="green"
    }
    else if(input==""){
        output.innerText = "Please Enter Valid Inputs"
        output.style.color="red"
    }
    else{
        output.innerText = "Invalid LinkedIn Profile URL"
        output.style.color="red"
    }
})