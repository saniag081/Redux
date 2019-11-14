import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //caso que quiero llamar
    //se comunica con el reducer 
    dispatch({
        type: 'traer_usuarios',
        payload: response.data
    })
}