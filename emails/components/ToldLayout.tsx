import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

// ── Brand tokens ──────────────────────────────────────────────
export const colors = {
  green:  '#1C2B1C',
  gold:   '#C49A55',
  cream:  '#F6F3EE',
  dark:   '#1A1A18',
  mid:    '#4A4845',
  lite:   '#7A776F',
  border: '#E2DDD6',
  warm:   '#EDE9E1',
  bg:     '#F4F1EC',
};

const serif = "'Playfair Display', Georgia, 'Times New Roman', serif";
const sans  = "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ── Shared styles ─────────────────────────────────────────────
export const s = {
  body: {
    backgroundColor: colors.bg,
    fontFamily: sans,
    margin: '0',
    padding: '0',
  } as React.CSSProperties,

  container: {
    backgroundColor: '#ffffff',
    maxWidth: '600px',
    margin: '40px auto',
    borderRadius: '4px',
    overflow: 'hidden' as const,
  } as React.CSSProperties,

  header: {
    padding: '36px 48px 28px',
    borderBottom: `1px solid ${colors.border}`,
  } as React.CSSProperties,

  wordmark: {
    fontFamily: serif,
    fontSize: '26px',
    fontWeight: '600' as const,
    color: colors.green,
    letterSpacing: '0.02em',
    margin: '0',
    lineHeight: '1',
  } as React.CSSProperties,

  content: {
    padding: '40px 48px',
  } as React.CSSProperties,

  h1: {
    fontFamily: serif,
    fontSize: '28px',
    fontWeight: '500' as const,
    color: colors.dark,
    lineHeight: '1.25',
    margin: '0 0 20px',
  } as React.CSSProperties,

  p: {
    fontFamily: sans,
    fontSize: '15px',
    color: colors.mid,
    lineHeight: '1.7',
    margin: '0 0 16px',
  } as React.CSSProperties,

  label: {
    fontFamily: sans,
    fontSize: '11px',
    fontWeight: '500' as const,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: colors.lite,
    margin: '0 0 12px',
  } as React.CSSProperties,

  summaryBox: {
    backgroundColor: colors.cream,
    borderRadius: '4px',
    padding: '24px 28px',
    margin: '24px 0',
  } as React.CSSProperties,

  summaryKey: {
    fontFamily: sans,
    fontSize: '13px',
    fontWeight: '500' as const,
    color: colors.lite,
    paddingRight: '16px',
    paddingBottom: '10px',
    verticalAlign: 'top' as const,
    width: '120px',
  } as React.CSSProperties,

  summaryVal: {
    fontFamily: sans,
    fontSize: '13px',
    color: colors.dark,
    paddingBottom: '10px',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,

  callout: {
    borderLeft: `3px solid ${colors.gold}`,
    paddingLeft: '20px',
    margin: '24px 0',
  } as React.CSSProperties,

  button: {
    backgroundColor: colors.green,
    color: '#ffffff',
    borderRadius: '4px',
    padding: '14px 28px',
    fontSize: '14px',
    fontFamily: sans,
    fontWeight: '500' as const,
    letterSpacing: '0.02em',
    textDecoration: 'none',
    display: 'inline-block' as const,
  } as React.CSSProperties,

  divider: {
    borderColor: colors.border,
    margin: '0',
  } as React.CSSProperties,

  footerSection: {
    padding: '28px 48px 36px',
  } as React.CSSProperties,

  footerText: {
    fontFamily: sans,
    fontSize: '12px',
    color: colors.lite,
    lineHeight: '1.6',
    margin: '0 0 4px',
  } as React.CSSProperties,

  sig: {
    fontFamily: sans,
    fontSize: '15px',
    color: colors.dark,
    fontStyle: 'italic' as const,
    margin: '24px 0 0',
  } as React.CSSProperties,

  noteBox: {
    backgroundColor: colors.cream,
    borderRadius: '4px',
    padding: '28px 32px',
    margin: '16px 0 28px',
  } as React.CSSProperties,

  noteText: {
    fontFamily: sans,
    fontSize: '15px',
    fontStyle: 'italic' as const,
    color: colors.dark,
    lineHeight: '1.7',
    margin: '0 0 14px',
  } as React.CSSProperties,
};

// ── Layout wrapper ────────────────────────────────────────────
interface ToldLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export function ToldLayout({ preview, children }: ToldLayoutProps) {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        `}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Body style={s.body}>
        <Container style={s.container}>

          {/* Wordmark */}
          <Section style={s.header}>
            <Text style={s.wordmark}>Told</Text>
          </Section>

          {/* Page content */}
          {children}

          {/* Footer */}
          <Hr style={s.divider} />
          <Section style={s.footerSection}>
            <Text style={s.footerText}>
              Told — Dublin-based.{' '}
              <a href="mailto:hello@told.ie" style={{ color: colors.lite }}>
                hello@told.ie
              </a>
            </Text>
            <Text style={s.footerText}>
              You received this email because you booked a session with Told.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
