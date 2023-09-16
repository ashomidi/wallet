import { Typography } from '@material-tailwind/react';
import React from 'react';

function Balance({ value }) {
    return (
        <div className='flex'>
            <Typography className="font-light text-md green-text" variant="small">Available</Typography>
            <Typography className="ms-1 font-light text-md green-text" variant="small">{value}</Typography>
        </div>

    );
}

export default Balance;