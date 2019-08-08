import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'
import {Component} from 'react'
import axios from 'axios'




class ListItems extends Component{
  state = {
    taskMaster: null
  }

  componentDidMount(){
    axios.get('/api/accounts/getUserInfo').then(
      (res) => {this.setState({taskMaster: res.data.taskMaster})}
    )
  }
  render(){

var adminButton = (<Link to='/home/MakeTask'>
<ListItem button>
  <ListItemIcon>
  <PeopleIcon />
  </ListItemIcon>
  <ListItemText primary="Tasks" />
</ListItem></Link>)

if (this.state.taskMaster == false) {
  adminButton = <div></div>
}
    
    return(
    <div>
    <Link to='/home'>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    {adminButton}
  </div>


  )}
};

// export const secondaryListItems = (
//   <div>
//     {/* <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem> */}
//   </div>
// );

export default ListItems