import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px #aeabab;
  border-radius: 7px;
  width: 30%;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: 2rem;
  width: 5rem;
  border-radius: 1.2rem;
  background-color: #2b2929;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  padding: 0.5rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .TextField-root": {
      width: "35ch",
    },
  },
  input: {
    marginTop: "1rem",
  },
}));

function Login() {
  const classes = useStyles();
  const [userData, setUserData] = useState({ userName: "", email: "" });
  const userDataHandler = (event: any) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = () => {};
  return (
    <Card>
      <Title>LOG IN </Title>
      <form className={classes.root} onChange={userDataHandler}>
        <TextField
          id="userName"
          label="Name"
          multiline
          className={classes.input}
        />
        <TextField
          id="email"
          label="Email"
          placeholder="gmail.com"
          multiline
          className={classes.input}
        />
      </form>
      <Button onClick={submitHandler}>Log in</Button>
    </Card>
  );
}

export default Login;
