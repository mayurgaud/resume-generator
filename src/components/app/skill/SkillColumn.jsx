import React, {Component} from 'react';
import s from './Skill.scss';

class SkillColumn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <section id="profile" className="profile">
                    <article className="vcard">
                        <div className="user-thumb">
                            <img className="css-crop bg-cover"
                                 src="https://workstory.s3.amazonaws.com/assets/1297759/IMG_20160809_140403_cv.jpg"/>
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
                <section id="strengths" className="strengths">
                    <div className="edit-btn edit-section hidden-xs hidden-sm">
                        <span className="add-article-btn">
                            <i className="fa fa-plus"/>
                            <span></span>
                            <span>Skills</span>
                        </span>
                        <i className="fa fa-arrow-up fa-fw"/>
                        <i className="fa fa-arrow-down fa-fw"/>
                        <i className="fa fa-trash-o fa-fw"/>
                    </div>
                    <header>
                        <h3 className="header-text">
                            <span className="undefined needsclick">Skills</span>
                        </h3>
                    </header>
                    <article className="competency">
                        <div className="article-headings">
                            <h6>
                                <span className="undefined needsclick">Front End</span>
                            </h6>
                        </div>
                        <div className="article-body competency">
                            <div id="react-tinymce-1" className=" mce-content-body">
                                <ul>
                                    <li>Javascript (ES5/ES6)</li>
                                    <li>jQuery, Ajax</li>
                                    <li>HTML5</li>
                                    <li>ReactJs</li>
                                    <li>Extjs</li>
                                    <li>Bootstrap, Foundation</li>
                                    <li>CSS3, Sass, Less</li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article className="competency">
                        <div className="article-headings">
                            <h6>
                                <span className="undefined needsclick">Back End</span></h6></div>
                        <div className="article-body competency">

                            <div id="react-tinymce-2" className=" mce-content-body">
                                <ul>
                                    <li>Node, NPM</li>
                                    <li>Express, Sails.js</li>
                                    <li>PHP</li>
                                    <li>Joomla, Wordpress</li>
                                    <li>Zend</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article className="competency">
                        <div className="article-headings">
                            <h6>
                                <span className="undefined needsclick">Miscellaneous Skills</span></h6></div>
                        <div className="article-body competency">
                            <div id="react-tinymce-3" className=" mce-content-body">
                                <ul>
                                    <li>Git/SVN</li>
                                    <li>Test-Driven-Development</li>
                                    <li>Unit Testing, Grunt, Webpack</li>
                                    <li>Docker</li>
                                    <li>Vagrant</li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                </section>
            </div>
        );
    }

}

export default SkillColumn;