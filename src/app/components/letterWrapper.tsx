import React from 'react';

interface LetterWrapperProps {
    title: string;
    spaceClassName?: string;
}

export const letterWrapper: React.FC<LetterWrapperProps> = ({ title, spaceClassName }) => {
    return (
        <>
            {title.split('').map((char, index, arr) => {
                if (char !== ' ') {
                    const previousChar = arr[index - 1];
                    const spanClass = previousChar === ' ' ? spaceClassName : '';
                    return (
                        <span key={index} className={spanClass || undefined}>
                            {char}
                        </span>
                    );
                }
                return null;
            })}
        </>
    );
};