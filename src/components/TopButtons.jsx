import React from 'react'

function TopButtons() {

    const cities = [
        {
            id: 1,
            title: 'India'

        },
        {
            id: 2,
            title: 'Nepal'

        },
        {
            id: 3,
            title: 'Shri Lanka'

        },
        {
            id: 4,
            title: 'China'

        },
        {
            id: 5,
            title: 'Japan'

        },

    ]

    return (<div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>
                {city.title}
            </button>
        ))}
    </div>
    );
}

export default TopButtons