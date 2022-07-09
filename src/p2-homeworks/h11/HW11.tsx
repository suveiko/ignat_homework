import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    const minValue = 0
    const maxValue = 100

    const [value1, setValue1] = useState(minValue)
    const [value2, setValue2] = useState(maxValue)


    const onChangeRange = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11:

            <div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center'
                }}>
                    {value1}
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '250px'
                }}>
                    <SuperRange
                        onChangeRange={setValue1}
                        onChangeRange2={setValue2}
                        value1={value1}
                        value2={value2}
                    />
                </div>

            </div>

            <div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center'
                }}>
                    {value1}
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '250px'
                }}
                >
                    <SuperDoubleRange
                        onChangeRange={onChangeRange}
                        value={[value1, value2]}
                    />
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center',
                    padding: '5px'
                }}>
                    {value2}
                </div>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11
