import LanguageConfig from './lang.json'
import React from 'react'

function I8n(key,placeholder,value) {
  const lang=localStorage.getItem('lang'||"en")
  const text= LanguageConfig[lang][key]
  if(placeholder&&value){
    return text.replace(placeholder,value)
  }
  return text
}

export default I8n
