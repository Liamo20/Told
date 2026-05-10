import { Button, Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  buyerName?: string;
  subjectName?: string;
  sessionDate?: string;
  sessionTime?: string;
  format?: string;
  package?: string;
}

export default function BookingConfirmation({
  buyerName = 'Margaret',
  subjectName = 'Nana Rose',
  sessionDate = 'Thursday, 22 May 2025',
  sessionTime = '6:00 PM',
  format = 'Remote',
  package: pkg = 'Digital',
}: Props) {
  return (
    <ToldLayout preview="Here's what happens next.">
      <Section style={global.content}>
        <Text style={global.h1}>You've just done something really meaningful.</Text>

        <Text style={global.p}>
          Thank you for booking with Told. What you've set in motion today — capturing the stories,
          the voice, the memories — is the kind of thing families carry forward for generations.
        </Text>

        <Text style={{ ...global.p, marginBottom: '4px' }}>
          Here's a summary of what you've booked:
        </Text>

        {/* Summary box */}
        <Section style={global.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              {[
                ['For', subjectName],
                ['Session', `${sessionDate} at ${sessionTime}`],
                ['Format', format],
                ['Package', pkg],
              ].map(([key, val]) => (
                <tr key={key}>
                  <td style={{ ...global.summaryKey, paddingBottom: '10px', width: '100px', verticalAlign: 'top' } as React.CSSProperties}>
                    {key}
                  </td>
                  <td style={{ ...global.summaryVal, paddingBottom: '10px', verticalAlign: 'top' } as React.CSSProperties}>
                    {val}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Text style={global.p}>
          Seán will be in touch within 24 hours to introduce himself and answer any questions
          before the session.
        </Text>

        <Text style={global.p}>
          In the meantime, if anything comes to mind — a topic you'd like covered, something you
          want to make sure gets asked — you can reply directly to this email.
        </Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = "You've just done something really meaningful";
