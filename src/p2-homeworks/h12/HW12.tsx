import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'lightgreen', 'darkslateblue', 'regular'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.newTheme)
    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => dispatch(changeThemeC(value))

    return (
        <>
            <hr/>
            homeworks 12:
            <div className={`${s[theme]} ${s.container}`}>

                <span className={s[theme + '-text']}>
               <SuperRadio
                   value={theme}
                   options={themes}
                   onChangeOption={onChangeCallback}
               />
            </span>
            </div>
        </>
    );
}

export default HW12;
