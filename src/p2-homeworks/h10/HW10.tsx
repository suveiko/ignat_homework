import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loadingGif from './assets/loading.gif'


function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(loading))
        setTimeout(() => dispatch(loadingAC(!loading)), 2000)
    };

    return (
        <div style={{
            height: '100px',
        }}>
            homeworks 10:

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img style={{width: '80px', height: '80px'}} src={loadingGif} alt="крутилка..."/>
                    </div>
                ) : (
                    <div style={{marginTop: '20px'}}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
