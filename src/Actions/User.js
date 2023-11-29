import axios from "axios"
export const changeUserPassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {

    try {

        dispatch({
            type: "ChangeUserPasswordRequest"
        })

        const { data } = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/password/change`, {
            oldPassword,
            newPassword,
            confirmPassword
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "ChangeUserPasswordSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "ChangeUserPasswordFailure",
            payload: error.response.data.message
        })
    }
}

export const addToCart = (productId, quantity) => async (dispatch) => {

    try {

        dispatch({
            type: "AddToCartRequest"
        })

        const { data } = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/add-to-cart`, {
            productId,
            quantity
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "AddToCartSuccess",
            payload: data.message
        })
        dispatch({
            type: "cart",
            payload: data.cart
        })

    } catch (error) {
        dispatch({
            type: "AddToCartFailure",
            payload: error.response.data.message
        })
    }
}

export const getCartDetails = () => async (dispatch) => {

    try {

        dispatch({
            type: "AddToCartRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/add-to-cart`)

        dispatch({
            type: "cart",
            payload: data.cart
        })

    } catch (error) {
        dispatch({
            type: "AddToCartFailure",
            payload: error.response.data.message
        })
    }
}