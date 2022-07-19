import {useState} from 'react';
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {RequestAPI} from "../api/api";


const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [serverStatus, setServerStatus] = useState<string>('Make request to server')

    const onClickButton = () => RequestAPI
        .testMethod(checked)
        .then(res => setServerStatus(res.data.errorText))
        .catch(err => setServerStatus(err.response.data.errorText))

    return (
        <div>
            <SuperCheckbox
                checked={checked}
                onChange={(e) => setChecked(e.currentTarget.checked)}
            />
            <SuperButton onClick={onClickButton}>Request</SuperButton>
            <div>{serverStatus}</div>
        </div>
    );
};

export default Request;