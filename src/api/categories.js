import axios from "axios";

function getCategories(){
    return axios.get(
        "/getCategorias"
    ).then((response) => response.data);
  }


export {
    getCategories
}