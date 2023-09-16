import { Card } from "@material-tailwind/react";
import { MdOutlineContentCopy } from 'react-icons/md';
import ListItems from "../components/ListItems";
import CopyableListItem from "../components/CopyableListItem";
import { Link } from "react-router-dom";

function TransactionDetails(props) {
    return (
        <div className="container max-w-3xl py-14">
            
            <Card className="w-full overflow-auto bg-transparent rounded border-0">
            <Link to="/Checkout">                
            <ListItems listItemPre="#ID" listItem="77362934" listItemSuf="Withdraw" />
                <ListItems listItemPre="Amount" listItem="0.054" listItem2="BNB" />
                <ListItems listItemPre="Date" listItem="21/03/23 20:21:33" />
                <ListItems listItemPre="Tag" listItem="Slaunch" />
            </Link>
                <CopyableListItem listItemPre="TXID" listItem="0x7b530e7e2c11e565e45e9c87f167e63357bcab41c32ace40d810891b2a48d91f"/>
            </Card>
            
            
        </div>
    );
}

export default TransactionDetails;