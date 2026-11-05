# Project Changes

## Previous refinements verified

- Confirmed that the navigation and page content share the same 1000px maximum width.
- Confirmed that Products & Services categories use explicit `.product-category` components to keep each image, description and list together.
- Confirmed that layout rules use descriptive classes rather than selectors based on section order.
- Retained the existing system-font stack and page-specific background colours.
- Confirmed that shared image rules preserve image proportions and that decorative borders and rounded corners are applied consistently to content images.
- Confirmed that the five pages link to one another and that the supplied image paths use matching filename case.
- Kept the existing Google Form, direct form link, enquiry disclaimer and general Amanzimtoti map embed.

## JavaScript/jQuery implementation

- Added `gallery.js`, a small plain JavaScript enhancement with no external library or code source.
- Made each gallery image a keyboard-operable button that opens its image in a native modal dialog.
- Added an accessible close button, Escape-key dismissal through native dialog behavior, backdrop dismissal, descriptive image text and focus restoration to the image button that opened the dialog.
- Styled the dialog to fit desktop and mobile screens without cropping or distorting the source image.
- Added `clock.js` as a separate deferred script on all five pages. It displays the device-local full date and 24-hour time with seconds and a local time-zone abbreviation, updating immediately, every second, and after a hidden tab becomes visible or is restored.
- It checks the current browser time-zone setting once per second and refreshes its formatters if that setting changes without a page reload.
- Added loading text and a `<noscript>` notice so visitors know when scripting is unavailable.
- Styled the footer clock with the site's system font, text and border colours, rounded corners and a light background. The text uses a fluid size and wraps long localized dates within narrow screens.

## Mobile responsiveness improvements

- Used fluid page padding and `clamp()` heading sizes to adapt spacing and typography to viewport width.
- Kept the existing 760px and 520px breakpoints, with product categories becoming single-column at tablet widths and Home/Gallery grids becoming single-column at narrow-phone widths.
- Preserved wrapping navigation links and set navigation, call-to-action and lightbox close controls to a minimum 44px touch target.
- Kept images fluid with automatic height, allowed long text to wrap, and made both embedded frames full-width with shorter mobile heights.
- Sized the gallery dialog and its image against the viewport at mobile widths.

## SEO improvements

- Added a unique, descriptive page title and meta description to each page using accurate terms for the products, Amanzimtoti location and South African service area.
- Replaced generic gallery and product-image alternative text with descriptions of the subject or product category.
- Added lazy loading and asynchronous decoding to below-the-fold content images; the Home hero image is prioritised.
- Added `rel="noopener noreferrer"` to external links that open in a new tab.
- Reviewed existing headings, semantic landmarks and internal page links; retained the existing five-page structure and business claims.
- Reviewed the JPEG source sizes. They range from about 16KB to 468KB; the original assets were retained without recompression.

## Final testing and corrections

- Extracted and tested the supplied `POE FINAL DRAFT.zip` in a separate QA copy using a local HTTP server.
- Opened all five pages and confirmed their page content, one page-level H1, footer, unique title and unique meta description. All 26 page images loaded and had meaningful alt text (excluding the hidden, initially empty lightbox image).
- Clicked all five navigation links from each page (25 activations); each went to the expected page. The current-page highlight matched the page on all five pages.
- Checked all five pages at 1440x900, 1366x768, 768x1024, 390x844 and 375x667. None had horizontal overflow. Contact iframes fit the content width at both mobile sizes.
- Tested all 12 Gallery image buttons against their enlarged source image. All matched; all 12 close-button actions worked. Enter, Space, Escape, backdrop close and focus restoration also passed, and the dialog fit a 375x667 mobile viewport.
- Checked exact-case local asset and page paths, heading structure and placeholder text; no broken local paths, missing meaningful image alternatives or placeholder text were found.
- Confirmed that the Google Maps iframe loads a map centred on the general Amanzimtoti area. The embed source names only Amanzimtoti, and the displayed map does not show a private street address.
- Updated the direct enquiry link to the latest Google Forms URL supplied by the owner. The updated direct and embedded forms were browser-tested; questions and input controls load without a sign-in block. Google sign-in is offered to save progress. No form settings were changed and no response was submitted.
- Captured genuine Chrome screenshots in `POE_Test_Evidence/`; see `FUNCTIONAL_TEST_REPORT.md` for filenames and captions.
- Chrome 156 was used for browser screenshots and the integrated Playwright Chromium browser for functional checks. Safari automation could not be enabled without an OS password; Firefox was not installed. Those browsers were not tested.
- In the earlier ZIP retest, the only website-code change was updating the Contact page's direct form link; no other corrections were needed then. The report, evidence, and this log are included in this copy. The site has not been published.
- Tested the clock on all five pages against the browser's local `Intl.DateTimeFormat` output, verified seconds advance, simulated a midnight rollover and a change to `America/Los_Angeles`, and checked mobile width and tab/page restore updates.
- Retested the clock on all five pages at widths of 280, 320, 360, 375, 390, 520, 768, 1024 and 1440 CSS pixels. All 45 combinations rendered the clock within the viewport with no horizontal overflow and the displayed date/time matching the browser's local formatter.
- Confirmed that the clock and Gallery scripts produce no browser console or page errors.
- Captured a live footer-clock screenshot in `POE_Test_Evidence/09-footer-live-clock-desktop-1440x1100.png`.
