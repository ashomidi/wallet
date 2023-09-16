import DataTable, { createTheme } from 'react-data-table-component';
import { TRANSACTIONS } from '../dummy/transactions';
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
    text: {
        primary: '#EEEEEE',
        secondary: '#fff',
    },
    background: {
        default: 'transparent',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#1C1D21',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');

const customStyles = {
    rows: {
        style: {
            minHeight: '52px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            color: "#909090",
            fontSize: ".9rem"
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const columns = [
    {
        name: '#ID',
        selector: row => row.id,
    },
    {
        name: 'Amount',
        selector: row => {
            return (
                <div className='flex'>
                    <Typography variant="paragraph">{row.amount.value}</Typography>
                    <Typography variant="small" className="text-gray-700 font-normal ml-1.5 relative top-0.5">{row.amount.pair}</Typography>
                </div>
            )
        },
        grow: 2
    },
    {
        name: 'Date',
        selector: row => row.date,
        grow: 3
    },
    {
        name: 'Tag',
        selector: row => row.tag,
    },
    {
        name: 'Type',
        selector: row => {
            return (
                <>
                    {row.type == "Withdraw"
                        ?
                        <Typography variant="small" className="red-text font-normal ml-1.5 relative top-0.5">{row.type}</Typography>
                        :
                        <Typography variant="small" className="green-text font-normal ml-1.5 relative top-0.5">{row.type}</Typography>}
                </>
            )
        },
        right: true
    },
];

function Table() {
    return (
        <Link to="/transactionDetails">
            <DataTable
                columns={columns}
                data={TRANSACTIONS}
                theme='solarized'
                customStyles={customStyles}
            />
        </Link>

    );
};

export default Table;