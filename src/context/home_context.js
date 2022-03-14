import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { home_url as url } from "../Utils/constatns";
import { GET_HOME_DATA_BEGIN, GET_HOME_DATA_ERROR, GET_HOME_DATA_SUCCESS, } from "../action";
import home_reducer from "../reducer/home_reducer";

const initialState = {
    home_loading: false,
    home_error: false,
    homeData: [],
    categories: [],
    occassions: [],
};

const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
    //using reducer
    const [state, dispatch] = useReducer(home_reducer, initialState);

    //fetch all product api
    const fetchProducts = async (url) => {
        dispatch({ type: GET_HOME_DATA_BEGIN });
        try {
            const response = await axios.get(url, {
                headers: {
                    Accept: "application/x.medex.v1+json",
                },
            });
            const homeData = response.data;
            // console.log(products);
            dispatch({ type: GET_HOME_DATA_SUCCESS, payload: homeData });
        } catch (error) {
            dispatch({ type: GET_HOME_DATA_ERROR });
        }
        // const response = await axios.get(url);
        // console.log(response);
    };

    //use effect to fire function when site loads
    useEffect(() => {
        fetchProducts(`${url}`);
    }, []);

    return (
        <HomeContext.Provider value={{ ...state }}>{children}</HomeContext.Provider>
    );
};
// make sure use
export const useHomeContext = () => {
    return useContext(HomeContext);
};
