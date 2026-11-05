# Studio Within by Andrea — Final POE Technical Notes

## A. Part 2 feedback and refinements

The final site retains the original five pages, branding, page-specific colour backgrounds, images, business information and system-font stack.

The shared navigation and the header, main content and footer use the same 1000px maximum width, so their edges align on desktop. Products & Services already grouped each category's image, copy and list in an explicit `.product-category` section; this was verified rather than rebuilt. The stylesheet uses descriptive classes for the Home products, product categories and Gallery instead of relying on the order of sections. Shared image styles keep images fluid and use `height: auto`, preserving their original proportions. The existing border and rounded-corner treatment is applied consistently to the feature, product and gallery images.

The existing responsive grids, five-page navigation, Google Form, direct form fallback and general Amanzimtoti map were retained. No unpublished address or new business service was added.

## B. Implementation of JavaScript

The interactive feature is implemented in [gallery.js](./gallery.js) and is loaded with `defer` from [gallery.html](./gallery.html). Each Gallery thumbnail is a real `<button>` containing an image, so it can be reached and activated using a keyboard as well as a mouse or touchscreen.

When a thumbnail is activated, JavaScript copies its source and alternative text into a native HTML `<dialog>`, opens the modal with `showModal()`, and moves focus to the labelled close button. The native dialog provides modal focus handling; an explicit Escape-key handler closes it consistently. The close button and clicking the dialog backdrop also dismiss it; the `close` event returns focus to the thumbnail that opened it. The displayed image uses `object-fit: contain` and viewport-based maximum dimensions to avoid cropping.

The implementation is plain JavaScript with no external library. The code was written for this project; no externally sourced code was used. Customisations are the Studio Within gallery button/dialog presentation, descriptive image labels, mobile sizing, and focus restoration.

The implementation delegates thumbnail clicks from the Gallery grid and uses the selected thumbnail's own image information:

```js
gallery.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".gallery-image-button");
    if (!imageButton) return;
    const image = imageButton.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
    closeButton.focus();
});

lightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        lightbox.close();
    }
});

lightbox.addEventListener("close", () => {
    activeImageButton?.focus();
});
```

### Live local date and time

The local date/time display is implemented separately in [clock.js](./clock.js), loaded with `defer` on all five pages. A labelled footer block provides distinct date and time elements, shows brief loading text before the script runs, and includes a `<noscript>` notice if JavaScript is disabled. The script constructs a fresh `Date` immediately and on a one-second interval, formats the complete weekday/day/month/year and 24-hour time with seconds using `Intl.DateTimeFormat`, and leaves the time zone unspecified so the visitor's device/browser zone is used. It also shows the formatter's local short time-zone name.

The `pageshow` and `visibilitychange` listeners refresh the display when a visitor returns to a page or browser tab. The time element's `datetime` value is updated with the current instant. No library, API, hardcoded time zone, or change to the Gallery lightbox script is involved.

The script also checks the browser's detected local time zone during its one-second update. If the device time-zone setting changes while the page remains open, it rebuilds its formatters using the new default zone. The footer clock has a fluid font size and allows localized date strings to wrap; all five pages were checked at widths from 280px through 1440px without horizontal overflow. Like other browser-based JavaScript, the clock requires JavaScript and support for the standard `Date` and `Intl.DateTimeFormat` APIs, so operation cannot be guaranteed on every legacy or non-browser device.

The main formatting approach is:

```js
const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
const timeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
};
let localDateFormatter = new Intl.DateTimeFormat(undefined, dateFormatOptions);
let localTimeFormatter = new Intl.DateTimeFormat(undefined, timeFormatOptions);
```

The clock uses the browser locale for date ordering and language, while `hourCycle: "h23"` explicitly requests the 00–23 hour cycle. The time zone is automatically obtained from the visitor's environment because no `timeZone` override is supplied.

## C. Implementation of responsiveness for mobile

The existing desktop layouts remain in place. The shared stylesheet uses fluid widths, `height: auto` images, and `box-sizing: border-box`. Page padding uses `clamp(12px, 3vw, 20px)`; the primary heading sizes also use `clamp()` so text scales without taking over a narrow screen. Long text can wrap rather than forcing horizontal scrolling.

At the existing 760px breakpoint, product categories become one column, the Gallery becomes two columns, and the embedded form and map heights are reduced. At 520px, Home and Gallery grids become one column, navigation continues to wrap, and the form, map and lightbox use mobile-friendly viewport dimensions. Navigation links, call-to-action links and the lightbox close control have a minimum 44px touch target. Iframes are set to the available content width, and images retain their proportions at every size. The footer clock uses a fluid font size, a maximum width of its container and wrapping for long locale-specific date/time text.

All five pages were checked at widths of 280, 320, 360, 375, 390, 520, 768, 1024 and 1440 CSS pixels; the footer clock stayed within the page without horizontal overflow.

## D. Implementation of SEO

- **Page titles:** Each HTML page has a distinct title describing its content, such as the personalised-gifts home page, product/service range, gallery and contact page.
- **Meta descriptions:** Each page has a distinct summary using truthful terms relevant to the page, including custom printing, personalised gifts, personalised mugs, Amanzimtoti and delivery around South Africa where appropriate.
- **Headings and semantics:** The existing page-level heading structure and semantic `header`, `nav`, `main`, `section`, `article` and `footer` elements were reviewed and retained. The existing content and site structure were not rewritten just to add keywords.
- **Image alternatives:** Generic numbered alternatives were replaced with short descriptions of the represented project or product category. Decorative branding retains its concise logo alternative text.
- **Loading performance:** Below-the-fold content images use lazy loading and asynchronous decoding; the visible Home hero uses high fetch priority. Existing JPEG source files were reviewed (approximately 16–468KB each) and retained without recompression to preserve the supplied assets.
- **Links:** Internal navigation continues to connect all five pages. External links opening new tabs now include `rel="noopener noreferrer"`.

These are on-page improvements and do not guarantee search rankings or traffic.

## E. Going live steps

1. **Prepare the release:** Review all five pages, local image and script paths, page titles, embeds and responsive layouts. Keep a backup of the finished website files and record the release version.
2. **Choose a domain and hosting:** Register or use a domain controlled by the business, then select a web host that supports static HTML, CSS, JavaScript and image files. Configure the domain's DNS with the host's instructions and allow time for DNS changes to propagate.
3. **Secure hosting access:** Obtain the hosting provider's FTP/SFTP hostname, username, password or key, and destination directory. Prefer SFTP when available; keep credentials private and do not put them in website files.
4. **Upload the site:** Connect with an FTP/SFTP client and upload the five HTML pages, `styles.css`, `gallery.js`, `clock.js`, the complete `_images/` folder and any required supporting files to the web root (often named `public_html` or `www`). Preserve folder names and filename case.
5. **Enable HTTPS:** Use the host's SSL/TLS certificate and configure the site to use HTTPS. Confirm that embedded third-party services also load as expected under HTTPS.
6. **Test the live website:** Open the domain on desktop and a phone. Check each page, internal navigation, all image paths, the gallery with mouse and keyboard (including Escape), the contact form and map, browser-console errors and horizontal overflow. Submit a test enquiry only if appropriate and clearly identified as a test.
7. **Maintain the release:** Keep a current local backup, update content and images carefully, renew the domain and hosting, monitor form access and browser compatibility, and repeat the live checks after changes.

This project has not been published by these changes; the steps above describe a future deployment process.

## Screenshot evidence checklist

Current screenshots are saved in [POE_Test_Evidence/](./POE_Test_Evidence/). Use actual current pages; do not make replacement or reconstructed “before” images. No earlier screenshots or previous site versions were included with the supplied project files, so genuine before-and-after evidence is not presently available.

| Page to open | Feature or improvement to show | View | Suggested figure caption | What it demonstrates |
|---|---|---|---|---|
| `index.html` | Header, aligned navigation, Home content and product cards | Desktop, about 1280px wide | **Figure 1: Studio Within home page on desktop** | The retained brand styling, shared content width and desktop product grid. |
| `products_services.html` | Clothing and drinkware categories, with each image beside its related description and list | Desktop, about 1280px wide | **Figure 2: Product categories and grouped details** | The clear category grouping and preserved desktop layout. |
| `gallery.html` | Gallery grid and one open lightbox with its close button visible | Desktop, about 1280px wide | **Figure 3: Gallery lightbox opened from a project image** | The enlarged image, descriptive text and obvious close control. |
| `gallery.html` | Gallery thumbnail grid at a 375px viewport | Mobile portrait, 375px wide | **Figure 4: Responsive Gallery on a 375px mobile viewport** | The single-column small-screen layout and images fitting the screen. |
| `gallery.html` | Open lightbox at a 390px viewport | Mobile portrait, 390px wide | **Figure 5: Gallery lightbox on a 390px mobile viewport** | The image, caption and close control fitting a phone screen. |
| `contact.html` | Enquiry details, embedded enquiry form and service-area map | Desktop, about 1280px wide | **Figure 6: Contact page with enquiry form and service-area map** | The contact options, form and service-area map. The updated form is viewable without a sign-in block; Google sign-in is offered to save progress. |
| `contact.html` | Navigation, text and responsive embeds at 375px or 390px | Mobile portrait, 390px wide | **Figure 7: Responsive contact page on mobile** | The form and map fitting the available content width. |
| Any page, preferably `about.html` | Wrapped navigation and page content at 375px | Mobile portrait, 375px wide | **Figure 8: Navigation and page content on a mobile viewport** | Navigation links remain visible and usable on a narrow phone. |
| `index.html` | Footer clock showing the full date and live local time with seconds and time-zone abbreviation | Desktop, 1440px wide | **Figure 9: Live local date and time in the website footer** | The real browser-rendered clock, formatted for the device's locale and time zone. See `POE_Test_Evidence/09-footer-live-clock-desktop-1440x1100.png`. |

For keyboard evidence of the Gallery, separately record that Tab reaches the image buttons, Enter or Space opens the dialog, Escape closes it, and focus returns to the same image button. A still screenshot can show the open dialog but cannot prove those keyboard interactions.

The updated Google Form link was opened in the browser and its questions were viewable without a sign-in block. Google sign-in is offered to save progress. No response was submitted because a test submission was not authorised.
