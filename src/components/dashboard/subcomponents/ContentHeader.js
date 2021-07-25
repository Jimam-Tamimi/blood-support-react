import React from 'react'

function ContentHeader(props) {
    return (
        <>
            <div class="content-header my-3">
                <h1>{props.headingText}</h1>
            </div>
        </>
    )
}

export default ContentHeader
