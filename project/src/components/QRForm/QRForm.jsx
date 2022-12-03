import React from 'react'
import './QRForm.css'

const QRForm = ({ formInfo, setFormInfo, qrRef }) => {

  const handleChange = (type, event) => {
    switch (type) {
      case 'url':
        setFormInfo({
          ...formInfo,
          url: event.target.value
        })

        break;
      case 'qrColor':
        setFormInfo({
          ...formInfo,
          qrColor: event.target.value
        })

        break;
      case 'qrBackgroundColor':
        setFormInfo({
          ...formInfo,
          qrBackgroundColor: event.target.value
        })

        break;

      case 'includeImage':
        setFormInfo({
          ...formInfo,
          includeImage: !formInfo.includeImage
        })

        break;
      default:
        break;
    }
  }

  const handleImage = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormInfo({
          ...formInfo,
          image: reader.result
        })
      }
    }
  }

  const downloadQRCode = e => {
    e.preventDefault();

    const qrCanvas = qrRef.current.querySelector('canvas')
    let qrImage = qrCanvas.toDataURL("image/png")
    let qrAnchor = document.createElement('a')
    qrAnchor.href = qrImage;
    qrAnchor.download = '_Your-QRCode.png';
    document.body.appendChild(qrAnchor);
    qrAnchor.click();
    document.body.removeChild(qrAnchor);
  }


  return (
    <form className="QRForm__container">

      <div className="QRForm__container--item">
        <label htmlFor="QRCode__url" className="QRForm__container--item__label">Enter your URL</label>
        <input
          type="text"
          placeholder='Add your url code to QR'
          value={formInfo.url}
          id="QRCode__url"
          className="QRForm__container--item__input"
          onChange={(e) => handleChange('url', e)} />
      </div>

      <div className="QRForm__container--item">
        <label htmlFor="QRCode__url">QR color</label>
        <input
          type="color"
          placeholder='Add your url code to QR'
          value={formInfo.qrColor}
          id="QRCode__color"
          className="QRForm__container--item__input--color"
          onChange={(e) => handleChange('qrColor', e)} />
      </div>

      <div className='QRForm__container--item'>
        <label htmlFor="QRCode__color">Background color</label>
        <input
          type="color"
          placeholder='Add your url code to QR'
          value={formInfo.qrBackgroundColor}
          className="QRForm__container--item__input--color"
          onChange={(e) => handleChange('qrBackgroundColor', e)} />
      </div>

      <div className='QRForm__container--item'>
        <label htmlFor="QRCode__color">Custom image</label>
        <input
          type="file"
          placeholder='Add image to QR Code'
          className="QRForm__container--item__inputZ"
          onChange={(e) => handleImage(e)} />
      </div>

      <button onClick={downloadQRCode} className="QRForm__container--button">Download</button>

      <div className='QRForm__container--item__check'>
        <input
          type="checkbox"
          value={formInfo.includeImage}
          onChange={() => handleChange('includeImage')} />
        <label htmlFor="QRCode__color">Include image</label>
      </div>

    </form>
  )
}

export { QRForm }