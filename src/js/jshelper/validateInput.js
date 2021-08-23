// validation
export function checkInput(input){
    if(input === ""|| input===undefined|| input?.trim()===""){
      return false
    }else{

      return true
    }
  }