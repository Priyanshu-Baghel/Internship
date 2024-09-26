import * as React from 'react';

import {
  Button, CssBaseline, TextField, Link,
  Container, Grid, Box } from "@mui/material"

import IOCL from "../media/login.jpeg"
import { loginUser } from '../helpers/helpers'
import { useNavigate } from 'react-router-dom';

export function SignIn({ handleUser }) {
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }

    loginUser(user).then(res => {
      if (res.isAuth) {
        handleUser(res);
        history('/admin');
      }
      else history('/');
    })
      .catch(err => { throw err });
  };

  return (
    <>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a
                href="/signup"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a account
              </a>
            </p>
            <Container maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                }}
              >
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} >
                  <TextField
                    margin="normal"
                    required={true}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required={true}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white' }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src= {IOCL} style={{  marginLeft: "15px",marginTop: "50px", width: "100%", height: "auto" }}
            alt=""
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default SignIn