import { NeuralNetwork } from '../components/neural-network'
import { Typewriter } from '../components/typewriter'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow relative px-4 flex flex-col items-center justify-center fade-in">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm font-medium text-black/70">
          <Typewriter text="Welcome to Fnilvuwu's Portfolio Website" />
        </div>
        <div className="flex flex-col items-center">
          <NeuralNetwork />
        </div>
      </div>
    </main>
  )
}