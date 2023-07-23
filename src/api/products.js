import axios from "axios";
import { compact } from "lodash";

function getProducts({details = true, categories = null, search = null}) {
    let url = `getProductos?details=${details}`;
    if (categories) {
        const _categories = compact(categories);
        url += `&filter_categories=${JSON.stringify(_categories)}`;
    }

    if (search) url += `&search=${search}`;

    return axios.get(
        url
    ).then((response) => response.data);
  }


export {
    getProducts
}