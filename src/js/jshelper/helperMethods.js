import { displayData } from "../main";
import { fetchData } from "./useFetch";
import { checkInput } from "./validateInput";
import { baseDataKey } from "../main";

// preloading data in the title and description
  export function editIt(id) {
    fetchData(`${baseDataKey}/${id}`, 'GET')
    .then(data => {
        document.getElementById('title').value = data.title;
        document.getElementById('description').value = data.description;
        document.getElementById('movie-id').value = data.id;
        document.getElementById('image-display').src = data.img_url
      })
  }
  
  
  // save data update data
  export function saveData() {
    var id = document.getElementById('movie-id').value
    var titleInput = document.getElementById('title').value
    var descriptionInput = document.getElementById('description').value
    

    var movieObj = {
      "title": titleInput,
      "description": descriptionInput,
      "img_url": "https://pbs.twimg.com/media/Ex5gb2AW8AcVGRX.jpg"
    }
    if(checkInput(titleInput)&&checkInput(descriptionInput)){
      if (id === null || id === undefined || id === "") {
        fetchData(baseDataKey, "POST", movieObj).then(displayData(baseDataKey))
        console.log("data posted successfully")
        modal.style.display = "block"
    } else {
        movieObj.id = id;
        fetchData(`${baseDataKey}/${id}/`, "PUT", movieObj).then(displayData(baseDataKey))
        console.log('data modified successfully')
        modal.style.display = "block"
    }
    }else{
      console.log('Invalid Input')
     
    }
    
  }
  
  