import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const initialInputs = {
    school : '',
    year : '',
}

function MainPage(){

  const [inputs, setInputs] = useState(initialInputs);
  const {school, year} = inputs;

  const onClick = (e) => {
        // 페이지 이동.
        console.log(inputs);
  }

  const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
  }


    return(
      <>      
        <h2>모여봐요 동창의 숲.</h2>
        <TextField  name="school" value={school} label="학교" onChange={onChange}/><br/>
        <TextField  name="year" value={year} label="년도" onChange={onChange}/><br/>
        <Button variant="contained" onClick={onClick}>이동</Button>
        <Link to="/signup">회원가입</Link>
        <div>
        <Link to="/photo">3주차 결과물 보러가기</Link>
        </div>
      </>
    );
}


export default MainPage;