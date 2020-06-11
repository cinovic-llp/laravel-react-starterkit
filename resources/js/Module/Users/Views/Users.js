import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {compose} from "redux";
import {connect} from "react-redux";
import {ActionGetUserList, ActionDisplayUserList} from "../Action/Index";
//import usersData from './UsersData'

class Users extends Component {

    constructor(props) {
      super(props);

      this.state = {
        perPage: 10,
        page: 1,
      };
    }

    componentDidMount = async => {
        const { perPage, page } = this.state;
        this.props.ActionGetUserList(perPage, page);
    }

    render() {

      const fetchUsers = async => {
        const { perPage, page } = this.state;
        this.props.ActionGetUserList(perPage, page);
      };

      const handlePerRowsChange = (newPerPage, page) => {
        this.setState({perPage:newPerPage});
        this.setState({page:page});
        fetchUsers();
      };

      const handlePageChange = page => {
        this.setState({page:page});
        fetchUsers();
      };
        const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    ref={ref}
                    {...rest}
                />
                <label className="custom-control-label" onClick={onClick} />
            </div>
        ));

        const columns = [
            {
                name: "Name",
                selector: "name",
                sortable: true
            },
            {
                name: "Email",
                selector: "email",
                sortable: true,
                right: true
            },
            {
                name: "Created At",
                selector: "created_at",
                sortable: true,
                right: true
            },
            {
                name: "Updated At",
                selector: "updated_at",
                sortable: true,
                right: true
            }
        ];

        var userList = [];
        var totalRows = 0;
        const user = this.props.user;
        if(user.user == '' || user.user == undefined){

        } else {
            if(user.user.data && user.user.data.length != 0){
                userList = user.user.data;
                totalRows = user.user.total
            }
        }

        var loading = this.props.loading;

        return (
            <div>
                {loading}
                <DataTable
                    title="Users"
                    columns={columns}
                    data={userList}
                    progressPending={loading}
                    pagination
                    paginationServer
                    paginationTotalRows={totalRows}
                    selectableRows
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    selectableRowsComponent={BootyCheckbox}
                />
            </div>
        )
    }
}


const mapStateToProps = ({ user }) => {
    return {
        user
    };
};

export default compose(
    connect(
        mapStateToProps,
        {
            ActionGetUserList,
            ActionDisplayUserList
        }
    )
)(Users);
