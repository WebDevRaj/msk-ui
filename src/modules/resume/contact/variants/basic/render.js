import React from 'react'

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
})

const Basic = (
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
      <div><strong>{phoneNo.name}</strong> : {phoneNo.value}</div>
      <div><strong>{emailId.name}</strong> : {emailId.value}</div>
      <div><strong>{city.name}</strong> : {city.value}</div>
      <div><strong>{website.name}</strong> : {website.value}</div>
    </div>
  );
};

export default Basic;