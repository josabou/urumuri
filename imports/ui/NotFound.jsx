
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed
class  notFound extends React.Component {
  render() {
    return  (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
            <Nav id='upcomming'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                <NavText>upcomming </NavText>
            </Nav>
            <Nav id='parents'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
            <Nav id='kindof'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
            <Nav id='anything'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
            <Nav id='idont'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
            <Nav id='ohhhh'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
            <Nav id='lameeee'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> parents </NavText>
            </Nav>
        </SideNav>
    </div>
  )
}
}
export default notFound;
