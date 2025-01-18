import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Snowfall from 'react-snowfall'

const snowflake1 = document.createElement('img')
snowflake1.src = '/cherry-blossom.png'

const snowflake2 = document.createElement('img')
snowflake2.src = '/cherry-blossom2.png'

const images = [snowflake1, snowflake2]

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
      <Snowfall style={{position: "absolute",top: 0,left: 0,width: "100%",height: "100%",}} snowflakeCount={100} color='#EDDFE0' images={images} radius={[3,20]} />
  </StrictMode>
)
