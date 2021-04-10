import React, { useEffect } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import SiderBar from '../components/SiderBar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Navbar from '../components/Navbar'

import resume from '../assets/resume'

function MainIndex() {
    useEffect(() => {
        const loading = document.getElementById('loading')
        loading && (loading.style.display = 'none')        
    }, [])
        
    const renderHTMLtoPDF = async () => {
        try {
            const canvas = await html2canvas(document.body)

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
        } catch (err) {
            console.error(err)
        }
    }

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

export default MainIndex
