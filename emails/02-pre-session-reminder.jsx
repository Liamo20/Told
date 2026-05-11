import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, s } from './components/ToldLayout';

export default function PreSessionReminder({
  subjectName = 'Nana Rose',
  sessionDay = 'Thursday',
  sessionDate = '22 May 2025',
  sessionTime = '6:00 PM',
  sessionLink = 'https://meet.google.com/xxx-xxxx-xxx',
}) {
  return (
    <ToldLayout preview="A few things that might help.">
      <Section style={s.content}>
        <Text style={s.h1}>
          Your session is on {sessionDay}, {sessionDate} at {sessionTime}.
        </Text>

        <Text style={s.p}>
          We're looking forward to it. A few things that might help between now and then:
        </Text>

        <Section style={s.callout}>
          <Text style={{ ...s.p, margin: '0' }}>
            It helps to have a few old photographs nearby on the day — not to look at
            during the session necessarily, but having them in the room often brings things
            to the surface that wouldn't otherwise come up.
          </Text>
        </Section>

        <Section style={s.callout}>
          <Text style={{ ...s.p, margin: '0' }}>
            If there's a story you've always loved hearing {subjectName} tell, or something
            you've always wanted to ask but never quite found the right moment — mention it
            to Seán before the session starts. He'll find a way in.
          </Text>
        </Section>

        <Section style={s.summaryBox}>
          <Text style={s.label}>Session details</Text>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={s.summaryKey}>Date</td>
                <td style={s.summaryVal}>{sessionDate} at {sessionTime}</td>
              </tr>
              <tr>
                <td style={{ ...s.summaryKey, paddingBottom: '0' }}>Link</td>
                <td style={{ ...s.summaryVal, paddingBottom: '0' }}>
                  <a href={sessionLink} style={{ color: colors.green }}>{sessionLink}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Text style={s.p}>Any questions before the day, just reply here.</Text>
        <Text style={s.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}
