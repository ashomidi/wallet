import { Typography } from '@material-tailwind/react';
import React from 'react';

function Titles({ title, size }) {
    return (
        <Typography className="text-gray-400 me-1 font-bold" variant={size}>{title}</Typography>
    );
}

export default Titles;