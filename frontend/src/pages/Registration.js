import { React } from 'react';
import { Button, CssBaseline, TextField, Grid, Box, Container, Autocomplete } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../media/truck.jpeg'
import config from '../config/config';

const theme = createTheme()
export function Registration() {
  const addVehicle = async (vehicle) => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/vehicles/add`, {
        method: 'POST',
        body: JSON.stringify(vehicle),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        // Handle error
        const errorMessage = await response.json(); // Assuming the server sends JSON error messages
        alert(`An error occurred: ${errorMessage.error}`);
      } else {
        // Handle success
        const successMessage = await response.json(); // Assuming the server sends JSON success messages
        alert(`Success: ${successMessage.message}`);
      }
    } catch (error) {
      // Handle other potential errors (network issues, etc.)
      console.error('Error during the fetch operation:', error);
      alert('An unexpected error occurred');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newVehicle = {
      vehicleNo: data.get('vehicleNo'),
      vehicleName:data.get('vehicleName'),
      driverName: data.get('driverName'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      password: data.get('password'),
    }
    addVehicle(newVehicle);
    console.log({
      vehicleNo: data.get('vehicleNo'),
      vehicleName:data.get('vehicleName'),
      driverName: data.get('driverName'),
      phoneNumber: data.get('phoneNumber'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const vehiclesList =[
    { label: "Tata Sedan"},
    { label: "Mahindra Hatchback"},
    { label: "Estate Car"},
    { label: "Mahindra SUV"},
    { label: "Heavy Vehicles"},
    { label: "Camper Van"},
    { label: "Cement Mixer"},
    { label: "Delivery Van"},
    { label: "Fork Lift"},
    { label: "Taxi/Cab"},
    { label: "Crane"},
    { label: "Bulldozer"},
    { label: "Truck"},
    { label: "Oil Tanker"},
    { label:"Others"},
  ]

  return (

    <>
      <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="h-full w-full rounded-md object-cover object-top"
            src={logo}
            style={{ width: "100%", height: "auto", marginLeft : "35px"}}
            alt=""
          />
        </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Vehicle Registration</h2>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  marginBottom: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>

                      <TextField
                        autoComplete="Vehicle Number"
                        name="vehicleNo"
                        required
                        fullWidth
                        id="vehicleNo"
                        label="Vehicle Registration Number"
                        autoFocus
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Autocomplete 
                        id="combo-box-demo"
                        options={vehiclesList}
                        renderInput={(params) => <TextField {...params} 
                        autoComplete="Vehicle Name"
                        name="vehicleName"
                        required
                        fullWidth
                        id="vehicleName"
                        label="Vehicle Name"
                        />}                  
                      />
                    
                      </Grid>

                    <Grid item xs={12}>

                      <TextField
                        autoComplete="Driver Name"
                        name="driverName"
                        required={true}
                        fullWidth
                        id="DriverName"
                        label="Driver Full Name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        autoComplete="Phone Number"
                        name="phoneNumber"
                        required={true}
                        type="number"
                        fullWidth
                        id="phoneNumber"
                        label="Mobile Number"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required={true}
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white' }}
                  >
                    Register Vehicle
                  </Button>
                </Box>
              </Box>

            </Container>
      </ThemeProvider>
          </div>
        </div>
      </div>
    </section>
    </>
   
  )
}

export default Registration