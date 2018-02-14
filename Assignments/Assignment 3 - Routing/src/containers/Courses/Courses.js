import React, { Component } from 'react';
import Course from '../Course/Course';
import {Link, Route} from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                    this.state.courses.map( course =>{
                            return (
                                <Link 
                                key={course.id} 
                                to={this.props.match.url + '/' + course.id + '/' + course.title}>
                                <article className="Course">{course.title}</article>
                                </Link>
                        );
                        })
                    }
                </section>
                    <Route path={this.props.match.url + '/:id/:title'}
                    component={Course}/>
            </div>
        );
    }
}

export default Courses;