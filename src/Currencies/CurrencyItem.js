import React from "react";

export default function CurrencyItem(props) {
    return (
        <div>
            <div>
                <span>{props.currency.curAbbreviation}</span>
                <input
                    type="text"
                    value={props.currency.curRate}
                    onChange={event => props.onChange(props.currency.curAbbreviation, event.target.value)}
                />
                {
                    props.number > 3 && <span onClick={() => props.onCurrencyDelete(props.number)}>x</span>
                }

            </div>
            <div>
                <span>{props.currency.curName}</span>
            </div>
        </div>
        )
}
