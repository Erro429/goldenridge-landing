# Asset log — Golden Ridge "First Light"

## Sunrise film (whole-page scroll-scrubbed background)

- **Date:** 2026-07-21
- **Model:** Higgsfield `kling3_0_turbo`, 16:9, 3 × 10 s chained via last-frame
  → `start_image`, concat (crf 16) → single ByteDance `2k` `aigc` upscale
- **Job IDs:** seg A `f658047b-21b4-47d0-8798-5b5dcc958f82`, seg B
  `662e4be0-b128-460a-9444-f7199f16a2a2`, seg C `c0a9a842-2f66-483c-8944-882637ef8135`,
  upscale `28003d65-c87e-45fb-9715-3819478184e6`
- **Story arc:** A — pre-dawn Florida pine flatwoods, sandy trail, ground mist,
  drone gliding forward. B — first golden rays break low through the pines,
  light sweeping the palmettos. C — the sun crests the treeline, golden light
  floods the misty meadow (lands into the gold CTA flood).
- **Prompts:** (A) "pre-dawn Florida pine flatwoods, tall slash pines and saw
  palmetto in thin ground mist, deep blue-green darkness just before sunrise, a
  faint sandy trail leading toward a distant treeline ridge, last stars fading
  in the sky, slow steady drone glide forward low over the trail at constant
  speed, slow continuous single shot, no cuts, no people, no text, no watermark,
  muted deep pine green and slate blue color grade with a hint of warm glow on
  the horizon, volumetric mist, film grain, high dynamic range" · (B)
  "…the first golden rays of sunrise breaking low through the pine trunks on
  the horizon, warm golden light beginning to sweep across the misty palmettos
  and the trail, ground mist starting to glow soft amber, sky warming from
  slate blue to peach and gold…" · (C) "…the sun fully crests the distant
  treeline ridge, brilliant golden sunrise light flooding across the misty
  Florida flatwoods meadow, long warm shadows from the pines, glowing amber
  mist, soft lens bloom and sun flare growing…"
- **Encodes:** all-intra H.264, 12 fps + hqdn3d denoise:
  `media/scrub-1080.mp4` (1920w, crf 28), `media/scrub-540.mp4` (960w, crf 29),
  poster = first frame → `media/poster.webp` (LCP, preloaded).

## Visual style reference

- Base prompt suffix: "deep pine green and warm gold cinematic color grade,
  volumetric mist/light, film grain, high dynamic range, no text, no watermark,
  no people"
- Avoid: cuts, fast motion, cool blue-tech tones, buildings, people.
