![logo](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.29.50+AM.png)

# OpenDnDTable 

[Live Demo](https://opendndtable.herokuapp.com/)

OpenDnDTable is an online servise for booking table for DnD sessions. This project was inspired by [OpenTable](https://www.opentable.com/) website.

## Features

Secure frontend and backend user authentication using BCrypt.
Users can make, edit, cancel reservations.
Users can add reviews.
Game places support images.

![home page](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.02.00+AM.png "Home page of the project")

## Sign In and Sign Up

![sign in](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.05.01+AM.png "Sign In module")

## Make a reservation

1st step of making a reservation is to choose you time, date and a number of people. Once you choose time, you'll have an option to choose new time between 5 options that were generated based on your first input.

![reservation box](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.09.13+AM.png)

Next step of a reservation process is to confirm your reservation.

![confirmation form](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.10.52+AM.png)

## Edit and Cancel options

![editing form](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.12.53+AM.png)

## Profile page

`My profile` page stores an information about your reservations.

![profile page](https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-21+at+10.14.35+AM.png)

## Code Snippet

```js
// this code will give an option of 5 different times with 15 min difference based on a time user provided

TimePick = () => {
        
        return (
            <select onChange={this.update('gameStart')} 
                defaultValue='8:00 PM'>
                {RES_TIME.map(t => {
                    return (
                        <option key={t} value={t}>{t}</option>
                    )
                })}
            </select>
        )
    }
    render() {

        let createForm;

        if (!this.props.currentPlayer) {
            createForm = <LoggedOutForm openModal={this.props.openModal}/>
        } else {
            createForm = <LoggedInForm reservation={this.state}
                gamePlace={this.props.gamePlaces[0]}
                player={this.props.players[0]}
                createReservation={this.props.createReservation}
                currentPlayer={this.props.currentPlayer}
                fetchReservation={this.props.fetchReservation}
            />
        }
```

## Project Design

OpenDnDTable was designed to make a reservation process of a table easy and understandable.

## Technologies

This project uses Redux and React.js on the frontend, and Rails/PostgreSQL backend.

## Possible Future Features

I'm going to comtinue working on this project to build features like search by filters, by location, a function to save favorite places, and errors handling.
