import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { accept_header, products_url as url } from "../Utils/constatns";
import { useUserContext } from "../context/user_context";
import {
    SIDEBAR_OPEN, SIDEBAR_CLOSE, GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR,
} from "../action";
import products_reducer from "../reducer/products_reducer";

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    produts_error: false,
    products: [],
    featured_products: [],
    trending_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {

    const { userid } = useUserContext();
    //using reducer
    const [state, dispatch] = useReducer(products_reducer, initialState);

    //sidebar functions
    const openSideBar = () => {
        dispatch({ type: SIDEBAR_OPEN });
    };

    const closeSideBar = () => {
        dispatch({ type: SIDEBAR_CLOSE });
    };

    //fetch all product api
    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        console.log("----------", url)
        try {
            const response = await axios.get(url, {
                headers: {
                    Accept: accept_header,
                },
            });
            const products = response.data.data;
            console.log(products);
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
        // const response = await axios.get(url);
        // console.log(response);
    };

    //fetch single product api
    const fetchSingleProduct = async (url) => {
        console.log('singleproduct ', url)
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        try {
            const response = await axios.get(url, {
                headers: {
                    Accept: accept_header,
                },
            });
            const singleProduct = response.data.data;
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
        // const response = await axios.get(url);
        // console.log(response);
    };

    // use effect to fire function when site loads
    // useEffect(() => {
    //   fetchProducts(`${url}${userid}/1`);
    // }, [userid]);

    return (
        <ProductsContext.Provider
            value={{ ...state, openSideBar, closeSideBar, fetchSingleProduct, fetchProducts }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
// make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext);
};
