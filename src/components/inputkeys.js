import React, { Component } from 'react';
import './inputkeys.css';

export class Inputkeys extends Component {
  render() {
    return (
      <div name='calc' className='container'>
        <h1>Calculator</h1>
        <div
          placeholder='Enter your expression'
          className='input-area'
          id='text'
          onChange={this.handleChange}
        ></div>
        <div id='answer' className='solution'></div>
        <form className='wrapper'>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '1';
            }}
          >
            1
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '2';
            }}
          >
            2
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '3';
            }}
          >
            3
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '+';
            }}
          >
            +
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '4';
            }}
          >
            4
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '5';
            }}
          >
            5
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '6';
            }}
          >
            6
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '-';
            }}
          >
            -
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '7';
            }}
          >
            7
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '8';
            }}
          >
            8
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').innerText += '9';
            }}
          >
            9
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '*';
            }}
          >
            x
          </div>
          <div
            className='btn back'
            onClick={() => {
              let str = document.getElementById('text').innerText;
              document.getElementById('text').innerText = str.slice(
                0,
                str.length - 1
              );
            }}
          >
            back
          </div>
          <div
            className='btn'
            onClick={() => {
              let str = document.getElementById('text').innerText;
              let preStr = str[str.length - 1];
              if (
                str.length != 0 &&
                preStr != '+' &&
                preStr != '-' &&
                preStr != '*' &&
                preStr != '/' &&
                preStr != '%' &&
                preStr != '(' &&
                preStr != ')'
              ) {
                document.getElementById('text').innerText += '0';
              }
            }}
          >
            0
          </div>
          <div
            className='btn clear'
            onClick={() => {
              document.getElementById('text').innerText = '';
              document.getElementById('answer').innerText = '';
            }}
          >
            clear
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '/';
            }}
          >
            /
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '(';
            }}
          >
            (
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += ')';
            }}
          >
            )
          </div>
          <div
            className='btn answer_key'
            onClick={() => {
              try {
                var calculatedAns = eval(
                  document.getElementById('text').innerText
                );
                console.log(calculatedAns);
                document.getElementById('answer').innerHTML = calculatedAns;
              } catch (err) {
                document.getElementById('answer').innerHTML =
                  'Enter correct expression';
              }
            }}
          >
            =
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').innerText += '%';
            }}
          >
            %
          </div>
        </form>
      </div>
    );
  }
}

export default Inputkeys;
