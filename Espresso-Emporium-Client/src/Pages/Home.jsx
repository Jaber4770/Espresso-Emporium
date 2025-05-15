import { useLoaderData } from 'react-router';
import CoffeeCard from '../Components/CoffeeCard';
import { useState } from 'react';

const Home = () => {
    const initialLoadedCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(initialLoadedCoffee);
    return (
        <div>
            <h1>Home</h1>
            <div className='grid-cols-1 grid md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;