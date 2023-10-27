import React from 'react';
import iconerror from '../assets/icons/warning.png'
import { Button, Typography } from '@material-tailwind/react';
import { Link } from "react-router-dom";

function WalletNotValid(props) {
    return (
        <div className="container max-w-3xl centerize">
            <div className="flex justify-around">
                <img
                    className="mx-auto me-2"
                    src={iconerror}
                    alt="Connect with wallet connect"
                />
            </div>
            <div className="mt-16 text-center">
                <Typography variant="h4" className='text-gray-400 font-semibold mb-3'>Got Error while trying to connect your wallet!</Typography>
                <Link to="https://soroosh.app/en">
                    <Button color="blue" className="bg-blue-800 py-2.5 px-14 text-base shadow-none hover:opacity-90 hover:shadow-none">BACK TO HOME</Button>
                </Link>

            </div>
        </div>
    );
}

export default WalletNotValid;