'use client';

import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Search } from '@mui/icons-material';

const Header = () => {
  return (
    <Box>
      <img src="/tiendi.svg" alt="Tiendi Shop logo" />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Busca Aquí</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      
    </Box>
  );
};

export default Header;