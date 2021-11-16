import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props)

  }

  state = {
    dateContext: moment(),
    today: moment()
  }

  weekdays = moment.weekdaysShort()
  months = moment.months()

  year = () => (
    this.state.dateContext.format("Y")
  )

  month = () => (
    this.state.dateContext.format("MMMM")
  )

  daysInMonth = () => (
    this.state.dateContext.daysInMonth()
  )

  currentDate = () => (
    this.state.dateContext.get("date")
  )

  currentDay = () => (
    this.state.dateContext.format("D")
  )

  firstDayOfMonth = () => {
    const dateContext = this.state.dateContext;
    const firstDay = moment(dateContext).startOf('month').format('d')
    return firstDay;
  }

  render() {
    const weekdays = this.weekdays.map((day, i) => {
      return <td key={i} className="weekday">{day}</td>
    })

    const blankDays = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blankDays.push(<td key={i}>{""}</td>)
    }

    const daysInMonth = [];
    for (let day = 1; day <= this.daysInMonth(); day++) {
      const currentDay = parseInt(this.currentDay())
      const className = (day === currentDay ? "day current-day" : "day")
      daysInMonth.push(<td key={day} className={className}>
        <div className="day-block">
          {day}
          {day === 18 ? <span>Sertraline 50mg</span> : null}
        </div>
      </td>)

    }

    const totalSlots = [...blankDays, ...daysInMonth];
    // console.log(totalSlots)
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        rows.push(cells.slice());
        cells = [];
        cells.push(row);
      }

      if (i === totalSlots.length - 1) {
        rows.push(cells.slice());
      }
    });



    const rowEls = rows.map((day, i) => {
      return (
        <tr key={i} className="calendar-day">
          {day}
        </tr>
      );
    });

    console.log(rowEls ? rowEls : null)

    return (
      <div>
        <table className="calendar-container">
          <thead>
            <tr>
              <th colSpan="7" className="calendar-month">{this.month()}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays}
            </tr>
            {rowEls}
          </tbody>
        </table>
      </div>
    )


  }
}

export default Calendar