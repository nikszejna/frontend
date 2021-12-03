import React, { Component } from "react";
import Modal from "./components/Modal";
import ChartDisplay from "./components/ChartDisplay";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      dashboardList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/dashboards/")
      .then(res => this.setState({ dashboardList: res.data }))
      .catch(err => console.log(err));
  };


 
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Youtube NLP Analysis</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <ChartDisplay />
            </div>
          </div>
        </div>
        </div>
      </main>
    );
  }
}
export default App;