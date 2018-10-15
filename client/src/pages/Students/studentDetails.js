import React, { Component } from 'react';
import API from "../../utils/API";
import ClassesEnrolled from '../../components/singleStudent/classesEnrolled'
import EnrollModal from '../../components/enrollInClassModal/enrollModal'

class StudentDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            birthday: "",
            age: "",
            id: "",
            classesEnrolled: [],
            parents: [],
            showModal: false,
            classes: [],
            selectedClass: ""
        }
    }


    loadStudent() {
        API.getStudent(this.props.match.params.id)
            .then(studentResp => {
                this.setState({
                    firstName: studentResp.data.firstName,
                    lastName: studentResp.data.lastName,
                    birthday: studentResp.data.birthday,
                    age: studentResp.data.age,
                    classesEnrolled: studentResp.data.classesEnrolled,
                    id: studentResp.data._id
                })
            })
    }

    loadClasses() {
        API.getClasses()
            .then(classes => {
                this.setState({ classes: classes.data })
            })
    }

    componentWillMount() {
        this.loadStudent()
        this.loadClasses()
    }

    handleFormSubmit = event => {
        console.log(this.state.selectedClass)
        event.preventDefault();
        API.enrollAClass(this.state.selectedClass, this.state.id)
            .then(res => {
                this.loadStudent()
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    showModal = event => {
        this.setState({ showModal: true });
    }

    hideModal = event => {
        this.setState({ showModal: false });
    }

    render() {
        var modal;
        if (this.state.showModal) {
            modal =
                <EnrollModal
                    onChange={this.handleInputChange}
                    onClose={this.hideModal}
                    onSave={this.handleFormSubmit}
                    classes={this.state.classes}
                    id={this.state.id}
                />
        } else {
            modal = "";
        }

        return (
            <div>
                <h1>{`${this.state.firstName} ${this.state.lastName}`}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Class Enrolled</h3>
                        <ClassesEnrolled classes={this.state.classesEnrolled} />
                    </div>
                </div>
                <button className="btn btn-success" onClick={this.showModal}>Enroll</button>
                {modal}
            </div>
        )
    }
}

export default StudentDetails