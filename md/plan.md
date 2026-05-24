# Plan: Move CSS/JS files into a new folder

## Information Gathered
- Project root: `c:/Users/user/Downloads/property sale`
- Files currently at root:
  - CSS: `style.css`, `styles.css`, `product-detail.css`, `slider-fix.css`, `modal-post-ad.css`, `property-wide-short-overrides.css`, `property-icons.css`, `property-image-icons.css`
  - JS: `script.js`, `product-detail.js`, `slider-debug.js`, `slider-fix.js`
- Task: create a new folder named **"Scriptis and CSS "** (note trailing space) and move the above files into it.

## Plan
1. Create folder `Scriptis and CSS ` in the project root.
2. Move the listed files into that folder.
3. Search through the HTML/JS files to find any references to these filenames (e.g. `href="style.css"`, `src="script.js"`, etc.).
4. Update those references to include the new folder path (e.g. `href="Scriptis and CSS /style.css"`).
5. Verify by opening key HTML pages and doing a quick build/run check if applicable.

## Dependent Files to be edited
- Likely: multiple `*.html` files that reference these CSS/JS.

## Followup steps
- Run a quick search to ensure there are no remaining root references to moved files.

<ask_followup_question>
Confirm whether the folder name should include the trailing space exactly as written: "Scriptis and CSS ".
</ask_followup_question>

