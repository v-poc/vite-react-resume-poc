import React from 'react'

class NotFound extends React.Component {
    constructor (props) {
	    super(props)
    }

    componentDidMount() {
        const loading = document.getElementById('loading')
        loading && (loading.style.display = 'none')
    }    

    goBack = () => {
        window.history.go(-1)
    }

    goIndex = () => {
        window.location.href = '#/'
    }

  	render () {
	    return (
            <div className="not-found">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Don't give up!</p>
                <p className="not-found-text">Now</p>
                <span onClick={this.goBack} className="link-style">navigateBack</span>
                <span> Or </span>
                <span onClick={this.goIndex} className="link-style">Go to Index page</span>
            </div>
	    )
    }
}

export default NotFound
