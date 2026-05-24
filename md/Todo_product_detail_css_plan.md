# TODO — Product Detail CSS Premium Redesign

- [ ] Confirm required selectors exist in `product-detail.html` (gallery/sidebar/title/meta).
- [x] Append CSS to `styles.css` to:

  - [ ] Ensure breadcrumb/header chain styling (using existing meta/back elements if breadcrumbs aren’t present).
  - [ ] Enforce `.product-detail-grid` proportions (~68% left / ~32% right).
  - [ ] Enforce sticky sidebar: `position: sticky; top: 20px;`.
  - [ ] Fix/standardize gallery radius=12px, overflow hidden, and asymmetric main+2x2 thumbs.
  - [ ] Style `.product-detail-meta` as quick summary metrics strip.
  - [ ] Add/ensure amenity capsule tag styles using mint palette.
  - [ ] Make price card + CTA priority row match spec (primary deep green, secondary bordered/hover).
  - [ ] Ensure `@media (max-width: 992px)` stacks layout and sidebar behavior is mobile-friendly.
- [ ] Run a quick CSS sanity check (no broken rules) and verify visually by opening `product-detail.html`.

