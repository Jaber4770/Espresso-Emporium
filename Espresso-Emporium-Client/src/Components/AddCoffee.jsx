import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
/*
        const name = form.name.value;
        const barista = form.barista.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.category.value;
        console.log(name, barista, supplier, taste, category, details, photourl); */
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send coffee data to db

        fetch('http://localhost:3000/addcoffee', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("after adding coffee to db", data);

                    Swal.fire({
                        icon: "success",
                        title: "Coffee added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // form.reset();
                }
            })
    }




    return (
        <div className='p-24 '>
            <div className='text-center space-y-5 p-12 '>
                <h1 className='text-6xl font-rancho text-shadow-lg'>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 '>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Barista</legend>
                        <input type="text" name='barista' className="input w-full" placeholder="Enter Barista Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Supplier</legend>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Taste</legend>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name='category' className="input w-full" placeholder="Enter Coffee Category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Details</legend>
                        <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <div className='space-y-5 mt-5'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter photo url" />
                    </fieldset>
                    <input type="submit" className='btn w-full' value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;