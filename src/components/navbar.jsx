import React, { useState } from 'react'
import classNames from 'classnames'

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 480)

    const handleClick = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const scrollToAnchor = (e, anchorName) => {
        e.preventDefault()
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName)
            if(anchorElement) {
                anchorElement.scrollIntoView()
                setIsOpen(false)
            }
        }
    }    

    const btncls = classNames({
        'js-floating-nav-trigger': true,
        'floating-nav-trigger': true,
        'is-open': isOpen
    })

    const navcls = classNames({
        'floating-nav': true,
        'js-floating-nav': true,
        'is-visible': isOpen
    })

    return (
        <section className="col-md-12 nav-card-wrapper">
            <a className={btncls} href="#" onClick={handleClick}>
                <i className="icon-bars"></i>
                <span className="close-icon">×</span>
            </a>
            <a className={btncls} href="#" onClick={props.renderHTMLtoPDF} style={{ bottom: '80px' }}>
                <i className="glyphicon glyphicon-download-alt" style={{ lineHeight: '50px' }}></i>
            </a>
            <nav className={navcls}>
                <ul className="list-unstyled">
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'about')}><i className="mr-10 icon-board"></i>Self Assessment</a></li>
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'work-experience')}><i className="mr-10 icon-office"></i>Work experience</a></li>                        
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'project-experience')}><i className="mr-10 icon-child"></i>Project experience</a></li>
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'education')}><i className="mr-10 icon-graduation-cap"></i>Education</a></li>
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'skills')}><i className="mr-10 icon-tools"></i>Skillset</a></li>
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'awards')}><i className="mr-10 icon-trophy"></i>Certificates</a></li>
                    <li><a href="#" onClick={(e) => scrollToAnchor(e, 'references')}><i className="mr-10 icon-thumbs-up"></i>My motto</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar
