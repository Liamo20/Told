const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { buyerName, buyerEmail, subjectName, sessionDate, sessionTime, format, pkg } =
      JSON.parse(event.body || '{}');

    if (!buyerEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'buyerEmail is required' }),
      };
    }

    const html = buildEmail({ buyerName, subjectName, sessionDate, sessionTime, format, pkg });

    const { data, error } = await resend.emails.send({
      from: 'Told <hello@told.ie>',
      to: buyerEmail,
      subject: "You've just done something really meaningful",
      html,
    });

    if (error) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: error.message }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: data.id }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};

function buildEmail({ buyerName, subjectName, sessionDate, sessionTime, format, pkg }) {
  const green  = '#1C2B1C';
  const gold   = '#C49A55';
  const cream  = '#F6F3EE';
  const dark   = '#1A1A18';
  const mid    = '#4A4845';
  const lite   = '#7A776F';
  const border = '#E2DDD6';
  const bg     = '#F4F1EC';
  const serif  = "Georgia, 'Times New Roman', serif";
  const sans   = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const rows = [
    ['For',     subjectName  || '—'],
    ['Session', sessionDate && sessionTime ? `${sessionDate} at ${sessionTime}` : (sessionDate || '—')],
    ['Format',  format || '—'],
    ['Package', pkg    || '—'],
  ];

  const tableRows = rows.map(([key, val]) => `
    <tr>
      <td style="font-family:${sans};font-size:13px;font-weight:500;color:${lite};
                 padding-right:16px;padding-bottom:10px;vertical-align:top;width:120px;">
        ${key}
      </td>
      <td style="font-family:${sans};font-size:13px;color:${dark};
                 padding-bottom:10px;vertical-align:top;">
        ${val}
      </td>
    </tr>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Booking Confirmation — Told</title>
</head>
<body style="margin:0;padding:0;background-color:${bg};font-family:${sans};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${bg};padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
               style="background-color:#ffffff;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Wordmark -->
          <tr>
            <td style="padding:36px 48px 28px;border-bottom:1px solid ${border};">
              <span style="font-family:${serif};font-size:26px;font-weight:600;
                           color:${green};letter-spacing:0.02em;">Told</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">

              <h1 style="font-family:${serif};font-size:28px;font-weight:500;
                         color:${dark};line-height:1.25;margin:0 0 20px;">
                You've just done something really meaningful.
              </h1>

              <p style="font-family:${sans};font-size:15px;color:${mid};
                        line-height:1.7;margin:0 0 16px;">
                Thank you for booking with Told. What you've set in motion today —
                capturing the stories, the voice, the memories — is the kind of thing
                families carry forward for generations.
              </p>

              <p style="font-family:${sans};font-size:15px;color:${mid};
                        line-height:1.7;margin:0 0 8px;">
                Here's a summary of what you've booked:
              </p>

              <!-- Summary box -->
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background-color:${cream};border-radius:4px;
                            padding:24px 28px;margin:16px 0 24px;">
                <tr><td style="padding:24px 28px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${tableRows}
                  </table>
                </td></tr>
              </table>

              <p style="font-family:${sans};font-size:15px;color:${mid};
                        line-height:1.7;margin:0 0 16px;">
                Seán will be in touch within 24 hours to introduce himself and answer
                any questions before the session.
              </p>

              <p style="font-family:${sans};font-size:15px;color:${mid};
                        line-height:1.7;margin:0;">
                In the meantime, if anything comes to mind — a topic you'd like covered,
                something you want to make sure gets asked — you can reply directly to
                this email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid ${border};padding:28px 48px 36px;">
              <p style="font-family:${sans};font-size:12px;color:${lite};
                        line-height:1.6;margin:0 0 4px;">
                Told — Dublin-based.
                <a href="mailto:hello@told.ie" style="color:${lite};">hello@told.ie</a>
              </p>
              <p style="font-family:${sans};font-size:12px;color:${lite};
                        line-height:1.6;margin:0;">
                You received this email because you booked a session with Told.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
