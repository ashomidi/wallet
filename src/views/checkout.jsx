import { Button, Card, Typography } from '@material-tailwind/react';
import Titles from '../components/Titles';
import CurrencyCard from '../components/CurrencyCard';
import sseImg from "../assets/pairs/sse.png"
import Balance from '../components/Balance';
import { useSelector, useDispatch } from 'react-redux';
import { disconnectWallet, connectWallet } from '../features/walletSlice';
import { Link } from 'react-router-dom';

function Checkout(props) {

    const walletIsConnect = useSelector(state => state.wallet.walletIsConnect);
    const dispatch = useDispatch();

    return (
        <div className="container max-w-3xl py-14">
            <Card className='card_bg_gray p-3 rounded mb-16'>
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
                            <Typography variant="h6" className="ms-2.5 text-gray-500 font-thin text-sm">USDT / Mo</Typography>
                            <Typography variant="h6" className="ms-2.5 text-gray-500 font-thin text-sm">~= 23 SSE</Typography>
                        </div>
                    </div>
                </div>
                <Typography variant="small" className="font-normal text-gray-500">Expire on 22 Nov 2021</Typography>
            </Card>

            <div className='flex justify-between items-center'>
                {walletIsConnect ?
                    <>
                        <Titles title="Currency" size="h6" />
                        <Balance value="1360.3 SSE" />
                    </>
                    :
                    <Titles title="Currency" size="h6" />
                }
            </div>

            <CurrencyCard symbol={sseImg} pair="SSE" wallet1="BEP20" wallet2="0X32...2F32" />

            <Card className='border border-dashed border-gray-600 bg-transparent p-3 rounded mb-24'>
                <div className='flex items-center justify-between mb-8'>
                    <div className='flex items-center'>
                        <Typography variant="h3" className="text-gray-400 font-bold">TOTAL</Typography>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Typography variant="h2" color="white" className="font-bold">23</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" className="ms-2.5 text-gray-500 font-normal text-sm">SSE</Typography>
                        </div>
                    </div>
                </div>
                <Typography variant="small" className="font-normal text-gray-500">Fee  0.003 BNB</Typography>
            </Card>
            {walletIsConnect ?
                <Link to="/membership">
                    <Button fullWidth className='orange_btn shadow-none font-bold text-md py-2.5 hover:opacity-90 hover:shadow-none'>CONFIRM</Button>
                </Link>

                :
                <Button onClick={() => dispatch(connectWallet())} fullWidth className='bg-blue-700 shadow-none font-bold text-md py-2.5 hover:opacity-90 hover:shadow-none'>WALLET CONNECT</Button>
            }
        </div>
    );
}

export default Checkout;