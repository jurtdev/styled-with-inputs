import React, { Component } from 'react';
import { COLORS } from '../constants/constants';
import styled from 'styled-components';
import './photo.css';

const Title = styled.h1`
  color: ${COLORS.text};
  font-size: 70px;
  font-weight: 100;
`;

const Image = styled.img`
  padding: ${(props) => `${props.spacing}px`};
  background: ${(props) => props.color};
  filter: blur(${(props) => `${props.blurring}px`});
  margin-bottom: 40px;
`;

export default class Photo extends Component {
  constructor(props) {
    super(props);

    this.handleSpacingChange = this.handleSpacingChange.bind(this);
    this.handleBlurChange = this.handleBlurChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);

    this.state = { spacing: '10', blur: '3', color: '#ffc600' };
  }

  handleSpacingChange(e) {
    this.setState({ spacing: `${e.target.value}` });
  }

  handleBlurChange(e) {
    this.setState({ blur: `${e.target.value}` });
  }

  handleColorChange(e) {
    this.setState({ color: `${e.target.value}` });
  }

  render() {
    return (
      <div>
        <Title>
          Update photo using{' '}
          <span style={{ color: `${this.state.color}` }}>REACT JS</span>
        </Title>

        <div className='controls'>
          <label>Spacing:</label>{' '}
          <input
            id='spacing'
            type='range'
            name='spacing'
            min='10'
            max='200'
            value={this.state.spacing}
            onChange={this.handleSpacingChange}
          />
          {'  '}
          <label>Blur:</label>{' '}
          <input
            id='blur'
            type='range'
            name='blur'
            min='0'
            max='25'
            value={this.state.blur}
            onChange={this.handleBlurChange}
          />{' '}
          <label>Base Color</label>{' '}
          <input
            id='base'
            type='color'
            name='base'
            value={this.state.color}
            onChange={this.handleColorChange}
          />
        </div>

        <Image
          spacing={this.state.spacing}
          blurring={this.state.blur}
          color={this.state.color}
          src='https://source.unsplash.com/7bwQXzbF6KE/800x500'
        />
      </div>
    );
  }
}
