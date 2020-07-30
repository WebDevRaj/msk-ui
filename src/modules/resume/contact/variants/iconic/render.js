import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  item: {
    display: 'flex'
  },
  itemValue: {
    marginLeft: 10
  }
})

const Iconic = (
  {
    theme,
    phoneNo,
    emailId,
    city,
    website
  }
) => {
  const styles = useStyles();

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <p style={{...styles.item}}><PhoneIcon fontSize="small" /><span style={{...styles.itemValue}}>{phoneNo.value}</span></p>
      <p style={{...styles.item}}><EmailIcon fontSize="small" /> <span style={{...styles.itemValue}}>{emailId.value}</span></p>
      <p style={{...styles.item}}><LocationOnIcon fontSize="small" /> <span style={{...styles.itemValue}}>{city.value}</span></p>
      <p style={{...styles.item}}><LanguageIcon fontSize="small" /> <span style={{...styles.itemValue}}>{website.value}</span></p>
    </div>
  );
};

export default Iconic;