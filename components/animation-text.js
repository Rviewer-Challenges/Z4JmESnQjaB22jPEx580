import React from 'react';

/* eslint-disable react/no-unknown-property */
export const AnimationText = ({
    text,
    textSize = 'text-9xl',
    bold = 'font-extrabold '
}) => {
    return (
        <div className="grid h-full place-content-center mb-5">
            <h1 className={textSize + ' ' + bold + ' tracking-tight m-0'}>
                {text.split('').map((k, index) =>
                    k === '\n' ? (
                        <br key={index} />
                    ) : k === ' ' ? (
                        <React.Fragment key={index}>&nbsp;</React.Fragment>
                    ) : (
                        <React.Fragment key={index}>
                            <span
                                className="inline-block m-0 bounceIn"
                                // eslint-disable-next-line react/no-unknown-property

                                // eslint-disable-next-line react/no-unknown-property
                                onMouseEnter={(e) => {
                                    e.currentTarget.classList.add('rubberBand');
                                }}
                                onAnimationEnd={(e) => {
                                    e.currentTarget.style.opacity = 1;

                                    e.currentTarget.classList.remove(
                                        'rubberBand'
                                    );
                                    e.currentTarget.classList.remove(
                                        'bounceIn'
                                    );
                                }}
                            >
                                {k}
                            </span>
                            <style jsx>{`
                                .bounceIn {
                                    opacity: 0;
                                    animation-name: bounceIn;
                                    animation-duration: 0.75s;
                                    animation-delay: ${index * 0.1}s;
                                }
                            `}</style>
                        </React.Fragment>
                    )
                )}
            </h1>
        </div>
    );
};
