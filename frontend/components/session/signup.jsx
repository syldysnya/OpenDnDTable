import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            city_id: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.handleInputCity = this.handleInputCity.bind(this)
    }

    handleErrors() {
        const mapped = this.props.errors.map((error, i) => {
            return (
                <li key={`error - ${i}`}>
                    { error}
                </li>
            )
        })
        return (
            <ul className='auth-errors'>
                { mapped}
            </ul>
        )

    }

    componentDidMount() {
        this.props.fetchCities();
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    demoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo().then(this.props.hideModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleInputCity(e) {
        
        const idx = parseInt(e.target.value);
        this.setState({ city_id: this.props.city_indices[idx] })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(this.props.hideModal);
    }

    render() {
        return (
            <div id='signup-modal-background'>
                <div className='row'>
                    <div className='first-message-column-modal'>
                        <h1>Welcome to OpenTable!</h1>
                    </div>
                    <div className='row'>
                        <form className='user-form'>
                            {this.handleErrors()}
                            <label htmlFor="fname-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="fname-login"
                                    placeholder='First Name *'
                                    onChange={this.handleInput('fname')}
                                />
                            </label>
                            <label htmlFor="lname-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="lname-login"
                                    placeholder='Last Name *'
                                    onChange={this.handleInput('lname')}
                                />
                            </label>
                            <label htmlFor="email-login">
                                <input
                                    className='modal-input'
                                    type="text"
                                    id="email-login"
                                    placeholder='Enter Email *'
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                            <label htmlFor="password-login">
                                <input
                                    className='modal-input'
                                    type="password"
                                    id="password-login"
                                    placeholder='Enter password *'
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <label htmlFor="password-login">
                                <input
                                    className='modal-input'
                                    type="password"
                                    id="password-login"
                                    placeholder='Re-enter password *'
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <label htmlFor="city-login">
                                <select onChange={this.handleInputCity}
                                        className='cities-list-dropdown'>
                                    {this.props.cities.map((city, i) => (
                                        <option value={i}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button
                                className='auth-button'
                                onClick={this.handleSubmit}>
                                    Create Account
                            </button>
                        </form>
                        <div className='demouser-form'>
                            <div>Don't want to complete the form?</div>
                            <button
                                className='auth-button demouser-button'
                                onClick={this.demoSubmit}>
                                Continue with <span>DemoUser</span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Signup;