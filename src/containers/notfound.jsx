import React, { useEffect } from 'react'

function NotFound() {
    const goBack = () => {
        window.history.go(-1)
    }

    const goIndex = () => {
        window.location.href = '#/'
    }

    useEffect(() => {
        const loading = document.getElementById('loading')
        loading && (loading.style.display = 'none')
    }, [])

    return (
        <div className="not-found">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Don't give up!</p>
            <p className="not-found-text">Now</p>
            <span onClick={goBack} className="link-style">navigateBack</span>
            <span> Or </span>
            <span onClick={goIndex} className="link-style">Go to Index page</span>
        </div>
    )
}

export default NotFound
