import React from 'react';
import './intro.css';
import Me from '../../img/Me.jpeg'

const Intro = () => {
    return <div className='intro'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is....</h2>
                <h2 className="i-name">Rukaiya Anwar!</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">
                            Web Developer
                        </div>
                        <div className="i-title-item">
                            UI/UX Designer
                        </div>
                        <div className="i-title-item">
                            Content Creator
                        </div>
                        <div className="i-title-item">
                            Blogger
                        </div>
                    </div>
                </div>
                <div className="i-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione neque mollitia at beatae est sunt unde. Repellat dicta, quos dolor, perferendis tempore soluta enim fugiat quibusdam aperiam, commodi consequatur fugit.
                </div>
            </div>
        </div>
        <div className='i-right'>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>;
};

export default Intro;
