import React, { useEffect, useState } from 'react';

const TypingEffect: React.FC<{ text: string; speed: number }> = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let index = 0;
        let timeout: NodeJS.Timeout | undefined;

        const type = () => {
            if (deleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                index--;
                if (index < 0) {
                    setDeleting(false);
                    index = 0;
                    timeout = setTimeout(type, speed * 3); // Pause before typing again
                } else {
                    timeout = setTimeout(type, speed);
                }
            } else {
                if (index < text.length) {
                    setDisplayText((prev) => prev + text[index]);
                    index++;
                    timeout = setTimeout(type, speed);
                } else {
                    setDeleting(true);
                    timeout = setTimeout(type, speed * 2); // Pause after completing text
                }
            }
        };

        type();

        return () => clearTimeout(timeout); // Clean up on unmount
    }, [text, speed, deleting]);

    return (
        <div className="text-2xl font-bold text-center mt-10">
            {displayText}
        </div>
    );
};

export default TypingEffect;
