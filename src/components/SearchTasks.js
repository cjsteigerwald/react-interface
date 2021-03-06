import React, { Component } from 'react';

class SearchTasks extends Component {
  render() {
    return (
      <div className="search-tasks row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchTasks"
              type="text"
              className="form-control"
              aria-label="Search Tasks"
              onChange={e => this.props.searchTasks(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'itemName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('itemName', this.props.orderDir)
                  }
                  href="#"
                >
                  Task Name
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchTasks;
