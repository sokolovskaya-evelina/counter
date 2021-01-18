import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from '@material-ui/core';

type CounterType = {
    settingsError: null | string
    inc: (newValue: number) => void
    reset: () => void
    current: number
    maxValue: number
    disableButtons: boolean
}

const Counter = (props: CounterType) => {
    const [disable, setDisableInc] = useState<boolean>(false)


    const inc = () => {
        debugger
        props.inc(props.current)
        if (props.current === props.maxValue) {
            setDisableInc(true)
        }
    }
    const reset = () => {
        props.reset()
    }


    return (
        <div className={s.window}>
            <div className={s.counter}>
                {props.settingsError !== null ? <span
                        className={props.settingsError === 'Incorrect value' ? s.throw + ' ' + s.error : '' + '' + s.error}>{props.settingsError}</span> :
                    <span className={props.current === props.maxValue ? s.max : ''}>{props.current}</span>}
            </div>
            <div className={s.buttons}>
                <Button
                    disabled={!!(props.current == props.maxValue ? true : false) || props.disableButtons}
                    onClick={inc}
                    variant="contained"
                    color="primary"
                >
                    inc
                </Button>
                <Button
                    disabled={props.disableButtons}
                    onClick={reset}
                    variant="contained"
                    color="primary"
                >
                    reset
                </Button>
            </div>
        </div>
    );
};

export default Counter;