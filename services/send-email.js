// import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({
  name,
  email,
  message,
}) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'morrowsus@gmail.com',
            },
          ],
          subject: `👻 SusanMorrow.us Inquiry: ${name}`,
        },
      ],
      from: {
        email: 'susan@susanmorrow.us',
        name: `Susan Morrow`,
      },
      replyTo: {
        email,
        name
      },
      content: [
        {
          type: 'text/html',
          value: `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`,
        },
      ],
    }),
  });
};

export default sendEmail;
