import React, { useState } from 'react';
const MainSection = () => {
  const [links, setLinks] = useState(['']);
  const [visibility, setVisibility] = useState('private');

  const addLinkInput = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  return (
    <section className="main-section">
      <h1 className="main-title">Create Muse</h1>
      <div className="main-card">
        <div className="form-section">
          <div className="form-group">
            <label className="form-label" htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Add a title" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description" placeholder="Add a detailed description" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="images">Add Images</label>
            <div className="upload-section">
              <img src="https://placehold.co/24x24" alt="upload icon" className="upload-icon" />
              <p className="upload-text">Choose a file or drag and drop it here</p>
              <p className="upload-subtext">We recommend using high-quality .jpg files less than 20MB or .mp4 files less than 200MB.</p>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="link">Links</label>
            {links.map((link, index) => (
              <input
                key={index}
                type="text"
                placeholder="Add a link"
                className="form-input"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />
            ))}
            <button className="add-link-button" onClick={addLinkInput}>+</button>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="tags">Tags</label>
            <input type="text" id="tags" placeholder="Add Tags" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="visibility">Visibility</label>
            <select id="visibility" className="form-input" value={visibility} onChange={handleVisibilityChange}>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

  export default MainSection;