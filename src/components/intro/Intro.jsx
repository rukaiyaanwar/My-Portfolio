import React from 'react';
import './intro.css';

const Intro = () => {
    return <div className='intro'>
        <div className='i-left'>
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is....</h2>
                <h2 className="i-name">Rukaiya!</h2>
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
                            Photographer
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='i-right'>Right</div>
    </div>;
};

export default Intro;
