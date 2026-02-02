import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
    text: string;
    onCycleComplete?: () => void;
}

export function Typewriter({ text, onCycleComplete }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)
    const onCycleCompleteRef = useRef(onCycleComplete)

    // Keep ref updated
    useEffect(() => {
        onCycleCompleteRef.current = onCycleComplete
    }, [onCycleComplete])

    useEffect(() => {
        const fullText = text

        const handleType = () => {
            if (!isDeleting) {
                // Typing forward
                if (charIndex < fullText.length) {
                    setDisplayedText(fullText.substring(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                } else {
                    // Pause before deleting
                    const pauseTimer = setTimeout(() => {
                        setIsDeleting(true)
                    }, 4000)
                    return () => clearTimeout(pauseTimer)
                }
            } else {
                // Deleting backward
                if (charIndex > 0) {
                    setDisplayedText(fullText.substring(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                } else {
                    // Reset for next cycle
                    setIsDeleting(false)
                    if (onCycleCompleteRef.current) {
                        onCycleCompleteRef.current()
                    }
                }
            }
        }

        const typingSpeed = isDeleting ? 30 : 120
        const timer = setTimeout(handleType, typingSpeed)

        return () => clearTimeout(timer)
    }, [charIndex, isDeleting, text])

    return (
        <span className="typewriter">
            {displayedText}
            <span className="cursor">|</span>
        </span>
    )
}
