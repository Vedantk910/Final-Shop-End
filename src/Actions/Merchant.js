import axios from "axios"

export const addShop = (shopname, description, category, GSTIN, state, city, pincode, image,latitude,longitude) => async(dispatch) => {

    try {

        dispatch({
            type:"addShopRequest"
        })
          console.log(latitude);
          console.log(longitude);
        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/add/shop`,{
            shopname,
            description,
            category,
            GSTIN,
            state,
            city,
            pincode,
            image,
            latitude,
            longitude
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"addShopSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"addShopFailure",
            payload:error.response.data.message
        })
    }
}


export const changeMerchantPassword = (oldPassword,newPassword,confirmPassword) => async(dispatch) => {

    try {

        dispatch({
            type:"ChangeMerchantPasswordRequest"
        })

        const {data} = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/password/change`,{
            oldPassword,
            newPassword,
            confirmPassword
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"ChangeMerchantPasswordSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"ChangeMerchantPasswordFailure",
            payload:error.response.data.message
        })
    }
}

export const getMerchantProfile = () => async(dispatch) => {

    try {

        dispatch({
            type:"GetMerchantProfileRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/me`)

        dispatch({
            type:"GetMerchantProfileSuccess",
            payload:data.merchant
        })
        
    } catch (error) {
        dispatch({
            type:"GetMerchantProfileFailure",
            payload:error.response.data.message
        })
    }
}

export const editMerchantProfile = (name,email,contact,dob,pincode, image) => async(dispatch) => {

    try {

        dispatch({
            type:"EditMerchantProfileRequest"
        })

        const {data} = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/me`,{
            name,
            email,
            contact,
            dob,
            pincode,
            image
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"EditMerchantProfileSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"EditMerchantProfileFailure",
            payload:error.response.data.message
        })
    }
}