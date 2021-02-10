import PropTypes from 'prop-types';
import Button from "./Button";


function Header(props) {
    return (
        <div className="header" >
            <h1>{props.title}</h1>
            <Button buttonText="ADD" />
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

Header.defaultProps = {
    title: "TITLE",
}

export default Header
