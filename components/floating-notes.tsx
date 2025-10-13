"use client"

export function FloatingNotes() {
  const notes = ["🎵", "🎶", "🎼", "🎹", "🎸", "🥁", "🎺", "🎻"]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {notes.map((note, index) => (
        <div
          key={index}
          className="absolute text-4xl md:text-6xl opacity-5 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {note}
        </div>
      ))}
    </div>
  )
}
