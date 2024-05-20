//Import modules
import React from "react";

// <=============================================================>

// Frame
export default function Frame({ frame, status, toggleFrame }) {
    return (
        // Frame layout
        <div className={`frame ${status ? 'active' : undefined}`}>
            <a href="#" className="frame__close" onClick={toggleFrame}>
                Close
            </a>
            <iframe
                width="760"
                height="515"
                src={frame.video}
                title={frame.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
        // <=============================================================>
    );
}
// <=============================================================>