import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Decorate from '../components/decorate';
import propTypes from 'prop-types';
import './index.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        };
    }
    componentWillMount() {
        // window.addEventListener('resize', this.resize.bind(this), true);
    }
    componentDidMount() {

    }
    resize() {
        this.setState({
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        });
    }
    render() {

        return (
            <div
                className='app'
            >
                <div className={classnames({ ['rect']: true, ['drop']: this.props.drop })}>
                    <Decorate />
                </div>

            </div>
        );
    }
}

// App.propTypes = {
//     music: propTypes.bool.isRequired,
//     pause: propTypes.bool.isRequired,
//     matrix: propTypes.object.isRequired,
//     next: propTypes.string.isRequired,
//     cur: propTypes.object,
//     dispatch: propTypes.func.isRequired,
//     speedStart: propTypes.number.isRequired,
//     speedRun: propTypes.number.isRequired,
//     startLines: propTypes.number.isRequired,
//     clearLines: propTypes.number.isRequired,
//     points: propTypes.number.isRequired,
//     max: propTypes.number.isRequired,
//     reset: propTypes.bool.isRequired,
//     drop: propTypes.bool.isRequired,
//     keyboard: propTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
    // pause: state.get('pause'),
    // music: state.get('music'),
    // matrix: state.get('matrix'),
    // next: state.get('next'),
    // cur: state.get('cur'),
    // speedStart: state.get('speedStart'),
    // speedRun: state.get('speedRun'),
    // startLines: state.get('startLines'),
    // clearLines: state.get('clearLines'),
    // points: state.get('points'),
    // max: state.get('max'),
    // reset: state.get('reset'),
    // drop: state.get('drop'),
    // keyboard: state.get('keyboard'),
});

export default connect(mapStateToProps)(App);
