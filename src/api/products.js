import axios from "axios";
import _ from "lodash";

function getProducts({details = true, categories = null}) {
    let url = `getProductos?details=${details}`;
    if (categories) {
        const _categories = _.compact(categories);
        url += `&filter_categories=${JSON.stringify(_categories)}`;
    }

    return axios.get(
        url
    ).then((response) => response.data);
  }


export {
    getProducts
}