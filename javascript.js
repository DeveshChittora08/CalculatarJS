
function press(num){
    document.getElementById('inputbox').value += num
}

function cleardisplay(){
    document.getElementById('inputbox').value = " "
}

function deleteData(){
   let current = document.getElementById('inputbox').value
     document.getElementById('inputbox').value= current.slice(0,-1)
}

function calculate(){
    let result = eval(document.getElementById('inputbox').value)
    document.getElementById('inputbox').value = result
}
