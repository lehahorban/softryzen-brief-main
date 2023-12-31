import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const body = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '/n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: '!A1:J1',
      valueInputOption: 'USER_ENTERED',

      requestBody: {
        values: [
          [
            body.name,
            body.phone,
            body.email,
            body.telegram,
            body.site,
            body.info,
            body.services,
            body.corporateStyle,
            body.discover,
            body.createdAt,
          ],
        ],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (error) {
    return res.status(500).send({ message: 'Something went wrong' });
  }
}
