import myTemplate from '../layouts/template.hbs'
import '../css/styles.css';
import { domHandler } from './jshelper/domHandler';
import { fetchData} from './jshelper/useFetch';

// export const baseURL = "http://localhost:3000/movieData"
export const baseDataKey = 'movieData'


// passing data in template
function createHTML(data) {
  var rootAccess = document.getElementById('root');
  if (!!Object.keys(data).length) {
    let myData = {
      moviedata: data,
    }
    // let myData = {}
    rootAccess.innerHTML = myTemplate(myData);
    if(myData){
      domHandler()
    }
  }else{
    // console.log(data)
    rootAccess.innerHTML = myTemplate(data);
  }
}


// get data
export function displayData(baseDataKey) {
  fetchData(baseDataKey,'GET').then(data => createHTML(data)).catch((err)=>{
    createHTML(err)
    console.log(err)
  })
}

displayData(baseDataKey)



