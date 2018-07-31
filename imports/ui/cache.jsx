
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { DropdownButton} from 'react-bootstrap';
import { MenuItem} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { NavItem} from 'react-bootstrap';
import Async from 'react-select/lib/Async';
import {ReactiveVar} from 'meteor/reactive-var';

import Select from 'react-select';

const options = [
  { value: '1', label: 'parents' },
  { value: '2', label: 'children' },
  { value: '3', label: 'overview' }
];
const discriptions = [
  { value: '1', label: 'behaviour' },
  { value: '2', label: 'info' },
  { value: '3', label: 'nutrition' }
];


class  notFound extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
  }
  handleChange1 = (selectedOption) => {
    this.setState({selectedOption1: selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleChange2 = (selectedOption) => {
    this.setState({selectedOption2: selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  sageacc.filterTab.onCreated(function() {
  this.closed = new ReactiveVar(false);
});

sageacc.filterTab.helpers({
  closed() {
    return sageacc.instance().closed.get();
  }
});

sageacc.filterTab.events({
  'click .accordion-js'(event, template) {
    const closed = sageacc.closed;

    closed.set(!closed.get());
  }
});
  render() {
    const selected= this.state;

    return (
      <div>
      <Select value={selected.selectedOption1} onChange={this.handleChange1} options={options} />
      <Select value={selected.selectedOption2} onChange={this.handleChange2} options={discriptions} /></div>,
    <div className ="accordion">
      <ul id="test" className="accordion" data-accordion role="tablist" data-allow-all-closed="true">

         <li className="accordion-item">

             <a href="#panel-{i}" role="tab" className="accordion-title" id="panel-{i}-heading" aria-controls="panel-{i}">Accordion 1</a>

             <div id="panel-{i}" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel-{i}-heading">
                 Panel 1. Lorem ipsum dolor
             </div>
         </li>

 </ul>

 <ul id="test2" className="accordion" data-accordion role="tablist" data-allow-all-closed="true">
   <li className="accordion-item">

     <a href="#panel2d" role="tab" className="accordion-title" id="panel1d-heading" aria-controls="panel2d">Accordion 1</a>

     <div id="panel2d" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel2d-heading">
       Panel 1. Lorem ipsum dolor
     </div>
   </li>
   <li className="accordion-item">

     <a href="#panel2d" role="tab" className="accordion-title" id="panel2d-heading" aria-controls="panel2d">Accordion 2</a>


     <div id="panel2d" className="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel2d-heading">
       "Panel 2. Lorem ipsum dolor"
     </div>
   </li>
 </ul>
 </div>,
class sageacc(){
 <div className="filters">
  <div className="fu-stores-filter">
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col filterclassName">
        <div className="fu-filter-menu filterclassName">
          <div className="fu-filter-menu__heading">
            <div className="fu-filter-menu__heading--title fu-filter-menu__heading--link fu-show-all-categories-js"> All </div>
          </div>
          <div className="fu-filter-menu__heading">
            <div className="fu-filter-menu__heading--title"> Adults </div>
          </div>
          <div className="fu-filter-menu__heading {#if accordionOpen}accordionOpen-js{else}accordionClose-js{/if}">
            <h4 className="fu-filter-menu__heading--title">
              Men
              <button className="fu-accordion-button mdl-button mdl-js-button mdl-button--icon">
                <i className="fu-accordion-icon fu-arrow-up"></i>
              </button>
             </h4> </div>
          <div className="fu-filter-menu__body {#unless accordionOpen}hidden{/unless}">
            <ul className="mdl-list"> {}
              <li className="mdl-list__item-primary-content men-js" id='{alias}'>{}</li>
              {}
            </ul>
          </div>
          <div className="fu-filter-menu__heading {#if accordionOpen}accordionOpen-js{else}accordionClose-js{/if}">
            <h4 className="fu-filter-menu__heading--title">
              women
              <button className="fu-accordion-button mdl-button mdl-js-button mdl-button--icon">
                <i className="fu-accordion-icon fu-arrow-up"></i>
              </button>
            </h4> </div>
          <div className="fu-filter-menu__body {#unless accordionOpen}hidden{/unless}">
            <ul className="mdl-list"> {}
              <li className="mdl-list__item-primary-content women-js" id='{alias}'>{}</li>
              {}
            </ul>
          </div>
          <div className="fu-filter-menu__heading {#if accordionOpen}accordionOpen-js{else}accordionClose-js{/if}">
            <h4 className="fu-filter-menu__heading--title">
              Unisex
            </h4> </div>
          <div className="fu-filter-menu__body {#unless accordionOpen}hidden{/unless}">
            <ul className="mdl-list"> {}
              <li className="mdl-list__item-primary-content unisex-js" id='{alias}'>{}</li>
              {}
            </ul>
          </div>
        </div>
      </div>
</div>
</div>

}
    );
  }
}
export default notFound;






import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
)










import React from 'react';
import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
const mql = window.matchMedia(`(min-width: 800px)`);

class test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen (open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               docked={this.state.sidebarDocked}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
};Childcolb.insert({ cat:'parents1',title: 'Hello world', body: 'The world of childhood nutrition and wellness is riddled with conflicting advice. Whether you are considering baby-led weaning or sleep training, there’s several experts on either side of the coin. And yet, amid the chatter, there is growing consensus around one topic: the importance of the first 1,000 days',body2: 'First post'});

export default test;
