import { useState } from 'react';
import { NeuralNetwork } from '../components/neural-network';
import { Typewriter } from '../components/typewriter';

export default function Home() {
    const messages = [
        "Welcome to Fnilvuwu's Portfolio Website",
        "Scroll down to explore!"
    ];
    const [currentIdx, setCurrentIdx] = useState(0);

    return (
        <div className="min-h-screen bg-white flex flex-col w-full relative overflow-hidden">
            <div className="flex-grow relative px-4 flex flex-col items-center justify-center">
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium text-black/70 z-20">
                    {/* Alternate between two typewriter texts */}
                    <Typewriter
                        text={messages[currentIdx]}
                        onCycleComplete={() => setCurrentIdx((idx: number) => (idx + 1) % messages.length)}
                    />
                </div>
                <div className="flex flex-col items-center max-w-6xl z-10">
                    <NeuralNetwork />
                </div>
            </div>
        </div>
    )
}
