import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    const { name, quantity, price, photo, taste, supplier, category, _id } = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        console.log(updateCoffee);

        // send update to db
        fetch(`http://localhost:3000/addcoffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Update Done!",
                        icon: "success",
                        draggable: true,
                        timer:500
                    });
                    console.log(data);
                }
        })




    }

    return (
        <div className='p-24 '>
            <div className='text-center space-y-5 p-12 '>
                <h1 className='text-6xl font-rancho text-shadow-lg'>Update Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 '>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Quantity</legend>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter Quantity" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Supplier</legend>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Taste</legend>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Enter Coffee Category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Price</legend>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Enter Coffee Price" />
                    </fieldset>
                </div>
                <div className='space-y-5 mt-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter photo url" />
                    </fieldset>
                    <input type="submit" className='btn w-full' value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;