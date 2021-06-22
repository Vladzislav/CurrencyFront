import './App.css';
import React, {useEffect} from "react";
import CurrencyList from "./Currencies/CurrencyList";
import axios from "axios";

function App() {

    const [currencyInfo, setCurrencyInfo]= React.useState({currencies: [], abbrList: []})
    const [isCurrencyAbbreviationListShow, setIsCurrencyAbbreviationListShow]= React.useState(false)
    const [displayedCurrenciesAbbr, setDisplayedCurrenciesAbbr]= React.useState(['USD', 'EUR', 'BYN', 'RUB'])
    const [currentInfo, setCurrentInfo]= React.useState([{curAbbreviation: 'USD', curQuantity: 1}])

    useEffect(async () => {
        setCurrencyInfo(
            (await axios.put('http://localhost:3001/currencies/list', {list: displayedCurrenciesAbbr})).data
        )
    }, [])

    const onCurrencyChange = async (curAbbreviation, curQuantity) => {
        setCurrentInfo([{curAbbreviation, curQuantity}])
        setCurrencyInfo(
            (await axios.put('http://localhost:3001/currencies/recount', {curAbbreviation, curQuantity, list: displayedCurrenciesAbbr})).data
        )
    }

    const toggleCurrencyList = () => {
        setIsCurrencyAbbreviationListShow(!isCurrencyAbbreviationListShow)
    }

    const onCurrencyAdd = async (curAbbreviation) => {
        setDisplayedCurrenciesAbbr(prev => [...prev, curAbbreviation]);
        setCurrencyInfo(
            (await axios.put('http://localhost:3001/currencies/recount',
                {
                    ...currentInfo[0],
                    list: [...displayedCurrenciesAbbr, curAbbreviation]
                })).data
        )
        console.log(displayedCurrenciesAbbr, currencyInfo, currentInfo[0])
    }

    const onCurrencyDelete = async (itemNumber) => {
        displayedCurrenciesAbbr.splice(itemNumber,1)

        setDisplayedCurrenciesAbbr(displayedCurrenciesAbbr);
        console.log(displayedCurrenciesAbbr);
        setCurrencyInfo(
            (await axios.put('http://localhost:3001/currencies/recount',
                {
                    ...currentInfo[0],
                    list: displayedCurrenciesAbbr
                })).data
        )

        console.log(displayedCurrenciesAbbr, currencyInfo, currentInfo[0])
    }




    return (
        <div className='wrapper'>
            {currencyInfo.currencies.length && currencyInfo.abbrList.length ? (
                <CurrencyList
                    currenciesTable={currencyInfo.currencies}
                    onCurrencyChange={onCurrencyChange}
                    onCurrencyAdd={onCurrencyAdd}
                    onCurrencyDelete={onCurrencyDelete}
                    toggleCurrencyList={toggleCurrencyList}
                    isCurrencyAbbreviationListShow={isCurrencyAbbreviationListShow}
                    currencyAbbreviationList={currencyInfo.abbrList}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
