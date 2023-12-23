import { React, Fragment, useState, useEffect } from 'react';

import { Outlet} from 'react-router-dom';

const App = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('auth-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <Fragment>
            {isLoggedIn ?(<Outlet />):console.log("not logged in")}
        </Fragment>
    );
}

export default App;