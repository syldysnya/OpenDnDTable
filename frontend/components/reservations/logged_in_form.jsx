import React from 'react';
import { NavLink } from 'react-router-dom';

class LoggedInForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            gameDate: props.reservation.gameDate,
            gameStart: props.reservation.gameStart,
            playersNum: props.reservation.playersNum,
            dndCampaignId: props.reservation.dndCampaignId,
            gamePlaceId: props.reservation.gamePlaceId,
            playerId: props.reservation.playerId,
            confirmation_num: props.reservation.confirmation_num,
            addInfo: props.reservation.addInfo,
            renderTimeOpts: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleTable = this.handleTable.bind(this);
    }

    handleTable(e) {
        e.preventDefault();
        this.setState({ renderTimeOpts: true })
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.reservation.playersNum !== this.props.playersNum) {
    //         this.setState({ playersNum: this.props.playersNum })
    //     } else if (prevProps.reservation.gameStart !== this.props.gameStart) {
    //         this.setState({ gameStart: this.props.gameStart })
    //     }
    // }

    handleClick(e) {
        this.setState({ gameStart: e.currentTarget.innerHTML })
    }

    timeOptions(field) {
        
        let curTime = field;
        let splitted = curTime.split(' ');
        let t = splitted[0].split(':');
        let h = parseInt(t[0]);
        let m = parseInt(t[1]);
        let btn1;
        let btn2;
        let btn3;
        let btn4;
        let timeOptions;

        if (m === 30) { // 8:30
            btn1 = ((h - 1).toString() + ':00 ' + splitted[1])
            btn2 = (splitted[0] + ':15 ' + splitted[1])
            btn3 = (splitted[0] + ':45 ' + splitted[1])
            btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        } else { // 8:00
            btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
            btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
            btn3 = (h.toString() + ':15 ' + splitted[1])
            btn4 = (h.toString() + ':30 ' + splitted[1])
            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        }

        const mapped = timeOptions.map((t, i) => {
            return (
                <li key={`btn-time-${i}`}>
                    <NavLink onClick={this.handleClick}
                        className='auth-button' to={{
                            pathname: '/booking/details',
                            aboutProps: {
                                reservation: this.props.reservation,
                                gameStart: t,
                                gamePlace: this.props.gamePlace,
                                player: this.props.player,
                                createReservation: this.props.createReservation,
                                currentPlayer: this.props.currentPlayer,
                                fetchReservation: this.props.fetchReservation
                            }
                        }} exact>
                        {t}
                    </NavLink>
                </li>
            )
        })

        return (
            <div className='time-buttons'>
                {mapped}
            </div>
        )
    }

    render() {
        
        let buttonForm;
        
        if (this.state.renderTimeOpts) {
            buttonForm = this.timeOptions(this.props.reservation.gameStart)
        } else {
            buttonForm = <button onClick={this.handleTable}>
                            Find a table
                        </button>
        }

        return buttonForm;
    }
};

export default LoggedInForm;