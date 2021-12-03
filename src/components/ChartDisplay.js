import React, { Component } from "react";
import axios from "axios";

export class ChartDisplay extends Component {
  constructor(props) {
    super();
    this.state = {
      viewCompleted: false,
      charts: []
  }
}



  componentDidMount() {
    this.refreshList();
  };

  start_comment_retrieval_by_videoid= (videoid) => {
    axios
      .get("http://localhost:8000/api/getcomments?videoid="+videoid)
      .then(res => this.setState({active_videoid: videoid}),
      this.updateCharts(videoid))
      .catch(err => console.log(err));
  };

  updateCharts = (videoId) => {
    axios
      .get("http://localhost:8000/api/getsentimentchart?videoid="+videoId)
      .then(res => this.setState({ pic: res.data }))
      .catch(err => console.log(err));
  };


  refreshList = () => {
    var videoId = "x3cxvsUFVZA"
    if(this.state.active_videoid != null){
      videoId = this.state.active_videoid;
    }
    console.log(this.state.active_videoid)
    axios
      .get("http://localhost:8000/api/getsentimentchart?videoid="+videoId)
      .then(res => this.setState({ pic: res.data }))
      .catch(err => console.log(err));
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleClick = (e) => {
    this.start_comment_retrieval_by_videoid(this.state.input);
  };

  render() {
    return (
      <main className="content">
        <span>
          <input
              onChange={ this.handleChange } 
              type="text"
              id="header-search"
              placeholder="youtube video id"
              name="s" 
          />
          <button type="submit" onClick={this.handleClick}>Analyze</button>
        </span>
        <span>
            <img src={`data:image/png;base64,${this.state.pic}`}></img>
        </span>
      </main>
    );
  }
}

export default ChartDisplay;