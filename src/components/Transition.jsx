import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FormControlLabel
        control={(
          <Button
            variant="contained"
            onClick={handleChange}
            style={{
              backgroundColor: '#1976d2', // لون الزر
              color: 'white',
            }}
          >
            {checked ? 'Close Menu' : 'Open Menu'}
          </Button>
        )}
      />

      {/* المينيو المتحرك عند التوسيع أو الانكماش */}
      <Box sx={{ width: '100%' }}>
        <Collapse in={checked} orientation="horizontal">
          <Box
            sx={{
              backgroundColor: '#f0f0f0', // خلفية خفيفة
              borderRadius: '8px',
              transition: 'all 2s ease-in-out', // تأثير الحركة عند التوسيع والانكماش
            }}
          >
            <p>000000000000000000</p>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}
