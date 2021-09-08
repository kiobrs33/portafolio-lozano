import React, { useState } from 'react';

export const GetTheme = () => {
    const [ theme, setTheme ] = useState(localStorage.getItem('dark-theme'));
    return theme;
} 