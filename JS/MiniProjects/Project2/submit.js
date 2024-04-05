const submit = document.querySelector('.container')
submit.addEventListener('submit', (event)=>{
    event.preventDefault()

    const height = parseInt(document.querySelector('#BmiHeight').value)
    const weight = parseInt(document.querySelector('#BmiWeight').value)
    const results = document.querySelector('#results')
    if(height ==='' || height < 0 || isNAN(height) ){
        results.innerHTML= "please give valid height";
    }
})