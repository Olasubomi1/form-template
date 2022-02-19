import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Home extends Component {
  state = {
    forms: [],
    currentPage: 1,
    pageSize: 2,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data: forms } = await axios.get(
      "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
      { mode: "cors" }
    );
    this.setState({ forms, pageSize: forms.length / 12 });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  getPagedData = () => {
    const { pageSize, currentPage, forms: allForms } = this.state;
    let filtered = allForms;
    const form = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: form };
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { totalCount, data: forms } = this.getPagedData();
    return (
      <div>
        {console.log(this.state.forms.length)}
        <Cards forms={forms} />
        <Pagination
          pageSize={pageSize.length}
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;

// itemsCount={totalCount}
// currentPage={currentPage}
// onPageChange={this.handlePageChange}
