import { Button, Typography } from "@material-tailwind/react";
import checkmark from "../assets/icons/complete.png";
import { Link } from "react-router-dom";

function PaymentSuccessful(props) {
    return (
        <center className="container max-w-3xl mx-auto centerize">
            <img width="70" src={checkmark} alt="nature image" />
            <Typography variant="h3" className="text-white font-bold text-xl mt-3">
                Transaction Submitted
            </Typography>
            <Typography
                variant="paragraph"
                className="text-gray-500 font-normal text-sm mt-4 w-96"
            >
                Your Transaction has been submitted <span className="font-bold text-white">successfully</span>. It will be completed
                after <span className="font-bold text-white">2 - 5</span> minutes
            </Typography>
            <Link to="/">
                <Button fullWidth className='bg-gray-900 mt-32 shadow-none font-bold text-md text-gray-400 py-2.5 hover:opacity-90 hover:shadow-none'>Done</Button>
            </Link>

        </center>
    );
}

export default PaymentSuccessful;