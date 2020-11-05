import React from 'react'
import { Trans } from '@lingui/macro';

const Welcome = ({ user }) => {
  const { name } = user
  const date = new Date().toString() // Date will not be translated, you can use more advanced techniques to do so
   return (
     <div>
       <h1><Trans>welcome</Trans> {name}</h1>
       <p><Trans>today</Trans> {date}</p>
       <footer><Trans>thatsAll</Trans></footer>
      </div>
   )
}

export default Welcome;