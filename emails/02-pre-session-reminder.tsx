import { Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  sessionDay?: string;
  sessionDate?: string;
  sessionTime?: string;
  sessionLink?: string;
}

export default function PreSessionReminder({
  subjectName = 'Nana Rose',
  sessionDay = 'Thursday',
  sessionDate = '22 May 2025',
  sessionTime = '6:00 PM',
  sessionLink = 'https://meet.google.com/xxx-xxxx-xxx',
}: Props) {
  return (
    <ToldLayout preview="A few things that might help.">
      <Section style={global.content}>
        <Text style={global.h1}>
          Your session is on {sessionDay}, {sessionDate} at {sessionTime}.
        </Text>

        <Text style={global.p}>
          We're looking forward to it. A few things that might help between now and then:
        </Text>

        {/* Tip 1 */}
        <Section
          style={{
            borderLeft: `3px solid ${colors.gold}`,
            paddingLeft: '20px',
            margin: '24px 0',
          }}
        >
          <Text style={{ ...global.p, margin: '0' }}>
            It helps to have a few old photographs nearby on the day — not to look at during the
            session necessarily, but having them in the room often brings things to the surface
            that wouldn't otherwise come up.
          </Text>
        </Section>

        {/* Tip 2 */}
        <Section
          style={{
            borderLeft: `3px solid ${colors.gold}`,
            paddingLeft: '20px',
            margin: '24px 0',
          }}
        >
          <Text style={{ ...global.p, margin: '0' }}>
            If there's a story you've always loved hearing {subjectName} tell, or something you've
            always wanted to ask but never quite found the right moment — mention it to Seán before
            the session starts. He'll find a way in.
          </Text>
        </Section>

        {/* Session details box */}
        <Section style={global.summaryBox}>
          <Text style={{ ...global.label, marginBottom: '12px' }}>Session details</Text>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={{ ...global.summaryKey, paddingBottom: '10px', width: '80px', verticalAlign: 'top' } as React.CSSProperties}>
                  Date
                </td>
                <td style={{ ...global.summaryVal, paddingBottom: '10px', verticalAlign: 'top' } as React.CSSProperties}>
                  {sessionDate} at {sessionTime}
                </td>
              </tr>
              <tr>
                <td style={{ ...global.summaryKey, width: '80px', verticalAlign: 'top' } as React.CSSProperties}>
                  Link
                </td>
                <td style={{ ...global.summaryVal, verticalAlign: 'top' } as React.CSSProperties}>
                  <a href={sessionLink} style={{ color: colors.green }}>
                    {sessionLink}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Text style={global.p}>Any questions before the day, just reply here.</Text>

        <Text style={global.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = 'Your session with {{subjectName}} is coming up';
