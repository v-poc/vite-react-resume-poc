import React from 'react'

class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        const { basics, work, project, education, awards, skills, interests, references } = this.props

        return (
            <section className="col-md-9 card-wrapper pull-right">
                <div className="card background-card">
                    <h4 className="text-uppercase">English Resume</h4>
                    <hr />
                    <div className="background-details">
                        <div className="detail" id="about">
                            <div className="icon">
                                <i className="fs-lg icon-board"></i><span className="mobile-title">Self Assessment</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Self Assessment</h4>
                                <ul className="list-unstyled clear-margin">
                                    <li className="card card-nested clearfix">
                                        <div className="content mop-wrapper">
                                            <ul>
                                                {basics.summary.map((v, k) => {
                                                    return (
                                                        <li key={k} className="mop-wrapper">
                                                            <p>{v}</p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="detail" id="work-experience">
                            <div className="icon">
                                <i className="fs-lg icon-office"></i><span className="mobile-title">Work experience</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Work experience</h4>
                                <ul className="list-unstyled clear-margin">
                                    {work.map((n, i) => {
                                        return (
                                            <li key={i} className="card card-nested clearfix">
                                                <div className="content">
                                                    <div className="header">
                                                        <h4 className="header-title">
                                                            <a href={n.website} target="_blank">{n.company}</a>
                                                        </h4>
                                                        <p className="header-text">{n.position}</p>
                                                    </div>
                                                    <p className="text-muted">
                                                        <small><span className="space-right">{n.startDate} - {n.endDate}</span></small>
                                                    </p>
                                                    <div className="mop-wrapper space-bottom">
                                                        <p>{n.summary}</p>
                                                    </div>
                                                    <ul>
                                                        {n.highlights.map((v, k) => {
                                                            return (
                                                                <li key={k} className="mop-wrapper">
                                                                    <p>{v}</p>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="detail" id="project-experience">
                            <div className="icon">
                                <i className="fs-lg icon-child"></i><span className="mobile-title">Project experience</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Project experience</h4>
                                <div className="content">
                                    <ul className="list-unstyled clear-margin">
                                        {project.map((n, i) => {
                                            return (
                                                <li key={i} className="card card-nested">
                                                    <div className="content">
                                                        <div className="header">
                                                            <h4 className="header-title">
                                                                <a href={n.website} target="_blank">{n.organization}</a>
                                                            </h4>
                                                            <p className="header-text">{n.position}</p>
                                                        </div>
                                                        <p className="text-muted">
                                                            <small>{n.startDate} - {n.endDate}</small>
                                                        </p>
                                                        <div className="mop-wrapper space-bottom">
                                                            <p>Technologies: {n.summary}</p>
                                                        </div>
                                                        <ul>
                                                            {n.highlights.map((v, k) => {
                                                                return (
                                                                    <li key={k} className="mop-wrapper">
                                                                        <p>{v}</p>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="detail" id="education">
                            <div className="icon">
                                <i className="fs-lg icon-graduation-cap"></i><span className="mobile-title">Education</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Education</h4>
                                <div className="content">
                                    <ul className="list-unstyled clear-margin">
                                        {education.map((n, i) => {
                                            return (
                                                <li key={i} className="card card-nested">
                                                    <div className="content">
                                                        <p className="clear-margin relative">
                                                            <strong>{n.institution}，{n.studyType}，&nbsp;</strong>{n.area}
                                                        </p>
                                                        <p className="text-muted">
                                                            <small>{n.startDate} - {n.endDate}</small>
                                                        </p>
                                                        <i>{n.gpa}</i>
                                                        <div className="space-top labels">
                                                            {n.courses.map((v, k) => {
                                                                return <span key={k} className="label label-info">{v}</span>
                                                            })}
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                        <div className="detail" id="skills">
                            <div className="icon">
                                <i className="fs-lg icon-tools"></i><span className="mobile-title">Skillset</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Skillset</h4>
                                <div className="content">
                                    <ul className="list-unstyled clear-margin">
                                        {skills.map((n, i) => {
                                            return (
                                                <li key={i} className="card card-nested card-skills">
                                                    <div className="skill-info">
                                                        <strong>{n.name}</strong>
                                                        <div className="space-top labels">
                                                            {n.keywords.map((v, k) => {
                                                                return <span key={k} className="label label-info">{v}</span>
                                                            })}
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="detail" id="awards">
                            <div className="icon">
                                <i className="fs-lg icon-trophy"></i><span className="mobile-title">Certificates</span>
                            </div>
                            <div className="info">
                                <h4 className="title">Certificates</h4>
                                <div className="content">
                                    <ul className="list-unstyled clear-margin">
                                        {awards.map((n, i) => {
                                            return (
                                                <li key={i} className="card card-nested">
                                                    <div className="content">
                                                        <p className="clear-margin">
                                                            <strong>{n.title} </strong>{n.awarder}
                                                        </p>
                                                        <p className="text-muted">
                                                            <small>{n.date}</small>
                                                        </p>
                                                        <div className="mop-wrapper">
                                                            <p>{n.summary}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="detail" id="references">
                            <div className="icon">
                                <i className="fs-lg icon-thumbs-up"></i><span className="mobile-title">My motto</span>
                            </div>
                            <div className="info">
                                <h4 className="title">My motto</h4>
                                <div className="content">
                                    <ul className="list-unstyled clear-margin">
                                        {references.map((n, i) => {
                                            return (
                                                <li key={i} className="card card-nested">
                                                    <blockquote className="quote">
                                                        <p>{n.reference}</p>
                                                        <small>{n.name}</small>
                                                    </blockquote>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content
