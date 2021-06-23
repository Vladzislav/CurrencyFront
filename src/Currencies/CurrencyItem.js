import React from "react";

export default function CurrencyItem(props) {
    return (
        <div className='currency_list-item'>
            <div className='currency_list-top'>
                <span>{props.currency.curAbbreviation}</span>
                <input
                    type="text"
                    value={props.currency.curRate}
                    onChange={event => props.onChange(props.currency.curAbbreviation, event.target.value)}
                />
                {
                    props.number > 3 && <span onClick={() => props.onCurrencyDelete(props.number)}>
                        <a href="#" className="close"></a>
                    </span>
                }

            </div>
            <div className='currency_list-bottom'>
                <span>{props.currency.curName}</span>
            </div>
        </div>
        )
}
