import { Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  estimatedDelivery?: string;
}

export default function FinalDeliveryPrint({
  subjectName = 'Nana Rose',
  estimatedDelivery = '28 May – 2 June 2025',
}: Props) {
  return (
    <ToldLayout preview="It will be with you shortly.">
      <Section style={global.content}>
        <Text style={global.h1}>The book is at the printers.</Text>

        <Text style={global.p}>
          Your digital copy is already with you — and now the physical edition is being made.
        </Text>

        {/* Delivery detail */}
        <Section style={global.summaryBox}>
          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td
                  style={{
                    ...global.summaryKey,
                    width: '140px',
                    verticalAlign: 'top',
                    paddingBottom: '0',
                  } as React.CSSProperties}
                >
                  Estimated delivery
                </td>
                <td
                  style={{
                    ...global.summaryVal,
                    verticalAlign: 'top',
                  } as React.CSSProperties}
                >
                  {estimatedDelivery}
                </td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Text style={global.p}>
          What arrives will be a hardcover book — cloth-bound, ribbon-marked, made to last.
          Something worth putting on a shelf.
        </Text>

        <Text style={global.p}>We'll send you a note when it dispatches.</Text>

        <Text style={global.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = "{{subjectName}}'s book has gone to print";
