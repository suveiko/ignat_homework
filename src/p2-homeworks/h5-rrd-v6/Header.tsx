import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>
            <input type="checkbox" id="h" className={s.hidMT}/>
            <div className={s.hidM}>
                <NavLink
                    to={PATH.PRE_JUNIOR}
                    className={({isActive}) => isActive ? s.active : s.item}> PreJunior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR}
                    className={({isActive}) => isActive ? s.active : s.item}> Junior
                </NavLink>
                <NavLink
                    to={PATH.JUNIOR_PlUS}
                    className={({isActive}) => isActive ? s.active : s.item}> JuniorPlus
                </NavLink>
            </div>
            <label className={s.btn} htmlFor="h"/>
        </div>
    )
}

export default Header
