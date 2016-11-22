import React, {Component} from 'react';
import s from './App.scss';
import SkillColumn from './skill/SkillColumn'
import ExperienceColumn from './experience/ExperienceColumn'

class App extends Component {

    render() {
        return (
            <div className="container cv-container">
                <div className="row">
                    <div className="col-md-4 skillColumn">
                        <SkillColumn />
                    </div>
                    <div className="col-md-8 experienceColumn">
                        <ExperienceColumn />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;