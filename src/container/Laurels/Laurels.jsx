import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';


// const AwardCard = ({award: {imgUrl,title,subtitle}}) => {
//   <div className="app__laurels_awards-card">
//     <img src={imgUrl} alt="award" />
//     <div className="app__laurels_awards-cards_content">
//       <p className='p__cormorant' style={{ color: '#DCCa87' }}>{title}</p>
//       <p className='p__cormorant' >{subtitle}</p>
//     </div>

//   </div>
// }
const Laurels = () => {
  return (
    <>
      <div className="app__bg app__wrapper section__padding" id='awards'>
        <div className="app__wrapper_info">
          <SubHeading title="Awards & Recognition" />
          <h1 className='headtext__cormorant'>Our Laurels</h1>
          <div className="app__laurels_awards">
            {/* {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)} */}

            <div className="app__laurels_awards-card">
              <img src={images.award02} alt="" />
            
              <p className='p__opensans'>Bib Gourmond</p>
            </div>

            <div className="app__laurels_awards-card">
              <img src={images.award01} alt="" />
              <p className='p__opensans'>Rising Star</p>
            </div>
            <div className="app__laurels_awards-card">
              <img src={images.award05} alt="" />
              <p className='p__opensans'>AA Hospitality</p>
            </div>
            <div className="app__laurels_awards-card">
              <img src={images.award03} alt="" />
              <p className='p__opensans'>Outstanding Chef</p>
            </div>
          </div>
        </div>

        <div className="app__wrapper_img">
          <img src={images.laurels} alt="laurels" />
        </div>
      </div>
    </>
  );
}

export default Laurels;
