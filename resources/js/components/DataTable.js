import React, { Component } from 'react';
import axios from 'axios';

export default class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entities: {
        data: [],
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          per_page: 5,
          to: 1,
          total: 1,
        },
      },
      first_page: 1,
      current_page: 1,
      sorted_column: this.props.columns[0],
      offset: 4,
      order: 'asc',
    };
  }

  fetchEntities() {
    // We're using axios instead of Fetch
    axios
      // The API we're requesting data from
      .get("https://127.0.0.1:8000/referrer")
      // Once we get a response, we'll map the API endpoints to our props
      .then(response =>
        response.data.results.map(users => ({
          id: `${users.id}`,
          name: `${users.name}`,
          email: `${users.email}`,
        }))
      )
      // Let's make sure to change the loading state to display the data
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      // We can still use the `.catch()` method since axios is promise-based
      .catch(error => this.setState({ error, isLoading: false }));
  }

  changePage(pageNumber) {
    this.setState({ current_page: pageNumber }, () => {this.fetchEntities()});
  }

  columnHead(value) {
    return value.split('_').join(' ').toUpperCase()
  }

  pagesNumbers() {
    if (!this.state.entities.meta.to) {
      return [];
    }
    let from = this.state.entities.meta.current_page - this.state.offset;
    if (from < 1) {
      from = 1;
    }
    let to = from + (this.state.offset * 2);
    if (to >= this.state.entities.meta.last_page) {
      to = this.state.entities.meta.last_page;
    }
    let pagesArray = [];
    for (let page = from; page <= to; page++) {
      pagesArray.push(page);
    }
    return pagesArray;
  }

  componentDidMount() {
    this.setState({ current_page: this.state.entities.meta.current_page }, () => {this.fetchEntities()});
  }

  tableHeads() {
    let icon;
    if (this.state.order === 'asc') {
      icon = <i className="fas fa-arrow-up"></i>;
    } else {
      icon = <i className="fas fa-arrow-down"></i>;
    }
    return this.props.columns.map(column => {
      return <th className="table-head" key={column} onClick={() => this.sortByColumn(column)}>
        { this.columnHead(column) }
        { column === this.state.sorted_column && icon }
      </th>
    });
  }

  userList() {
    if (this.state.entities.data.length) {
      return this.state.entities.data.map(users => {
        return <tr key={ users.id }>
          {Object.keys(users).map(key => <td key={key}>{ users[key] }</td>)}
        </tr>
      })
    } else {
      return <tr>
        <td colSpan={this.props.columns.length} className="text-center">No Records Found.</td>
      </tr>
    }
  }

  sortByColumn(column) {
    if (column === this.state.sorted_column) {
      this.state.order === 'asc' ? this.setState({ order: 'desc', current_page: this.state.first_page }, () => {this.fetchEntities()}) : this.setState({ order: 'asc' }, () => {this.fetchEntities()});
    } else {
      this.setState({ sorted_column: column, order: 'asc', current_page: this.state.first_page }, () => {this.fetchEntities()});
    }
  }

  pageList() {
    return this.pagesNumbers().map(page => {
      return <li className={ page === this.state.entities.meta.current_page ? 'page-item active' : 'page-item' } key={page}>
        <button className="page-link" onClick={() => this.changePage(page)}>{page}</button>
      </li>
    })
  }

  render() {
    return (
      <div className="data-table">
        <table className="table table-bordered">
          <thead>
            <tr>{ this.tableHeads() }</tr>
          </thead>
          <tbody>{ this.userList() }</tbody>
        </table>
        { (this.state.entities.data && this.state.entities.data.length > 0) &&
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link"
                  disabled={ 1 === this.state.entities.meta.current_page }
                  onClick={() => this.changePage(this.state.entities.meta.current_page - 1)}
                >
                  Previous
                </button>
              </li>
              { this.pageList() }
              <li className="page-item">
                <button className="page-link"
                  disabled={this.state.entities.meta.last_page === this.state.entities.meta.current_page}
                  onClick={() => this.changePage(this.state.entities.meta.current_page + 1)}
                >
                  Next
                </button>
              </li>
              <span style={{ marginTop: '8px' }}> &nbsp; <i>Displaying { this.state.entities.data.length } of { this.state.entities.meta.total } entries.</i></span>
            </ul>
          </nav>
        }
      </div>
    );
  }
}
