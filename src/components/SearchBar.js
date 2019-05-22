import React from 'react'

class SearchBar extends React.Component {

    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onTermSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onTermSubmit} className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input type="text" 
                               value={this.state.term} 
                               onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;