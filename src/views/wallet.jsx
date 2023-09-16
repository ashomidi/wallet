import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import walletConnectImg from "../assets/icons/wallet-connect 1.png";
import metamaskImg from "../assets/icons/MetaMask 1.png";
import { useSelector, useDispatch } from "react-redux";
import { connectWallet, disconnectWallet } from "../features/walletSlice";
import Titles from "../components/Titles";
import { PiWarningCircle } from "react-icons/pi";
import { WALLET_ASSETS } from "../dummy/walletAssets";
import { Link } from "react-router-dom";

function Wallet(params) {

    const walletIsConnect = useSelector(state => state.wallet.walletIsConnect);
    const dispatch = useDispatch();

    return (
        <div className="container max-w-3xl">
            {walletIsConnect ? (
                <div className="container max-w-3xl py-14">
                    <Card className='card_bg_gray p-3 rounded mb-16'>
                        <div className='flex mb-8'>
                            <img
                                className="me-1"
                                src={metamaskImg}
                                alt="metamask"
                            />
                            <div className='relative top-1'>
                                <Typography variant="h5" className="text-gray-400 font-bold">Account</Typography>
                                <Typography variant="small" className="text-gray-500 font-light">for more security please <span className='text-white'>disconnect</span> from your wallet when you are not using it!</Typography>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Button onClick={() => dispatch(disconnectWallet())} variant="outlined" className="dc_btn font-normal focus:ring-transparent">DISCONNECT</Button>
                            <div className='flex items-center'>
                                <Typography variant="small" className="text-gray-500 font-light me-2.5">BEP20</Typography>
                                <Typography variant="h6" className="text-gray-300 font-semibold">0X32...2F32</Typography>
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
                        <Link to="/transactions">
                            <Card className='card_bg_gray p-3 rounded mb-2.5' key={item.id}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <img
                                            className="h-14 w-14 rounded-full object-cover object-center me-2.5"
                                            src={item.symbol}
                                            alt="Soroosh smart ecosystem"
                                        />
                                        <div>
                                            <Typography variant="h6" className="text-white font-bold">{item.pair}</Typography>
                                            <Typography variant="small" className="text-gray-500 font-light">{item.value}</Typography>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <Typography variant="h5" className="text-white font-bold">{item.asset}</Typography>
                                        <Typography variant="small" className="text-gray-500 font-light text-xs">~= {item.usd} USD</Typography>
                                    </div>
                                </div>
                            </Card>
                        </Link>

                    ))}
                </div>
            ) : (
                <div className="container max-w-3xl centerize">
                    <div className="flex justify-around">
                        <img
                            className="mx-auto me-2"
                            src={walletConnectImg}
                            alt="Connect with wallet connect"
                        />
                        <img
                            className="mx-auto ms-2"
                            src={metamaskImg}
                            alt="Connect with metamask"
                        />
                    </div>
                    <div className="mt-16 text-center">
                        <Typography variant="h4" className='text-gray-400 font-semibold'>Connect to your <span className="text-white">WEB3</span> wallet</Typography>
                        <Typography variant="small" className="font-light text-gray-500 mt-1 mb-4">No wallet connected to Soroosh Smart App yet</Typography>
                        <Button onClick={() => dispatch(connectWallet())} color="blue" className="bg-blue-800 py-2.5 px-14 text-base shadow-none hover:opacity-90 hover:shadow-none">WALLET CONNECT</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Wallet;