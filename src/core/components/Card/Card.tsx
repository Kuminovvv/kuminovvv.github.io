import React from 'react'

import {observer} from 'mobx-react-lite'
import './Card.scss'


export default observer(() => {


    return (
        <div className="card bg-base-100 shadow-xl image-full my-card">
            <figure><img src="https://img3.labirint.ru/rc/e80fa325643657a1098d32bca72ef127/363x561q80/books77/763601/cover.jpg?1598952401" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    )
})
