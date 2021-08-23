import { saveData, editIt } from "./helperMethods"
import { fetchData } from "./useFetch"
import { checkInput } from "./validateInput"
import { baseDataKey } from "../main"
// controller of event handler and buttons
export function domHandler() {  
    
  let titleAccess = document.getElementById('title')
      let descriptionAccess = document.getElementById('description')
      let titleMessage = document.getElementById('validate-title')
      let descriptionMessage = document.getElementById('validate-description')

      titleAccess.addEventListener('input', function(){
        if(!(checkInput(titleAccess.value))){
          titleMessage.innerText = "Invalid Title"
          titleMessage.style.color = 'red';  
        } else{
          titleMessage.innerText = "Valid Title"
          titleMessage.style.color = 'green';
        } 
      })

      descriptionAccess.addEventListener('input', function(){
        if(!(checkInput(descriptionAccess.value))){
          descriptionMessage.innerText = "Invalid description"
          descriptionMessage.style.color = 'red';  
        } else{
          descriptionMessage.innerText = "Valid description"
          descriptionMessage.style.color = 'green';
        } 
      })

  
  
  //modal access
    const modal = document.getElementById('modal')
    const close = document.getElementById('close')
    
    // btns
    const editBtn = document.querySelectorAll('#editBtn')
    const submitForm = document.getElementById('submitForm')
    const addMovieData = document.getElementById('addData')
    const deleteBtn = document.querySelectorAll('#deleteBtn')
    
    // modal handling
    window.addEventListener('click', event => {
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    })
    close.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  
    // create card
    addMovieData.addEventListener('click', function (event) {
      event.preventDefault()
      modal.style.display = 'block'
      document.getElementById('title').value = "";
      document.getElementById('description').value = "";
      document.getElementById('movie-id').value = ""
      document.getElementById('image-display').src = "";
    })
  
    // post method
    submitForm.addEventListener('submit', function (event) {
      event.preventDefault()
      
      saveData()
    })
  
    // put method
    editBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var parentID = btn.parentNode.parentNode.id
        // console.log(parentID)
        editIt(parentID)
        modal.style.display = 'block'
      })
    })
  
  
    // delete method
    deleteBtn.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var parentID = btn.parentNode.parentNode.id
        console.log(parentID)
        var x = document.getElementById(parentID)
        x.parentNode.removeChild(x);
        fetchData(`${baseDataKey}/${parentID}`,'DELETE')
      })
    })
  }
  
  

  