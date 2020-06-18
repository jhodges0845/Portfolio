import React  from 'react';
import PropTypes from 'prop-types';

export class NavLink extends React.Component{
    getStyle = () =>{
        return {
            color: this.props.navLink.active ? '#52D6F4' : '#408697'
        }
    }

    

    render(){
        const {id, title} = this.props.navLink;
        return(
        <h3 onClick={this.props.setActive.bind(this, id)} style={this.getStyle()} >{title}</h3>
        );
    }

}

NavLink.propTypes = {
    navLink: PropTypes.object.isRequired
}

export default NavLink;