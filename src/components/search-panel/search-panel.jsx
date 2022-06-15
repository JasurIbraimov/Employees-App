import { Component } from "react";
import "./search-panel";
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchingValue: "",
        };
    }
    onValueChanged = (e) => {
        const searchingValue = e.target.value;
        this.setState({ searchingValue });
        this.props.setSearchingLetters(searchingValue);
    };
    render() {
        const { searchingValue } = this.state;
        return (
            <input
                className="form-control search-input"
                placeholder="Найти сотрудника"
                type="text"
                value={searchingValue}
                onChange={this.onValueChanged}
            />
        );
    }
}

export default SearchPanel;
