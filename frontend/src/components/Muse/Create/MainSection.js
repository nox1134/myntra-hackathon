import '../../../App.css';

const MainSection = () => {
    return (
      <section className="main-section">
        <h1 className="main-title">Create Pin</h1>
        <div className="main-card">
          <div className="upload-section">
            <img src="https://placehold.co/24x24" alt="upload icon" className="upload-icon" />
            <p className="upload-text">Choose a file or drag and drop it here</p>
            <p className="upload-subtext">We recommend using high-quality .jpg files less than 20MB or .mp4 files less than 200MB.</p>
          </div>
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
              <label className="form-label" htmlFor="link">Link</label>
              <input type="text" id="link" placeholder="Add a link" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="board">Board</label>
              <input type="text" id="board" placeholder="Choose a board" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="tags">Tagged Topics</label>
              <input type="text" id="tags" placeholder="Tagged topics (0)" className="form-input" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default MainSection;