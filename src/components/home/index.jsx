import React, { Component } from 'react';
import Hexagon from './hexagon';
import './style.scss';

export default class Slider extends Component {
  state = {
    y: 0, 
    active: 2,
  };

  onWheel = e => {
    const delta = (e.deltaY || e.detail || e.wheelDelta) > 0 ? -1 : 1;
    const newActive = this.state.active - delta;

    if (newActive >= 0 && newActive < info.length) {
      this.setState({ 
        y: this.state.y + 100 * delta,
        active: newActive, 
      });
    }
  };

  onClick = id => {
    this.setState({ 
      y: this.state.y + 100 * (this.state.active - id),
      active: id,
    });
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel)
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onWheel);
  }
  
  render () {
    return (
      <>
        <div className="competitors-wrapper">
          <Competitors data={info[this.state.active].vs} />
        </div>
        <div className="slider">
          {info.map((item, idx) => (
            <Hexagon
              idx={idx}
              data={item}
              y={this.state.y}
              active={Math.abs(idx - this.state.active)}
              onClickItem={this.onClick} 
            />
          ))}
        </div>
      </>
    );
  }
}

const Competitors = ({ data }) => data.map(comp => (
  <div className="parallelogram">
    <span>{comp}</span>
  </div>
)
);

const info = [
  {
    date: '30 сентября',
    time: '21:00',
    place: 'Арена',
    vs: ['Соперник № 3', 'Соперник № 4'],
  },
  {
    date: '16 июля',
    time: '20:00',
    place: 'CityHall',
    vs: ['Соперник № 5', 'Соперник № 6'],
  },
  {
    date: '26 июня',
    time: '19:00',
    place: 'Стадион',
    vs: ['Соперник № 1', 'Соперник № 2'],
  },
  {
    date: '17 июня',
    time: '18:00',
    place: 'ConcertHall',
    vs: ['Соперник № 7', 'Соперник № 8'],
  },
  {
    date: '30 мая',
    time: '17:00',
    place: 'Городской парк',
    vs: ['Соперник № 9', 'Соперник № 10'],
  },
];