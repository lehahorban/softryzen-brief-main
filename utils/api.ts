import axios from 'axios';
axios.defaults.baseURL = '';
axios.defaults.params = {};

interface UserPropsBrief {
  services?: object | string;
  discover?: object | string;
  corporateStyle?: object | string;
  projectLaunchDates?: object | string;
  site?: object | string;
  name: object | string;
  email: object | string;
  phone: object | string;
  info?: object | string;
}

export async function sendGoogleTableBrief(user: UserPropsBrief) {
  const res = await fetch('api/google-sheet-service-brief', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
  return res.json();
}

export const sendMessageToTg = async (text: string) => {
  const TG_URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_USER_TELEGRAM_ID}`;

  const response = await axios.post(TG_URL, {
    text,
    parse_mode: 'HTML',
  });
  return response;
};
