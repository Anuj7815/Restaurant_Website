import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef } alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className='headtext__cormorant' style={{letterSpacing:"0.02rem"}}>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis aperiam numquam obcaecati nam, autem maxime minus omnis recusandae distinctio corrupti culpa nihil esse quam labore blanditiis. Debitis, voluptate nihil!</p>
        </div>
        {/* <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est molestiae magnam, corrupti ab saepe obcaecati architecto cumque quo perspiciatis rerum esse quae voluptate, deserunt repudiandae molestias! Necessitatibus, assumenda delectus.</p> */}
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
