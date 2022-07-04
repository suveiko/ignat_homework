import React from 'react'
import {Slider} from "@mui/material";

type SuperRangePropsType = {
    onChangeRange?: (value: number) => void
    onChangeRange2?: (value: number) => void
    value1?: number
    value2?: number
    minValue?: number
    maxValue?: number
    disabled?: boolean
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        onChangeRange, value1,
        value2, onChangeRange2, minValue,
        maxValue, disabled
    }) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
        if (value1 && value2 && value2 < value1 + 2 && value2 !== 100) {
            onChangeRange2 && onChangeRange2(value1)
        }
    }

    return (
        <>
            <Slider
                size="small"
                value={value1}
                onChange={handleChange}
                min={minValue ? minValue : 0}
                max={maxValue ? maxValue : 100}
                disabled={disabled}
            />
        </>
    )
}

export default SuperRange
