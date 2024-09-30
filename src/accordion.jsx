import React from "react";
import MarkdownComponent from "./markdown";

const Accordion = ({ data }) => {
    return (
        <div className="accordion" id="accordionExample">
            {data.map((item, index) => {
                const collapseId = `collapse-${index}`;
                const headerId = `heading-${index}`;

                return (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={headerId}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded="false"
                                aria-controls={collapseId}
                            >
                                {item.title || "No title available"}
                            </button>
                        </h2>
                        <div
                            id={collapseId}
                            className="accordion-collapse collapse"
                            aria-labelledby={headerId}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body markdown-body text-start m-0 m-md-5">
                                <MarkdownComponent content={ item.description }/>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;
