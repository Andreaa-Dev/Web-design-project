import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { KeyboardDatePicker } from "@material-ui/pickers";

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 5rem;
  border-radius: 1.2rem;
  background-color: #2b2929;
  color: white;
  margin-top: 1rem;
  margin-left: 5rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  input: {
    marginBottom: "1rem",
    width: "20rem",
  },

  password: {
    visibility: "hidden",
  },
}));

function Register() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2021-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [userRegister, setUserRegister] = useState({
    userName: "",
    DOB: new Date().toISOString(),
    email: "",
    password: "",
  });

  const userRegisterHandler = (event: any) => {
    setUserRegister({
      ...userRegister,
      [event.target.id]: event.target.value,
    });
  };

  const registerHandler = async () => {
    await axios.post("http://localhost:5000/user", userRegister);
  };

  return (
    <MainCard>
      <Title>Register</Title>
      <div className={classes.root}>
        <form className={classes.card} onChange={userRegisterHandler}>
          <TextField
            className={classes.input}
            id="userName"
            label="Name "
            multiline
          />

          <KeyboardDatePicker
            className={classes.input}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date of birth"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <TextField
            className={classes.input}
            id="email"
            defaultValue="@gmail.com"
            label="Email"
            multiline
          />

          <TextField
            className={classes.input}
            id="password"
            label="Password"
            type="password"
          />
        </form>
        <Button onClick={registerHandler}>SAVE</Button>
      </div>
    </MainCard>
  );
}

export default Register;
