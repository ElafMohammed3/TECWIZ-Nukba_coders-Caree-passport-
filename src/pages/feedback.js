function feedback() {
  return (
  <main className="feedback-container">
  <div id="initial-state">
    <h1>Your Feedback Matters</h1>
    <p>How was your experience today?</p>
        
     <div className="emoji-selection">
      <button className="emoji-btn" data-mood="amazing">🤩</button>
      <button className="emoji-btn" data-mood="good">😊</button>
      <button className="emoji-btn" data-mood="neutral">😐</button>
      <button className="emoji-btn" data-mood="bad">😞</button>
      <button className="emoji-btn" data-mood="terrible">😡</button>
     </div>
    </div>

    <form onSubmit={hanSub} id="feedback-form">
    <div className="feedback-form-content" id="form-details">
      <h2 id="feedback-prompt"></h2>
      <textarea id="comments" name="comments" rows="5" placeholder="Write your feedback here..."></textarea>
      <input type="text" id="name" name="name" placeholder="Name (optional)" />
      <input type="email" id="email" name="email" placeholder="Email (optional)" />
     <button type="submit">Submit Feedback</button>
    </div>
    </form>

    <div id="success-message" className="success-message">
      <i className="fas fa-check-circle" ></i>
      <br/><br/>
        <p>Thank you! Your feedback has been successfully received.</p>
     </div>
</main>
  );
}

export default feedback;
