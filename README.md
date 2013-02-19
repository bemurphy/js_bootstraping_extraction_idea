The core idea here is all bootstapping in a page that would have been done via
inline script tags is extracted.  The inline application/json tag can contain json
parseable data only, and then a callback named via convention to match the element
dom id will receive the data at runtime.

The point here is to be able to inject runtime data, which is almost always necessary,
but deny inline script tags inside the views so that ContentSecurityPolicy can be
used to deny inline scripting.  This drastically reduces the vectors for XSS attack.

See [public/js/app.js](public/js/app.js) for how this is working.
