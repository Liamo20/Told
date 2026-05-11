import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, s } from './components/ToldLayout';

export default function DayBeforeReminder({
  subjectName = 'Nana Rose',
  sessionTime = '6:00 PM',
  sessionLink = 'https://meet.google.com/xxx-xxxx-xxx',
}) {
  return (
    <ToldLayout preview="Something worth asking them tonight.">
      <Section style={s.content}>
        <Text style={s.h1}>
          Your session with {subjectName} is tomorrow at {sessionTime}.
        </Text>

        <Section style={s.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={{ ...s.summaryKey, paddingBottom: '0' }}>Link</td>
                <td style={{ ...s.summaryVal, paddingBottom: '0' }}>
                  <a href={sessionLink} style={{ color: colors.green }}>{sessionLink}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section style={s.callout}>
          <Text style={{ ...s.p, margin: '0' }}>
            One thing worth trying tonight if the moment is right — ask them if there's a
            story they've never told anyone. You might be surprised what it unlocks.
          </Text>
        </Section>

        <Text style={s.p}>Seán will handle everything from there.</Text>
        <Text style={s.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}
