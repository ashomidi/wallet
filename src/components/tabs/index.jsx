import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Select from 'react-select';
import { OPTIONS } from "../../dummy/options";
import { useState } from "react";
import Table from "../Table";

function Tabs() {
    const [selectedTab, setSelectedTab] = useTabs([
        "all",
        "signals",
        "l2e",
        "copyTrading",
        "comissions"
    ]);

    const customStyles = {
        control: (base, state) => ({
            ...base,
            border: "none",
            background: "transparent",
            color: "#fff",
            cursor: 'pointer'
        }),
        singleValue: base => ({
            ...base,
            color: "#ddd",
            cursor: 'pointer'
        }),
        menu: (base) => ({
            ...base,
            marginTop: 0,
            color: "white",
            cursor: 'pointer'
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
            color: "#eee",
            background: "#202020",
            cursor: 'pointer'
        }),
    };

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <div className="container max-w-3xl mx-auto py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <nav className="flex justify-between rounded px-0">
                            <TabSelector
                                isActive={selectedTab === "all"}
                                onClick={() => setSelectedTab("all")}
                            >
                                All
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "signals"}
                                onClick={() => setSelectedTab("signals")}
                            >
                                Signals
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "l2e"}
                                onClick={() => setSelectedTab("l2e")}
                            >
                                L2E
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "copyTrading"}
                                onClick={() => setSelectedTab("copyTrading")}
                            >
                                Copy-Trading
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "comissions"}
                                onClick={() => setSelectedTab("comissions")}
                            >
                                Comissions
                            </TabSelector>
                        </nav>
                    </div>
                    <div>
                        <Select
                            placeholder="7d"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={OPTIONS}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'black',
                                    primary: 'black',
                                },
                            })}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <TabPanel hidden={selectedTab !== "all"}>
                        <Table />
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "signals"}>
                        Signals Tab
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "l2e"}>L2E Tab</TabPanel>
                    <TabPanel hidden={selectedTab !== "copyTrading"}>
                        Copy-Trading Tab
                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "comissions"}>
                        Comissions Tab
                    </TabPanel>
                </div>
            </div>
        </>
    );
}

export default Tabs;