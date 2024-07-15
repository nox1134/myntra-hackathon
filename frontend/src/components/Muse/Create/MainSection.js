import React, { useState } from "react";
import Button from "./Button";
import "./Create-muse.css";

const MainSection = () => {
  const [links, setLinks] = useState([""]);
  const [images, setImages] = useState([]);
  const [visibility, setVisibility] = useState("private");
  const [profileImage, setProfileImage] = useState(null);

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  const addLinkInput = () => {
    setLinks([...links, ""]);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const removeLinkInput = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images];
    files.forEach(file => {
      newImages.push(file);
    });
    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleCreate = () => {
    // Handle create action
    console.log("Create button clicked");
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancel button clicked");
  };

  return (
    <section className="main-section">
      <h1 className="main-title">Create Muse</h1>
      <div className="main-card">
        <div className="form-section">
          <div className="form-group">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Add a title"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Add a detailed description"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="profileImage">
              Add Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              className="form-input"
              onChange={handleProfileImageChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="images">
              Add Images
            </label>
            <div className="image-upload-container">
              <input
                type="file"
                id="imageUpload"
                className="form-input"
                multiple
                onChange={handleImageChange}
              />
              <div className="uploaded-images">
                {images.map((image, index) => (
                  <div key={index} className="uploaded-image">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className="uploaded-image-preview"
                    />
                    <button
                      type="button"
                      className="remove-image-button"
                      onClick={() => removeImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="link">
              Links
            </label>
            {links.map((link, index) => (
              <div key={index} className="link-input-container">
                <input
                  type="text"
                  placeholder="Add a link"
                  className="form-input link-input"
                  value={link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-link-button"
                    onClick={() => removeLinkInput(index)}
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add-link-button"
              onClick={addLinkInput}
            >
              +
            </button>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="visibility">
              Visibility
            </label>
            <select
              id="visibility"
              className="form-input"
              value={visibility}
              onChange={handleVisibilityChange}
            >
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
          <div className="form-buttons">
            <Button text="Create" onClick={handleCreate} className="create" />
            <Button text="Cancel" onClick={handleCancel} className="cancel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
