import { Button, Hr, Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  downloadUrl?: string;
}

export default function FinalDeliveryDigital({
  subjectName = 'Nana Rose',
  downloadUrl = 'https://told.ie',
}: Props) {
  return (
    <ToldLayout preview="It's ready to keep forever.">
      <Section style={global.content}>
        <Text style={global.h1}>It's done.</Text>

        <Text style={global.p}>
          {subjectName}'s story — written, edited, and designed — is ready for you.
        </Text>

        {/* Download button */}
        <Section style={{ margin: '28px 0' }}>
          <Button href={downloadUrl} style={global.button}>
            Download your book
          </Button>
        </Section>

        <Text style={global.p}>
          This is yours to keep, share, and return to whenever you need it. The file is a
          high-resolution PDF — it will print beautifully if you ever want a physical copy made
          in the future.
        </Text>

        <Text style={global.p}>
          It has been a privilege to spend time with {subjectName}'s stories. Thank you for
          bringing us into this.
        </Text>

        <Text style={global.sig}>— Told</Text>

        <Hr style={{ ...global.divider, margin: '32px 0 24px' }} />

        {/* Referral nudge */}
        <Section
          style={{
            backgroundColor: colors.cream,
            borderRadius: '4px',
            padding: '20px 24px',
          }}
        >
          <Text
            style={{
              ...global.p,
              fontSize: '13px',
              color: colors.lite,
              margin: '0',
            }}
          >
            Loved the experience? We'd be grateful if you shared Told with someone else who
            might need it.{' '}
            <a href="https://told.ie" style={{ color: colors.green }}>
              told.ie
            </a>
          </Text>
        </Section>
      </Section>
    </ToldLayout>
  );
}

export const subject = "{{subjectName}}'s book is finished";
