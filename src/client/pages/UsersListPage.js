import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}
	renderUsers() {
		return this.props.users.map((user) => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	render() {
		return (
			<div>
				<p>List of Users: </p>
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { users } = state;
	return { users };
}

function loadData(store) {
	console.log('load data');
	return store.dispatch(fetchUsers());
}

export default {
	component: connect(mapStateToProps, { fetchUsers })(UserList),
	loadData,
};
