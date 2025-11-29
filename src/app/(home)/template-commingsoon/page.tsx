// import React from 'react'

const Template = () => {
  return (
    <div className="h-[100dvh] bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold tracking-tight mb-3">Coming Soon</h1>

      <p className="text-white/60 mb-8 text-center px-4">
        This page is being crafted with care.
      </p>

      <a
        href="/"
        className="px-6 py-3 border border-white/20 rounded-full text-white font-medium
               hover:bg-white/10 transition-all backdrop-blur-sm"
      >
        Take Me Home
      </a>
    </div>

  )
}

export default Template