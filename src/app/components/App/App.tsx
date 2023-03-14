import React, {useState} from 'react';

import './App.scss';
import Router from "../Router/Router";
import routes from "../../../lib/routes";

function App() {
    const [state, setState] = useState(false)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" onClick={()=>setState(!state)} checked={state}/>
            <div className="drawer-content flex flex-col items-center ">
                <Router/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay">Bookflix</label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <div className={'title'}>Bookflix</div>
                    <li><a onClick={()=>setState(!state)} href={"#" + routes.HOME}>Sidebar Item 1</a></li>
                    <li><a onClick={()=>setState(!state)} href={"#" + routes.FAVOURITES}>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
}

export default App;
