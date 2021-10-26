import React from 'react'
import { Link } from 'react-router-dom'
// import { ListGroup, ListGroupItem } from 'reactstrap'

export default function AdminMenu() {
    return (
        <div className="list-group">
            <a href="#!" className="list-group-item list-group-item-action active" aria-current="true">
                Menu
            </a>
            <ul className="list-group list-group-flush">
                <Link className="list-group-item center btn btn-light" to="/admin/addAdmin" exact>Add New Admin</Link>
                <button className="list-group-item btn btn-light">Update an Admin</button>
                <button className="list-group-item btn btn-light">Delete Admin</button>
                <button className="list-group-item center btn btn-light">Get Admin By ID</button>
                <Link className="list-group-item center btn btn-light" to="/admin/viewAdmin" exact>View Admin Details</Link>
                <button className="list-group-item btn btn-light">View Trips Datewise</button>
                <button className="list-group-item btn btn-light">View Trips Customerwise</button>
                <button className="list-group-item btn btn-light">View All Trips</button>
                <button className="list-group-item btn btn-light">View All Customers</button>
                <button className="list-group-item btn btn-light">View All Drivers</button>
            </ul>
        </div>
    )
}
