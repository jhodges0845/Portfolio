import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';

export class Header extends React.Component{

    render(){
        return this.props.navLinks.map((navLink) =>(
        <NavLink key={navLink.id} navLink={navLink} setActive={this.props.setActive}/>
        ));
    }
}

Header.propTypes = {
    navLinks: PropTypes.array.isRequired
}

export default Header;