import { useRef } from "react";
import { List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";
import { Toaster, toast } from "react-hot-toast";
import { MdOutlineContentCopy } from 'react-icons/md';

function CopyableListItem({ listItem, listItem2, listItemPre }) {
    const listItemSuffixRef = useRef();

    const copyToClipboard = () => {
        const txtToCopy = listItemSuffixRef.current.textContent.trim();
        navigator.clipboard.writeText(txtToCopy)
            .then(() => {
                toast.success("Copied", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    return (
        <>
            <div>
                <Toaster />
            </div>
            <List className="my-2">
                <ListItem onClick={copyToClipboard} className="group rounded-none hover:bg-gray-900 focus:bg-transparent">
                    <ListItemPrefix className="text-gray-500">
                        <div className="w-16">
                            <Typography variant="paragraph" className="font-normal">{listItemPre}</Typography>
                        </div>
                    </ListItemPrefix>
                    <div className="flex">
                        <Typography ref={listItemSuffixRef} className="text-white font-normal">{listItem}</Typography>
                        <Typography variant="small" className="text-gray-400 text-xs relative top-1.5 ms-1.5">{listItem2}</Typography>
                    </div>
                    <ListItemSuffix>
                        <ListItemSuffix className="flex cursor-pointer">
                            {<MdOutlineContentCopy
                                size="20px"
                                className="text-gray-500" />}
                        </ListItemSuffix>
                    </ListItemSuffix>
                </ListItem>
            </List>
        </>
    );
}

export default CopyableListItem;