import '../styles/popup.css';

const Popup = ({ image, quote }) => (
  <div className="overlay" id="popup">
    <div className="popup">
      <div className="popup-photo">
        <a href={image} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Profile Picture" />
        </a>
      </div>
      <div className="popup-quote">{quote}</div>
      <a className="popup-close" href="#">&times;</a>
    </div>
  </div>
);

export default Popup;








// const Popup = () => (
//   <div className="overlay" id="popup">
//     <div className="popup">
//       <div className="popup-photo">
//         <a href="/assets/midas.jpeg" target="_blank">
//           <img src="/assets/midas.jpeg" alt="Profile Picture" />
//         </a>
//       </div>
//       <div className="popup-quote">
//         But... the sensation that I've lost something lingers for a long time after I wake up.
//       </div>
//       <a className="popup-close" onClick={() => window.history.back()}>&times;</a>
//     </div>
//   </div>
// );

// export default Popup;
