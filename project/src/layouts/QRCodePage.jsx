import React, { useRef, useState } from 'react'
import {QRCodeSVG} from 'qrcode.react';
import { QRForm } from '../components/QRForm/QRForm'
import { QRPreview } from '../components/QRPreview/QRPreview'
import './QRCodePage.css'

const QRCodePage = () => {

  const [formInfo, setFormInfo] = useState({
    url: '',
    qrColor: '#ffffff',
    qrBackgroundColor: '#000000',
    includeImage: false,
    image: ''
  })

  const qrRef = useRef();

  return (
    <div className='QRCodePage'>
      <QRForm formInfo={formInfo} setFormInfo={setFormInfo} qrRef={qrRef}/>
      <QRPreview formInfo={formInfo} qrRef={qrRef}/>
    </div>
  )
}

export { QRCodePage }