function Multimedia_Guidance() {
  return (
    <main className="container">
        <div className="tabs">
            <button className="tab-btn active" data-tab="all">All Media</button>
            <button className="tab-btn" data-tab="videos">Videos Only</button>
            <button className="tab-btn" data-tab="podcasts">Podcasts Only</button>
        </div>
        
        <div className="controls">
            <div className="search-box">
                <input type="text" id="search-input" placeholder="Search in media..." />
            </div>
            
            <div className="filter-group">
                <select id="category-filter">
                    <option value={all}>All Categories</option>
                    <option value={Motivation}>Motivation</option>
                    <option value={JobRoles}>Job Roles</option>
                    <option value={Training}>Training</option>
                    <option value={SkillDevelopment}>Skill Development</option>
                    <option value={JobInterviews}>Job Interviews</option>
                </select>
                
                <select id="user-type-filter">
                    <option value={all}>All Users</option>
                    <option value={NewGraduates}>New Graduates</option>
                    <option value={Professionals}>Professionals</option>
                    <option value={Students}>Students</option>
                    <option value={Beginners}>Beginners</option>
                </select>
            </div>
            
            <div className="sort-group">
                <select id="sort-option">
                    <option value={newest}>Newest First</option>
                    <option value={oldest}>Oldest First</option>
                    <option value={popular}>Most Popular</option>
                </select>
                
                <button id="reset-filters"><i className="fas fa-sync-alt"></i> Reset</button>
            </div>
        </div>
        
        <div className="media-grid" id="media-container">
            </div>
    </main>
  );
}

export default Multimedia_Guidance;