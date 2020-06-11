import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { ActionGetUserDetails, ActionDisplayUserDetails } from "../../Module/Users/Action";
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import { AppSidebarToggler } from '@coreui/react';

class DefaultHeader extends Component {

    componentDidMount = async => {
        this.props.ActionGetUserDetails();
    }

    render() {

        const user = this.props.user;
        var username = '';

        if(user.user != ''){
            if(user.user && user.user.length != 0){
                if(user.user.name !== undefined){
                    localStorage.setItem('username',user.user.name);
                }
            }
        }
        username = localStorage.getItem('username');

        return (
            <React.Fragment>
              <a href="https://cinovic.com/" style={{width: 200,textAlign: 'center'}}>
                <img src='https://cinovic.com/wp-content/uploads/2019/12/cropped-data-logo.png' style={{width:100}} />
              </a>
              <AppSidebarToggler className="d-lg-none" display="md" mobile />
              <AppSidebarToggler className="d-md-down-none" display="lg" />
              <Nav className="ml-auto" navbar>
                  <UncontrolledDropdown nav direction="down">
                      <DropdownToggle nav caret>
                          <div className="d-none d-md-inline"><i className="nav-icon icon-user"></i> {username} </div>
                      </DropdownToggle>
                      <DropdownMenu right>
                          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
                          <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              </Nav>
            </React.Fragment>
        );
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
            ActionGetUserDetails,
            ActionDisplayUserDetails
        }
    )
)(DefaultHeader);
