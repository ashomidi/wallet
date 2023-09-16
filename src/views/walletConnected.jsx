import React from 'react';
import metamaskImg from "../assets/icons/MetaMask 1.png";
import { Button, Card, IconButton, Typography } from '@material-tailwind/react';
import Titles from '../components/Titles';
import { PiWarningCircle } from "react-icons/pi";
import { WALLET_ASSETS } from '../dummy/walletAssets';

function WalletConnected(props) {
    return (

        <div className="container max-w-3xl py-14">
            <Card className='card_bg_gray p-3 rounded mb-16'>
                <div className='flex mb-8'>
                    <img
                        className="me-1"
                        src={metamaskImg}
                        alt="metamask"
                    />
                    <div className='relative top-1'>
                        <Typography variant="h5" className="text-gray-400">Account</Typography>
                        <Typography variant="small" className="text-gray-600">for more security please <span className='text-white'>disconnect</span> from your wallet when you are not using it!</Typography>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <Button variant="outlined" className="dc_btn font-light focus:ring-transparent">DISCONNECT</Button>
                    <div className='flex items-center'>
                        <Typography variant="small" className="text-gray-700 me-2.5">BEP20</Typography>
                        <Typography variant="h6" className="text-gray-300">0X32...2F32</Typography>
                    </div>
                </div>
            </Card>
            <div className='flex items-center mb-1'>
                <Titles title="Supported Assets" size="h6" />
                <IconButton variant="text" className="caution rounded-full">
                    <PiWarningCircle className="text-gray-600" size="27px" />
                </IconButton>
            </div>

            {WALLET_ASSETS.map(item => (
                <Card className='card_bg_gray p-3 rounded mb-2.5' key={item.id}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img
                                className="h-14 w-14 rounded-full object-cover object-center me-2"
                                src={item.symbol}
                                alt="Soroosh smart ecosystem"
                            />
                            <div>
                                <Typography variant="h6" className="text-white">{item.pair}</Typography>
                                <Typography variant="small" className="text-gray-600">{item.value}</Typography>
                            </div>
                        </div>
                        <div className='text-right'>
                            <Typography variant="h5" className="text-white">{item.asset}</Typography>
                            <Typography variant="small" className="text-gray-600 text-xs">~= {item.usd} USD</Typography>
                        </div>
                    </div>
                </Card>
            ))}
        </div>

    );
}

export default WalletConnected;