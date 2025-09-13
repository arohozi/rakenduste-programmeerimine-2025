import "../styles/Info.css"
function Info() {
  return (
  <div className="container"> 
  <h1 className="title">Alina Rohozinska</h1>
  <ul className="list">
    <li>Jõusaal</li>
    <li>Võrkpall</li>
    <li>Foto</li>
  </ul>
  <form className="contactForm">
    <div className="formGroup">
      <label htmlFor="email">Email</label>
      <input className="input" type="email" id="email" name="email" placeholder="tugend@tlu.ee"/>
    </div>
    <div className="formGroup">
      <label htmlFor="message">Your message</label>
      <textarea className="textarea" placeholder="Tere!" id="message" name="message"/>
    </div>
    <button className="callToActionButton" type="button">Saada</button>
  </form>
  </div>
)}

export default Info
 