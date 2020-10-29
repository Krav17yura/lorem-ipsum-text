import React from 'react'

const Output = ({paragraphs, includeHtml, tag}) => {
    return(
        <div className="output">
            {includeHtml === 'Yes' ? (
                <p>{paragraphs.map(item =>`<${tag}>${item}</${tag}>`)}</p>
            ): (
                <p>{paragraphs.map(item => item)}</p>
            )}
        </div>
    )
}

export default Output