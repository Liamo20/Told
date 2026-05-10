import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  sessionTime?: string;
  sessionLink?: string;
}

export default function DayBeforeReminder({
  subjectName = 'Nana Rose',
  sessionTime = '6:00 PM',
  sessionLink = 'https://meet.google.com/xxx-xxxx-xxx',
}: Props) {
  return (
    <ToldLayout preview="Something worth asking them tonight.">
      <Section style={global.content}>
        <Text style={global.h1}>
          Your session with {subjectName} is tomorrow at {sessionTime}.
        </Text>

        {/* Session link/address */}
        <Section style={global.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={{ ...global.summaryKey, width: '60px', verticalAlign: 'top' } as React.CSSProperties}>
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

        {/* Closing thought */}
        <Section
          style={{
            borderLeft: `3px solid ${colors.gold}`,
            paddingLeft: '20px',
            margin: '28px 0',
          }}
        >
          <Text style={{ ...global.p, margin: '0' }}>
            One thing worth trying tonight if the moment is right — ask them if there's a story
            they've never told anyone. You might be surprised what it unlocks.
          </Text>
        </Section>

        <Text style={global.p}>Seán will handle everything from there.</Text>

        <Text style={global.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = 'Your session is tomorrow — one last thought';
