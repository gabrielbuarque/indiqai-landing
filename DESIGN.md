# Design direction — IndiqAI landing

## North star
A bright, mobile-first local-business landing that turns the digital loyalty card into a simple story: invite a customer, record a visit, give them a reason to return.

## Foundation
IndiqAI official logo, palette, and supplied Poppins fonts. Compositional reference: Refero Styles 7shifts (`https://styles.refero.design/style/736830b5-90b1-47b0-99dd-d79454a0d22a`). Button treatment follows IndiqAI Card `develop` at commit `0a8c93e4c06236ce9f234eb759603433b853d11e` (`src/styles.css`): neutral fill, dark outline, and a 3px violet offset shadow on hover; this landing adds a short press response and honors reduced-motion settings.

## Tokens
- Canvas: `#ebebeb`; surface: `#ffffff`; ink: `#171719`; muted: `#626269` (accessible text on the official gray canvas); line: `#e5e7eb`.
- Brand purple: `#7541ee`; soft purple: `#f4efff`; warm reward accent: `#f4b512`. Official transparent logo: `assets/brand/indiqai-logo.webp` (lossless conversion from supplied PNG); official icon: `assets/brand/indiqai-icon.png`.
- Typeface: locally hosted Poppins 400/500/600/700.
- 4px spacing base; 1200px max content width; section spacing 72–104px desktop, 56–72px mobile; cards 20–28px radius, large hero surfaces 36px.

## One memorable move
A product card shown at near-real phone scale alongside the plain promise, so the buyer sees the loyalty experience immediately without a heavy hero image.

## Reject
Invented ROI/client-count claims, “AI-powered” messaging, generic dashboard collage, excessive gradients, large blocking animation, and remote font/image dependencies.
