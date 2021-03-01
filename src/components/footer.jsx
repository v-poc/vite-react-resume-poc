import React from 'react'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className="col-md-12 card-wrapper">
                <div className="footer">Copyright &copy; 2021-present by vite-react-resume-poc. All rights reserved.</div>
            </section>
        )
    }
}
export default Footer
