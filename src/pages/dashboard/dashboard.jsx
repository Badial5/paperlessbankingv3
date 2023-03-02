import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link,  Grid, Paper,Container  } from '@mui/material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


// ============================================== MENU ICON AVATAR ================================================== 
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


//icons
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// import { ReactComponent as Exchange } from "../../assets/icons/transfer.svg"
// import { ReactComponent as Payment } from "../../assets/icons/payment.svg"
// import { ReactComponent as Payee } from "../../assets/icons/pay.svg"
// import { ReactComponent as Back } from "../../assets/icons/back.svg"
// import { ReactComponent as Estimate } from "../../assets/icons/estimate.svg"
// import { ReactComponent as Setting } from "../../assets/icons/setting.svg"
// import { ReactComponent as Inquiry }  from "../../assets/icons/Inquiry.svg"
// import { ReactComponent as Budget } from "../../assets/icons/budget.svg"
// import { ReactComponent as Transfer} from "../../assets/icons/transfer.svg"



import   Payee  from "../../assets/icons/payee.svg"
import Payment from "../../assets/icons/payment.svg"
import BuyAirtime from "../../assets/icons/buyairtime.svg"
import   Back  from "../../assets/icons/back.svg"
import Accounts from "../../assets/icons/account.svg"
import  Setting  from "../../assets/icons/setting.svg"
import  CustomerRequest   from "../../assets/icons/Inquiry.svg"
import LoanCalculator from "../../assets/icons/loancalculator.svg"
import  Transfer from "../../assets/icons/transfer.svg"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


import { mainListItems, secondaryListItems } from './const/listItems';
// import Chart from "./const/chart"
// import Title from "./const/title"
// import Deposits from "./const/deposit"
// import Orders from "./const/orders"
import { LogoutOutlined } from '@mui/icons-material';
import CreditCardPanel from "./const/cards"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://www.inlaks.com/">
        Inlaks
      </Link>{' '} */}
      <Link href="https://www.inlaks.com/" 
      sx={{color: "#7833EE"}}
       >
        Inlaks
      </Link>{' '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const drawerWidth = 240;

// const sideMenuIcons = [ <Exchange width={18} height={18} />, <Transfer width={18} height={18} />, <Estimate width={18} height={18} />, <Payment width={18} height={18}/>, <Payee width={18} height={18} />, <Inquiry width={18} height={18} />, <Budget  width={18} height={18} />, <Back width={18} height={18} />, <Setting width={18} height={18} /> ]


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

// const mdTheme = createTheme();

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


// ==================================================================================================== 

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [index, setIndex] = React.useState(0);

  // const handleNextIcon = () => {
  //   setIndex((index + 1) % sideMenuIcons.length);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" open={open} sx={{background: `linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)`}}>
        <Toolbar>

          {/* ==================================== STARTING =================================================================================================  */}

         

    {/* ============================================== ENDING =========================================================  */}


          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            User Dashboard
          </Typography>












          

          {/* ========================================== AVATAR MENU ==============================================  */}

          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', ml: "auto" }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}

            {/* =================================== MAILBOX AND THE NOTIFICATION BOX ============================================  */}

            <MenuItem>
        <IconButton size="small" aria-label="show 4 new mails" color="inherit" 
        sx={{width: 3}}>
          <Badge badgeContent={4} color="error" variant='dot' overlap='circular'>
            <MailIcon />
          </Badge>
        </IconButton>
        {/* <p>Messages</p> */}
      </MenuItem>
      <MenuItem>
        <IconButton
        sx={{width: 3,}}
          size="small"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="secondary"  variant='dot' overlap='circular'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* <p>Notifications</p> */}
      </MenuItem>



            {/* ================================== CLOSE OF THE MAIL AND THE NOTIFICATION BOX ====================================  */}

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}> <Avatar sx={{ width: 32, height: 32 }}>
              {/* {first_name.charAt(0)}   */} CW
            </Avatar>
 </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open2}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
           <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>


              {/* ========================================== END OF THE AVATAR MENU ===================================  */}

        </Toolbar>
      </AppBar>

        {/* <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer> */}

      {/* <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}

<Drawer variant="permanent" open={open} >
        <DrawerHeader sx={{background: `linear-gradient(90deg, #7833EE 0%, #8F45F2 53.42%, #A554F6 103.85%)`}}>
            <Typography sx={{fontSize: 12, textAlign: "center"}}>
              User Name
            </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{background: `#fff`}}>
          {/* ========== EXCHANGE: ICON 1 ===============  */}
        <ListItem disablePadding>
            <ListItemButton>
              <LightTooltip title="Transfer Money" placement='right'>
              <ListItemIcon>
                <img src={Transfer} width={18} height={18} />
              </ListItemIcon>
              </LightTooltip>
              <ListItemText primary="Transfer Money" />
            </ListItemButton>
          </ListItem>


            {/* ============== PAYMENT: Icon 2 ===============================  */}
          <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Payment" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={Payment} width={18} height={18} />
              </ListItemIcon>
              </LightTooltip>
              <ListItemText primary="Payment" />
            </ListItemButton>
          </ListItem>

          {/* =============================  Buy Airtime Icon 3 ======================  */}
          <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Buy Airtime" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={BuyAirtime} width={18} height={18} />
              </ListItemIcon>
              </LightTooltip>
              <ListItemText primary="Buy Airtime" />
            </ListItemButton>
          </ListItem>


           {/* =============================  Accounts  Icon 4======================  */}
           <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Account" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={Accounts} width={18} height={18} />
              </ListItemIcon>
            </LightTooltip>
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </ListItem>


           {/* =============================  Customer Request ======================  */}
           <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Customer Request" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={CustomerRequest} width={18} height={18} />
              </ListItemIcon>
            </LightTooltip>
              <ListItemText primary="Customer Request" />
            </ListItemButton>
          </ListItem>



          {/* =============================  Payee ======================  */}
          <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Payee" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={Payee} width={18} height={18} />
              </ListItemIcon>
            </LightTooltip>
              <ListItemText primary="Payee" />
            </ListItemButton>
          </ListItem>


           {/* =============================  Bank Appointment ======================  */}
           <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Bank Appointment" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <CalendarMonthOutlinedIcon width={18} height={18} />
              </ListItemIcon>
            </LightTooltip>
              <ListItemText primary="Bank Appointment" />
            </ListItemButton>
          </ListItem>


           {/* =============================  Loan Calculator ======================  */}
           <ListItem disablePadding>
            <ListItemButton>

            <LightTooltip title="Loan Calculator" placement='right'>
              <ListItemIcon>
                {/* <Exchange width={18} height={18} /> */}
                <img src={LoanCalculator} width={18} height={18} />
              </ListItemIcon>
            </LightTooltip>
              <ListItemText primary="Loan Calculator" />
            </ListItemButton>
          </ListItem>


         
         
        </List>

        <Divider />

        <List>
          
        <ListItem disablePadding>
            <ListItemButton>
              <LightTooltip title="Transfer Money" placement='right'>
              <ListItemIcon>
                <img src={Setting} width={18} height={18} />
              </ListItemIcon>
              </LightTooltip>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <LightTooltip title="Log out" placement='right'>
              <ListItemIcon>
                <LogoutOutlinedIcon width={18} height={18} />
              </ListItemIcon>
              </LightTooltip>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </ListItem>


        </List>
      </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container spacing={3}>
              {/* Chart Card */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    width: 340
                  }}
                >
                  {/* <Chart />  */}
                  <CreditCardPanel />
                </Paper>
              </Grid>


              {/* Recent Deposits Card */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>


              {/* Recent Orders Card*/}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>


            </Grid>

            
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
  
  );
}


