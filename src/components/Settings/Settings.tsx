import React, {ChangeEvent, useState} from 'react';
import s from "./Settings.module.css"
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

type SettingsType = {
    startValue: number
    maxValue: number
    onStartValue: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onMaxValue: (e: ChangeEvent<HTMLTextAreaElement>) => void
    startValueError: boolean
    maxValueError: boolean
    disable: boolean
    addSettings: (newStartValue: number, newMaxValue: number) => void
}


const Settings = (props: SettingsType) => {


    const addSettings = () => {
        const newStartValue = props.startValue
        const newMaxValue = props.maxValue
        props.addSettings(newStartValue, newMaxValue)

    }
    return (
        <div>
            <div className={s.window}>
                <div className={s.counter}>
                    <div className={s.input}>
                        <span>start value:</span>
                        <TextField
                            onChange={props.onStartValue}
                            value={props.startValue}
                            size={"small"}
                            type="number"
                            variant={"outlined"}
                            error={props.startValueError}
                        /></div>
                    <div className={s.input}>
                        <span>max value: </span>
                        <TextField
                            onChange={props.onMaxValue}
                            value={props.maxValue}
                            size={"small"}
                            type="number"
                            variant={"outlined"}
                            error={props.maxValueError}
                        /></div>

                </div>
                <div className={s.button}>
                    <Button
                        onClick={addSettings}
                        disabled={props.disable}
                        variant="contained"
                        color="primary"
                    >
                        Set
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Settings;