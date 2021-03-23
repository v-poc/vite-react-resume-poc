import React, { useEffect } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import SiderBar from '../components/siderbar'
import Footer from '../components/footer'
import Content from '../components/content'
import Navbar from '../components/navbar'
import resume from '../utils/resume'

function Main() {
    const renderHTMLtoPDF = () => {
        html2canvas(document.body)
            .then((canvas) => {
                const contentWidth = canvas.width
                const contentHeight = canvas.height

                let pageHeight = contentWidth / 592.28 * 841.89

                let leftHeight = contentHeight

                let position = 0

                const imgWidth = 595.28
                const imgHeight = 592.28 / contentWidth * contentHeight

                const pageData = canvas.toDataURL('image/jpeg', 1.0)

                const pdf = new jsPDF('', 'pt', 'a4')

                if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                } else {
                    while (leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89

                        if (leftHeight > 0) {
                            pdf.addPage()
                        }
                    }
                }

                pdf.save('amazing-resume.pdf')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const loading = document.getElementById('loading')
        loading && (loading.style.display = 'none')        
    }, [])

    return (
        <div className="container-fluid" >
            <div className="row main clearfix">
                <Navbar renderHTMLtoPDF={renderHTMLtoPDF} />
                <SiderBar {...resume} />
                <Content {...resume} />
                <Footer />
            </div>
        </div>
    )
}

export default Main
