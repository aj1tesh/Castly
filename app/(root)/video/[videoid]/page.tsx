import Header from '@/components/Header'
import React from 'react'

const Page = () => {
    return (
        <div className="wrapper page">
            <Header title="Monkey Fucks Tiger" SubHeader="xQc" usrImg="/assets/images/jason.png"/>
            <section className="video-container">
                <div className="video-player">
                    <video src="/assets/samples/video.mp4" controls/>
                </div>
            </section>
        </div>
    )
}

export default Page