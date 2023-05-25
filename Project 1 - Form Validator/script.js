const inputfields = document.querySelectorAll('.input-field')
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn')

btn.addEventListener('click' , checkRequirements)

function ValidateEmail(email) {

  var re = /\S+@\S+\.\S+/;
  return re.test(email);

}

function checkRequirements(){
  inputs.forEach((input,idx) => {
    if(idx === 0 && input.value.length < 5 ){
      inputfields[idx].classList.add('requirements')
      input.style.border = '3px solid red'
    }
    else if(idx === 0 && input.value.length > 4 ){
      inputfields[idx].classList.remove('requirements')
      input.style.border = '3px solid lightgreen'
    }



    if(idx === 1 && ValidateEmail(input.value) == false){
      inputfields[idx].classList.add('requirements') 
      input.style.border = '3px solid red'     
    }
    else if(idx === 1 && ValidateEmail(input.value) == true){
      inputfields[idx].classList.remove('requirements') 
      input.style.border = '3px solid lightgreen'     
    }



    if(idx === 2 && input.value.length < 6){
      inputfields[idx].classList.add('requirements')
      input.style.border = '3px solid red'          

    }
    else if(idx === 2 && input.value.length > 5){
      inputfields[idx].classList.remove('requirements')  
      input.style.border = '3px solid lightgreen'    
    }



    if(idx === 3 && inputs[3].value !== inputs[2].value || input.value == ""){
      inputfields[idx].classList.add('requirements')     
      input.style.border = '3px solid red'      
    }
    else if(idx ===3 && inputs[3].value === inputs[2].value ){
      inputfields[idx].classList.remove('requirements')
      input.style.border = '3px solid lightgreen'  
    }
  })
}
