import React, { Component } from 'react';
import './inputkeys.css';

export class Inputkeys extends Component {
  render() {
    return (
      <div name='calc' className='container'>
        <h1>Calculator</h1>
        <input
          placeholder='Enter your expression'
          className='input-area'
          id='text'
          name='txt'
          readOnly=''
          onChange={this.handleChange}
        ></input>
        <div id='answer' className='solution'></div>
        <form className='wrapper'>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '1';
            }}
          >
            1
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '2';
            }}
          >
            2
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '3';
            }}
          >
            3
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += '+';
            }}
          >
            +
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '4';
            }}
          >
            4
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '5';
            }}
          >
            5
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '6';
            }}
          >
            6
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += '-';
            }}
          >
            -
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '7';
            }}
          >
            7
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '8';
            }}
          >
            8
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value += '9';
            }}
          >
            9
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += '*';
            }}
          >
            x
          </div>
          <div
            className='btn'
            onClick={() => {
              let str = document.getElementById('text').value;
              document.getElementById('text').value = str.slice(
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
              let str = document.getElementById('text').value;
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
                document.getElementById('text').value += '0';
              }
            }}
          >
            0
          </div>
          <div
            className='btn'
            onClick={() => {
              document.getElementById('text').value = '';
              document.getElementById('answer').innerText = '';
            }}
          >
            clear
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += '/';
            }}
          >
            /
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += '(';
            }}
          >
            (
          </div>
          <div
            className='btn operator'
            onClick={() => {
              document.getElementById('text').value += ')';
            }}
          >
            )
          </div>
          <div
            className='btn answer_key'
            onClick={() => {
              try {
                var calculatedAns = eval(document.getElementById('text').value);
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
              document.getElementById('text').value += '%';
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
