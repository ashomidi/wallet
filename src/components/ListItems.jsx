import { List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";

function ListItems({ listItem, listItem2, listItemPre, listItemSuf }) {
    return (
        <List className="my-1 text-gray-100">
            <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-gray-900  focus:bg-gray-900">
                <ListItemPrefix className="text-gray-500">
                    <div className="w-16">
                        <Typography variant="paragraph" className="font-normal">{listItemPre}</Typography>
                    </div>
                </ListItemPrefix>
                <div className="flex">
                    <Typography variant='paragraph' className="text-white font-semibold">{listItem}</Typography>
                    <Typography variant="small" className="text-gray-600 text-sm font-normal relative top-1 ms-1.5">{listItem2}</Typography>
                </div>
                <ListItemSuffix>
                    {listItemSuf == "Withdraw"
                        ? <Typography variant="paragraph" className="red-text font-normal">{listItemSuf}</Typography>
                        : listItemSuf === "Deposit" ? <Typography variant="paragraph" className="green-text">{listItemSuf}</Typography>
                            : <Typography variant="paragraph" className="text-gray-400">{listItemSuf}</Typography>
                    }
                </ListItemSuffix>
            </ListItem>
        </List>
    );
}

export default ListItems;