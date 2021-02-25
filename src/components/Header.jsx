import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Permanent Marker",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}))

const Header = () => {
  const styles = useStyles()
  return (
    <Typography component='h1' className={styles.root}>
      Multi steps form
    </Typography>
  )
}

export default Header
