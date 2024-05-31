import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <PopupContext.Provider value={{ showPopUp, setShowPopUp }}>
            {children}
        </PopupContext.Provider>
    );
};
