import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/register';

import './RegisterPage.css';

class RegisterPage extends Component {
    state = {
    }

    componentDidMount() {
        //this.props.getFriendRecommend();
    }

    render() {
        let friends = [{name: "뽀로로", school: "남극고", hobby: "노는거"},
        {name: "honux", school: "코드스쿼고", hobby: "주짓수"},
        {name: "굳건이", school: "군대", hobby: "강제입영"}
        ]//this.props.storedFriends;

        let friendsComponent = friends.map(element => <span className="circle" onClick={() => {alert("친구 추가 완료!\n 훌륭한 선택이십니다!^^7")}}>
                <p>{element.name}</p>
                <p>{element.school}</p>
        </span>);
        return (
            <div>
                <h3>회원가입을 축하합니다!</h3>
                <h3>다음과 같은 분들을 친구추가해보실래요?</h3>
                <div className="circle-container">
                {friendsComponent}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        storedFriends: state.register.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFriendRecommend: () => {
        dispatch(actionCreators.getFriendRecommend())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
