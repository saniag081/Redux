
export const traerTodos = () => (dispatch) => {
    //caso que quiero llamar 
    dispatch({
        type: 'traer_usuarios',
        payload: [1,2,3]
    })
}