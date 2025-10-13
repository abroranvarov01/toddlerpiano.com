"use client"

import { useState } from "react"

const keys = [
  { color: "bg-primary", note: "C", sound: "🎵" },
  { color: "bg-secondary", note: "D", sound: "🎶" },
  { color: "bg-accent", note: "E", sound: "🎼" },
  { color: "bg-chart-4", note: "F", sound: "🎹" },
  { color: "bg-chart-5", note: "G", sound: "🎺" },
  { color: "bg-primary", note: "A", sound: "🎸" },
  { color: "bg-secondary", note: "B", sound: "🥁" },
]

export function PianoKeys() {
  const [activeKey, setActiveKey] = useState<number | null>(null)

  const playKey = (index: number) => {
    setActiveKey(index)
    setTimeout(() => setActiveKey(null), 300)
  }

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {keys.map((key, index) => (
        <button
          key={index}
          onClick={() => playKey(index)}
          className={`
            ${key.color} 
            w-12 h-32 md:w-16 md:h-40 
            rounded-2xl 
            shadow-lg 
            transition-all 
            duration-200
            hover:scale-110 
            hover:shadow-2xl
            active:scale-95
            ${activeKey === index ? "scale-95 brightness-125" : ""}
            relative
            overflow-hidden
            group
          `}
        >
          <span className="absolute inset-0 flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
            {key.sound}
          </span>
          <span className="absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm">{key.note}</span>
        </button>
      ))}
    </div>
  )
}
