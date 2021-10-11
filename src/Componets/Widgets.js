import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newArticle = (heading, subtitles) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon />

                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitles}</p>
                </div>

            </div>
        )

    }
    return (
        <div className="widgets">
            <div className="wigets__header">
                <h2>Linkdein News</h2>
                <InfoIcon />
            </div>
            {newArticle('You its your Boy', 'Top News--999 readers')}
            {newArticle('Covid', 'Top News--2400 New Cases')}

        </div>
    )
}

export default Widgets
