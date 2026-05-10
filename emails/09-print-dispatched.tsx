import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  deliveryDays?: string;
  trackingUrl?: string;
}

export default function PrintDispatched({
  subjectName = 'Nana Rose',
  deliveryDays = '3–5 working days',
  trackingUrl,
}: Props) {
  return (
    <ToldLayout preview="It should be with you in the next few days.">
      <Section style={global.content}>
        <Text style={global.h1}>It's on its way.</Text>

        <Text style={global.p}>
          {subjectName}'s book has been dispatched and should arrive within {deliveryDays}.
        </Text>

        {/* Tracking link — only shown if provided */}
        {trackingUrl && (
          <Section style={global.summaryBox}>
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td
                    style={{
                      ...global.summaryKey,
                      width: '80px',
                      verticalAlign: 'top',
                    } as React.CSSProperties}
                  >
                    Tracking
                  </td>
                  <td
                    style={{
                      ...global.summaryVal,
                      verticalAlign: 'top',
                    } as React.CSSProperties}
                  >
                    <a href={trackingUrl} style={{ color: colors.green }}>
                      Track your order
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        )}

        <Text style={global.p}>
          We hope it arrives safely and finds exactly the right place in your home.
        </Text>

        <Text style={global.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = "{{subjectName}}'s book is on its way";
