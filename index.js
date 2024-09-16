{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re') 
    const pa = document.getElementById('pa')    
    const input = document.getElementById('input')
    const input2 = document.getElementById('input2')
    const btn = document.getElementById('btn')    
    
    function reverse(){
        let str = input.value
        let reverse = ''
        // for (i=0;i < str.length; i++){
        //     reverse = str[i] + reverse 
        // }
        for (let i of str){
            reverse = i + reverse 
        }
        string.innerHTML = 'String: ' + str
        re.innerHTML = 'Reverse: ' + reverse
    }

    function reverse2(){
        const str = input.value.split('').reduce((accumulator, currentValue)=>(currentValue + accumulator ))
        let anagram

        const Anagram = () => input.value.split('').every((char, index) =>{
            anagram = (char === input2.value[str.length - index - 1])
        }) 
        Anagram()
        if(anagram){
            anagram = 'yes'
        }else{
            anagram = 'no'
        }
        string.innerHTML = 'String1: ' + input.value
        re.innerHTML = 'String2: ' + input2.value
        pa.innerHTML = 'anagram: ' + anagram
    }
    
    btn.addEventListener('click', reverse2)
    