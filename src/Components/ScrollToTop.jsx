import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: 'green',
                        color: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '10px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <ArrowUpwardIcon />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
