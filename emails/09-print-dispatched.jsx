import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, s } from './components/ToldLayout';

export default function PrintDispatched({
  subjectName = 'Nana Rose',
  deliveryDays = '3–5 working days',
  trackingUrl = null,
}) {
  return (
    <ToldLayout preview="It should be with you in the next few days.">
      <Section style={s.content}>
        <Text style={s.h1}>It's on its way.</Text>

        <Text style={s.p}>
          {subjectName}'s book has been dispatched and should arrive within {deliveryDays}.
        </Text>

        {trackingUrl && (
          <Section style={s.summaryBox}>
            <table width="100%" cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td style={{ ...s.summaryKey, paddingBottom: '0' }}>Tracking</td>
                  <td style={{ ...s.summaryVal, paddingBottom: '0' }}>
                    <a href={trackingUrl} style={{ color: colors.green }}>Track your order</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        )}

        <Text style={s.p}>
          We hope it arrives safely and finds exactly the right place in your home.
        </Text>

        <Text style={s.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}
