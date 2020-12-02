import { useState } from 'react'
import './SearchBar.css'
import DatePicker from 'react-date-picker'

function SearchBar({ changeUrl }) {

    const [firstDay, setFirstDay] = useState(new Date())
    const [lastDay, setLastDay] = useState(new Date())

    const changeDate = () => {
        const firstDayString = `${firstDay.getFullYear()}-${firstDay.getMonth() + 1}-${firstDay.getDate()}`
        const lastDayString = `${lastDay.getFullYear()}-${lastDay.getMonth() + 1}-${lastDay.getDate()}`
        if (firstDayString !== lastDayString) {
            changeUrl(firstDayString, lastDayString)
            console.log(firstDayString, lastDayString);
        } else {
            console.log('Please provide different date values');
        }
    }

    return (
        <>
            <div id="txt-description">
                <h1>Crypto exchange rates</h1>
            </div>
            <div className="search-container">

                <h5>Starting Date</h5>
                <DatePicker
                    maxDate={new Date()}
                    onChange={setFirstDay}
                    value={firstDay}
                />

                <h5 id="txt-finishing-date">Finishing Date</h5>
                <DatePicker
                    maxDate={new Date()}
                    calendarClassName="custom-calendar"
                    onChange={setLastDay}
                    value={lastDay}
                />

                <button
                    id="btn-get-data"
                    onClick={changeDate}
                >
                    Get data
                </button>

            </div>
        </>
    )
}

export default SearchBar
