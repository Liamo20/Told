import { Button, Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, colors, global } from './_components/ToldLayout';

interface Props {
  subjectName?: string;
  chapterCount?: number;
  openingDescription?: string;
  closingDescription?: string;
  openingStory?: string;
  movingTopic?: string;
  turnaroundDays?: number;
  draftUrl?: string;
}

export default function DraftDelivery({
  subjectName = 'Nana Rose',
  chapterCount = 5,
  openingDescription = 'her childhood in Roscommon',
  closingDescription = 'what she wants the family to carry forward',
  openingStory = 'the summer she spent working in London',
  movingTopic = 'her relationship with her own mother',
  turnaroundDays = 3,
  draftUrl = 'https://told.ie',
}: Props) {
  return (
    <ToldLayout preview="A note from Seán on how it came together.">
      <Section style={global.content}>
        <Text style={global.h1}>The first draft is ready.</Text>

        {/* CTA button */}
        <Section style={{ margin: '28px 0' }}>
          <Button href={draftUrl} style={global.button}>
            View draft
          </Button>
        </Section>

        <Text style={{ ...global.p, marginBottom: '4px' }}>Before you read it, a note from Seán:</Text>

        {/* Seán's note */}
        <Section
          style={{
            backgroundColor: colors.cream,
            borderRadius: '4px',
            padding: '28px 32px',
            margin: '16px 0 28px',
          }}
        >
          <Text
            style={{
              ...global.p,
              fontStyle: 'italic',
              color: colors.dark,
              margin: '0 0 14px',
            }}
          >
            I've structured {subjectName}'s story in {chapterCount} chapters, beginning with{' '}
            {openingDescription} and moving through to {closingDescription}. I chose to open with{' '}
            {openingStory} because it felt like the moment that set everything else in motion.
          </Text>
          <Text
            style={{
              ...global.p,
              fontStyle: 'italic',
              color: colors.dark,
              margin: '0 0 14px',
            }}
          >
            There's a section on {movingTopic} that I found particularly moving — I hope it lands
            the same way for you.
          </Text>
          <Text
            style={{
              ...global.p,
              fontStyle: 'italic',
              color: colors.dark,
              margin: '0',
            }}
          >
            This is a first draft. It's meant to be read, felt, and then gently adjusted. Your
            thoughts matter here.
          </Text>
        </Section>

        <Text style={global.p}>
          To share feedback or request changes, simply reply to this email. One round of revisions
          is included as standard. We'll aim to turn around any changes within{' '}
          {turnaroundDays} working days.
        </Text>

        <Text style={global.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}

export const subject = "The first draft of {{subjectName}}'s story is ready";
