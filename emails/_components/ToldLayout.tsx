import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

// ── Brand tokens ─────────────────────────────────────────────
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

// ── Shared styles ─────────────────────────────────────────────
export const global = {
  body: {
    backgroundColor: colors.bg,
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '26px',
    fontWeight: '600' as const,
    color: colors.green,
    letterSpacing: '0.02em',
    margin: '0',
  } as React.CSSProperties,

  content: {
    padding: '40px 48px',
  } as React.CSSProperties,

  h1: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '28px',
    fontWeight: '500' as const,
    color: colors.dark,
    lineHeight: '1.25',
    margin: '0 0 20px',
  } as React.CSSProperties,

  p: {
    fontSize: '15px',
    color: colors.mid,
    lineHeight: '1.7',
    margin: '0 0 16px',
  } as React.CSSProperties,

  label: {
    fontSize: '11px',
    fontWeight: '500' as const,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: colors.lite,
    margin: '0 0 4px',
  } as React.CSSProperties,

  summaryBox: {
    backgroundColor: colors.cream,
    borderRadius: '4px',
    padding: '24px 28px',
    margin: '24px 0',
  } as React.CSSProperties,

  summaryRow: {
    display: 'flex' as const,
    margin: '0 0 10px',
  } as React.CSSProperties,

  summaryKey: {
    fontSize: '13px',
    fontWeight: '500' as const,
    color: colors.lite,
    width: '100px',
    flexShrink: 0,
    margin: '0',
  } as React.CSSProperties,

  summaryVal: {
    fontSize: '13px',
    color: colors.dark,
    margin: '0',
  } as React.CSSProperties,

  button: {
    backgroundColor: colors.green,
    color: '#ffffff',
    borderRadius: '4px',
    padding: '14px 28px',
    fontSize: '14px',
    fontWeight: '500' as const,
    letterSpacing: '0.02em',
    textDecoration: 'none',
    display: 'inline-block' as const,
  } as React.CSSProperties,

  divider: {
    borderColor: colors.border,
    margin: '0',
  } as React.CSSProperties,

  footer: {
    padding: '28px 48px 36px',
    backgroundColor: '#ffffff',
  } as React.CSSProperties,

  footerText: {
    fontSize: '12px',
    color: colors.lite,
    lineHeight: '1.6',
    margin: '0',
  } as React.CSSProperties,

  sig: {
    fontSize: '15px',
    color: colors.dark,
    fontStyle: 'italic' as const,
    margin: '24px 0 0',
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
        <Font
          fontFamily="Playfair Display"
          fallbackFontFamily="Georgia"
          webFont={{
            url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDTZNLHHZQJ0f-qUaF9f_JHoJRNqMuP6AJo2w.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Playfair Display"
          fallbackFontFamily="Georgia"
          webFont={{
            url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDTZNLHHZQJ0f-qUaF9f_JHoJRNqMuP6AJo2w.woff2',
            format: 'woff2',
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={global.body}>
        <Container style={global.container}>

          {/* Wordmark */}
          <Section style={global.header}>
            <Text style={global.wordmark}>Told</Text>
          </Section>

          {/* Main content */}
          {children}

          {/* Footer */}
          <Hr style={global.divider} />
          <Section style={global.footer}>
            <Text style={global.footerText}>
              Told — Dublin-based.{' '}
              <a href="mailto:hello@told.ie" style={{ color: colors.lite }}>
                hello@told.ie
              </a>
            </Text>
            <Text style={{ ...global.footerText, marginTop: '6px' }}>
              You received this email because you booked a session with Told.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
