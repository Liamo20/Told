import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, s } from './components/ToldLayout';

export default function FinalDeliveryPrint({
  subjectName = 'Nana Rose',
  estimatedDelivery = '28 May – 2 June 2025',
}) {
  return (
    <ToldLayout preview="It will be with you shortly.">
      <Section style={s.content}>
        <Text style={s.h1}>The book is at the printers.</Text>

        <Text style={s.p}>
          Your digital copy is already with you — and now the physical edition is being made.
        </Text>

        <Section style={s.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={{ ...s.summaryKey, paddingBottom: '0' }}>Estimated delivery</td>
                <td style={{ ...s.summaryVal, paddingBottom: '0' }}>{estimatedDelivery}</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Text style={s.p}>
          What arrives will be a hardcover book — cloth-bound, ribbon-marked, made to last.
          Something worth putting on a shelf.
        </Text>

        <Text style={s.p}>We'll send you a note when it dispatches.</Text>
        <Text style={s.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}
