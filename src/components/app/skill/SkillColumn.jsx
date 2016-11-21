import React, { Component } from 'react';
import s from './Skill.scss';

class SkillColumn extends Component {

    render() {
        return (
            <div className="row">
                <section id="profile" className="profile">
                    <article className="vcard">
                        <div className="user-thumb">
                            <img className="css-crop bg-cover" src="https://workstory.s3.amazonaws.com/assets/1297759/IMG_20160809_140403_cv.jpg"/>
                        </div>
                        <div className="fn user-title">
                            <h1 className="full-name">
                                <span className="undefined needsclick">Mayur Gaud</span>
                            </h1>
                            <h2 className="title">
                                <span className="undefined needsclick">Full Stack Developer</span>
                            </h2>
                        </div>
                        <ul className="user-contact">
                            <li className="adr locality">
                                <span className="undefined needsclick">Pune, Maharashtra </span>
                            </li>
                            <li className="phone">
                                <span className="undefined needsclick">+919685565928</span>
                            </li>
                            <li className="email">
                                <span className="undefined needsclick">contact@mayurgaud.com</span>
                            </li>
                        </ul>
                    </article>
                </section>
            </div>
        );
    }

}

export default SkillColumn;