import axios from "axios"


//To Login User
export const LoginUser = (email, password) => async (dispatch) => {

    try {

        dispatch({
            type:"LoginRequest"
        })

        //data will contain: success:true, user and token
        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {email,password}, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        data.user && dispatch({
            type:"UserLoginSuccess",
            payload:data.user,
        })

        data.merchant && dispatch({
            type:"MerchantLoginSuccess",
            payload:data.merchant
        })

        dispatch({
            type:"clearError"
        })
    } catch (error) {
        dispatch({
            type:"LoginFailure",
            payload:error.response.data.message
        })
    }
}


//To Logout User
export const LogoutUser = () => async (dispatch) => {

    try {

        dispatch({
            type:"LogoutRequest"
        })

        //data will contain: success:true, user and token
        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/logout`)

        dispatch({
            type:"LogoutSuccess",
            payload:data.message,
        })


    } catch (error) {
        dispatch({
            type:"LogoutFailure",
            payload:error.response.data.message
        })
    }
}

//register user
export const registerUser = (name, email, password) => async (dispatch) => {

    try {
        
    } catch (error) {
        dispatch({
            type:"registerFailure",
            payload:error.response.data.message
        })
    }

}