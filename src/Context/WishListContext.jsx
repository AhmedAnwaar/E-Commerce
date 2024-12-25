import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast, } from "react-toastify";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import ServerError from "../components/ServerError/ServerError";


// Create context
export const WishListContextProvider = createContext();

// CartContext component
// eslint-disable-next-line react/prop-types
export default function WishListContext({ children }) {
    const [productsWishList, setProductWishList] = useState(null);
    const [countWishList, setCountWishList] = useState(0);



    const addToWishList = useMutation({
        mutationFn: (productId) => {
            return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist", { productId }, { headers: { token: localStorage.getItem("token") } }
            );
        },
        onSuccess: (data) => {
            toast.success(data?.data.message);
             // You can log the response data if needed
            refetch()
        },
        onError: () => {
            toast.error("Error adding product to your cart"); // Display error toast
        },
    });

    const deleteItem = useMutation({
        mutationFn: (id) => {
            return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, { headers: { token: localStorage.getItem("token") }, })
        },
        onSuccess: () => {

            toast.success("Product removed from WhishList");
          // You can log the response data if needed
            refetch()
        },
        onError: () => {
            toast.error("Error removing product"); // Display error toast
        },
    });


    function getWhislist() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/wishlist", { headers: { token: localStorage.getItem("token") }, });

    }
    let { data, isError, isLoading, refetch } = useQuery({
        queryKey: ['whishlistitem'],
        queryFn: getWhislist,
        enabled: !!localStorage.getItem("token")

    })
    useEffect(() => {
        if (data && localStorage.getItem("token")) {
            setProductWishList(data?.data?.data);
            setCountWishList(data?.data?.count);

        }
    }, [data]);
    if (isLoading) {
        return <LoadingScreen />
    }
    if (isError) {
        return <ServerError />
    }

    return (
        <WishListContextProvider.Provider
            value={{
                addToWishList,
                getWhislist,
                productsWishList,
                deleteItem,
                countWishList

            }}
        >
            {children}
        </WishListContextProvider.Provider>
    );
}