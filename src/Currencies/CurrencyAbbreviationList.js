import React from "react";
import CurrencyAbbreviationItem from "./CurrencyAbbreviationItem";

export default function CurrencyItem(props) {
    return (
        <ul className='currency_abbr-list' onClick={event => {
            event.target.tagName !=='UL' && event.target.dataset.abbreviation.length < 4 && props.onCurrencyAdd(event.target.dataset.abbreviation)
            }
        }>
            {props.list.map(el => {
                return <CurrencyAbbreviationItem abbreviation={el.curAbbreviation} key={el.curAbbreviation} name={el.curName}/>
            })}
        </ul>
    )
}
