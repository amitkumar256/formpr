import React, { createContext, useEffect, useState } from 'react';
import { useSession } from "next-auth/react"
import axios from 'axios';


// Create the cart context
export const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
    const { data: session } = useSession()

    // Define the state for the cart items
    const [cartItems, setCartItems] = useState([]);
    const [userProfile, setUserProfile] = useState([])
    const [allCards, setAllCards] = useState([])

    useEffect(() => {
        const fetchCartType = async () => {
            const requestData = await fetch(`/api/cardType`)
            const data = await requestData.json()
            const cardType = !data.error ? data.result : []

            const newArray = cardType.map((obj) => {
                return { ...obj, quantity: 0 };
            });
            setCartItems(newArray)
            // console.log(cardType, "cardTypeee")
        }
        const fetchUserCards = async (puuid) => {
            const response = await axios.post(`/api/manageCards`, {
                puuid: puuid
            })
            if (response.data) {
                if (!response.data.error) {
                    setAllCards(response.data.result)
                }
            }
            // console.log(response, "userCards")
        }

        const fetchUserProfile = async () => {
            const response = await axios.post(`/api/auth/isSignedUp`, {
                email: session.user.email,
                name: session.user.name,
                avatar: session.user.image
            })
            if (response.data) {
                if (!response.data.error) {
                    setUserProfile(response.data.result)
                    if (response.data.result?.totalCards > 0) {
                        fetchUserCards(response.data?.result?.puuid)

                    }
                }
            }
            // console.log(response, "resp ")
        }


        if (!cartItems.length) {
            fetchCartType()

        }
        if (!userProfile.length && session?.user != null) {
            fetchUserProfile()
        }


    }, [session])

    // Function to add an item to the cart


    const plusCartFunc = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id) {
                let newItem = { ...item, quantity: parseInt(item.quantity) + 1 }
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)

    }
    const minusCartFunc = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id && item.quantity > 0) {
                let newItem = { ...item, quantity: parseInt(item.quantity) - 1 }
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)

    }
    const handleItemCount = (id, count) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id && count >= 0) {
                let newItem = { ...item, quantity: parseInt(count) }
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)

    }


    // Function to remove an item from the cart
    // const removeItemFromCart = (itemId) => {
    //     setCartItems(cartItems.filter((item) => item.id !== itemId));
    // };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Create the cart context value
    const cartContextValue = {
        cartItems,
        userProfile,
        allCards,
        clearCart,
        plusCartFunc,
        minusCartFunc,
        handleItemCount
    };

    // Provide the cart context to its children components
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};