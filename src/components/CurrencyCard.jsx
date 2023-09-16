import React from 'react';

import { Card, Typography } from '@material-tailwind/react';

function CurrencyCard({ symbol, pair, wallet1, wallet2 }) {
    return (
        <Card className='card_bg_gray p-3 rounded mb-12'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img
                        className="h-11 w-11 rounded-full object-cover object-center"
                        src={symbol}
                        alt="SSE"
                    />
                    <Typography variant="h5" className="text-gray-300 ms-2.5 font-bold">{pair}</Typography>
                </div>
                <div className='flex items-center'>
                    <Typography variant="small" className="text-gray-500 text-md ms-2.5 font-light">{wallet1}</Typography>
                    <Typography variant="small" className="text-gray-200 text-md ms-2.5 font-semibold">{wallet2}</Typography>
                </div>
            </div>
        </Card>
    );
}

export default CurrencyCard;