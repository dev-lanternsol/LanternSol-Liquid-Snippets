import React, { useState } from "react";

const Tags = ({ data, onTagSelect }) => {
    // Extract unique tags from the data
    const uniqueTags = [...new Set(data.flatMap(item => item.tags))];
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (tag) => {
        const updatedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        setSelectedTags(updatedTags);
        onTagSelect(updatedTags); // Pass the selected tags back to the parent
    };

    return (
        <div className="overflow-x-auto d-flex flex-md-wrap gap-3 justify-content-md-center pb-3 px-3 pb-md-5 px-md-5">
            {uniqueTags.map((tag, index) => (
                <div key={index} class="d-flex">
                    <div class="border rounded-start p-2">
                        <input 
                            type="checkbox" 
                            id={`tag-${index}`} 
                            className="form-check-input"
                            onChange={() => handleTagChange(tag)}   
                        />
                    </div>
                    <div className="border rounded-end border-start-0 px-3 align-text-bottom d-flex align-items-center text-nowrap">
                        <label htmlFor={`tag-${index}`} className="form-check-label">
                            {tag}
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tags;
