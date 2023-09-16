import React from 'react';
import Titles from '../components/Titles';
import { Button, Card, Typography } from '@material-tailwind/react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function Membership(props) {
    return (
        <div className="container max-w-3xl py-14">
            <Titles title="Your Current plan" size="h4" />
            <Typography variant='paragraph' className="text-gray-500 mt-1">
                You can <span className='text-gray-200 font-bold'>Upgrade</span> your plan every time  you need
            </Typography>

            <Card className='card_bg_gray p-3 rounded mt-14 mb-32'>
                <div className='flex items-center justify-between mb-8'>
                    <div className='flex items-center'>
                        <Typography variant="h3" className="text-gray-400 font-bold">Daily Trade</Typography>
                        <Typography variant="h6" className="relative top-1 ms-2.5 grey_text font-normal">30 days</Typography>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Typography variant="h1" color="white" className="font-bold">6</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" className="ms-2.5 text-gray-500 font-normal text-sm">USDT</Typography>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <Typography variant="paragraph" className="font-normal text_orange">See plan features</Typography>
                    <Button className="flex items-center orange_btn gap-2 normal-case font-bold text-md caution py-2 px-1.5 shadow-none hover:opacity-90 hover:shadow-none">
                        <IoMdCheckmarkCircle size="25" color='white' />
                        Activated
                    </Button>
                </div>
            </Card>
            <Link to="/successful">
                <Button fullWidth className="flex items-center justify-center text-gray-900 text-center orange_btn gap-2 normal-case font-bold text-md caution shadow-none hover:opacity-90 hover:shadow-none">
                    UPGRADE PLAN
                    <HiArrowLongRight size="25" color='black' />
                </Button>
            </Link>

        </div>
    );
}

export default Membership;