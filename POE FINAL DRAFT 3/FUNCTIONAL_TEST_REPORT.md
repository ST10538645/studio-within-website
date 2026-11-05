# Functional Test Report — Studio Within by Andrea

**Initial test date:** 4 November 2026  
**Google Form retest:** 5 November 2026  
**Test source:** `POE FINAL DRAFT.zip`, extracted into a separate QA copy  
**Local test URL:** `http://127.0.0.1:8765/`  
**Clock device-width retest:** Current source folder at `http://127.0.0.1:8768/`, with matching clock markup, script and styles in this deliverable copy; 5 November 2026  
**Browsers:** Google Chrome 156.0.8078.80 (headless Chrome for screenshots); integrated Playwright Chromium for functional interaction  
**Viewport scale:** 1 CSS pixel per device pixel for the viewport measurements  

## Summary

| Result | Count |
|---|---:|
| Pass | 32 |
| Fail | 0 |
| Not Tested | 3 |
| **Total grouped test cases** | **35** |

The replacement Google Forms link supplied on 5 November opens the “Order Request” form and displays its questions without blocking access for sign-in. Google sign-in is offered to save progress. The updated embedded and direct links were verified. No form settings were changed and no test enquiry was submitted.

The local date/time clock was tested on all five pages. It matches browser-local formatting, updates every second, rolls over at simulated midnight, refreshes when the device time zone changes without a page reload, refreshes on tab/page restore, and fits phone, tablet and desktop widths from 280px to 1440px.

## Results

| # | Page or feature | Screen size and browser | Expected result | Actual result | Status | Problem, correction, and retest |
|---:|---|---|---|---|---|---|
| 1 | Home page load, title, main content and footer | 1440x900; Chrome/Playwright Chromium | Page loads with content and footer, without page errors | Loaded; one H1, main content and footer present; page images loaded | Pass | No code correction required. |
| 2 | About page load, title, main content and footer | 1440x900; Chrome/Playwright Chromium | Page loads with content and footer, without page errors | Loaded; one H1, main content and footer present; logo image loaded | Pass | No code correction required. |
| 3 | Products & Services page load, title, main content and footer | 1440x900; Chrome/Playwright Chromium | Page loads with product content and footer | Loaded; one H1, main content and footer present; product images loaded | Pass | No code correction required. |
| 4 | Gallery page load, title, main content and footer | 1440x900; Chrome/Playwright Chromium | Page loads with gallery and footer | Loaded; one H1, main content and footer present; gallery images loaded | Pass | No code correction required. |
| 5 | Contact page load, title, contact content and footer | 1440x900; Chrome/Playwright Chromium | Page loads with contact details, embeds and footer | Loaded; contact details, both iframes and footer present; updated form shows its questions | Pass | Updated embedded and direct form links were retested; see test 24. |
| 6 | Internal navigation | All five pages; Chrome/Playwright Chromium | Every navigation link opens its matching page | Clicked all five navigation links from each page: 25 of 25 reached the expected local page | Pass | No broken internal navigation found. |
| 7 | Active-page navigation indicator | All five pages; Chrome/Playwright Chromium | Exactly the current page is marked active | Each page had one `aria-current="page"` link matching its filename | Pass | No correction required. |
| 8 | Page images and alternatives | All five pages; Chrome/Playwright Chromium | Images load without broken resources and meaningful images have alt text | All 26 page images loaded; no missing meaningful alt text was found | Pass | The lightbox image is initially empty and hidden until a thumbnail is selected. |
| 9 | Responsive layout and horizontal overflow | Each page at 1440x900, 1366x768, 768x1024, 390x844 and 375x667; Playwright Chromium | Content fits; navigation and grids adapt; no horizontal scrolling | 25 page/viewport checks completed with no horizontal overflow. Navigation remained visible and wrapped on phones; the mobile gallery/product layouts adapted as expected | Pass | Visual review of saved desktop/mobile captures showed no overlap. No CSS correction required. |
| 10 | Lightbox image selection | All 12 gallery image buttons; Chrome/Playwright Chromium, desktop | Enlarged image matches the selected thumbnail | All 12 selected thumbnail sources matched the lightbox image source | Pass | No correction required. |
| 11 | Lightbox close button | All 12 gallery images; Chrome/Playwright Chromium, desktop | Close control dismisses each opened image | All 12 close-button checks dismissed the dialog | Pass | No correction required. |
| 12 | Lightbox Escape dismissal | Gallery; Chrome/Playwright Chromium, desktop | Escape closes the open dialog | Escape closed the dialog | Pass | No correction required. |
| 13 | Lightbox keyboard activation | Gallery; Chrome/Playwright Chromium, desktop | Keyboard users can activate an image | Enter and Space each opened the dialog | Pass | No correction required. |
| 14 | Lightbox focus management | Gallery; Chrome/Playwright Chromium, desktop | Focus moves into the dialog and returns to the trigger | Close button received focus on open; focus returned to the original thumbnail on close | Pass | No correction required. |
| 15 | Lightbox backdrop dismissal | Gallery; Chrome/Playwright Chromium, desktop | Clicking outside the dialog closes it | Click outside the dialog closed it | Pass | No correction required. |
| 16 | Lightbox mobile bounds | Gallery at 375x667; Chrome/Playwright Chromium | Dialog remains within the viewport | Dialog bounds were inside the 375x667 viewport | Pass | No correction required. |
| 17 | Google Maps embed and service area | Contact page, desktop; Chrome 156 | Map loads and shows the general advertised service area | Map rendered Amanzimtoti and surrounding area; its source query names Amanzimtoti | Pass | No street address was present in the embed URL or displayed area. |
| 18 | Contact iframe mobile width | Contact page at 390x844 and 375x667; Playwright Chromium | Form and map fit within the main content width | Both iframes fit exactly within the main content width: 366px at 390px and 351px at 375px | Pass | Form and map fit; the updated embedded form now displays its questions. |
| 19 | Page titles, descriptions and heading semantics | All five pages; extracted HTML audit | Titles/descriptions are unique; one H1 and a sensible heading structure exist | All five titles and descriptions are distinct and present; each page has one H1 and the existing heading hierarchy is consistent | Pass | No SEO correction required. |
| 20 | Local file paths, case, and placeholder content | All five pages; extracted HTML/path audit | Local links, styles, script and images resolve with exact filename case; no placeholder copy | Case-exact local paths resolved; no missing local references or placeholder text found | Pass | No correction required. |
| 21 | Site JavaScript and first-party browser errors | Gallery interaction; Chrome/Playwright Chromium | No JavaScript exception or site-script console error | No Gallery page JavaScript errors occurred in interaction testing | Pass | No first-party JavaScript error was observed. |
| 22 | Chrome screenshot rendering | Chrome 156.0.8078.80, headless | Requested views render and screenshots can be captured | Nine PNGs were captured at their named dimensions; screenshot images were visually inspected | Pass | Chrome stderr contained macOS `CVDisplayLinkCreateWithCGDisplay` messages in headless mode; captures completed and this was not a page-console error. |
| 23 | Screenshot evidence files | `POE_Test_Evidence/`; Chrome 156 | Requested genuine evidence is present and readable | All nine PNG files, including the additional live-clock screenshot, are present and validated as PNG images | Pass | No earlier site version/screenshots were supplied, so no before-and-after image was created. |
| 24 | Google Form access | Updated embed and direct link; Chrome/Playwright Chromium, desktop (1440px) and mobile (390px); retested 5 Nov 2026 | A visitor can view the enquiry questions without signing in | Direct URL opened “Order Request”; embedded iframe loaded the same form with its questions and input controls. At 390px, the iframe fits the 366px content width and the form question was visible. Google sign-in is offered to save progress, not required to view the form | Pass | Updated the Contact page's direct URL to the supplied `?usp=header` link. The embed uses the same form ID with `?embedded=true`. No settings were changed. |
| 25 | Test enquiry submission | Google Form | A clearly labelled test response is recorded | Not attempted because no permission to submit test data was given | **Not Tested** | Obtain permission before testing response recording. |
| 26 | Safari compatibility | Safari | Pages and interactions render consistently | Safari WebDriver setup requested an OS password; automation could not be enabled | **Not Tested** | Retest in Safari after enabling WebDriver with an authorised macOS user. |
| 27 | Firefox compatibility | Firefox | Pages and interactions render consistently | Firefox was not installed in the available environment | **Not Tested** | Retest in Firefox when an installation is available. |
| 28 | Local date/time on all pages | All five pages; Playwright Chromium, device time zone `Africa/Johannesburg` | Each footer immediately shows the current full local date, time with seconds, and local zone | All five pages showed values matching independently formatted current `Date` values from browser-local `Intl.DateTimeFormat`; each loaded `clock.js` with `defer` | Pass | No hardcoded time zone is used. |
| 29 | Live seconds and returning to page/tab | Home page; Playwright Chromium | Seconds update without refresh; clock refreshes on `pageshow` and visible `visibilitychange` | Seconds advanced during observation; dispatching page-show and visible-tab events refreshed deliberately stale display text | Pass | No correction required. |
| 30 | Midnight rollover | About page; Playwright Chromium, virtual clock in `Africa/Johannesburg` | Date changes at local midnight and time uses a 24-hour hour cycle | Simulated 23:59:58 on 5 Nov 2026 updated through midnight to 00:00:01 on Friday, 6 Nov 2026 | Pass | Verified day, date and hour rollover. |
| 31 | Device time-zone detection | About page; Playwright Chromium with DevTools time-zone emulation | Display follows a changed browser time zone without requiring a page reload | Changed the open page from `Africa/Johannesburg` to `America/Los_Angeles`; on the next clock update it displayed `GMT-8` matching local `Intl.DateTimeFormat`. Restored `Africa/Johannesburg` afterward | Pass | Formatters are recreated only when the detected local zone changes; no fixed zone is specified. |
| 32 | Clock positioning on mobile | All five pages at 390x844; Playwright Chromium | Footer clock fits the viewport and stays within the footer | All five clock blocks fit the mobile page width and remained inside their footer | Pass | No horizontal overflow observed. |
| 33 | Clock and Gallery JavaScript errors | All five pages; Playwright Chromium | No first-party JavaScript or browser console errors | No page errors or console errors occurred while loading the five pages and clock | Pass | Google Form access was retested separately; no clock-related errors occurred. |
| 34 | Clock screenshot evidence | `POE_Test_Evidence/09-footer-live-clock-desktop-1440x1100.png`; Chrome 156 | Genuine browser capture shows the running footer clock | Captured and inspected the footer with its live date, seconds and local time-zone abbreviation | Pass | This is a current browser screenshot, not a reconstruction. |
| 35 | Responsive clock across devices | All five pages at 280, 320, 360, 375, 390, 520, 768, 1024 and 1440 CSS pixels; Playwright Chromium | The clock remains visible and contained, with no horizontal scrolling, on narrow phones through desktop widths | All 45 page/viewport combinations showed the clock within the viewport, with no horizontal overflow; the displayed date/time matched the browser-local formatter | Pass | Verified in the current source folder; the tested markup, script and styles are synchronized with this deliverable copy. |

## Screenshot evidence

All files are in [`POE_Test_Evidence/`](./POE_Test_Evidence/).

| File | Suggested figure caption | What it shows |
|---|---|---|
| `01-home-desktop-1440x900.png` | **Figure 1: Studio Within home page on desktop** | Home page branding, navigation and desktop layout in Chrome. |
| `02-home-mobile-390x844.png` | **Figure 2: Studio Within home page on a mobile viewport** | Mobile portrait layout and wrapped navigation. |
| `03-products-desktop-1440x900.png` | **Figure 3: Products & Services page on desktop** | Product category layout and related description. |
| `04-products-mobile-390x844.png` | **Figure 4: Products & Services page on a mobile viewport** | Mobile product page layout and visible navigation. |
| `05-gallery-normal-desktop-1440x900.png` | **Figure 5: Studio Within Gallery before opening an image** | Normal desktop Gallery grid. |
| `06-gallery-lightbox-desktop-1440x900.png` | **Figure 6: Gallery image enlarged in the JavaScript lightbox** | Enlarged source image, caption and close control. |
| `07-contact-google-form-desktop-1440x1100.png` | **Figure 7: Contact page Google enquiry form** | Updated embedded Order Request form with its questions visible. Sign-in is offered to save progress. |
| `08-contact-map-desktop-1440x900.png` | **Figure 8: Contact page Amanzimtoti service-area map** | The loaded general-area map and its surrounding geographic context. |
| `09-footer-live-clock-desktop-1440x1100.png` | **Figure 9: Live local date and time in the footer** | Running clock with full local date, 24-hour time, seconds and device time-zone abbreviation. |

No before-and-after screenshots were produced because genuine earlier screenshots or website versions were not included with the supplied ZIP.

## Remaining manual checks

1. A test response was not submitted because permission to send test data was not given. Obtain permission before testing response recording.
2. Retest Safari and Firefox when those browser environments are available.

The clock was added as requested; the Gallery lightbox code was not changed. The updated Contact page direct form link is also retained. No test form response was submitted. The project remains unpublished.
