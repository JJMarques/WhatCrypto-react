import { useState } from 'react'
import './SearchBar.css'
import DatePicker from 'react-date-picker'

function SearchBar({ changeUrl }) {

    const [firstDay, setFirstDay] = useState(new Date())
    const [lastDay, setLastDay] = useState(new Date())
    //date submission validation alert
    const [alert, setAlert] = useState('')
    //Date limits
    const today = new Date()
    const days = 86400000

    const changeDate = () => {

        if (firstDay === null || lastDay === null) {
            setAlert('Please provide a date in both input fields.')
        } else {
            const firstDayString = `${firstDay.getFullYear()}-${firstDay.getMonth() + 1}-${firstDay.getDate()}`
            const lastDayString = `${lastDay.getFullYear()}-${lastDay.getMonth() + 1}-${lastDay.getDate()}`

            if (firstDayString !== lastDayString) {
                changeUrl(firstDayString, lastDayString)
                setAlert('')
            } else {
                setAlert('Please provide different date values.')
            }
        }

    }

    return (
        <>
            <div id="txt-description">
                <h1>Coin exchange rates</h1>
            </div>
            <div className="search-container">

                <h5>Starting Date</h5>
                <DatePicker
                    minDate={new Date(today - (110*days))}
                    maxDate={new Date()}
                    onChange={setFirstDay}
                    value={firstDay}
                    />

                <h5 id="txt-finishing-date">Finishing Date</h5>
                <DatePicker
                    minDate={new Date(today - (110*days))}
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
            <div className="alert-mssg">
                {alert.length > 0 ? alert : ''}
            </div>
        </>
    )
}

export default SearchBar
