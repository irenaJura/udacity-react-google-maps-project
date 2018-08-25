import React, { Component } from 'react'

class Nav extends Component {
    
    showList() {
        let listPlaces = document.getElementsByTagName('aside');
        if(listPlaces[0]) {
            listPlaces[0].classList.add('show')
        }
    }
    
    render() {
        const { handleQuery } = this.props;

        return (
            <nav className="navbar" role="search">
                    <h2 tabIndex="0" className="site-title">Filter My Favourite Places</h2>
                    <div className="filter" role="search">
                        <input aria-label="Filter places"
                            id="search-input"
                            type="search" 
                            placeholder="Filter" 
                            onChange={(event) => handleQuery(event.target.value)}
                            onFocus={() => this.showList()}/>
                    </div>
            </nav>
        )
    }
}

export default Nav;