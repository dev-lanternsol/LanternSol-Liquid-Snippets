import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const MarkdownComponent = ({ content }) => {
    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    );
};

export default MarkdownComponent;
