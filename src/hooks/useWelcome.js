import { useEffect } from 'react'

export default function useWelcome() {
  useEffect(()=>{
    console.log('HELLO FROM HOOKS');
  })
  // we can do just this in hook, kinda stupid i guess
  // it is dumb but its working
}
