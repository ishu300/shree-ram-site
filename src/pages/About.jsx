import image from "../assets/mahatyagi.jpeg";
import imagetwo from "../assets/gangadasjii.jpeg"
import imagethree from "../assets/ajay.jpeg"
import imagefour from "../assets/sanjeetkumar.jpeg"
export default function About() {
  return (
    <div className="container">
      <h1>About Our Trust</h1>
      <p>
        Our trust works for social welfare, religious development, and
        organizing spiritual gatherings for the community.
      </p>

      {/* SECTION 1 */}
      <div className="about-section">

        <div className="about-left">
         <h2>Founder & Adhyaksh</h2>

<h3>Shri Ramji Das Mahatyagi</h3>

<p>
<strong>Designation:</strong> Adhyaksh (President) – Shri Ram Janaki Trust
</p>

<p>
<strong>Father's Name:</strong> Shri Bairam Das Mahatyagi
</p>

<p>
<strong>Address:</strong><br/>
Shri Ram Janaki Temple,<br/>
Near Rajghat Power House,<br/>
ITO Daryaganj, Central Delhi,<br/>
New Delhi – 110002
</p>

<p>
Shri Ramji Das Mahatyagi is the founder and guiding authority of 
<strong>Shri Ram Janaki Trust</strong>. Under his leadership, the trust 
works towards promoting spiritual values, religious harmony, and 
community welfare through various social and charitable initiatives.
</p>

        </div>

        <div className="about-right">
          <img src={image} alt="Temple" />
        </div>

      </div>

      {/* SECTION 2 */}
      <div className="about-section">

        <div className="about-left">
          <h2>Secretary (Sachiv)</h2>

<h3>Shri Ramji Das Mahatyagi</h3>

<p>
<strong>Designation:</strong> Sachiv (Secretary) – Shri Ram Janaki Trust
</p>

<p>
<strong>Father's Name:</strong> Shri Bairam Das Mahatyagi
</p>

<p>
<strong>Address:</strong><br/>
Shri Ram Janaki Temple,<br/>
Near Rajghat Power House,<br/>
ITO Daryaganj, Central Delhi,<br/>
New Delhi – 110002
</p>

<p>
Shri Ramji Das Mahatyagi serves as the <strong>Sachiv (Secretary)</strong> 
of Shri Ram Janaki Trust. In this role, he assists in the administrative 
management of the trust, coordinates trust activities, and supports the 
implementation of spiritual, charitable, and community welfare programs.
</p>
        </div>

        <div className="about-right">
          <img src={imagetwo} alt="Temple" />
        </div>

      </div>

      {/* SECTION 3 */}
      <div className="about-section">

        <div className="about-left">
         <h2>Mahasachiv (General Secretary)</h2>

<h3>Shri Ajay Kumar Upadhyay</h3>

<p>
<strong>Designation:</strong> Mahasachiv (General Secretary) – Shri Ram Janaki Trust
</p>

<p>
<strong>Father's Name:</strong> Shri Sharda Nand Upadhyay
</p>

<p>
<strong>Address:</strong><br/>
House No. 2131/4-B,<br/>
Gali No. 1, Prem Nagar,<br/>
Patel Nagar, Central Delhi,<br/>
New Delhi – 110008
</p>

<p>
Shri Ajay Kumar Upadhyay serves as the 
<strong>Mahasachiv (General Secretary)</strong> of Shri Ram Janaki Trust. 
He plays an important role in coordinating trust activities, managing 
administrative operations, and ensuring the effective implementation 
of the trust’s spiritual, social, and charitable initiatives.
</p>
        </div>

        <div className="about-right">
          <img src={imagethree} alt="Temple" />
        </div>

      </div>

      {/* SECTION 4 */}
      <div className="about-section">

        <div className="about-left">
          <h2>Accountant</h2>

<h3>Shri Sanjeet Kumar</h3>

<p>
<strong>Designation:</strong> Accountant – Shri Ram Janaki Trust
</p>

<p>
<strong>Father's Name:</strong> Shri Yograj Singh
</p>

<p>
<strong>Address:</strong><br/>
336, Ground Floor,<br/>
Hari Nagar, Ashram,<br/>
South Delhi,<br/>
New Delhi – 110014
</p>

<p>
Shri Sanjeet Kumar serves as the <strong>Accountant</strong> of 
Shri Ram Janaki Trust. He is responsible for maintaining financial 
records, managing accounts, and ensuring transparency in all financial 
transactions of the trust. His role helps maintain proper financial 
discipline and accountability within the organization.
</p>

        </div>

        <div className="about-right">
          <img src={imagefour} alt="Temple" />
        </div>

      </div>

    </div>
  );
}