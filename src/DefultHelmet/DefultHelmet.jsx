import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const DefultHelmet = () => {
    const location=useLocation()
    const getSwitch=()=>{
        switch (location.pathname) {
            case '/':
                return 'Code Blog';
            default:
                      return 'Code Blog';
        }
    }
    useEffect(()=>{
        getSwitch()
    },[location])
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>{getSwitch()}</title>
            </Helmet> 
        </div>
    );
};

export default DefultHelmet;