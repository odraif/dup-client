import * as React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';

export default function BasicTextFields() {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",margin: "auto",marginTop:"5%"}}>
        <div>
          <form className='formcat'>
            <div>
              <div class="input-groups">
                <div class="input-group">
                  <input required type="text" class="input fit" />
                  <label class="user-label">Nom</label>
                </div>
                <div class="input-group">
                  <input required type="text" class="input fit" />
                  <label class="user-label">Prenom</label>
                </div>
              </div>

              <div class="input-group">
                <input required type="text" class="input" />
                <label class="user-label">Phone</label>
              </div>
              <div class="input-group">
                <input required type="email" name="text" class="input" />
                <label class="user-label">Email</label>
              </div>
              <div class="input-group">
                <textarea required type="text" name="text" class="input" cols="25" rows="5"></textarea>
                <label class="user-label">Message</label>
              </div>
            </div>
            <input type="submit" value="Envoyer" className='btn' />
          </form>
        </div>
        <div style={{ color: "#009997",marginLeft:"10%" }}>
          <h2>Contactez-Nous</h2>
          <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} /><a href='tel:0761513522' style={{ color: "#fff" ,textDecoration:"none"}}>0761513522</a></p>
          <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} /><a href='mailto:CONTACT@DUP.MA' style={{ color: "#fff" ,textDecoration:"none"}}>CONTACT@DUP.MA</a></p>
          <p><FontAwesomeIcon icon={faMap} style={{ marginRight: "10px" }} /><a href='https://goo.gl/maps/bKkhkCxefXHvTfgu8' style={{ color: "#fff" ,textDecoration:"none"}} target='blank'>N°18 AV ITTANE Z.I TASSILA DCHEIRA EL JIHADIA AGADIR</a></p>
        </div>
      </div>
    </>
  );
}
