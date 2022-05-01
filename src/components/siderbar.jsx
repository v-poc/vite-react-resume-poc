import React from 'react'
import classNames from 'classnames'

function SiderBar(props) {
    const { basics, languages, picture } = props

    return (
        <section className="col-md-3 card-wrapper profile-card-wrapper affix">
            <div className="card profile-card">
                <span className="profile-pic-container">
                    <div className="profile-pic">
                        <img className="media-object img-circle center-block" src={basics.picture || picture} />
                    </div>
                    <div className="name-and-profession text-center">
                        <h3><b>{basics.name}</b></h3>
                        <h4><b>{basics.position}</b></h4>
                        <h5 className="text-muted">{basics.label}</h5>
                    </div>
                </span>
                <hr />
                <div className="contact-details clearfix">
                    <div className="detail">
                        <span className="icon"><i className="icon fs-lg icon-profile"></i></span>
                        <span className="info">{basics.gender}. {basics.age}. {basics.worklife} years work experience.</span>
                    </div>
                    <div className="detail">
                        <span className="icon"><i className="icon fs-lg icon-location"></i></span>
                        <span className="info">{basics.location}</span>
                    </div>
                    <div className="detail">
                        <span className="icon"><i className="icon fs-lg icon-phone"></i></span>
                        <span className="info">{basics.phone}</span>
                    </div>
                    <div className="detail">
                        <span className="icon"><i className="icon fs-lg icon-mail"></i></span>
                        <span className="info"><a className="link-disguise" href={`mailto:${basics.email}`}>{basics.email}</a></span>
                    </div>
                    <div className="detail">
                        <span className="icon"><i className="icon fs-lg icon-link"></i></span>
                        <span className="info"><a href={basics.website} target="_blank">{basics.website}</a></span>
                    </div>
                    <div className="detail">
                        <span className="icon" title="Languages I speak"><i className="icon fs-lg icon-language"></i></span>
                        {languages.map((n, i) => {
                            return <span key={i} className="info">{n.language}.&nbsp;</span>
                        })}
                    </div>
                </div>
                <hr />
                <div className="social-links text-center">
                    <div>
                        {basics.profiles.map((n, i) => {
                            const cls = classNames({
                                'iconfont': true,
                                'social-link': true,
                                [`iconfont-${n.network}`]: n.network,
                            })
                            return <a key={i} className={cls} href={n.url} target="_blank"></a>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiderBar
