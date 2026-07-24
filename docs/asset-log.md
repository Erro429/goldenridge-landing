# Asset log — Golden Ridge "First Light"

## Sunrise film v2 — aerial (current)

- **Date:** 2026-07-24
- **Why replaced:** v1 (ground-level pine flatwoods, below) read as *swamp* —
  dense trees, heavy ground fog, and a pale wet-looking trail that scanned as
  standing water. Wrong signal for raw-land buyers, who are screening for
  high, dry, buildable acreage.
- **Model:** Higgsfield `kling3_0_turbo`, 16:9, 3 × 10 s chained via last-frame
  → `start_image`, concat (crf 16) → single ByteDance `2k` `aigc` upscale
- **Job IDs:** seg A `8ad24ed9-bf88-42df-bbeb-cbbfd234c33a`, seg B
  `6e0a02d3-042c-4ae5-b7b3-2fc1d71c0b9b`, seg C
  `a3fe351d-5587-4c16-b3de-ddea926e3b00`, upscale
  `0ffb9523-433b-463a-8a13-38bf69b2c532`
- **Story arc:** A — blue hour, drone rising over open dry ranch country, a
  sandy road running straight to a distant lake. B — the sun breaks the
  horizon and lights the lake with a gold reflection path. C — the drone
  climbs as gold floods the open fields (lands into the gold CTA flood).
- **Prompt spine:** "aerial drone shot over wide open dry Florida ranch
  country, broad dry golden grass fields and open pasture stretching to a far
  horizon, scattered live oaks, a pale sandy ranch road, a lake in the
  distance, crisp clear dry air, sharp visibility, slow steady continuous
  drone movement at constant speed, single continuous shot, no cuts" — act A
  adds "blue hour, sun below the horizon, deep indigo sky, fading stars, low-key
  underexposed"; act B adds "the bright sun disc rises above the far horizon,
  brilliant warm golden light, long shadows from the oaks, lens bloom"; act C
  adds "sun climbs higher, gold floods the fields edge to edge, camera rises
  vertically and does NOT fly forward toward the water".
- **Hard negatives (the whole point):** `no ground fog, no mist, no haze, no
  swamp, no marsh, no wetland, no mudflats, no standing water in the fields,
  no palmetto, no dense forest` — plus no people, buildings, text, watermark.
- **Retries worth knowing:** act A came back as bright daylight on the first
  pass (broke the dark-hero/gold-finale arc) — fixed by naming blue hour
  explicitly. Act B came back still dim — fixed by demanding a visible risen
  sun disc. Act C flew out over the lake and its shallow edges read as marsh —
  fixed by forcing a vertical-only ascent. Kling repeatedly matched the
  "IN THE DARK" preset; decline it (`declined_preset_id`) to keep the literal
  aerial.
- **Encodes:** same recipe as v1 (all-intra, 12 fps, hqdn3d).

## Sunrise film v1 — ground-level pine flatwoods (retired 2026-07-24)

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
