import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import './styles.css'

export function Page() {
  return (
    <>
      <h1>Typescript Course</h1>
      <LiteYouTubeEmbed
        id="gieEQFIfgYc"
        title="TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
"
      />
    </>
  )
}
