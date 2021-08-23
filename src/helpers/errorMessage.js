export default function errorMessage(data){
    if(data === undefined ||
        data === "" || data === false || data === null){
            return "Data not available"
    }
}