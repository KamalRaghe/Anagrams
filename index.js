{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re')    
    const array = [
        { id: 1, age: 25 },
        { id: 2, age: 26 },
        { id: 3, age: 26 },
        { id: 2, age: 27 },
    ]
    
    // function StringId(){
    //     const idArray = array.map(obj=>obj.id)
    //     const arr = []
    //     let IdString = ''

    //     for(let id of idArray){
    //         if(!arr.includes(id)){
    //             arr.push(id)
                
    //         }
    //     }
    //     for(let i = 0; i < arr.length; ++i){
    //         if(i !== arr.length-1){
    //             string.innerHTML += `${arr[i]}, `
    //         }else{
    //             string.innerHTML += `${arr[i]}  `
    //         }
    //     }
    // }
    
    function StringId(){
        const idArray = array.map(obj=>obj.id)
        const arr = [...new Set(idArray)]
        string.innerHTML = arr.join(', ')
    }

    StringId()