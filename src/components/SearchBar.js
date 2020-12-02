import { useState } from 'react'
import './SearchBar.css'
import DatePicker from 'react-date-picker'

function SearchBar() {

    const [firstDay, setFirstDay] = useState(new Date())
    const [lastDay, setLastDay] = useState(new Date())

    return (
        <>
            <h1></h1>
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
                >
                    Get data
                </button>

            </div>
        </>
    )
}

export default SearchBar
