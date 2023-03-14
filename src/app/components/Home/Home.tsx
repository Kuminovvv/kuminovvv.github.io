import React from 'react'

import {observer} from 'mobx-react-lite'
import './Home.scss'
import Card from "../../../core/components/Card/Card";


export default observer(() => {


    return (
        <>
            <div className='home-input'>
                <input type="text" placeholder="Поиск" className="input input-bordered w-full max-w-xs search"/>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center home-best-week">content</div>
            </div>
            <div className='home-content'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>

    )
})
