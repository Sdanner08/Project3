import React from 'react';
//import PropTypes from 'prop-types';
import "./calender.css";

const Modal = props => (
    <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add New Task</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={props.onClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.taskName}
                            onChange={props.taskName}
                            name="taskName"
                            placeholder="New Task" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" value={props.taskDate}
                            onChange={props.onChange}
                            name="taskDate"
                            placeholder="Date of Task" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={props.onSave}>Save Task</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
)

export default Modal;