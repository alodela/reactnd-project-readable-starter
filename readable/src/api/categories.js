import { API_HOST, HEADERS as headers } from './constants'

const fetchCategories = () => {
    return fetch(`${API_HOST}/categories`, { headers })
        .then(response => response.json())
        .then(response => response.categories)
}

export default {
    fetchCategories,
}