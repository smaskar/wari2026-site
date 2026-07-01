Wari 2026 Static Site

This repository is a plain static web app for the Wari help map. It is designed
to run on GitHub Pages or any simple HTTPS static host without a build step.

Primary entry points
- index.html: responsive shell. On desktop it shows the mobile app and full map
  side by side; on mobile it loads the app full screen.
- app.html: public mobile help experience.
- map.html: standalone Leaflet help map used by the desktop shell.
- offline.html: service-worker fallback page.
- app-proper.html: compatibility wrapper that normalizes saint names in app.html.

Assets
- assets/css/: page-specific styles.
- assets/js/: page-specific browser logic.
- wari-data.js: shared data normalization, filtering, icons, and formatting
  helpers.
- wari-points-*.js: generated route/help point datasets loaded by app.html and
  map.html.
- wari-route-dnyaneshwar-pune.js: Pune-region route line and missing waypoints
  generated from the Sant Dnyaneshwar Maharaj Palakhi KMZ NetworkLink export.
- sw.js: offline cache and stale-while-revalidate strategy.

Data/source exports
- CSV, KML, GeoJSON, and XLSX files in the repository root are source/reference
  exports for map data review and deployment.

Maintenance notes
- Keep this app dependency-free unless a build step is intentionally introduced.
- When adding a new static asset required offline, add it to APP_SHELL in sw.js
  and bump CACHE_VERSION.
- GPS only works reliably on HTTPS or localhost.
- Leaflet is loaded from unpkg and cached by the service worker after first load.
