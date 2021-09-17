import React from 'react';
import './style.css';
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((curElement) => {
    return curElement.category;
})
),
"All",
];

console.log(uniqueList);
const Resturent = (uniqueList) => {
    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueList);
    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Resturent;
