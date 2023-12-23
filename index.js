const NUMBERS = [0,1,2,3,4,5,6,7,8,9]
let result = document.getElementById('result')

document.getElementById('button').addEventListener('click',()=>{
    let numeroCTE = document.getElementById('input').value;
    let i = 0
    let resultContainer = []

    while(i < numeroCTE.length){

        for(let j = 0; j < NUMBERS.length;j++){
            if(numeroCTE[i] == NUMBERS[j]){
                if(numeroCTE[i] == " "){
                    break
                }else{
                    resultContainer.push(numeroCTE[i])
                    break;  
                }
            }
        }
        i++
    }
    console.log(result)
    result.innerHTML = resultContainer.join('')
    result.style.display = 'block'
    document.getElementById('input').value = ''
})