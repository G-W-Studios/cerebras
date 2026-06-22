/* @ds-bundle: {"format":3,"namespace":"CerebrasDesignSystem_0bbfb2","components":[{"name":"Icon","sourcePath":"assets/icons/Icon.jsx"},{"name":"ILLUSTRATIONS","sourcePath":"components/brand/Illustration.jsx"},{"name":"Illustration","sourcePath":"components/brand/Illustration.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Tag","sourcePath":"components/core/Label.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navigation","sourcePath":"components/navigation/Navigation.jsx"},{"name":"DisplayAd","sourcePath":"components/social/DisplayAd.jsx"},{"name":"SocialPost","sourcePath":"components/social/SocialPost.jsx"}],"sourceHashes":{"assets/icons/Icon.jsx":"d2bb16afd241","assets/icons/icon-data.js":"22faf62bb3fc","components/brand/Illustration.jsx":"a63faeb96ba6","components/brand/Logo.jsx":"18bc2d53b24c","components/cards/ArticleCard.jsx":"dfa1073518da","components/cards/Card.jsx":"4e12dbb4d518","components/cards/StatCard.jsx":"b364479108d7","components/core/Badge.jsx":"76867cc20792","components/core/Button.jsx":"99035a5c8443","components/core/Chip.jsx":"79c31009e4cd","components/core/Input.jsx":"2ff5ae5517d6","components/core/Label.jsx":"bf9facbbef81","components/navigation/Footer.jsx":"e4c71fcef259","components/navigation/Navigation.jsx":"42e94da140a9","components/social/DisplayAd.jsx":"5235bf94803c","components/social/SocialPost.jsx":"23a83eac3afa","ui_kits/website/CTA.jsx":"0feb874234b4","ui_kits/website/Features.jsx":"2b390076e121","ui_kits/website/Hero.jsx":"5eb1cdb2c77a","ui_kits/website/Newsroom.jsx":"914680b4b9fe","ui_kits/website/Stats.jsx":"f47ef412ddce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CerebrasDesignSystem_0bbfb2 = window.CerebrasDesignSystem_0bbfb2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cerebras UI icon set — clean 24×24 line icons that paint with currentColor.
// Icon data is inlined here so it bundles reliably. The sibling icon-data.js
// mirrors this map for non-bundled / direct consumption.
const icons = {
  "arrow-right": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 23.116 8 L 15.116 0 L 13.349 1.768 L 19.215 7.634 L 0 7.634 L 0 10.134 L 19.215 10.134 L 13.349 16 L 15.116 17.768 L 23.116 9.768 L 24 8.884 L 23.116 8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 3.116)\"/>"
  },
  "chevron-down": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 11.384 9.616 L 21 0 L 22.768 1.768 L 12.268 12.268 L 11.384 13.152 L 10.5 12.268 L 0 1.768 L 1.768 0 L 11.384 9.616 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.616 5.616)\"/>"
  },
  "close": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.116 10.884 L 0 20 L 1.768 21.768 L 10.884 12.652 L 20 21.768 L 21.768 20 L 12.652 10.884 L 21.768 1.768 L 20 0 L 10.884 9.116 L 1.768 0 L 0 1.768 L 9.116 10.884 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.116 1.116)\"/>"
  },
  "copy": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 8.793 0 L 13.101 0 L 18.293 0 L 18.293 2.472 L 2.472 2.472 L 2.472 18.292 L 0 18.292 L 0 13.101 L 0 0 L 4.293 0 L 8.793 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.708 0.708)\"/><path d=\"M 13.101 0 L 8.793 0 L 4.293 0 L 0 0 L 0 13.101 L 0 18.292 L 18.292 18.292 L 18.292 0 L 13.101 0 Z M 15.82 15.82 L 15.82 2.472 L 2.472 2.472 L 2.472 15.82 L 15.82 15.82 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.708 0.708) matrix(1 0 0 1 4 4)\"/>"
  },
  "download": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 0 18 L 18 18 L 18 20 L 0 20 L 0 18 Z M 10 8 L 17 8 L 9 16 L 1 8 L 8 8 L 8 0 L 10 0 L 10 8 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
  },
  "menu": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 0 2.5 L 24 2.5 L 24 0 L 0 0 L 0 2.5 Z M 0 12.5 L 24 12.5 L 24 10 L 0 10 L 0 12.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 5.750)\"/>"
  },
  "minus": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 22 2.5 L 0 2.5 L 0 0 L 22 0 L 22 2.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1 10.750)\"/>"
  },
  "plus": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 9.75 12.25 L 9.75 22 L 12.25 22 L 12.25 12.25 L 22 12.25 L 22 9.75 L 12.25 9.75 L 12.25 0 L 9.75 0 L 9.75 9.75 L 0 9.75 L 0 12.25 L 9.75 12.25 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1 1)\"/>"
  },
  "search": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 11 0 C 8.083 0 5.285 1.159 3.222 3.222 C 1.159 5.285 0 8.083 0 11 C 0 13.917 1.159 16.715 3.222 18.778 C 5.285 20.841 8.083 22 11 22 C 13.328 22 15.579 21.262 17.442 19.917 L 21.525 24 L 24 21.525 L 19.917 17.442 C 21.262 15.579 22 13.327 22 11 C 22 8.083 20.841 5.285 18.778 3.222 C 16.715 1.159 13.917 0 11 0 Z M 4.99 4.99 C 6.584 3.396 8.746 2.5 11 2.5 C 13.254 2.5 15.416 3.396 17.01 4.99 C 18.604 6.584 19.5 8.746 19.5 11 C 19.5 13.254 18.604 15.416 17.01 17.01 C 15.416 18.604 13.254 19.5 11 19.5 C 8.746 19.5 6.584 18.604 4.99 17.01 C 3.396 15.416 2.5 13.254 2.5 11 C 2.5 8.746 3.396 6.584 4.99 4.99 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
  },
  "triangle-up": {
    viewBox: "0 0 24 24",
    body: "<path d=\"M 13.519 0.432 L 13.087 0 L 12.655 0.432 L 0.432 12.655 L 0 13.087 L 0.432 13.519 L 0.738 13.824 L 0.917 14.003 L 14.003 14.003 L 14.003 0.917 L 13.824 0.738 L 13.519 0.432 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(0 -1 1 0 4.997 19.002)\"/>"
  }
};

/**
 * Cerebras line icon. Inherits color via `currentColor` — set `color` on the
 * element (or a parent) to recolor. Square 24×24 grid.
 */
function Icon({
  name,
  size = 24,
  style,
  ...rest
}) {
  const d = icons[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: d.body
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// assets/icons/icon-data.js
try { (() => {
// Cerebras UI icon set — clean 24×24 line icons that paint with currentColor.
// Render via the sibling Icon.jsx: <Icon name="arrow-right" size={20} />
// Extracted from the Cerebras Website Figma (custom in-house icon set).
try {
  void {
    "arrow-right": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 23.116 8 L 15.116 0 L 13.349 1.768 L 19.215 7.634 L 0 7.634 L 0 10.134 L 19.215 10.134 L 13.349 16 L 15.116 17.768 L 23.116 9.768 L 24 8.884 L 23.116 8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 3.116)\"/>"
    },
    "chevron-down": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11.384 9.616 L 21 0 L 22.768 1.768 L 12.268 12.268 L 11.384 13.152 L 10.5 12.268 L 0 1.768 L 1.768 0 L 11.384 9.616 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.616 5.616)\"/>"
    },
    "close": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.116 10.884 L 0 20 L 1.768 21.768 L 10.884 12.652 L 20 21.768 L 21.768 20 L 12.652 10.884 L 21.768 1.768 L 20 0 L 10.884 9.116 L 1.768 0 L 0 1.768 L 9.116 10.884 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1.116 1.116)\"/>"
    },
    "copy": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 8.793 0 L 13.101 0 L 18.293 0 L 18.293 2.472 L 2.472 2.472 L 2.472 18.292 L 0 18.292 L 0 13.101 L 0 0 L 4.293 0 L 8.793 0 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 0.708 0.708)\"/><path d=\"M 13.101 0 L 8.793 0 L 4.293 0 L 0 0 L 0 13.101 L 0 18.292 L 18.292 18.292 L 18.292 0 L 13.101 0 Z M 15.82 15.82 L 15.82 2.472 L 2.472 2.472 L 2.472 15.82 L 15.82 15.82 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0.708 0.708) matrix(1 0 0 1 4 4)\"/>"
    },
    "download": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 18 L 18 18 L 18 20 L 0 20 L 0 18 Z M 10 8 L 17 8 L 9 16 L 1 8 L 8 8 L 8 0 L 10 0 L 10 8 Z\" fill=\"currentColor\" fill-rule=\"nonzero\" transform=\"matrix(1 0 0 1 3 1)\"/>"
    },
    "menu": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 0 2.5 L 24 2.5 L 24 0 L 0 0 L 0 2.5 Z M 0 12.5 L 24 12.5 L 24 10 L 0 10 L 0 12.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 0 5.750)\"/>"
    },
    "minus": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 22 2.5 L 0 2.5 L 0 0 L 22 0 L 22 2.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1 10.750)\"/>"
    },
    "plus": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 9.75 12.25 L 9.75 22 L 12.25 22 L 12.25 12.25 L 22 12.25 L 22 9.75 L 12.25 9.75 L 12.25 0 L 9.75 0 L 9.75 9.75 L 0 9.75 L 0 12.25 L 9.75 12.25 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(1 0 0 1 1 1)\"/>"
    },
    "search": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 11 0 C 8.083 0 5.285 1.159 3.222 3.222 C 1.159 5.285 0 8.083 0 11 C 0 13.917 1.159 16.715 3.222 18.778 C 5.285 20.841 8.083 22 11 22 C 13.328 22 15.579 21.262 17.442 19.917 L 21.525 24 L 24 21.525 L 19.917 17.442 C 21.262 15.579 22 13.327 22 11 C 22 8.083 20.841 5.285 18.778 3.222 C 16.715 1.159 13.917 0 11 0 Z M 4.99 4.99 C 6.584 3.396 8.746 2.5 11 2.5 C 13.254 2.5 15.416 3.396 17.01 4.99 C 18.604 6.584 19.5 8.746 19.5 11 C 19.5 13.254 18.604 15.416 17.01 17.01 C 15.416 18.604 13.254 19.5 11 19.5 C 8.746 19.5 6.584 18.604 4.99 17.01 C 3.396 15.416 2.5 13.254 2.5 11 C 2.5 8.746 3.396 6.584 4.99 4.99 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/>"
    },
    "triangle-up": {
      viewBox: "0 0 24 24",
      body: "<path d=\"M 13.519 0.432 L 13.087 0 L 12.655 0.432 L 0.432 12.655 L 0 13.087 L 0.432 13.519 L 0.738 13.824 L 0.917 14.003 L 14.003 14.003 L 14.003 0.917 L 13.824 0.738 L 13.519 0.432 Z\" fill=\"currentColor\" fill-rule=\"evenodd\" transform=\"matrix(0 -1 1 0 4.997 19.002)\"/>"
    }
  };
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icon-data.js", error: String((e && e.message) || e) }); }

// components/brand/Illustration.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cerebras isometric illustration — the signature black/white/orange line-art
 * marks from the brand illustration library. Renders a PNG by name.
 *
 * Asset path: pass `basePath` relative to the page consuming the component
 * (default assumes the page sits at project root).
 */
const ILLUSTRATIONS = ["custom", "education", "process", "solutions", "strategy", "wafer", "high-throughput", "wafer-scale-architecture"];
function Illustration({
  name = "wafer",
  size = 220,
  basePath = "assets/illustrations",
  alt,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${name}.png`,
    alt: alt ?? `Cerebras illustration: ${name}`,
    width: size,
    height: "auto",
    style: {
      display: "block",
      width: size,
      height: "auto",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ILLUSTRATIONS, Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cerebras logo — extracted verbatim from the Website Figma. Paths paint
// with currentColor, so set `color` (default ink) to recolor.
const MARK = "<path d=\"M 194.731 359.655 C 171.336 359.655 149.179 354.971 128.949 346.569 C 98.673 333.896 72.8 312.683 54.497 285.961 C 36.194 259.238 25.597 227.143 25.597 192.431 C 25.597 169.29 30.276 147.388 38.946 127.277 C 51.745 97.249 73.213 71.766 100.187 53.721 C 127.16 35.676 159.638 25.208 194.731 25.208 L 194.731 0 C 167.895 0 142.298 5.372 118.903 15.152 C 83.948 29.753 54.222 54.134 33.304 84.852 C 12.248 115.569 0 152.623 0 192.431 C 0 219.016 5.505 244.361 15.276 267.365 C 30.001 301.939 54.772 331.279 85.737 352.079 C 116.839 372.878 154.271 385 194.593 385 L 194.593 359.655 L 194.731 359.655 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 108.031 295.052 C 92.205 281.828 80.369 265.85 72.388 248.356 C 64.406 230.862 60.277 211.991 60.277 192.982 C 60.277 177.83 62.892 162.678 67.984 148.215 C 73.213 133.751 80.92 119.977 91.517 107.442 C 104.728 91.739 120.829 79.893 138.307 71.903 C 155.785 63.914 174.914 59.919 193.905 59.919 C 209.043 59.919 224.319 62.537 238.769 67.633 C 253.357 72.868 267.118 80.581 279.642 91.05 L 296.018 71.628 C 281.156 59.231 264.641 49.864 247.301 43.803 C 229.961 37.605 211.933 34.574 193.905 34.574 C 171.198 34.574 148.628 39.395 127.71 48.9 C 106.792 58.404 87.663 72.592 71.975 91.188 C 59.451 106.064 50.231 122.456 44.038 139.674 C 37.845 156.893 34.818 174.937 34.818 192.982 C 34.818 215.572 39.634 238.163 49.13 258.962 C 58.626 279.762 72.938 298.909 91.654 314.474 L 108.031 295.052 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 147.252 278.66 C 130.6 269.844 117.527 257.034 108.581 242.02 C 99.636 227.005 94.957 209.649 94.957 192.156 C 94.957 176.728 98.535 161.163 106.379 146.699 C 115.187 130.032 128.123 117.084 143.261 108.268 C 158.399 99.315 175.739 94.632 193.355 94.632 C 208.768 94.632 224.457 98.213 239.044 105.927 L 250.879 83.474 C 232.576 73.832 212.759 69.148 193.217 69.286 C 171.06 69.286 149.179 75.209 130.188 86.367 C 111.196 97.524 94.819 114.054 83.81 134.853 C 74.177 153.174 69.498 172.871 69.498 192.156 C 69.498 214.195 75.415 235.959 86.7 254.83 C 97.985 273.839 114.499 289.955 135.417 300.975 L 147.252 278.66 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 194.868 254.417 C 186.198 254.417 177.941 252.626 170.51 249.458 C 159.225 244.775 149.729 236.785 142.986 226.73 C 136.243 216.674 132.252 204.691 132.252 191.742 C 132.252 183.064 134.041 174.8 137.206 167.361 C 141.885 156.204 149.867 146.562 159.913 139.812 C 169.959 133.063 181.932 129.068 194.868 129.068 L 194.868 103.723 C 182.758 103.723 171.198 106.202 160.601 110.61 C 144.775 117.36 131.426 128.379 121.93 142.429 C 112.297 156.617 106.792 173.698 106.792 191.88 C 106.792 204.002 109.269 215.572 113.673 226.179 C 120.417 242.02 131.564 255.381 145.601 264.886 C 159.638 274.252 176.565 279.762 194.868 279.762 L 194.868 254.417 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 215.511 171.769 C 212.621 168.739 209.456 166.259 206.291 164.469 C 203.126 162.678 199.823 161.714 196.382 161.714 C 191.703 161.714 187.712 162.54 183.997 164.193 C 180.419 165.846 177.253 168.05 174.638 170.943 C 172.024 173.698 170.097 177.004 168.721 180.585 C 167.345 184.166 166.794 188.023 166.794 191.88 C 166.794 195.737 167.482 199.594 168.721 203.175 C 170.097 206.757 172.024 210.063 174.638 212.818 C 177.253 215.572 180.281 217.914 183.997 219.567 C 187.575 221.22 191.703 222.047 196.382 222.047 C 200.236 222.047 203.951 221.22 207.254 219.705 C 210.557 218.052 213.447 215.71 215.787 212.68 L 232.576 230.725 C 230.099 233.204 227.209 235.408 223.906 237.199 C 220.603 238.989 217.3 240.504 213.998 241.606 C 210.695 242.708 207.392 243.535 204.364 243.948 C 201.337 244.499 198.584 244.637 196.382 244.637 C 188.813 244.637 181.657 243.397 175.051 240.918 C 168.308 238.438 162.528 234.857 157.711 230.174 C 152.757 225.628 148.904 219.98 146.014 213.506 C 143.124 207.032 141.748 199.732 141.748 191.88 C 141.748 183.891 143.124 176.728 146.014 170.254 C 148.904 163.78 152.757 158.27 157.711 153.587 C 162.666 149.041 168.446 145.46 175.051 142.843 C 181.795 140.363 188.951 139.123 196.382 139.123 C 202.85 139.123 209.318 140.363 215.787 142.843 C 222.255 145.322 228.035 149.179 232.851 154.413 L 215.511 171.769 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 306.89 181.825 C 306.753 174.386 304.413 168.601 300.009 164.331 C 295.468 160.061 289.275 157.995 281.293 157.995 C 273.724 157.995 267.807 160.199 263.403 164.469 C 258.999 168.739 256.247 174.662 255.283 181.825 L 306.89 181.825 Z M 255.421 200.696 C 256.247 208.272 259.137 214.057 264.228 218.327 C 269.32 222.46 275.376 224.664 282.532 224.664 C 288.862 224.664 294.092 223.424 298.358 220.807 C 302.624 218.19 306.34 215.021 309.643 211.027 L 327.671 224.664 C 321.753 231.964 315.285 237.061 307.991 240.229 C 300.698 243.259 293.128 244.775 285.147 244.775 C 277.578 244.775 270.421 243.535 263.816 241.055 C 257.072 238.576 251.292 234.995 246.476 230.311 C 241.521 225.766 237.668 220.118 234.778 213.644 C 231.888 207.17 230.512 199.869 230.512 192.018 C 230.512 184.029 231.888 176.866 234.778 170.392 C 237.668 163.918 241.521 158.408 246.476 153.725 C 251.43 149.179 257.21 145.598 263.816 142.98 C 270.559 140.501 277.715 139.261 285.147 139.261 C 292.165 139.261 298.496 140.501 304.276 142.98 C 310.056 145.46 315.01 148.903 319.138 153.587 C 323.267 158.132 326.432 163.918 328.772 170.667 C 331.111 177.417 332.212 185.268 332.212 194.084 L 332.212 200.971 L 255.421 200.971 L 255.421 200.696 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 342.809 141.603 L 367.993 141.603 L 367.993 157.444 L 368.406 157.444 C 371.158 151.521 375.149 147.113 380.379 143.807 C 385.608 140.639 391.526 138.986 398.132 138.986 C 399.646 138.986 401.159 139.123 402.673 139.399 C 404.187 139.674 405.701 140.088 407.215 140.501 L 407.215 164.744 C 405.15 164.193 403.086 163.78 401.022 163.367 C 398.957 162.953 397.031 162.816 395.104 162.816 C 389.186 162.816 384.507 163.918 380.929 166.122 C 377.351 168.326 374.599 170.805 372.81 173.56 C 370.883 176.315 369.645 179.208 369.094 181.962 C 368.406 184.717 368.131 186.784 368.131 188.299 L 368.131 242.02 L 342.947 242.02 L 342.947 141.603 L 342.809 141.603 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 483.868 181.825 C 483.731 174.386 481.391 168.601 476.987 164.331 C 472.446 160.061 466.253 157.995 458.271 157.995 C 450.702 157.995 444.785 160.199 440.381 164.469 C 435.977 168.739 433.225 174.662 432.261 181.825 L 483.868 181.825 Z M 432.399 200.696 C 433.225 208.272 436.115 214.057 441.206 218.327 C 446.298 222.46 452.354 224.664 459.51 224.664 C 465.84 224.664 471.07 223.424 475.336 220.807 C 479.602 218.19 483.318 215.021 486.621 211.027 L 504.649 224.664 C 498.731 231.964 492.263 237.061 484.969 240.229 C 477.675 243.259 470.106 244.775 462.125 244.775 C 454.556 244.775 447.399 243.535 440.794 241.055 C 434.05 238.576 428.27 234.995 423.454 230.311 C 418.499 225.766 414.646 220.118 411.756 213.644 C 408.866 207.17 407.49 199.869 407.49 192.018 C 407.49 184.029 408.866 176.866 411.756 170.392 C 414.646 163.918 418.499 158.408 423.454 153.725 C 428.408 149.179 434.188 145.598 440.794 142.98 C 447.537 140.501 454.693 139.261 462.125 139.261 C 469.143 139.261 475.474 140.501 481.254 142.98 C 487.034 145.46 491.988 148.903 496.116 153.587 C 500.245 158.132 503.41 163.918 505.75 170.667 C 508.089 177.417 509.19 185.268 509.19 194.084 L 509.19 200.971 L 432.399 200.971 L 432.399 200.696 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 601.67 191.88 C 601.67 188.023 600.982 184.166 599.606 180.585 C 598.23 177.004 596.303 173.698 593.688 170.943 C 591.074 168.188 587.908 165.846 584.193 164.193 C 580.477 162.54 576.348 161.714 571.669 161.714 C 566.99 161.714 562.862 162.54 559.146 164.193 C 555.43 165.846 552.265 168.05 549.65 170.943 C 547.035 173.698 545.109 177.004 543.733 180.585 C 542.356 184.166 541.668 188.023 541.668 191.88 C 541.668 195.737 542.356 199.594 543.733 203.175 C 545.109 206.757 547.035 210.063 549.65 212.818 C 552.265 215.572 555.43 217.914 559.146 219.567 C 562.862 221.22 566.99 222.047 571.669 222.047 C 576.348 222.047 580.477 221.22 584.193 219.567 C 587.908 217.914 591.074 215.71 593.688 212.818 C 596.303 210.063 598.23 206.757 599.606 203.175 C 600.982 199.594 601.67 195.737 601.67 191.88 Z M 542.632 83.612 L 542.632 154.275 L 543.32 154.275 C 544.558 152.623 546.21 150.832 548.136 149.179 C 550.063 147.388 552.54 145.735 555.293 144.22 C 558.183 142.705 561.348 141.465 565.064 140.501 C 568.779 139.537 573.045 138.986 577.862 138.986 C 585.018 138.986 591.762 140.363 597.817 143.118 C 603.872 145.873 609.102 149.592 613.368 154.275 C 617.634 159.097 621.074 164.606 623.414 171.081 C 625.754 177.555 626.992 184.442 626.992 191.88 C 626.992 199.318 625.891 206.206 623.552 212.68 C 621.35 219.154 617.909 224.664 613.643 229.485 C 609.239 234.306 604.01 238.025 597.679 240.642 C 591.486 243.397 584.468 244.775 576.624 244.775 C 569.467 244.775 562.724 243.397 556.394 240.642 C 550.201 237.887 545.246 233.342 541.531 227.281 L 541.118 227.281 L 541.118 242.433 L 516.897 242.433 L 516.897 83.612 L 542.632 83.612 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 637.864 141.603 L 663.048 141.603 L 663.048 157.444 L 663.461 157.444 C 666.214 151.521 670.204 147.113 675.434 143.807 C 680.664 140.639 686.581 138.986 693.187 138.986 C 694.701 138.986 696.214 139.123 697.728 139.399 C 699.242 139.674 700.756 140.088 702.27 140.501 L 702.27 164.744 C 700.205 164.193 698.141 163.78 696.077 163.367 C 694.013 162.953 692.086 162.816 690.159 162.816 C 684.242 162.816 679.563 163.918 675.984 166.122 C 672.406 168.326 669.654 170.805 667.865 173.56 C 665.938 176.315 664.7 179.208 664.149 181.962 C 663.461 184.717 663.186 186.784 663.186 188.299 L 663.186 242.02 L 638.002 242.02 L 638.002 141.603 L 637.864 141.603 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 768.74 197.115 L 763.372 197.115 C 759.794 197.115 755.803 197.252 751.4 197.528 C 746.996 197.803 742.867 198.492 738.876 199.456 C 735.023 200.558 731.72 202.073 728.968 204.002 C 726.215 206.068 724.977 208.823 724.977 212.542 C 724.977 214.884 725.527 216.95 726.628 218.465 C 727.729 220.118 729.105 221.496 730.757 222.598 C 732.408 223.699 734.335 224.526 736.537 225.077 C 738.601 225.628 740.803 225.766 742.867 225.766 C 751.675 225.766 758.143 223.699 762.409 219.567 C 766.538 215.435 768.74 209.787 768.74 202.762 L 768.74 197.115 Z M 769.565 228.383 C 765.85 234.168 761.171 238.301 755.528 240.918 C 749.886 243.535 743.555 244.775 736.812 244.775 C 732.133 244.775 727.591 244.086 723.05 242.846 C 718.509 241.606 714.655 239.678 711.077 237.199 C 707.637 234.719 704.747 231.551 702.683 227.832 C 700.618 224.113 699.517 219.705 699.517 214.608 C 699.517 209.098 700.481 204.553 702.545 200.696 C 704.472 196.839 707.224 193.671 710.527 191.054 C 713.83 188.437 717.683 186.37 722.087 184.855 C 726.491 183.34 731.032 182.1 735.849 181.411 C 740.665 180.585 745.344 180.172 750.299 179.896 C 755.115 179.621 759.657 179.621 763.923 179.621 L 770.253 179.621 L 770.253 176.866 C 770.253 170.53 768.052 165.846 763.648 162.678 C 759.244 159.51 753.602 157.995 746.858 157.995 C 741.491 157.995 736.399 158.959 731.72 160.887 C 727.041 162.816 722.912 165.295 719.61 168.601 L 706.123 155.377 C 711.765 149.592 718.509 145.598 726.078 142.98 C 733.647 140.501 741.491 139.261 749.611 139.261 C 756.904 139.261 762.96 140.088 767.914 141.603 C 772.868 143.256 776.997 145.322 780.3 147.801 C 783.602 150.281 786.08 153.174 787.869 156.479 C 789.658 159.785 790.896 163.091 791.722 166.397 C 792.548 169.703 792.961 173.009 793.098 176.177 C 793.236 179.345 793.373 182.1 793.373 184.442 L 793.373 242.295 L 770.391 242.295 L 770.391 228.383 L 769.565 228.383 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n        <path d=\"M 861.77 169.428 C 856.816 162.54 850.21 159.097 841.953 159.097 C 838.512 159.097 835.21 159.923 832.044 161.576 C 828.741 163.229 827.228 165.984 827.228 169.703 C 827.228 172.733 828.604 175.075 831.219 176.453 C 833.833 177.83 837.274 179.07 841.402 180.034 C 845.531 180.998 849.935 181.962 854.614 183.064 C 859.293 184.166 863.697 185.682 867.825 187.885 C 871.954 190.089 875.257 192.982 878.009 196.839 C 880.624 200.558 882 205.793 882 212.404 C 882 218.465 880.761 223.424 878.147 227.556 C 875.532 231.689 872.229 234.995 867.963 237.474 C 863.834 239.953 859.155 241.744 853.926 242.984 C 848.696 244.086 843.467 244.637 838.375 244.637 C 830.531 244.637 823.237 243.535 816.631 241.331 C 810.025 239.127 804.108 234.995 798.878 229.209 L 815.805 213.506 C 819.108 217.088 822.549 220.118 826.264 222.46 C 829.98 224.801 834.521 225.903 839.889 225.903 C 841.678 225.903 843.604 225.628 845.531 225.215 C 847.458 224.801 849.384 224.113 851.036 223.148 C 852.687 222.184 854.063 220.945 855.164 219.429 C 856.265 217.914 856.678 216.261 856.678 214.333 C 856.678 210.889 855.302 208.272 852.687 206.619 C 850.072 204.966 846.632 203.589 842.503 202.487 C 838.375 201.385 833.971 200.42 829.292 199.594 C 824.613 198.63 820.209 197.252 816.081 195.186 C 811.952 193.12 808.649 190.365 805.897 186.646 C 803.282 183.064 801.906 177.968 801.906 171.494 C 801.906 165.846 803.007 161.025 805.346 156.893 C 807.686 152.76 810.713 149.454 814.567 146.699 C 818.42 144.082 822.686 142.154 827.641 140.776 C 832.595 139.537 837.549 138.848 842.641 138.848 C 849.384 138.848 856.128 139.95 862.733 142.292 C 869.339 144.633 874.706 148.49 878.835 154.138 L 861.77 169.428 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>"; // spiral symbol + wordmark lockup, viewBox 0 0 882 385
const WORDMARK = "<path d=\"M 10.668 16.914 C 11.083 17.029 11.52 17.09 11.971 17.09 C 12.392 17.09 12.801 17.037 13.191 16.937 L 11.298 24 L 8.938 23.368 L 10.668 16.914 Z M 17.366 22.729 L 15.007 23.36 L 13.279 16.913 C 14.12 16.68 14.87 16.228 15.463 15.622 L 17.366 22.729 Z M 8.439 15.58 C 9.02 16.188 9.756 16.646 10.584 16.891 L 5.407 22.067 L 3.68 20.34 L 8.439 15.58 Z M 21.986 18.593 L 20.259 20.32 L 15.511 15.572 C 16.097 14.957 16.524 14.188 16.727 13.333 L 21.986 18.593 Z M 48.192 9.229 C 49.171 9.229 49.834 9.618 50.266 10.237 L 50.295 10.237 L 50.295 9.445 L 52.541 9.445 L 52.541 16.098 C 52.541 17.206 52.152 18.013 51.562 18.546 C 50.914 19.122 49.949 19.366 48.854 19.366 C 46.824 19.366 45.485 18.531 45.255 16.99 L 47.529 16.99 C 47.659 17.379 48.049 17.711 48.826 17.711 C 49.819 17.711 50.237 17.192 50.237 16.3 L 50.237 15.564 L 50.18 15.564 C 49.748 16.054 49.186 16.414 48.293 16.414 C 46.637 16.414 45.096 15.176 45.096 12.915 C 45.096 10.755 46.364 9.229 48.192 9.229 Z M 69.678 9.229 C 71.636 9.229 72.832 10.913 72.832 13.131 C 72.832 15.521 71.55 17.048 69.62 17.048 C 68.67 17.048 67.993 16.674 67.532 16.055 L 67.504 16.055 L 67.504 19.251 L 65.156 19.251 L 65.156 9.445 L 67.402 9.445 L 67.402 10.338 L 67.446 10.338 C 67.95 9.676 68.67 9.229 69.678 9.229 Z M 7.214 13.326 C 7.412 14.168 7.828 14.927 8.399 15.538 L 1.271 17.448 L 0.64 15.089 L 7.214 13.326 Z M 40.811 9.243 C 43.186 9.243 44.741 10.928 44.741 13.146 C 44.741 15.363 43.186 17.048 40.811 17.048 C 38.449 17.048 36.865 15.363 36.865 13.146 C 36.865 10.928 38.449 9.243 40.811 9.243 Z M 57.174 9.243 C 59.55 9.243 61.104 10.928 61.104 13.146 C 61.104 15.363 59.55 17.048 57.174 17.048 C 54.812 17.048 53.229 15.363 53.229 13.146 C 53.229 10.928 54.812 9.243 57.174 9.243 Z M 76.451 9.229 C 78.539 9.229 79.663 10.136 79.778 11.591 L 77.618 11.591 C 77.532 10.929 77.085 10.727 76.438 10.727 C 75.861 10.727 75.415 10.943 75.415 11.403 C 75.415 11.922 76.25 11.994 77.186 12.167 C 78.482 12.383 80.008 12.714 80.008 14.601 C 80.008 16.213 78.583 17.048 76.653 17.048 C 74.493 17.048 73.14 16.055 73.067 14.428 L 75.285 14.428 C 75.372 15.162 75.861 15.521 76.639 15.521 C 77.344 15.521 77.791 15.262 77.791 14.787 C 77.791 14.125 76.898 14.053 75.919 13.88 C 74.637 13.664 73.269 13.319 73.269 11.591 C 73.269 10.036 74.709 9.229 76.451 9.229 Z M 82.938 13.794 C 82.938 14.6 83.297 15.047 84.046 15.047 C 84.852 15.047 85.342 14.442 85.342 13.563 L 85.342 9.445 L 87.689 9.445 L 87.689 16.817 L 85.443 16.817 L 85.443 15.91 L 85.399 15.91 C 84.867 16.63 84.219 17.033 83.196 17.033 C 81.497 17.033 80.604 15.925 80.604 14.283 L 80.604 9.445 L 82.938 9.445 L 82.938 13.794 Z M 31.925 14.657 L 36.547 14.657 L 36.547 16.817 L 29.376 16.817 L 29.376 6.521 L 31.925 6.521 L 31.925 14.657 Z M 64.138 16.817 L 61.791 16.817 L 61.791 9.445 L 64.138 9.445 L 64.138 16.817 Z M 97.653 9.229 C 99.324 9.229 100.159 10.367 100.159 12.022 L 100.159 16.817 L 97.812 16.817 L 97.812 12.44 C 97.812 11.648 97.48 11.188 96.774 11.188 C 96.026 11.188 95.609 11.806 95.608 12.685 L 95.608 16.817 L 93.261 16.817 L 93.261 12.44 C 93.261 11.649 92.93 11.188 92.225 11.188 C 91.49 11.188 91.058 11.806 91.058 12.685 L 91.058 16.817 L 88.711 16.817 L 88.711 9.445 L 90.957 9.445 L 90.957 10.496 L 91 10.496 C 91.461 9.733 92.167 9.229 93.232 9.229 C 94.197 9.229 94.931 9.733 95.306 10.525 L 95.335 10.525 C 95.911 9.633 96.703 9.229 97.653 9.229 Z M 40.796 10.899 C 39.774 10.899 39.241 11.806 39.241 13.146 C 39.241 14.485 39.774 15.378 40.796 15.378 C 41.818 15.378 42.365 14.485 42.365 13.146 C 42.365 11.806 41.818 10.899 40.796 10.899 Z M 57.159 10.899 C 56.137 10.9 55.605 11.807 55.604 13.146 C 55.604 14.485 56.137 15.378 57.159 15.378 C 58.182 15.378 58.729 14.485 58.729 13.146 C 58.729 11.806 58.182 10.899 57.159 10.899 Z M 68.973 11.115 C 67.95 11.115 67.432 12.023 67.432 13.218 C 67.432 14.413 68.008 15.233 69.016 15.233 C 69.908 15.233 70.456 14.471 70.456 13.218 C 70.456 11.951 69.98 11.115 68.973 11.115 Z M 15.056 0.632 L 13.285 7.24 L 18.511 2.014 L 20.238 3.741 L 15.407 8.573 L 22.646 6.634 L 23.279 8.993 L 16.679 10.762 L 23.919 12.701 L 23.286 15.062 L 16.732 13.306 C 16.814 12.952 16.857 12.583 16.857 12.204 C 16.857 9.506 14.669 7.317 11.971 7.317 C 9.272 7.318 7.085 9.506 7.085 12.204 C 7.085 12.585 7.128 12.956 7.211 13.313 L 0 11.38 L 0.632 9.021 L 7.232 10.789 L 1.933 5.489 L 3.66 3.762 L 8.491 8.593 L 6.552 1.354 L 8.912 0.722 L 10.707 7.422 L 12.695 0 L 15.056 0.632 Z M 48.84 11 C 47.962 11 47.386 11.721 47.386 12.844 C 47.386 13.952 47.962 14.672 48.84 14.672 C 49.862 14.672 50.338 13.866 50.338 12.829 C 50.338 11.835 49.819 11 48.84 11 Z M 64.138 8.423 L 61.791 8.423 L 61.791 6.521 L 64.138 6.521 L 64.138 8.423 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"; // "cerebras" wordmark only, viewBox 0 0 100.159 24

/**
 * Cerebras Logo.
 * variant: "lockup" (symbol + wordmark) | "wordmark" (text only).
 * Set height (px) and color.
 */
function Logo({
  variant = "lockup",
  height = 28,
  color = "var(--ink)",
  style,
  ...rest
}) {
  const isLockup = variant === "lockup";
  const vb = isLockup ? "0 0 882 385" : "0 0 100.159 24";
  const ratio = isLockup ? 882 / 385 : 100.159 / 24;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": "Cerebras",
    viewBox: vb,
    height: height,
    width: Math.round(height * ratio),
    fill: "none",
    style: {
      display: "block",
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: isLockup ? MARK : WORDMARK
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the base surface container. Sharp 2px corners, hairline border.
 * tone: light (white) | cream | dark (ink) | darker (black).
 */
function Card({
  tone = "light",
  interactive = false,
  padding = 24,
  children,
  style,
  ...rest
}) {
  const tones = {
    light: {
      bg: "var(--white)",
      fg: "var(--ink)",
      bd: "var(--border)"
    },
    cream: {
      bg: "var(--paper)",
      fg: "var(--ink)",
      bd: "transparent"
    },
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)",
      bd: "transparent"
    },
    darker: {
      bg: "var(--black)",
      fg: "var(--white)",
      bd: "transparent"
    }
  }[tone];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: tones.bg,
      color: tones.fg,
      border: `1px solid ${tones.bd}`,
      borderRadius: "var(--radius-xs)",
      padding,
      boxSizing: "border-box",
      transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "var(--shadow-md)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — a big performance metric in the brand's mono/Manrope mix.
 * Used in stats bands (tokens/sec, ×faster, parameters, …).
 */
function StatCard({
  value,
  unit,
  label,
  tone = "light",
  accent = false,
  style,
  ...rest
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      padding: "32px",
      background: dark ? "var(--ink)" : "var(--white)",
      border: `1px solid ${dark ? "transparent" : "var(--border)"}`,
      borderRadius: "var(--radius-xs)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--fs-display-l)",
      lineHeight: 0.95,
      letterSpacing: "var(--ls-display)",
      color: accent ? "var(--orange)" : dark ? "var(--white)" : "var(--ink)"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-h4)",
      letterSpacing: "var(--ls-mono)",
      color: accent ? "var(--orange)" : dark ? "var(--white)" : "var(--ink)"
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      color: "var(--grey-500)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small count/status indicator. tone: orange | dark | green | neutral.
 */
function Badge({
  tone = "orange",
  children,
  style,
  ...rest
}) {
  const tones = {
    orange: {
      bg: "var(--orange)",
      fg: "var(--ink)"
    },
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)"
    },
    green: {
      bg: "var(--green)",
      fg: "var(--ink)"
    },
    neutral: {
      bg: "var(--grey-200)",
      fg: "var(--grey-700)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "20px",
      height: "20px",
      padding: "0 6px",
      borderRadius: "var(--radius-xs)",
      background: tones.bg,
      color: tones.fg,
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "11px",
      lineHeight: 1,
      letterSpacing: "var(--ls-mono)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cerebras Button — the primary call to action.
 * Mono uppercase label, sharp 2px corners, optional trailing icon.
 * Variants: primary (orange), dark (ink), light (cream), outline, ghost.
 */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const palette = {
    primary: {
      bg: "var(--orange)",
      fg: "var(--ink)",
      bd: "transparent",
      hover: "var(--orange-bright)"
    },
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)",
      bd: "transparent",
      hover: "var(--grey-800)"
    },
    light: {
      bg: "var(--paper)",
      fg: "var(--ink)",
      bd: "transparent",
      hover: "var(--grey-200)"
    },
    outline: {
      bg: "transparent",
      fg: "var(--ink)",
      bd: "var(--border-strong)",
      hover: "var(--paper)"
    },
    ghost: {
      bg: "transparent",
      fg: "var(--ink)",
      bd: "transparent",
      hover: "var(--paper)"
    }
  }[variant];
  const sizes = {
    sm: {
      pad: "10px 14px",
      fs: "12px"
    },
    md: {
      pad: "16px 20px",
      fs: "13px"
    },
    lg: {
      pad: "20px 28px",
      fs: "14px"
    }
  }[size];
  const baseStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: sizes.pad,
    borderRadius: "var(--radius-xs)",
    border: `1px solid ${palette.bd}`,
    background: palette.bg,
    color: palette.fg,
    fontFamily: "var(--font-mono)",
    fontWeight: "var(--fw-semibold)",
    fontSize: sizes.fs,
    lineHeight: 1,
    letterSpacing: "var(--ls-mono)",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap",
    transition: "background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    boxSizing: "border-box",
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.background = palette.hover;
  };
  const onLeave = e => {
    if (!disabled) e.currentTarget.style.background = palette.bg;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = "scale(1)";
  };
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "lg" ? 20 : 16
  }) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === "left" ? glyph : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, icon && iconPosition === "right" ? glyph : null);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: baseStyle,
    disabled: href ? undefined : disabled,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), content);
}

/**
 * Square icon-only button. Same sharp corners; defaults to a dark fill.
 */
function IconButton({
  icon,
  variant = "dark",
  size = 44,
  disabled = false,
  style,
  ...rest
}) {
  const palette = {
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)",
      hover: "var(--grey-800)"
    },
    light: {
      bg: "var(--paper)",
      fg: "var(--ink)",
      hover: "var(--grey-200)"
    },
    outline: {
      bg: "transparent",
      fg: "var(--ink)",
      hover: "var(--paper)",
      bd: "var(--border-strong)"
    },
    primary: {
      bg: "var(--orange)",
      fg: "var(--ink)",
      hover: "var(--orange-bright)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      padding: 0,
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${palette.bd || "transparent"}`,
      background: palette.bg,
      color: palette.fg,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur) var(--ease-out)",
      ...style
    },
    disabled: disabled,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = palette.hover;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = palette.bg;
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { Button, IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a selectable filter pill (mono label, sharp corners).
 * Selected state fills with ink; idle is hairline-outlined.
 */
function Chip({
  selected = false,
  icon,
  children,
  onClick,
  style,
  ...rest
}) {
  const idle = {
    bg: "transparent",
    fg: "var(--grey-600)",
    bd: "var(--border)"
  };
  const on = {
    bg: "var(--ink)",
    fg: "var(--white)",
    bd: "var(--ink)"
  };
  const c = selected ? on : idle;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "8px 12px",
      borderRadius: "var(--radius-xs)",
      background: c.bg,
      color: c.fg,
      border: `1px solid ${c.bd}`,
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-caption)",
      lineHeight: 1,
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all var(--dur) var(--ease-out)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / search field. Sharp 2px corners, hairline border,
 * orange focus ring. Pass `icon="search"` for the search variant.
 */
function Input({
  icon,
  type = "text",
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "0 12px",
      height: "44px",
      background: "var(--white)",
      border: `1px solid ${focus ? "var(--orange)" : "var(--border)"}`,
      borderRadius: "var(--radius-xs)",
      transition: "border-color var(--dur) var(--ease-out)",
      ...wrapStyle
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: "var(--grey-500)"
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--ink)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-sm)",
      letterSpacing: "var(--ls-tight)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category Label — the small mono tag used on cards and articles.
 * Each editorial category has a fixed color from the Cerebras palette.
 */
const CATEGORY = {
  blog: {
    bg: "#FF985D",
    fg: "var(--ink)"
  },
  news: {
    bg: "var(--purple-300)",
    fg: "var(--white)"
  },
  "press-release": {
    bg: "var(--teal-300)",
    fg: "var(--ink)"
  },
  event: {
    bg: "#A2E930",
    fg: "var(--ink)"
  },
  whitepaper: {
    bg: "var(--ink)",
    fg: "var(--white)"
  },
  publication: {
    bg: "var(--ink)",
    fg: "var(--white)"
  },
  spotlight: {
    bg: "var(--ink)",
    fg: "var(--white)"
  },
  techtalk: {
    bg: "var(--ink)",
    fg: "var(--white)"
  },
  award: {
    bg: "var(--ink)",
    fg: "var(--white)"
  },
  default: {
    bg: "var(--paper)",
    fg: "var(--ink)"
  }
};
function Label({
  category = "default",
  children,
  style,
  ...rest
}) {
  const c = CATEGORY[category] || CATEGORY.default;
  const text = children ?? category.replace("-", " ");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 7px",
      borderRadius: "var(--radius-xs)",
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-label)",
      lineHeight: 1,
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), text);
}

/**
 * Generic Tag — neutral mono pill for metadata (read time, model names, etc).
 * `tone`: neutral | dark | orange | outline.
 */
function Tag({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--grey-100)",
      fg: "var(--grey-600)",
      bd: "transparent"
    },
    dark: {
      bg: "var(--ink)",
      fg: "var(--white)",
      bd: "transparent"
    },
    orange: {
      bg: "var(--orange-100)",
      fg: "var(--orange-bright)",
      bd: "transparent"
    },
    outline: {
      bg: "transparent",
      fg: "var(--ink)",
      bd: "var(--border)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 8px",
      borderRadius: "var(--radius-xs)",
      background: tones.bg,
      color: tones.fg,
      border: `1px solid ${tones.bd}`,
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-caption)",
      lineHeight: 1,
      letterSpacing: "var(--ls-mono)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/cards/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArticleCard — newsroom / blog tile. Image, category label, title, date.
 * Defaults to the dark textured treatment used on the Cerebras site.
 */
function ArticleCard({
  image,
  category = "news",
  categoryLabel,
  title,
  date,
  href,
  tone = "dark",
  style,
  ...rest
}) {
  const dark = tone === "dark";
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href || "#",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      padding: "24px",
      textDecoration: "none",
      background: dark ? "var(--ink-900)" : "var(--white)",
      border: `1px solid ${dark ? "transparent" : "var(--border)"}`,
      borderRadius: "var(--radius-xs)",
      boxSizing: "border-box",
      transition: "transform var(--dur) var(--ease-out)",
      transform: hover ? "translateY(-3px)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      background: image ? `url(${image}) center/cover no-repeat` : "var(--grey-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.3,
      letterSpacing: "var(--ls-display)",
      color: dark ? "var(--white)" : "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--grey-500)"
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    category: category
  }, categoryLabel), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    style: {
      color: dark ? "var(--white)" : "var(--ink)",
      opacity: hover ? 1 : 0.5,
      transition: "opacity var(--dur)"
    }
  }))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Site footer — dark ink surface, mono column headers, newsletter signup.
 * Mirrors the Cerebras website footer.
 */
const DEFAULT_COLUMNS = [{
  head: "Products",
  links: ["Inference", "Training", "Cloud", "Wafer-Scale Engine", "Pricing"]
}, {
  head: "Developers",
  links: ["Documentation", "API Reference", "Model Catalog", "Status"]
}, {
  head: "Company",
  links: ["About", "Careers", "Partners", "Contact"]
}, {
  head: "News",
  links: ["In the News", "Press Kit"]
}, {
  head: "Insights",
  links: ["Customer Spotlight", "Blog", "Publications", "Whitepapers"]
}];
const HEAD = {
  fontFamily: "var(--font-mono)",
  fontWeight: "var(--fw-semibold)",
  fontSize: "12px",
  letterSpacing: "var(--ls-mono)",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "16px"
};
const LINK = {
  display: "block",
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-medium)",
  fontSize: "var(--fs-body-sm)",
  lineHeight: 2,
  letterSpacing: "var(--ls-tight)"
};
function Footer({
  columns = DEFAULT_COLUMNS,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--ink)",
      color: "var(--white)",
      padding: "64px 48px 40px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "48px",
      justifyContent: "space-between",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "56px",
      flexWrap: "wrap"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.head,
    style: {
      minWidth: "120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: HEAD
  }, col.head), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: LINK,
    onMouseEnter: e => e.currentTarget.style.color = "var(--orange)",
    onMouseLeave: e => e.currentTarget.style.color = "rgba(255,255,255,0.82)"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: "260px",
      maxWidth: "320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: HEAD
  }, "Get updates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      marginBottom: "16px",
      color: "var(--white)",
      letterSpacing: "var(--ls-tight)"
    }
  }, "Newsletter signup"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "you@company.com",
    wrapStyle: {
      flex: 1,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid var(--border-on-dark)"
    },
    style: {
      color: "var(--white)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    icon: "arrow-right"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "var(--container-max)",
      margin: "56px auto 0",
      paddingTop: "28px",
      borderTop: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 24,
    color: "var(--white)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "24px",
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: "var(--ls-mono)",
      color: "rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "1237 E. Arques Ave Sunnyvale, CA 94085"), /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Cerebras. All rights reserved."))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top navigation — floating white bar with the logo, primary menu and CTAs.
 * Matches the Cerebras website header. Pass your own `items` to customize.
 */
const DEFAULT_ITEMS = [{
  label: "Products",
  hasMenu: true
}, {
  label: "Customers"
}, {
  label: "Developers"
}, {
  label: "Resources"
}, {
  label: "Pricing"
}, {
  label: "Company"
}];
function Navigation({
  items = DEFAULT_ITEMS,
  onGetStarted,
  floating = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      width: "100%",
      boxSizing: "border-box",
      padding: floating ? "20px 32px" : "20px 48px",
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(60px)",
      WebkitBackdropFilter: "blur(60px)",
      borderRadius: floating ? "var(--radius-pill)" : 0,
      border: floating ? "1px solid var(--border)" : "none",
      borderBottom: floating ? "1px solid var(--border)" : "1px solid var(--border)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    href: it.href || "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      color: "var(--ink)",
      textDecoration: "none",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-sm)",
      letterSpacing: "var(--ls-tight)",
      transition: "color var(--dur) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--orange)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--ink)"
  }, it.label, it.hasMenu ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 12
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    variant: "dark",
    size: 44
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "light",
    size: "md"
  }, "Log in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: onGetStarted
  }, "Get started")));
}
Object.assign(__ds_scope, { Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navigation.jsx", error: String((e && e.message) || e) }); }

// components/social/DisplayAd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DisplayAd — Cerebras paid web-banner surface (IAB standard units).
 * Same campaign DNA as SocialPost: the warm orange-glow gradient, a BOLD
 * UPPERCASE Manrope headline and the white logo. Short/wide units lay the
 * headline and logo out in a row; tall units stack headline → (image) →
 * cta → logo. Renders at the unit's native pixel size; scale via `style`.
 */
const FORMATS = {
  // size key                 w     h   orient    fs   logoH  pad
  "leaderboard": {
    w: 728,
    h: 90,
    orient: "row",
    fs: 30,
    logoH: 26,
    pad: 22
  },
  "super-leaderboard": {
    w: 970,
    h: 90,
    orient: "row",
    fs: 32,
    logoH: 26,
    pad: 26
  },
  "billboard": {
    w: 970,
    h: 250,
    orient: "row",
    fs: 54,
    logoH: 34,
    pad: 44
  },
  "medium-rectangle": {
    w: 300,
    h: 250,
    orient: "stack",
    fs: 30,
    logoH: 22,
    pad: 24
  },
  "half-page": {
    w: 300,
    h: 600,
    orient: "stack",
    fs: 46,
    logoH: 28,
    pad: 28
  },
  "skyscraper": {
    w: 160,
    h: 600,
    orient: "stack",
    fs: 28,
    logoH: 18,
    pad: 18
  },
  "large-mobile": {
    w: 320,
    h: 100,
    orient: "row",
    fs: 26,
    logoH: 22,
    pad: 20
  },
  "mobile-leaderboard": {
    w: 320,
    h: 50,
    orient: "row",
    fs: 17,
    logoH: 15,
    pad: 14
  }
};
function DisplayAd({
  headline = "The world's fastest AI",
  size = "leaderboard",
  image,
  cta,
  logo = true,
  style,
  ...rest
}) {
  const f = FORMATS[size] || FORMATS.leaderboard;
  const row = f.orient === "row";
  const frame = {
    position: "relative",
    width: f.w,
    height: f.h,
    maxWidth: "100%",
    borderRadius: "var(--radius-xs)",
    overflow: "hidden",
    background: "var(--gradient-display)",
    boxSizing: "border-box",
    color: "var(--white)",
    display: "flex",
    flexDirection: row ? "row" : "column",
    alignItems: "center",
    justifyContent: row ? "space-between" : "space-between",
    padding: `${row ? Math.round(f.pad * 0.6) : f.pad}px ${f.pad}px`,
    gap: row ? f.pad : Math.round(f.pad * 0.5),
    ...style
  };
  const head = {
    margin: 0,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: f.fs,
    lineHeight: 0.9,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    textAlign: row ? "left" : "center",
    textWrap: "balance"
  };
  const ctaEl = cta ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: Math.max(10, Math.round(f.fs * 0.34)),
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "0.5em 0.85em",
      border: "1px solid rgba(255,255,255,0.45)",
      borderRadius: "var(--radius-xs)",
      whiteSpace: "nowrap"
    }
  }, cta) : null;
  const logoEl = logo ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: f.logoH,
    color: "var(--white)",
    style: {
      flex: "none"
    }
  }) : null;
  if (row) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: frame
    }, rest), /*#__PURE__*/React.createElement("h3", {
      style: {
        ...head,
        flex: "1 1 auto",
        minWidth: 0
      }
    }, headline), ctaEl, logoEl);
  }

  // Stacked (tall / boxy units)
  return /*#__PURE__*/React.createElement("div", _extends({
    style: frame
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: head
  }, headline), image ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      alignSelf: "stretch",
      minHeight: 0,
      margin: `${Math.round(f.pad * 0.4)}px 0`,
      background: `url(${image}) center/contain no-repeat`
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: Math.round(f.pad * 0.5)
    }
  }, ctaEl, logoEl));
}
Object.assign(__ds_scope, { DisplayAd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/DisplayAd.jsx", error: String((e && e.message) || e) }); }

// components/social/SocialPost.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialPost — the Cerebras campaign / social-ad surface.
 * Signature warm orange-glow gradient, big BOLD UPPERCASE Manrope headline,
 * white Cerebras logo. Used across LinkedIn, paid social, airport & web ads.
 *
 * format sets the aspect ratio; the headline scales to the frame width.
 */
const FORMATS = {
  square: {
    ratio: "1 / 1",
    w: 540
  },
  portrait: {
    ratio: "4 / 5",
    w: 480
  },
  story: {
    ratio: "9 / 16",
    w: 360
  },
  landscape: {
    ratio: "16 / 9",
    w: 640
  },
  wide: {
    ratio: "1.91 / 1",
    w: 640
  }
};
function SocialPost({
  headline = "THE WORLD'S BIGGEST CHIP",
  format = "square",
  image,
  eyebrow,
  align = "top",
  logo = true,
  style,
  ...rest
}) {
  const f = FORMATS[format] || FORMATS.square;
  // Headline scales with frame width (matches the ~10.8% Figma ratio).
  const fs = `clamp(20px, ${(f.w * 0.108).toFixed(0)}px, 12vw)`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: f.w,
      maxWidth: "100%",
      aspectRatio: f.ratio,
      borderRadius: "var(--radius-xs)",
      overflow: "hidden",
      background: "var(--gradient-display)",
      display: "flex",
      flexDirection: "column",
      justifyContent: align === "center" ? "center" : "flex-start",
      padding: "clamp(20px, 7%, 56px)",
      boxSizing: "border-box",
      color: "var(--white)",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "clamp(10px,2.6%,15px)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.85)",
      textAlign: "center",
      marginBottom: "14px"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 0.9,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      textAlign: "center"
    }
  }, headline), image ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      margin: "24px 0",
      background: `url(${image}) center/contain no-repeat`
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), logo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: Math.max(20, Math.round(f.w * 0.06)),
    color: "var(--white)"
  })) : null);
}
Object.assign(__ds_scope, { SocialPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTA.jsx
try { (() => {
// Cerebras website — closing CTA band over the abstract render.
function CTA() {
  const {
    Button
  } = window.CerebrasDesignSystem_0bbfb2;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "CTA",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      margin: "12px",
      padding: "96px 72px",
      textAlign: "center",
      background: "var(--orange)",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: "24px",
      opacity: 0.7
    }
  }, "// Get started in <30 seconds"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 auto 36px",
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "64px",
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      maxWidth: "720px"
    }
  }, "Build the fastest & smartest apps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    icon: "arrow-right"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: "rgba(26,26,26,0.3)"
    }
  }, "Talk to sales")));
}
Object.assign(window, {
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// Cerebras website — Wafer feature + three value-prop cards with illustrations.
function Features() {
  const {
    Button,
    Card,
    Illustration,
    Tag
  } = window.CerebrasDesignSystem_0bbfb2;
  const feats = [{
    name: "high-throughput",
    title: "Code at the speed of thought",
    body: "Serve open models in seconds — OpenAI, Qwen, Llama and more — with a single API key.",
    link: "Read more: Cline"
  }, {
    name: "strategy",
    title: "Agents that never stall",
    body: "Execute multi-step workflows without delays or timeouts.",
    link: "Case study: NinjaTech"
  }, {
    name: "wafer",
    title: "Instant answers",
    body: "Complex reasoning in under a second — perfect for deep search, copilots and analysis.",
    link: "Read more: AlphaSense"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Wafer",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "center",
      padding: "72px",
      background: "var(--bg-cream)",
      borderRadius: "var(--radius-2xl)",
      margin: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "orange",
    style: {
      marginBottom: "20px"
    }
  }, "Purpose-built for AI"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "44px",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, "The AI chip company that is up to 15\xD7 faster than GPUs"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
      color: "var(--grey-700)"
    }
  }, "The Cerebras Wafer-Scale Engine is purpose-built for ultra-fast AI. It is 58\xD7 larger than GPUs \u2014 designed for builders who want to do extraordinary things."), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    icon: "arrow-right"
  }, "Explore the WSE-3")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1 / 1",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "url(../../assets/imagery/wafer-planview.png) center/cover no-repeat"
    }
  })), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Value props",
    style: {
      padding: "72px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 40px",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "40px",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "var(--ink)",
      maxWidth: "640px"
    }
  }, "The Cerebras advantage \u2014 build products that others can't"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px"
    }
  }, feats.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.name,
    tone: "light",
    interactive: true,
    padding: 32,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    name: f.name,
    size: 140,
    basePath: "../../assets/illustrations"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "22px",
      letterSpacing: "-0.02em",
      color: "var(--ink)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: 1.5,
      color: "var(--grey-700)",
      flex: 1
    }
  }, f.body), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "var(--orange)"
    }
  }, f.link, " \u2192"))))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Cerebras website — Hero section. Dark, full-bleed, with the WSE wafer render.
function Hero() {
  const {
    Button
  } = window.CerebrasDesignSystem_0bbfb2;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: "relative",
      background: "var(--ink)",
      color: "var(--white)",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      margin: "12px",
      minHeight: "600px",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      left: "46%",
      background: "url(../../assets/imagery/photo-1.jpg) center/cover no-repeat",
      maskImage: "linear-gradient(90deg, transparent, #000 26%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 26%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 72px",
      maxWidth: "720px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: "24px"
    }
  }, "// Cerebras Inference"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "80px",
      lineHeight: 0.92,
      letterSpacing: "-0.02em"
    }
  }, "1,000 Tokens", /*#__PURE__*/React.createElement("br", null), "per Second"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px 0 40px",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
      color: "rgba(255,255,255,0.7)",
      maxWidth: "440px"
    }
  }, "The fastest trillion-parameter model on earth. Purpose-built silicon, no GPUs, no compromises."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: "var(--white)",
      borderColor: "rgba(255,255,255,0.3)"
    }
  }, "View benchmarks"))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Newsroom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cerebras website — Newsroom grid of ArticleCards (dark band).
function Newsroom() {
  const {
    ArticleCard,
    Chip,
    Button
  } = window.CerebrasDesignSystem_0bbfb2;
  const [filter, setFilter] = React.useState("all");
  const items = [{
    category: "press-release",
    categoryLabel: "Press Release",
    title: "Cerebras and Mayo Clinic unveil best-in-class genomic foundation model",
    date: "January 29, 2025",
    image: "../../assets/imagery/photo-2.jpg"
  }, {
    category: "news",
    categoryLabel: "News",
    title: "How faster inference gives cybersecurity companies the edge",
    date: "February 12, 2025",
    image: "../../assets/imagery/photo-1.jpg"
  }, {
    category: "blog",
    categoryLabel: "Blog",
    title: "Serving Llama 3.1 405B at 1,000 tokens per second",
    date: "March 4, 2025",
    image: "../../assets/imagery/wafer-planview.png"
  }];
  const filters = ["all", "news", "blog", "press-release"];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Newsroom",
    style: {
      background: "var(--ink)",
      padding: "72px",
      borderRadius: "var(--radius-2xl)",
      margin: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "32px",
      flexWrap: "wrap",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "40px",
      letterSpacing: "-0.02em",
      color: "var(--white)"
    }
  }, "In the newsroom"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f),
    style: filter === f ? {
      background: "var(--white)",
      color: "var(--ink)",
      borderColor: "var(--white)"
    } : {
      color: "rgba(255,255,255,0.7)",
      borderColor: "var(--border-on-dark)"
    }
  }, f.replace("-", " "))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px"
    }
  }, items.filter(it => filter === "all" || it.category === filter).map((it, i) => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: i,
    tone: "dark"
  }, it)))));
}
Object.assign(window, {
  Newsroom
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Newsroom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Stats.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cerebras website — Stats band. Big Manrope-Light figures, mono captions.
function Stats() {
  const {
    StatCard
  } = window.CerebrasDesignSystem_0bbfb2;
  const stats = [{
    value: "1,000",
    unit: "tok/s",
    label: "Llama 70B inference",
    accent: true
  }, {
    value: "58×",
    label: "Larger than a GPU"
  }, {
    value: "44GB",
    label: "On-chip SRAM"
  }, {
    value: "900K",
    label: "AI-optimized cores"
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Stats",
    style: {
      padding: "72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--grey-500)",
      marginBottom: "32px"
    }
  }, "// The Wafer-Scale Engine 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: i
  }, s)))));
}
Object.assign(window, {
  Stats
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Stats.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ILLUSTRATIONS = __ds_scope.ILLUSTRATIONS;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navigation = __ds_scope.Navigation;

__ds_ns.DisplayAd = __ds_scope.DisplayAd;

__ds_ns.SocialPost = __ds_scope.SocialPost;

})();
