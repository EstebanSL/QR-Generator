import QrCode from 'qrcode.react'
import React from 'react'
import './QRPreview.css'

const QRPreview = ({ formInfo, qrRef }) => {

  console.log(formInfo.includeImage)

  return (
    <div className='QRPreview-container'>
      <div className="QRPreview-container__image" style={{ backgroundColor: `${formInfo.qrBackgroundColor}` }} ref={qrRef}>
        {
          formInfo.url
            ?
            formInfo.includeImage
              ?
              <QrCode
                value={formInfo.url}
                level='H'
                renderas='canvas'
                size={250}
                includeMargin={true}
                fgColor={formInfo.qrColor}
                bgColor={formInfo.qrBackgroundColor}
                imageSettings={{
                  src: formInfo.image || '',
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }} />
              :
              <QrCode
                value={formInfo.url}
                level='L'
                renderas='canvas'
                size={250}
                includeMargin={true}
                fgColor={formInfo.qrColor}
                bgColor={formInfo.qrBackgroundColor}
                />
            :
            <QrCode
              value={'https://www.frontendmentor.io/'}
              level='L'
              renderas='canvas'
              size={250}
              includeMargin={true}
              fgColor={formInfo.qrColor}
              bgColor={formInfo.qrBackgroundColor} />
        }
      </div>
      <section className="QRPreview-container__information">
        <h2>
          {!formInfo.url ? 'https://www.frontendmentor.io/' : formInfo.url}
        </h2>
        <p>
          Enter the URL of your site and create your custom Qr Code in a few seconds with a few clicks.
        </p>
      </section>
    </div>
  )
}

export { QRPreview }