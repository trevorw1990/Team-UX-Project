import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

const NavBar = (props) => {
    let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    <div className="header">
        <button onClick={openModal}>Log In</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Log into your Project Connect account</h2>
        <div>I am a modal</div>
        <form>
            <label>Email Adress
                <input />
            </label>
            <label>Password
                <input type='password' />
            </label>
            <button>Log In</button>
            <div>Don't have an account?<Link to='/signup'>Sign Up</Link></div>
        </form>
      </Modal>
        <button>
            {/* <img src={logo} alt="ProjectConnect"/>  */}
        </button>
        <button>
            <Link to='/signup'>Sign Up</Link>
        </button>
    </div>
}


export default NavBar;
