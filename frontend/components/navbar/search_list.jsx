import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }
    }

    update(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        )
    }
   
    render() {
        const results = []
        for (let i = 0; i < this.props.questions.length; i++) {
            if (this.state.search === "") { }
            else if (results.length > 4) { break }
            else if (this.props.questions[i].body.toLowerCase().includes(this.state.search.toLowerCase())) {
                results.push(this.props.questions[i])
            }
        }
 
        const searchResult = results.map(question => {
            return (
                <Link
                    key={question.id}
                    to={`/questions/${question.id}`}> 
                    <ul className="dropdown-item search-link">
                        {question.body}
                    </ul>
                </Link>
            )
        })

        return (
            <div>
                <form>
                    <div className="app-search-bar-container">
                        <img className="search-icon" src={window.searchIcon} />
                        <input className="app-search-bar"
                            onChange={this.update('search')}
                            value={this.state.search}
                            onClick={this.toggleDropdown}
                            placeholder="Search Aporia">
                        </input>
                    </div>

                    <div
                        className="dropdown-content"
                        hidden={(results.length === 0) ? "hidden" : null}
                    >
                        { searchResult }
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(Search);