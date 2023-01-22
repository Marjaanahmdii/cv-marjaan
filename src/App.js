import React from 'react';
import AvatarLogo from './images/coral-avatar.png';
import CoralDevices from './images/coral-devices.svg';
import MacadamianLogo from './images/macadamian.jpeg';
import MCILogo from './images/MCI.jpeg';
import RespinaLogo from './images/respina.jpeg';
import KanoonLogo from './images/kanoon.png';
import WOWLogo from './images/wow.png';
import LinkedIn from './images/linkedIn.svg';
import Github from './images/github.svg';
import Twitter from './images/twitter.svg';
import Gmail from './images/gmail.svg';
import Phone from './images/phone.svg';



import './App.css';

function App() {
  return (
    <div className="App container">
      <header className='header'>
        <div className='left-header'>
          <a href='https://www.linkedin.com/in/marjaan-ahmadi-ai/'><img className='social-icon' alt='LinkedIn' src={LinkedIn}/></a>
          <a href='https://github.com/Marjaanahmdii/'><img className='social-icon' alt='LinkedIn' src={Github}/></a>
          <a href='https://twitter.com/marjaan_ahmdi'><img className='social-icon' alt='LinkedIn' src={Twitter}/></a>
          <a href='mailto:marjaanahmdi.1994@gmail.com'><img className='social-icon' alt='LinkedIn' src={Gmail}/></a>
        </div>
        <div className='right-header'>
          <a style={{textDecoration: 'none'}} href='tel: +37494445685'>+37494445685</a><img alt='phone'  width={20} height={20} src={Phone}/>
        </div>
      </header>
      <div className='content'>
        <div className='intro'>
          <h1 className='intro-header'>
            Senior Frontend, Blockchain Developer
          </h1>
          <h2 className='sub-header'>
            I create and code beautifully simple things, and I love what I do.
          </h2>
          <img className='avatar' alt='avatar' src={AvatarLogo}/> 
        </div>
        <div className='coral-foot'>
          <div className='container'>
            <img className='coral-devices' alt='devices' src={CoralDevices}/>
          </div>
        </div>
        <div className='summary'>
          <div className='container'>
          <h1 className='title'>
            Hi, I’m Marjan. Nice to meet you.
          </h1>
          <h2 className='desc'>
            I'm a Senior Frontend developer with having 6 years experience in developing and mentaining high perfomance Websites, PWAs and Dashboards with millions of users. Last year started to learn Blockchain development to create smart contracts and fell in love with Cryptocurrency.
            I've done remote and on-site work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </h2>
          </div>
        </div>
        <div className='skills'>
          <div className='container'>
            <div className='box'>
              <div className='column'>
                <div className='header'>
                <div className='icon'>
                  <svg class="has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
                  <svg class="has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"></path></svg>
                </div>
                <h1 className='title'>
                  Blockchain Developer
                </h1>
                </div>
                <div className='sub-title'>
                I like to build the financial system of tomorrow using my Blockchain knowledge and Cryptocurrency.
                </div>
                <div className='item-title'>
                  <p>Skills</p>
                </div>
                <div className='skill-set'>
                  <div className='skill-item'>1 Year experience</div>
                  <div className='skill-item'>Solidity & Ethereum</div>
                  <div className='skill-item'>NodeJs</div>
                  <div className='skill-item'>Web3</div>
                  <div className='skill-item'>Smart Contracts</div>
                  <div className='skill-item'>OOPs</div>
                  <div className='skill-item'>Unit Testing(Mocha)</div>
                  <div className='skill-item'>Data Sctructures</div>
                  <div className='skill-item'>Git</div>
                </div>

              </div>
              <div className='column'>
                <div className='header'>
                <div className='icon'>
                  <svg class="has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"></path></svg>
                  <svg class="has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"></path></svg>
                </div>
                <h1 className='title'>
                  Senior Frontend Developer
                </h1>
                </div>
                <div className='sub-title'>
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                </div>
                <div className='item-title'>
                  <p>Skills</p>
                </div>
                <div className='skill-set'>
                  <div className='skill-item'>6 Years experience</div>
                  <div className='skill-item'>React Js</div>
                  <div className='skill-item'>Redux</div>
                  <div className='skill-item'>Next JS</div>
                  <div className='skill-item'>Java Script</div>
                  <div className='skill-item'>Type Script</div>
                  <div className='skill-item'>Material UI</div>
                  <div className='skill-item'>Unit Testing(Jest and Mocha)</div>
                  <div className='skill-item'>Git</div>
                  <div className='skill-item'>HTML</div>
                  <div className='skill-item'>CSS</div>
                  <div className='skill-item'>Sass</div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='companies'>
          <div className='title'>
          I'm proud to have collaborated with some awesome companies:
          </div>
          <div className='list'>
          <div className='item'>
            <img className='logo' src={MacadamianLogo} alt='MacadamianLogo'/>
            <a href='https://www.linkedin.com/company/macadamian'><h3>Macadamian - Armenia/ Canada</h3></a>
          </div>
          <div className='item'>
            <img className='logo' src={MCILogo} alt='MCI'/>
            <a href='https://www.linkedin.com/company/mobile-communication-company-of-iran-mcci-/'><h3>Hamrahe Aval(MCI) - Iran</h3></a>
          </div>
          <div className='item'>
            <img className='logo' src={RespinaLogo} alt='Respina'/>
            <a href='https://www.linkedin.com/company/respina-networks/'><h3>Respina Networks and Beyonds - Iran</h3></a>
          </div>
          <div className='item'>
            <img className='logo' src={KanoonLogo} alt='Kanoon'/>
            <a href='https://www.linkedin.com/company/kanoon-farhangi-amoozesh-ghalamchi/'><h3>Kanoon Farhangi Amoozesh Ghalamchi - Iran</h3></a>
          </div>
          <div className='item'>
            <img className='logo' src={WOWLogo} alt='WoW'/>
            <a href='https://wow.kanoon.ir/'><h3>WoW Startup - Iran</h3></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
