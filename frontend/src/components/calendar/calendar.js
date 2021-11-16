import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props){
    super(props)

  }

  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  weekdays = moment.weekdaysShort()
  months = moment.months()

  year = () => {
    return this.state.dateContext.format("Y");
  }

  month = () => {
    return this.state.dateContext.format("MMMM");
  }

  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }

  currentDate = () => {
    return this.state.dateContext.get("date");
  }

  currentDay = () => {
    return this.state.dateContext.format("D");
  }

  firstDayOfMonth = () => {
    const dateContext = this.state.dateContext;
    const firstDay = moment(dateContext).startOf('month').format('d')
    return firstDay;
  }

    render(){
      const weekdays = this.weekdays.map(day => {
        return <td key={day} className="weekday">{day}</td>
      })

      const blanks = [];
      for (let index = 0; index < this.firstDayOfMonth(); index++) {
        blanks.push(<td>{""}</td>)
        
      }

      console.log("blanks: ", blanks)

      const daysInMonth = [];
      for (let day = 1; day <= this.daysInMonth(); day++) {
        const className = (day === this.currentDay() ? "day current-day": "day")
        daysInMonth.push(<td key={day} className={className}>
          {day}
        </td>)
        
      }

      console.log("days: ", daysInMonth)

      const totalSlots = [...blanks, ...daysInMonth];
      const rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if ((i % 7) !== 0 ) {
          cells.push(row);
        } else {
          const insertRow = cells.slice();
          rows.push(insertRow);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1 ){
          const insertRow = cells.slice();
          rows.push(insertRow)
        }
      });
        
    

      const trElems = rows.map((day, i) => {
          return (
            <tr key={i*100} >
              {day}
            </tr>
          );
      });


      return (
        <div>
          <table>
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody>
                <tr>
                {weekdays}
                </tr>
                {trElems}
            </tbody>
          </table>
        </div>
      )
        
      
    }
}

export default Calendar