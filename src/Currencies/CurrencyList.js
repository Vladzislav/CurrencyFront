import React from "react";
import CurrencyItem from "./CurrencyItem";
import CurrencyAbbreviationList from "./CurrencyAbbreviationList";

export default function CurrencyList(props) {
    return(
        <div className='currency_list-body'>
            <ul className='currency_list'>
                {props.currenciesTable.map((currency, i) => {
                    return <CurrencyItem
                        currency={currency}
                        key={i}
                        number={i}
                        onChange={props.onCurrencyChange}
                        onCurrencyDelete={props.onCurrencyDelete}
                    />
                })}
            </ul>
            <span className='currency_list-add'
                onClick={() => {props.toggleCurrencyList()}}
            >
                + Добавить валюту
            </span>
            {
                props.isCurrencyAbbreviationListShow && props.currencyAbbreviationList.length !== 0 &&
                <CurrencyAbbreviationList list={props.currencyAbbreviationList} onCurrencyAdd={props.onCurrencyAdd}/>
            }
        </div>


    )
}
