import axios from "axios"

export const registerUser = (name, email, password, phone) => async (dispatch) => {

    try {

        dispatch({
            type:"RegisterRequest"
        })

        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/register`,{
            name,
            email,
            password,
            phone
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"RegisterSuccess",
            payload:data.user
        })
        
    } catch (error) {
        dispatch({
            type:"RegisterFailure",
            payload:error.response.data.message
        })
    }

}

export const userToBusiness = () => async (dispatch) => {

    try {

        dispatch({
            type:"toBusinessRequest"
        })

        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/to/merchant`)

        dispatch({
            type:"toBusinessSuccess",
            payload:data.merchant
        })
        
    } catch (error) {
        dispatch({
            type:"toBusinessFailure",
            payload:error.response.data.message
        })
    }
}

export const LoadUser = () => async (dispatch) => {

    try {
        dispatch({
            type:"LoadRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/me`)

        {data.user && dispatch({
            type:"LoadUserSuccess",
            payload:data.user
        })}

        {data.merchant && dispatch({
            type:"LoadMerchantSuccess",
            payload:data.merchant
        })}
        
        
    } catch (error) {
        dispatch({
            type:"LoadFailure",
            payload:error.response.data.message
        })
    }

}