import React from "react";
import { useState } from "react";
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
  height: 2rem;
  width: 5rem;
  border-radius: 1.2rem;
  background-color: #2b2929;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 17rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

function Login() {
  const [value, setValue] = useState("");
  type EventType = {
    event: any;
  };
  const handleChange = ({ event }: EventType) => {
    setValue(event.target.value);
  };

  return (
    <Card>
      <Title>LOG IN </Title>
      <form>
        <TextField
          id="standard-textarea"
          label="Name"
          placeholder="Name"
          multiline
        />
      </form>
      <form>
        <TextField
          id="standard-textarea"
          label="Email"
          placeholder="gmail.com"
          multiline
          onChange={handleChange}
          value={value}
        />
      </form>
      <Button>Log in</Button>
    </Card>
  );
}

export default Login;

// noValidate autoComplete="off"
