import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className='about'>
      <h2 className='about__title'>About</h2>
      <div>
        スライド
      </div>
      <span  className='about__text'>
        こんにちは！<br />
        フリーランスエンジニアをしている松本です。<br />
        ポートフォリオをご覧いただきありがとうございます。<br />
        特にフロントエンドの開発を主に行っており、新規開発からバグ修正まで幅広く対応してきました。<br />
        また、自社で実店舗の経営も行っており、集客やマーケティングに関する知見もあります。<br />
        無料相談も実施しておりますので、ぜひご利用ください。<br />
      </span>
    </div>
  )
  }
export default About;