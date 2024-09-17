{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re') 
    const pa = document.getElementById('pa')    
    const input = document.getElementById('input')
    const input2 = document.getElementById('input2')
    const btn = document.getElementById('btn')    
    

    function reverse2(){
        let anagram
       
        const buildCharMap = (str)=>{
            const charMap = new Map()           
            for(const char of clean(str)){
             charMap.set(char, charMap.get(char) + 1 || 1)
            }
            return charMap 
         }
         const clean = (str) => {
             return str.toLowerCase().replaceAll(' ','')
         }

        let CharMapA = buildCharMap(input.value)
        let CharMapB = buildCharMap(input2.value)
        
        anagram = true

        if(CharMapA.size !== CharMapB.size){
             anagram = false
        }

        for(const [char,count] of CharMapA){
            if(CharMapB.get(char) !== count){
                anagram = false
            }
            
        } 
 
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
    