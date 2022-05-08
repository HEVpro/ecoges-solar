// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

require('dotenv').config()
const sgMail = require('@sendgrid/mail')


type Data = {
    name: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    const msg = {
        to: process.env.NEXT_PUBLIC_MAIL_TO,
        from: process.env.NEXT_PUBLIC_USERMAIL,
        subject: `Contacto de la página web de ${req.body.fullName}`,
        text: req.body.message,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
     
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />     
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                  <div style="font-size: 16px;">
                  <p style="font-weight: bold; font-size: x-large">De:</p>
                  <p>${req.body.fullName}</p>
                  <p style="font-weight: bold; font-size: x-large">Email:</p>
                  <p>${req.body.email}</p>
                  <p style="font-weight: bold; font-size: x-large">Teléfono:</p>
                  <p>${req.body.phone}</p>
                  <p style="font-weight: bold; font-size: x-large">Message:</p>
                  <p>${req.body.message}</p>
                  <p style="font-weight: bold; font-size: x-large">Política de privacidad:</p>
                  <p>${req.body.privacy}</p>
                  <br>
                  </div>
              </div>
      </body>
      </html>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            return res.status(200).end()
        })
        .catch((error: any) => {
            console.error(error)
            return res.status(400).end()
        })

}

