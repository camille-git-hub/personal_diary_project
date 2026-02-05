import logo from '../assets/logo.png';
import AddEntryButton from './AddEntryButton';

const Header = ({ onAddClick }) => {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="Diary Logo" />
        <h1>My Personal Diary</h1>
        <AddEntryButton onClick={onAddClick} /> {/*This button should open the AddEntryModal when clicked, which contains the EntryForm*/}
    </div>
  )
}

export default Header;  