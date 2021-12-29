// NavBar Styles

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  Appbar: {
    // backgroundColor: '#1462aa',
    backgroundColor: '#fff',
    // color: '#B033fa',
    boxShadow: 'none',
    paddingBlock: 5,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  nav: {
    display: 'flex',
    overflowX: 'hidden',
    alignItems: 'center',
    // position: 'fixed',
    // maxWidth: 1500,
    margin: '1rem auto',
    justifyContent: 'center',

    minHeight: 50,
    paddingBlock: 10,

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    cursor: 'pointer',
    '&:hover': {
      overflowX: 'auto',
    },
    '& span': {
      flex: '0 0 auto',

      marginRight: 14,
      // fontSize: '1.35vw',
      fontSize: '1.35vw',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      /* Text style for "Hôtels et" */
      color: theme.palette.text.secondary,
      fontFamily: 'Avenir Next Condensed Demi Bold',

      fontWeight: 'bold',

      [theme.breakpoints.up('lg')]: {
        padding: '6px 8px',
        fontSize: 15,
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 12,
      },
      [theme.breakpoints.up('xl')]: {
        padding: '9px 13px',
        fontSize: 20,
      },
    },
  },
  NavItem: {
    display: 'block',
    color: '#000',
    cursor: 'pointer',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: 17,
    '&:hover': {
      // borderBottom: '2px solid #B033fa',
      color: 'deepskyblue',
      transition: '0.3s',
    },
  },
  darkBtn: {
    overflow: 'unset !important',
    '&button': {},
  },
  RegisterBtn: {
    '&.MuiButton-contained': {
      backgroundColor: 'rgb(6, 198, 255)',
      borderRadius: 20,
      color: '#fff',
      transition: '0.6s',
      '&:hover': {
        backgroundColor: '#03a0d7',
      },
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& span': {
        color: '#4D4D4D',
        cursor: 'pointer',
      },
    },
  },

  sectionMobile: {
    display: 'none',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  MobileMenu: {
    height: 500,
  },
  MenuItem: {
    '& .MuiMenuItem-root': {
      minWidth: 170,
      textAlign: 'center',
    },
    // [theme.breakpoints.up('lg')]: {
    //   '& .MuiMenuItem-root': {
    //     minWidth: 94,
    //   },
    // },
    // [theme.breakpoints.up(1600)]: {
    //   '& .MuiMenuItem-root': {
    //     minWidth: 96,
    //   },
    // },
  },
}));

export default useStyles;
