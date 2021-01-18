import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(Number(localStorage.getItem('startValue'))||0)
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxValue'))||1)
    const [current, setCurrent]=useState(0)
    const [disable, setDisable] = useState<boolean>(false)
    const [startValueError, setStartValueError] = useState<boolean>(false)
    const [maxValueError, setMaxValueError] = useState<boolean>(false)
    const [settingsError, setSettingsError]=useState<string|null>(null)
    const [disableButtons, setDisableButtons]=useState<boolean>(false)

    const onStartValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value<maxValue ) {
            setStartValue(+e.currentTarget.value)
            setStartValueError(false)
            setSettingsError('enter values and press \'set\'')

        } else {
            setStartValue(+e.currentTarget.value)
            setStartValueError(true)
            setSettingsError('Incorrect value')
        }
        if(+e.currentTarget.value!==startValue){
            setDisable(false)
            setDisableButtons(true)

        }
        localStorage.setItem('startValue', e.currentTarget.value)
    }
    const onMaxValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value!>=startValue) {
            setMaxValue(+e.currentTarget.value)
            setMaxValueError(false)
            setSettingsError('enter values and press \'set\'')
        } else {
            setMaxValue(+e.currentTarget.value)
            setMaxValueError(true)
            setSettingsError('Incorrect value')
        }
        if(+e.currentTarget.value!==maxValue){
            setDisable(false)
            setDisableButtons(true)
        }
        localStorage.setItem('maxValue', e.currentTarget.value)
    }
    //button
    const inc=(newValue: number)=>{
        setCurrent(newValue+1)
    }
    //button
    const reset=()=>{
        setCurrent(startValue)
    }
    //button
    const addSettings = (newStartValue: number, newMaxValue: number) => {
        if (startValueError === false && maxValueError === false) {
            setCurrent(newStartValue)
            setStartValue(newStartValue)
            setMaxValue(newMaxValue)
            if(newStartValue===startValue && newMaxValue===maxValue){
                setDisable(true)
                setDisableButtons(false)
                setSettingsError(null)
            }
        }
    }

    localStorage.getItem('startValue')
    localStorage.getItem('maxValue')
    return <div className={s.App}>
        <Settings startValue={startValue}
                  maxValue={maxValue}
                  onStartValue={onStartValue}
                  onMaxValue={onMaxValue}
                  startValueError={startValueError}
                  maxValueError={maxValueError}
                  addSettings={addSettings}
                  disable={disable}
        />
        <Counter current={current}
            settingsError={settingsError}
                 inc={inc}
                 reset={reset}
                 maxValue={maxValue}
                 disableButtons={disableButtons}
        />
    </div>

}

export default App;

//TODO ???как вынести в отдельную компоненту кнопки???
//TODO LocalStorage