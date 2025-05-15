import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    
    const { _id, photo, name, price, quantity } = coffee;

    const handleDelete = () => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // start delete coffee
                fetch(`http://localhost:3000/addcoffee/${_id}`, {
                    method: "DELETE"
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                                timer: 700
                            });
                            const remainingCoffee = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffee);
                        };
                    })
            }
        });
    }





    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex w-full justify-around">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className='join join-vertical space-y-4'>
                        <Link to={`/coffeedetails/${_id}`}>
                            <button className="btn btn-primary">View</button>
                        </Link>
                        <Link to={`/updatecoffee/${_id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;