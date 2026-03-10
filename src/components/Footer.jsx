export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TRUST INFO */}
        <div className="footer-section">
          <h3>Shri Ram Janaki Trust</h3>
          <p>
            Dedicated to spiritual growth, social welfare, and
            religious activities for the benefit of society.
          </p>
        </div>

        {/* TRUST NAME */}
        <div className="footer-section">
          <h3>Name of the Trust</h3>
          <p><strong>Shri Ram Janaki Trust</strong></p>
        </div>

        {/* HEAD OFFICE */}
        <div className="footer-section">
          <h3>Head Office</h3>
          <p>
            55, Ram Janaki Mandir<br/>
            Power House, Gandhi Darshan<br/>
            I.P Estate, New Delhi – 110002
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Shri Ram Janaki Trust. All Rights Reserved.
      </div>

    </footer>
  );
}