var all_inputs = document.querySelectorAll("input[type='text']")
var button = document.getElementById("save")
var table = document.getElementById("table")
var list = []

button.addEventListener('click', function () {
    //console.log(all_inputs)
    
    
    all_inputs.forEach( 
        function(node, index) {
            console.log(node.value);
            console.log(node.name)
            list.push(node.value)
        }
    )

    for (x in list){
        
    }
    
    console.log(list)

})
