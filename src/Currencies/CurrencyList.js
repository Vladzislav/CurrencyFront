import React from "react";
import CurrencyItem from "./CurrencyItem";
import CurrencyAbbreviationList from "./CurrencyAbbreviationList";

export default function CurrencyList(props) {
    return(
        <ul className='currency-list'>
            {props.currenciesTable.map((currency, i) => {
                return <CurrencyItem
                    currency={currency}
                    key={i}
                    number={i}
                    onChange={props.onCurrencyChange}
                    onCurrencyDelete={props.onCurrencyDelete}
                />
            })}
            <input
                type="button"
                className='add-currency-button'
                value='Добавить валюту'
                onClick={() => {props.toggleCurrencyList()}}
            />
            {
                props.isCurrencyAbbreviationListShow &&
                <CurrencyAbbreviationList list={props.currencyAbbreviationList} onCurrencyAdd={props.onCurrencyAdd}/>
            }
        </ul>

    )
}
