import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchvideo: ''
    }
  }
  searchInputdata = (e) => {
      this.setState({searchvideo: e.target.value});
  }
  handleFormSubmit= (e) =>{
    e.preventDefault();
    this.props.inputData(this.state.searchvideo);
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input
                  type="search"
                  placeholder="search video"
                  className="form-control"
                  value={this.state.searchvideo}
                  onChange={this.searchInputdata}
                  style={{ marginTop: "20px" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
