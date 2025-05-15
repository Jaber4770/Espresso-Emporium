import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    const { id } = useParams();
    const matchedCoffee = coffeeData.find(coffee => coffee._id === id);
    const { name, quantity, price, photo, taste,supplier,category } = matchedCoffee;

    return (
        <div className='mx-auto'>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        className=''
                        src={photo}
                        alt="Movie" />
                </figure>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Taste: {taste}</p>
                    <p>supplier: {supplier}</p>
                    <p>category: {category}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;