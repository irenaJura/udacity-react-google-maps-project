import React, { Component } from 'react'

class Nav extends Component {
    showList() {
        let listPlaces = document.getElementsByTagName('aside');
        listPlaces[0].classList.add('show')
    }
    
    render() {
        const { handleQuery } = this.props;

        return (
            <nav className="navbar">
                    <h2 className="site-title">Filter My Favourite Places</h2>
                    <div className="navbar-left" role="search">
                        <input id="search-input"
                            type="text" 
                            placeholder="Filter" 
                            onChange={(event) => handleQuery(event.target.value)}
                            onFocus={() => this.showList()}/>
                    </div>
            </nav>
        )
    }
}

export default Nav;