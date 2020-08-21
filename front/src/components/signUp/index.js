import React, { useState } from 'react';
import './signUp.css';
import { signUpApi } from "../../util/api.js";

function SignUp() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [travel, setTravel] = useState('');
  const [movie, setMovie] = useState('');
  const [sport, setSport] = useState('');
  const [music, setMusic] = useState('');
  const [game, setGame] = useState('');
  const [pwCheck, setPWCheck] = useState('');
  const [warning, setWarning] = useState('');


  async function handleSignUp(e){
    e.preventDefault();
    if(name === '') {
      setWarning('이름 입력해주세요.');
      return;
    }
    else if(school == '') {
      setWarning('학교를 입력해주세요.');
      return;
    }
    if(travel == ''){
      setWarning('여행을 얼마나 좋아하는지 선택해주세요.')
      return
    }
    if(movie == ''){
      setWarning('영화을 얼마나 좋아하는지 선택해주세요.')
      return
    }
    if(sport == ''){
      setWarning('스포츠를 얼마나 좋아하는지 선택해주세요.')
      return
    }
    if(music == ''){
      setWarning('음악을 얼마나 좋아하는지 선택해주세요.')
      return
    }
    if(game == ''){
      setWarning('게임을 얼마나 좋아하는지 선택해주세요.')
      return
    }
    const data = {
      'name' : name,
      'school' : school,
      'movie' : movie,
      'sport' : sport,
      'music' : music,
      'game' : game,
    }
    alert('전송완료');
    await signUpApi(data);
    setWarning('');
  };

  return(
    <form className="signUp_form">
      <input 
        className="signUp_inputId" 
        placeholder="이름를 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        className="signUp_inputPW" 
        placeholder="학교를 입력해주세요"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <div className="signUp_inputPWCheck">선호도를 선택해주세요</div>
      <div className="signUp_inputPWCheck">
        <div>여행</div>
        1<input type="radio" name="sports" value='1' onChange={(e) => setTravel(e.target.value)}/>
        2<input type="radio" name="sports" value='2' onChange={(e) => setTravel(e.target.value)}/>
        3<input type="radio" name="sports" value='3' onChange={(e) => setTravel(e.target.value)}/>
        4<input type="radio" name="sports" value='4' onChange={(e) => setTravel(e.target.value)}/>
        5<input type="radio" name="sports" value='5' onChange={(e) => setTravel(e.target.value)}/>
      </div>
      <div className="signUp_inputPWCheck">
        <div>영화</div>
        1<input type="radio" name="movie" value='1' onChange={(e) => setMovie(e.target.value)}/>
        2<input type="radio" name="movie" value='2' onChange={(e) => setMovie(e.target.value)}/>
        3<input type="radio" name="movie" value='3' onChange={(e) => setMovie(e.target.value)}/>
        4<input type="radio" name="movie" value='4' onChange={(e) => setMovie(e.target.value)}/>
        5<input type="radio" name="movie" value='5' onChange={(e) => setMovie(e.target.value)}/>
      </div>
      <div className="signUp_inputPWCheck">
        <div>스포츠</div>
        1<input type="radio" name="sport" value='1' onChange={(e) => setSport(e.target.value)}/>
        2<input type="radio" name="sport" value='2' onChange={(e) => setSport(e.target.value)}/>
        3<input type="radio" name="sport" value='3' onChange={(e) => setSport(e.target.value)}/>
        4<input type="radio" name="sport" value='4' onChange={(e) => setSport(e.target.value)}/>
        5<input type="radio" name="sport" value='5' onChange={(e) => setSport(e.target.value)}/>
      </div>
      <div className="signUp_inputPWCheck">
        <div>음악</div>
        1<input type="radio" name="music" value='1' onChange={(e) => setMusic(e.target.value)}/>
        2<input type="radio" name="music" value='2' onChange={(e) => setMusic(e.target.value)}/>
        3<input type="radio" name="music" value='3' onChange={(e) => setMusic(e.target.value)}/>
        4<input type="radio" name="music" value='4' onChange={(e) => setMusic(e.target.value)}/>
        5<input type="radio" name="music" value='5' onChange={(e) => setMusic(e.target.value)}/>
      </div>
      <div className="signUp_inputPWCheck">
        <div>게임</div>
        1<input type="radio" name="game" value='1' onChange={(e) => setGame(e.target.value)}/>
        2<input type="radio" name="game" value='2' onChange={(e) => setGame(e.target.value)}/>
        3<input type="radio" name="game" value='3' onChange={(e) => setGame(e.target.value)}/>
        4<input type="radio" name="game" value='4' onChange={(e) => setGame(e.target.value)}/>
        5<input type="radio" name="game" value='5' onChange={(e) => setGame(e.target.value)}/>
      </div>
      <div className="signUp_warning">{warning}</div>
      <button 
        className="signUp_button" 
        onClick={handleSignUp}
      >SIGN UP</button>
    </form>
  )
}

export default SignUp;