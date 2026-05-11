import { Button, Section, Text } from '@react-email/components';
import * as React from 'react';
import { ToldLayout, s } from './components/ToldLayout';

export default function DraftDelivery({
  subjectName = 'Nana Rose',
  chapterCount = 5,
  openingDescription = 'her childhood in Roscommon',
  closingDescription = 'what she wants the family to carry forward',
  openingStory = 'the summer she spent working in London',
  movingTopic = 'her relationship with her own mother',
  turnaroundDays = 3,
  draftUrl = 'https://told.ie',
}) {
  return (
    <ToldLayout preview="A note from Seán on how it came together.">
      <Section style={s.content}>
        <Text style={s.h1}>The first draft is ready.</Text>

        <Section style={{ margin: '28px 0' }}>
          <Button href={draftUrl} style={s.button}>View draft</Button>
        </Section>

        <Text style={{ ...s.p, marginBottom: '4px' }}>
          Before you read it, a note from Seán:
        </Text>

        <Section style={s.noteBox}>
          <Text style={s.noteText}>
            I've structured {subjectName}'s story in {chapterCount} chapters, beginning
            with {openingDescription} and moving through to {closingDescription}. I chose
            to open with {openingStory} because it felt like the moment that set everything
            else in motion.
          </Text>
          <Text style={s.noteText}>
            There's a section on {movingTopic} that I found particularly moving — I hope
            it lands the same way for you.
          </Text>
          <Text style={{ ...s.noteText, margin: '0' }}>
            This is a first draft. It's meant to be read, felt, and then gently adjusted.
            Your thoughts matter here.
          </Text>
        </Section>

        <Text style={s.p}>
          To share feedback or request changes, simply reply to this email. One round of
          revisions is included as standard. We'll aim to turn around any changes within{' '}
          {turnaroundDays} working days.
        </Text>

        <Text style={s.sig}>— Told</Text>
      </Section>
    </ToldLayout>
  );
}
