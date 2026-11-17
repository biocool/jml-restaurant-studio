# JML Restaurant Studio

A static, GitHub-ready local management interface. **Nothing has been published.**

## Open it

Extract the ZIP, then open `index.html` in a current desktop browser. Keep the project files together. No build step, package installation, API key or server is required. If your browser restricts storage for local files, run `python3 -m http.server 8080` in this folder and visit `http://localhost:8080`. A different origin has a separate workspace.

The initial dataset contains 200 restaurant records: 100 original drafts and 100 additional research candidates. This is not a claim that all candidates meet a verified Google Maps per-person price threshold. Original fields, sources, price methods, uncertainty and exclusions are retained. Unknown Google metrics remain blank.

## Edit and preview

- Search by restaurant, city or ZIP; filter original vs additional candidates.
- Add, edit, delete, or undo the last deletion.
- Update name, location, website, Maps and evidence links.
- Generate a Maps name/address search link. It is not a verified place-ID permalink.
- Upload or replace storefront and food/secondary photos (JPEG, PNG, WebP, up to 8 MB each). Files are embedded in browser data and exports, not uploaded to a server.
- Enter three gauges: review reply rate 0–100%, Google rating 0–5 and local visibility 0–100%. A blank is unknown; zero is an explicit value. Manual inputs are labeled user-entered and should have a source/date.
- Enter one bullet audit finding per line, plus source and review notes.
- Edit competitor information or the complete JSON record for any retained research field.
- Changes automatically update the Flyer/Audit preview. Use Mobile width to check a narrow view.
- Missing images use restrained placeholders. Evidence caveats live in the audit’s expandable footer, not the hero. SET's supplied image is an interior, not a storefront.

## Save and transfer

Autosave uses IndexedDB, with localStorage fallback. Browser storage is **not a durable backup** and does not change the bundled files. Clearing site data, private browsing, moving folders/origins, or switching browser/device may lose or separate edits. Watch the save status and export JSON regularly. Storage failures are shown explicitly.

- **Backup JSON:** lossless full data backup, including uploaded images.
- **Export CSV:** editable columns plus a `_record_json` column preserving the complete source record. Keep that column if you want unknown fields and provenance retained. CSV uploads can be very large when photos are embedded; JSON is preferred for backups.
- **Import JSON / CSV:** merge by ID or replace the entire workspace, with validation and confirmation. JSON arrays and `{records: [...]}` backups are accepted. IDs must be unique letters, digits, underscores or hyphens.
- **Download HTML:** current flyer or audit as a standalone document; remote image URLs still require internet.
- **Export website ZIP:** generates the entire current flyer/audit website with data JSON/CSV/JS. Fonts are shared within the ZIP, so keep its files together. This export is the generated website, not a second copy of the management interface.
- **Export GitHub data.js:** produces the seed file for the management project. Manually replace `data/records.js` in this project/repository to preserve your edits in Git.

## GitHub workflow, without pretend sync

1. Create or choose a repository yourself and upload these project files.
2. If desired, configure GitHub Pages to serve the folder containing `index.html`.
3. Changes made in a browser remain in that browser. Export `records.js`, replace `data/records.js` in the repository and commit it to share a new seed.
4. Browser edits take priority. Versioned additions are merged once by ID without overwriting edited records or restoring previously deleted records. To replace the entire workspace, explicitly import a JSON/CSV using Replace after exporting a backup.

There is **no GitHub API authentication, automatic commit, shared database, access control or multi-user sync**. Do not put a GitHub token into this static app. GitHub Pages is not private storage; do not publish confidential notes or imagery without reuse permission. A source URL does not grant photo rights.

## Verification

Core tests: `node test-core.cjs` (Node.js only, no packages). Tests cover complete CSV roundtrip, import shape, duplicate IDs, invalid gauges, URL/script safety, generated template JavaScript and ZIP writing. See `TEST-RESULTS.txt` for UI test coverage and remaining limitations.

The original JML pilot layouts are retained. QR artwork is mock; booking and payment are not integrated. Manual values and findings are not independently verified by this app.


## 2026-11-17 evidence-screened expansion

The supplied JML Sales Portal remains the main interface. `manager.html` retains the full editor. The bundled collection combines the unchanged initial 200 records (`data/records.js` / `records.json`) with 34 nonduplicate additions (`data/expansion-records.js` / `expansion-records.json`): 234 total. JSON/CSV export in the app includes the full current workspace.

- 13 additions in the previous ZIP scope; the requested 100 is not complete (87 short).
- 21 in new areas: Rancho Bernardo 3, La Jolla 13, Carmel Valley/Torrey Hills 5. No sufficiently supported qualifying Carmel Mountain candidate was added.
- New records use published OpenTable $31–50 or $50+ categories, not verified Google Maps prices or a guaranteed minimum bill. Each record retains price/address sources and caveats.
- Map: 190 matched / 234 records. Census street-range interpolation is approximate; 44 records lack a reliable current match and are not plotted.
- Closed Q Terrace, special-event/weekend-only price evidence and unsuitable entertainment-only fit were excluded. See `data/expansion-report.json`.
- `workspace.js` stores seen seed IDs alongside records. New seed IDs are added once; existing browser edits, local additions and deletions are preserved. This is not cross-device or GitHub synchronization.
