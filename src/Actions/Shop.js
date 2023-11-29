import axios from "axios"

export const myShops = () => async (dispatch) => {

    try {

        dispatch({
            type: "GetMyShopsRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/myshops`)

        dispatch({
            type: "GetMyShopsSuccess",
            payload: data.shops
        })

    } catch (error) {
        dispatch({
            type: "GetMyShopsFailure",
            payload: error.response.data.message
        })
    }
}

//shop details
export const shopDetails = (shopId) => async (dispatch) => {

    try {

        dispatch({
            type: "GetMyShopsRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/shop/${shopId}`)

        dispatch({
            type: "GetMyShopsSuccess",
            payload: data.shops
        })

    } catch (error) {
        dispatch({
            type: "GetMyShopsFailure",
            payload: error.response.data.message
        })
    }
}

//All products of a shop
export const allProductsOfShop = (shopid) => async (dispatch) => {

    try {

        dispatch({
            type: "allShopProductsRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/shop/products/${shopid}`)
        console.log(data);

        dispatch({
            type: "allShopProductsSuccess",
            payload: data.products
        })

    } catch (error) {
        dispatch({
            type: "allShopProductsFailure",
            payload: error.response.data.message
        })
    }
}


//Add product to shop
export const addProduct = (shopid, name, category, price, sold, stock, description, image) => async (dispatch) => {

    try {

        dispatch({
            type: "addProductRequest"
        })

        const { data } = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/add/product/${shopid}`, {
            name,
            category,
            price,
            sold,
            stock,
            description,
            image
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "addProductSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "addProductFailure",
            payload: error.response.data.message
        })
    }
}

//Add delete product to shop
export const deleteProduct = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "deleteProductRequest"
        })

        const { data } = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/product/${id}`)

        dispatch({
            type: "deleteProductSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteProductFailure",
            payload: error.response.data.message
        })
    }
}


//Get all shops for user
export const showAllShops = () => async (dispatch) => {

    try {

        dispatch({
            type: "GetAllShopsRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/shops`)

        dispatch({
            type: "GetAllShopsSuccess",
            payload: data.shops
        })

    } catch (error) {
        dispatch({
            type: "GetAllShopsFailure",
            payload: error.response.data.message
        })
    }
}
// get the details of particular product of shop
export const showProductDetail = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "showProductDetailRequest"
        })

        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/product/${id}`)

        dispatch({
            type: "showProductDetailSuccess",
            payload: data.product
        })

    } catch (error) {
        dispatch({
            type: "showProductDetailFailure",
            payload: error.response.data.message
        })
    }
}


// edit the details of particular product of shop
export const editProductDetail = (id, name, category, price, sold, stock, description, image) => async (dispatch) => {

    try {

        dispatch({
            type: "editProductDetailRequest"
        })
        console.log(name);
        const { data } = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/product/${id}`, {
            name,
            category,
            price,
            sold,
            stock,
            description,
            image
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "editProductDetailSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "editProductDetailFailure",
            payload: error.response.data.message
        })
    }
}

// get the details of particular shop
export const getShopDetails = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "GetShopDetailsRequest"
        })
        const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/shop/${id}`)

        dispatch({
            type: "GetShopDetailsSuccess",
            payload: data.shop
        })

    } catch (error) {
        dispatch({
            type: "GetShopDetailsFailure",
            payload: error.response.data.message
        })
    }
}
// edit the details of particular shop
export const editShopDetails = (id, shopname, description, category, GSTIN, pincode, contact, image) => async (dispatch) => {

    try {

        dispatch({
            type: "EditShopDetailsRequest"
        })
        const { data } = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/shop/${id}`, {
            shopname,
            description,
            category,
            GSTIN,
            pincode,
            contact,
            image
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: "EditShopDetailsSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "EditShopDetailsFailure",
            payload: error.response.data.message
        })
    }
}

//Get all local shops under 1km
export const showAllLocalShops = (location,dist) => async (dispatch) => {

    try {

        dispatch({
            type: "GetAllLocalShopsRequest"
        })

        const url = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/shops`
        // const url = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/local-shops?latitude=${location.latitude}&longitude=${location.longitude}`

        console.log(url)
        const { data } = await axios.get(url)

        dispatch({
            type: "GetAllLocalShopsSuccess",
            payload: data.shops
        })

    } catch (error) {
        dispatch({
            type: "GetAllLocalShopsFailure",
            payload: error.response.data.message
        })
    }
}