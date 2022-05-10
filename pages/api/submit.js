import {google} from 'googleapis'

export default async function submit(req, res){
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.NEXT_PUBLIC_GOOGLE_DOCS_EMAIL,
            private_key: process.env.NEXT_PUBLIC_GOOGLE_DOCS_PRIVATE_KEY            
        },
          // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [
        'https://www.googleapis.com/auth/drive',
         'https://www.googleapis.com/auth/drive.file',
         'https://www.googleapis.com/auth/spreadsheets'
        ]
      });

      const sheets = google.sheets({
          auth,
          version: 'v4'
      })

      const response = await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_DOCS_SHEET_ID,
          range: 'A1:D1',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
                values: [
                    [req.body.nom, req.body.email, req.body.brunch, req.body.commentaires, req.body.serala, req.body.hotel, req.body.repas]
                ]
          }

      }).catch(function (err) {throw err})

      return res.status(200).json({
          data: response.data
      })
}