import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div className="c-header">
                <div className="c-header-title">Lunch Launch</div>
                <div className="c-header-actions">
                    <div className="c-header-action c-link c-link--secondary">Become A Business Partner</div>
                    <div className="c-header-action c-link c-link--secondary">Brady</div>
                    <div className="c-header-action c-link c-link--secondary">Sign Out</div>
                </div>
            </div>
        );
    }
}

export default Header;
