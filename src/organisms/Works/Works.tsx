import React from 'react';
import './Works.scss';
import logo from './../../logo.svg';

const Works: React.FC = () => {
  return (
    <div className='works'>
      <h2 className='works__title'>Works</h2>
      <div className='works__list'>
        <a className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>某大手サイトの管理システム</p>
        </a>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>ダイナモBスタジオ オープン</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>人材紹介マッチングサイト</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>骨格解析システム 開発</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>ショッピングサイト 開発</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>IOTシステム 開発</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>ショッピングサイト 開発</p>
        </div>
        <div className='works__list__box'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>不動産向けシステム 開発</p>
        </div>
      </div>
    </div>
  )
  }
export default Works;