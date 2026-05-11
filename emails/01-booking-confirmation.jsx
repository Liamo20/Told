import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, s } from './components/ToldLayout';

export default function BookingConfirmation({
  subjectName = 'Nana Rose',
  sessionDate = 'Thursday, 22 May 2025',
  sessionTime = '6:00 PM',
  format = 'Remote',
  pkg = 'Digital',
}) {
  return (
    <ToldLayout preview="Here's what happens next.">
      <Section style={s.content}>
        <Text style={s.h1}>You've just done something really meaningful.</Text>

        <Text style={s.p}>
          Thank you for booking with Told. What you've set in motion today — capturing the
          stories, the voice, the memories — is the kind of thing families carry forward for
          generations.
        </Text>

        <Text style={{ ...s.p, marginBottom: '4px' }}>
          Here's a summary of what you've booked:
        </Text>

        <Section style={s.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              {[
                ['For', subjectName],
                ['Session', `${sessionDate} at ${sessionTime}`],
                ['Format', format],
                ['Package', pkg],
              ].map(([key, val]) => (
                <tr key={key}>
                  <td style={s.summaryKey}>{key}</td>
                  <td style={s.summaryVal}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Text style={s.p}>
          Seán will be in touch within 24 hours to introduce himself and answer any
          questions before the session.
        </Text>

        <Text style={s.p}>
          In the meantime, if anything comes to mind — a topic you'd like covered,
          something you want to make sure gets asked — you can reply directly to this email.
        </Text>
      </Section>
    </ToldLayout>
  );
}
