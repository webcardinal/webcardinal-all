import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { B as BindModel, C as CustomTheme, T as TableOfContentProperty } from './index-d9991986.js';

const iconModels = [
  {
    "group": "a11y",
    "id": "american-sign-language-interpreting",
    "name": "American Sign Language"
  },
  {
    "group": "a11y",
    "id": "audio-description",
    "name": "Audio Description"
  },
  {
    "group": "a11y",
    "id": "assistive-listening-systems",
    "name": "Assistive Listening Systems"
  },
  {
    "group": "a11y",
    "id": "blind",
    "name": "Blind"
  },
  {
    "group": "a11y",
    "id": "braille",
    "name": "Braille"
  },
  {
    "group": "a11y",
    "id": "deaf",
    "name": "Deaf"
  },
  {
    "group": "a11y",
    "id": "low-vision",
    "name": "Low Vision"
  },
  {
    "group": "a11y",
    "id": "volume-control-phone",
    "name": "Phone Volume Control"
  },
  {
    "group": "a11y",
    "id": "sign-language",
    "name": "Sign Language"
  },
  {
    "group": "a11y",
    "id": "universal-access",
    "name": "Universal Access"
  },
  {
    "group": "brand",
    "id": "500px",
    "name": "500px"
  },
  {
    "group": "brand",
    "id": "adn",
    "name": "ADN"
  },
  {
    "group": "brand",
    "id": "amazon",
    "name": "Amazon"
  },
  {
    "group": "brand",
    "id": "android",
    "name": "Android"
  },
  {
    "group": "brand",
    "id": "angellist",
    "name": "AngelList"
  },
  {
    "group": "brand",
    "id": "apple",
    "name": "Apple"
  },
  {
    "group": "brand",
    "id": "black-tie",
    "name": "BlackTie"
  },
  {
    "group": "brand",
    "id": "behance",
    "name": "Behance"
  },
  {
    "group": "brand",
    "id": "behance-square",
    "name": "Behance"
  },
  {
    "group": "brand",
    "id": "bitbucket",
    "name": "Bitbucket"
  },
  {
    "group": "brand",
    "id": "bluetooth",
    "name": "Bluetooth"
  },
  {
    "group": "brand",
    "id": "bluetooth-b",
    "name": "Bluetooth"
  },
  {
    "group": "brand",
    "id": "bitbucket-square",
    "name": "Bitbucket"
  },
  {
    "group": "brand",
    "id": "buysellads",
    "name": "BuySellAds"
  },
  {
    "group": "brand",
    "id": "chrome",
    "name": "Chrome"
  },
  {
    "group": "brand",
    "id": "codepen",
    "name": "CodePen"
  },
  {
    "group": "brand",
    "id": "codiepie",
    "name": "Codie Pie"
  },
  {
    "group": "brand",
    "id": "connectdevelop",
    "name": "Connect + Develop"
  },
  {
    "group": "brand",
    "id": "contao",
    "name": "Contao"
  },
  {
    "group": "brand",
    "id": "creative-commons",
    "name": "Creative Commons"
  },
  {
    "group": "brand",
    "id": "css3",
    "name": "CSS3"
  },
  {
    "group": "brand",
    "id": "dashcube",
    "name": "Dashcube"
  },
  {
    "group": "brand",
    "id": "delicious",
    "name": "Delicious"
  },
  {
    "group": "brand",
    "id": "deviantart",
    "name": "deviantART"
  },
  {
    "group": "brand",
    "id": "digg",
    "name": "Digg"
  },
  {
    "group": "brand",
    "id": "dribbble",
    "name": "Dribbble"
  },
  {
    "group": "brand",
    "id": "dropbox",
    "name": "DropBox"
  },
  {
    "group": "brand",
    "id": "drupal",
    "name": "Drupal"
  },
  {
    "group": "brand",
    "id": "empire",
    "name": "Empire"
  },
  {
    "group": "brand",
    "id": "edge",
    "name": "Edge"
  },
  {
    "group": "brand",
    "id": "envira",
    "name": "Envira"
  },
  {
    "group": "brand",
    "id": "expeditedssl",
    "name": "ExpeditedSSL"
  },
  {
    "group": "brand",
    "id": "facebook-official",
    "name": "Facebook"
  },
  {
    "group": "brand",
    "id": "facebook-square",
    "name": "Facebook"
  },
  {
    "group": "brand",
    "id": "facebook",
    "name": "Facebook"
  },
  {
    "group": "brand",
    "id": "firefox",
    "name": "Firefox"
  },
  {
    "group": "brand",
    "id": "flickr",
    "name": "Flickr"
  },
  {
    "group": "brand",
    "id": "fonticons",
    "name": "FontIcons"
  },
  {
    "group": "brand",
    "id": "fort-awesome",
    "name": "Fort Awesome"
  },
  {
    "group": "brand",
    "id": "forumbee",
    "name": "Forumbee"
  },
  {
    "group": "brand",
    "id": "foursquare",
    "name": "Foursquare"
  },
  {
    "group": "brand",
    "id": "get-pocket",
    "name": "Pocket"
  },
  {
    "group": "brand",
    "id": "git",
    "name": "Git"
  },
  {
    "group": "brand",
    "id": "git-square",
    "name": "Git"
  },
  {
    "group": "brand",
    "id": "github",
    "name": "GitHub"
  },
  {
    "group": "brand",
    "id": "gitlab",
    "name": "Gitlab"
  },
  {
    "group": "brand",
    "id": "github-alt",
    "name": "GitHub"
  },
  {
    "group": "brand",
    "id": "github-square",
    "name": "GitHub"
  },
  {
    "group": "brand",
    "id": "gittip",
    "name": "GitTip"
  },
  {
    "group": "brand",
    "id": "glide",
    "name": "Glide"
  },
  {
    "group": "brand",
    "id": "glide-g",
    "name": "Glide"
  },
  {
    "group": "brand",
    "id": "google",
    "name": "Google"
  },
  {
    "group": "brand",
    "id": "google-plus",
    "name": "Google+"
  },
  {
    "group": "brand",
    "id": "google-plus-square",
    "name": "Google+"
  },
  {
    "group": "brand",
    "id": "hacker-news",
    "name": "Hacker News"
  },
  {
    "group": "brand",
    "id": "houzz",
    "name": "Houzz"
  },
  {
    "group": "brand",
    "id": "html5",
    "name": "HTML5"
  },
  {
    "group": "brand",
    "id": "instagram",
    "name": "Instagram"
  },
  {
    "group": "brand",
    "id": "internet-explorer",
    "name": "Internet Explorer"
  },
  {
    "group": "brand",
    "id": "ioxhost",
    "name": "IoxHost"
  },
  {
    "group": "brand",
    "id": "joomla",
    "name": "Joomla"
  },
  {
    "group": "brand",
    "id": "jsfiddle",
    "name": "JSFiddle"
  },
  {
    "group": "brand",
    "id": "lastfm",
    "name": "Last.fm"
  },
  {
    "group": "brand",
    "id": "lastfm-square",
    "name": "Last.fm"
  },
  {
    "group": "brand",
    "id": "leanpub",
    "name": "Leanpub"
  },
  {
    "group": "brand",
    "id": "linkedin",
    "name": "LinkedIn"
  },
  {
    "group": "brand",
    "id": "linkedin-square",
    "name": "LinkedIn"
  },
  {
    "group": "brand",
    "id": "linux",
    "name": "Linux"
  },
  {
    "group": "brand",
    "id": "maxcdn",
    "name": "MaxCDN"
  },
  {
    "group": "brand",
    "id": "meanpath",
    "name": "meanpath"
  },
  {
    "group": "brand",
    "id": "medium",
    "name": "Medium"
  },
  {
    "group": "brand",
    "id": "mixcloud",
    "name": "Mixcloud"
  },
  {
    "group": "brand",
    "id": "modx",
    "name": "MODX"
  },
  {
    "group": "brand",
    "id": "odnoklassniki",
    "name": "Odnoklassniki"
  },
  {
    "group": "brand",
    "id": "odnoklassniki-square",
    "name": "Odnoklassniki"
  },
  {
    "group": "brand",
    "id": "opencart",
    "name": "OpenCart"
  },
  {
    "group": "brand",
    "id": "openid",
    "name": "OpenID"
  },
  {
    "group": "brand",
    "id": "opera",
    "name": "Opera"
  },
  {
    "group": "brand",
    "id": "optin-monster",
    "name": "OptinMonster"
  },
  {
    "group": "brand",
    "id": "pagelines",
    "name": "Pagelines"
  },
  {
    "group": "brand",
    "id": "pied-piper",
    "name": "Pied Piper"
  },
  {
    "group": "brand",
    "id": "pied-piper-alt",
    "name": "Pied Piper"
  },
  {
    "group": "brand",
    "id": "pinterest",
    "name": "Pinterest"
  },
  {
    "group": "brand",
    "id": "pinterest-p",
    "name": "Pinterest"
  },
  {
    "group": "brand",
    "id": "pinterest-square",
    "name": "Pinterest"
  },
  {
    "group": "brand",
    "id": "product-hunt",
    "name": "Product Hunt"
  },
  {
    "group": "brand",
    "id": "qq",
    "name": "QQ"
  },
  {
    "group": "brand",
    "id": "reddit",
    "name": "reddit"
  },
  {
    "group": "brand",
    "id": "reddit-alien",
    "name": "reddit"
  },
  {
    "group": "brand",
    "id": "reddit-square",
    "name": "reddit"
  },
  {
    "group": "brand",
    "id": "renren",
    "name": "Renren"
  },
  {
    "group": "brand",
    "id": "safari",
    "name": "Safari"
  },
  {
    "group": "brand",
    "id": "scribd",
    "name": "Scribd"
  },
  {
    "group": "brand",
    "id": "sellsy",
    "name": "SELLSY"
  },
  {
    "group": "brand",
    "id": "shirtsinbulk",
    "name": "Shirts In Bulk"
  },
  {
    "group": "brand",
    "id": "simplybuilt",
    "name": "SimplyBuilt"
  },
  {
    "group": "brand",
    "id": "skyatlas",
    "name": "Skyatlas"
  },
  {
    "group": "brand",
    "id": "skype",
    "name": "Skype"
  },
  {
    "group": "brand",
    "id": "slack",
    "name": "Slack"
  },
  {
    "group": "brand",
    "id": "slideshare",
    "name": "SlideShare"
  },
  {
    "group": "brand",
    "id": "soundcloud",
    "name": "SoundCloud"
  },
  {
    "group": "brand",
    "id": "snapchat",
    "name": "Snapchat"
  },
  {
    "group": "brand",
    "id": "snapchat-ghost",
    "name": "Snapchat"
  },
  {
    "group": "brand",
    "id": "snapchat-square",
    "name": "Snapchat"
  },
  {
    "group": "brand",
    "id": "spotify",
    "name": "Spotify"
  },
  {
    "group": "brand",
    "id": "stack-exchange",
    "name": "Stack Exchange"
  },
  {
    "group": "brand",
    "id": "stack-overflow",
    "name": "Stack Overflow"
  },
  {
    "group": "brand",
    "id": "steam",
    "name": "Steam"
  },
  {
    "group": "brand",
    "id": "steam-square",
    "name": "Steam"
  },
  {
    "group": "brand",
    "id": "stumbleupon",
    "name": "StumbleUpon"
  },
  {
    "group": "brand",
    "id": "stumbleupon-circle",
    "name": "StumbleUpon"
  },
  {
    "group": "brand",
    "id": "tencent-weibo",
    "name": "Tencent Weibo"
  },
  {
    "group": "brand",
    "id": "trello",
    "name": "Trello"
  },
  {
    "group": "brand",
    "id": "tripadvisor",
    "name": "TripAdvisor"
  },
  {
    "group": "brand",
    "id": "tumblr",
    "name": "Tumblr"
  },
  {
    "group": "brand",
    "id": "tumblr-square",
    "name": "Tumblr"
  },
  {
    "group": "brand",
    "id": "twitch",
    "name": "Twitch"
  },
  {
    "group": "brand",
    "id": "twitter",
    "name": "Twitter"
  },
  {
    "group": "brand",
    "id": "twitter-square",
    "name": "Twitter"
  },
  {
    "group": "brand",
    "id": "usb",
    "name": "USB"
  },
  {
    "group": "brand",
    "id": "vimeo",
    "name": "Vimeo"
  },
  {
    "group": "brand",
    "id": "viadeo",
    "name": "Viadeo"
  },
  {
    "group": "brand",
    "id": "viadeo-square",
    "name": "Viadeo"
  },
  {
    "group": "brand",
    "id": "vimeo-square",
    "name": "Vimeo"
  },
  {
    "group": "brand",
    "id": "viacoin",
    "name": "Viacoin"
  },
  {
    "group": "brand",
    "id": "vine",
    "name": "Vine"
  },
  {
    "group": "brand",
    "id": "vk",
    "name": "VK"
  },
  {
    "group": "brand",
    "id": "weixin",
    "name": "Weixin"
  },
  {
    "group": "brand",
    "id": "weibo",
    "name": "Wibo"
  },
  {
    "group": "brand",
    "id": "whatsapp",
    "name": "WhatsApp"
  },
  {
    "group": "brand",
    "id": "wikipedia-w",
    "name": "Wikipedia"
  },
  {
    "group": "brand",
    "id": "windows",
    "name": "Windows"
  },
  {
    "group": "brand",
    "id": "wordpress",
    "name": "WordPress"
  },
  {
    "group": "brand",
    "id": "wpbeginner",
    "name": "WP Beginner"
  },
  {
    "group": "brand",
    "id": "wpforms",
    "name": "WP Forms"
  },
  {
    "group": "brand",
    "id": "xing",
    "name": "Xing"
  },
  {
    "group": "brand",
    "id": "xing-square",
    "name": "Xing"
  },
  {
    "group": "brand",
    "id": "y-combinator",
    "name": "Y Combinator"
  },
  {
    "group": "brand",
    "id": "yahoo",
    "name": "Yahoo!"
  },
  {
    "group": "brand",
    "id": "yelp",
    "name": "Yelp"
  },
  {
    "group": "brand",
    "id": "youtube",
    "name": "YouTube"
  },
  {
    "group": "brand",
    "id": "youtube-square",
    "name": "YouTube"
  },
  {
    "group": "chart",
    "id": "area-chart",
    "name": "Area Chart"
  },
  {
    "group": "chart",
    "id": "bar-chart-o",
    "name": "Bar Chart"
  },
  {
    "group": "chart",
    "id": "line-chart",
    "name": "Line Chart"
  },
  {
    "group": "chart",
    "id": "pie-chart",
    "name": "Pie Chart"
  },
  {
    "group": "currency",
    "id": "bitcoin",
    "name": "Bitcoin"
  },
  {
    "group": "currency",
    "id": "dollar",
    "name": "Dollar"
  },
  {
    "group": "currency",
    "id": "euro",
    "name": "Euro"
  },
  {
    "group": "currency",
    "id": "gbp",
    "name": "GBP"
  },
  {
    "group": "currency",
    "id": "gg",
    "name": "GBP"
  },
  {
    "group": "currency",
    "id": "gg-circle",
    "name": "GG"
  },
  {
    "group": "currency",
    "id": "ils",
    "name": "Israeli Sheqel"
  },
  {
    "group": "currency",
    "id": "money",
    "name": "Money"
  },
  {
    "group": "currency",
    "id": "rouble",
    "name": "Rouble"
  },
  {
    "group": "currency",
    "id": "inr",
    "name": "Rupee"
  },
  {
    "group": "currency",
    "id": "try",
    "name": "Turkish Lira"
  },
  {
    "group": "currency",
    "id": "krw",
    "name": "Won"
  },
  {
    "group": "currency",
    "id": "jpy",
    "name": "Yen"
  },
  {
    "group": "directional",
    "id": "angle-down",
    "name": "Angle Down"
  },
  {
    "group": "directional",
    "id": "angle-left",
    "name": "Angle Left"
  },
  {
    "group": "directional",
    "id": "angle-right",
    "name": "Angle Right"
  },
  {
    "group": "directional",
    "id": "angle-up",
    "name": "Angle Up"
  },
  {
    "group": "directional",
    "id": "angle-double-down",
    "name": "Angle Double Down"
  },
  {
    "group": "directional",
    "id": "angle-double-left",
    "name": "Angle Double Left"
  },
  {
    "group": "directional",
    "id": "angle-double-right",
    "name": "Angle Double Right"
  },
  {
    "group": "directional",
    "id": "angle-double-up",
    "name": "Angle Double Up"
  },
  {
    "group": "directional",
    "id": "arrow-circle-o-down",
    "name": "Arrow Circle Down"
  },
  {
    "group": "directional",
    "id": "arrow-circle-o-left",
    "name": "Arrow Circle Left"
  },
  {
    "group": "directional",
    "id": "arrow-circle-o-right",
    "name": "Arrow Circle Right"
  },
  {
    "group": "directional",
    "id": "arrow-circle-o-up",
    "name": "Arrow Circle Up"
  },
  {
    "group": "directional",
    "id": "arrow-circle-down",
    "name": "Arrow Circle Down"
  },
  {
    "group": "directional",
    "id": "arrow-circle-left",
    "name": "Arrow Circle Left"
  },
  {
    "group": "directional",
    "id": "arrow-circle-right",
    "name": "Arrow Circle Right"
  },
  {
    "group": "directional",
    "id": "arrow-circle-up",
    "name": "Arrow Circle Up"
  },
  {
    "group": "directional",
    "id": "arrow-down",
    "name": "Arrow Down"
  },
  {
    "group": "directional",
    "id": "arrow-left",
    "name": "Arrow Left"
  },
  {
    "group": "directional",
    "id": "arrow-right",
    "name": "Arrow Right"
  },
  {
    "group": "directional",
    "id": "arrow-up",
    "name": "Arrow Up"
  },
  {
    "group": "directional",
    "id": "arrows",
    "name": "Arrows"
  },
  {
    "group": "directional",
    "id": "arrows-alt",
    "name": "Arrows"
  },
  {
    "group": "directional",
    "id": "arrows-h",
    "name": "Arrows"
  },
  {
    "group": "directional",
    "id": "arrows-v",
    "name": "Arrows"
  },
  {
    "group": "directional",
    "id": "caret-down",
    "name": "Caret Down"
  },
  {
    "group": "directional",
    "id": "caret-left",
    "name": "Caret Left"
  },
  {
    "group": "directional",
    "id": "caret-right",
    "name": "Caret Right"
  },
  {
    "group": "directional",
    "id": "caret-up",
    "name": "Caret Up"
  },
  {
    "group": "directional",
    "id": "caret-square-o-down",
    "name": "Caret Down"
  },
  {
    "group": "directional",
    "id": "caret-square-o-left",
    "name": "Caret Left"
  },
  {
    "group": "directional",
    "id": "caret-square-o-right",
    "name": "Caret Right"
  },
  {
    "group": "directional",
    "id": "caret-square-o-up",
    "name": "Caret Up"
  },
  {
    "group": "directional",
    "id": "chevron-circle-down",
    "name": "Chevron Circle Down"
  },
  {
    "group": "directional",
    "id": "chevron-circle-left",
    "name": "Chevron Circle Left"
  },
  {
    "group": "directional",
    "id": "chevron-circle-right",
    "name": "Chevron Circle Right"
  },
  {
    "group": "directional",
    "id": "chevron-circle-up",
    "name": "Chevron Circle Up"
  },
  {
    "group": "directional",
    "id": "chevron-down",
    "name": "Chevron Down"
  },
  {
    "group": "directional",
    "id": "chevron-left",
    "name": "Chevron Left"
  },
  {
    "group": "directional",
    "id": "chevron-right",
    "name": "Chevron Right"
  },
  {
    "group": "directional",
    "id": "chevron-up",
    "name": "Chevron Up"
  },
  {
    "group": "directional",
    "id": "hand-o-down",
    "name": "Hand Down"
  },
  {
    "group": "directional",
    "id": "hand-o-left",
    "name": "Hand Left"
  },
  {
    "group": "directional",
    "id": "hand-o-right",
    "name": "Hand Right"
  },
  {
    "group": "directional",
    "id": "hand-o-up",
    "name": "Hand Up"
  },
  {
    "group": "directional",
    "id": "long-arrow-down",
    "name": "Long Arrow Down"
  },
  {
    "group": "directional",
    "id": "long-arrow-left",
    "name": "Long Arrow Left"
  },
  {
    "group": "directional",
    "id": "long-arrow-right",
    "name": "Long Arrow Right"
  },
  {
    "group": "directional",
    "id": "long-arrow-up",
    "name": "Long Arrow Up"
  },
  {
    "group": "file-types",
    "id": "file",
    "name": "File"
  },
  {
    "group": "file-types",
    "id": "file-o",
    "name": "File"
  },
  {
    "group": "file-types",
    "id": "file-text",
    "name": "File: Text"
  },
  {
    "group": "file-types",
    "id": "file-text-o",
    "name": "File: Text"
  },
  {
    "group": "file-types",
    "id": "file-archive-o",
    "name": "File: Archive"
  },
  {
    "group": "file-types",
    "id": "file-audio-o",
    "name": "File: Audio"
  },
  {
    "group": "file-types",
    "id": "file-code-o",
    "name": "File: Code"
  },
  {
    "group": "file-types",
    "id": "file-excel-o",
    "name": "File: Excel"
  },
  {
    "group": "file-types",
    "id": "file-image-o",
    "name": "File: Image"
  },
  {
    "group": "file-types",
    "id": "file-pdf-o",
    "name": "File: PDF"
  },
  {
    "group": "file-types",
    "id": "file-powerpoint-o",
    "name": "File: Powerpoint"
  },
  {
    "group": "file-types",
    "id": "file-video-o",
    "name": "File: Video"
  },
  {
    "group": "file-types",
    "id": "file-word-o",
    "name": "File: Word"
  },
  {
    "group": "form-control",
    "id": "check-square",
    "name": "Check"
  },
  {
    "group": "form-control",
    "id": "check-square-o",
    "name": "Check"
  },
  {
    "group": "form-control",
    "id": "circle",
    "name": "Circle"
  },
  {
    "group": "form-control",
    "id": "circle-o",
    "name": "Circle"
  },
  {
    "group": "form-control",
    "id": "dot-circle-o",
    "name": "Dot"
  },
  {
    "group": "form-control",
    "id": "minus-square",
    "name": "Minus"
  },
  {
    "group": "form-control",
    "id": "minus-square-o",
    "name": "Minus"
  },
  {
    "group": "form-control",
    "id": "plus-square",
    "name": "Plus"
  },
  {
    "group": "form-control",
    "id": "plus-square-o",
    "name": "Plus"
  },
  {
    "group": "form-control",
    "id": "square",
    "name": "Square"
  },
  {
    "group": "form-control",
    "id": "square-o",
    "name": "Square"
  },
  {
    "group": "gender",
    "id": "genderless",
    "name": "Genderless"
  },
  {
    "group": "gender",
    "id": "mars",
    "name": "Mars"
  },
  {
    "group": "gender",
    "id": "mars-double",
    "name": "Mars"
  },
  {
    "group": "gender",
    "id": "mars-stroke",
    "name": "Mars"
  },
  {
    "group": "gender",
    "id": "mars-stroke-h",
    "name": "Mars"
  },
  {
    "group": "gender",
    "id": "mars-stroke-v",
    "name": "Mars"
  },
  {
    "group": "gender",
    "id": "mercury",
    "name": "Mercury"
  },
  {
    "group": "gender",
    "id": "neuter",
    "name": "Neuter"
  },
  {
    "group": "gender",
    "id": "transgender",
    "name": "Transgender"
  },
  {
    "group": "gender",
    "id": "transgender-alt",
    "name": "Transgender"
  },
  {
    "group": "gender",
    "id": "venus",
    "name": "Venus"
  },
  {
    "group": "gender",
    "id": "venus-double",
    "name": "Venus"
  },
  {
    "group": "gender",
    "id": "venus-mars",
    "name": "Venus + Mars"
  },
  {
    "group": "medical",
    "id": "heart",
    "name": "Heart"
  },
  {
    "group": "medical",
    "id": "heart-o",
    "name": "Heart"
  },
  {
    "group": "medical",
    "id": "heartbeat",
    "name": "Heartbeat"
  },
  {
    "group": "medical",
    "id": "h-square",
    "name": "Hospital"
  },
  {
    "group": "medical",
    "id": "hospital-o",
    "name": "Hospital"
  },
  {
    "group": "medical",
    "id": "medkit",
    "name": "Medkit"
  },
  {
    "group": "medical",
    "id": "stethoscope",
    "name": "Stethoscope"
  },
  {
    "group": "medical",
    "id": "user-md",
    "name": "User MD"
  },
  {
    "group": "payment",
    "id": "cc-amex",
    "name": "American Express"
  },
  {
    "group": "payment",
    "id": "credit-card",
    "name": "Credit Card"
  },
  {
    "group": "payment",
    "id": "credit-card-alt",
    "name": "Credit Card"
  },
  {
    "group": "payment",
    "id": "cc-diners-club",
    "name": "Diners Club"
  },
  {
    "group": "payment",
    "id": "cc-discover",
    "name": "Discover"
  },
  {
    "group": "payment",
    "id": "google-wallet",
    "name": "Google Wallet"
  },
  {
    "group": "payment",
    "id": "cc-jcb",
    "name": "JCB"
  },
  {
    "group": "payment",
    "id": "cc-mastercard",
    "name": "MasterCard"
  },
  {
    "group": "payment",
    "id": "cc-paypal",
    "name": "PayPal"
  },
  {
    "group": "payment",
    "id": "paypal",
    "name": "PayPal"
  },
  {
    "group": "payment",
    "id": "cc-stripe",
    "name": "Stripe"
  },
  {
    "group": "payment",
    "id": "cc-visa",
    "name": "Visa"
  },
  {
    "group": "spinner",
    "id": "circle-o-notch",
    "name": "Circle"
  },
  {
    "group": "spinner",
    "id": "cog",
    "name": "Cog"
  },
  {
    "group": "spinner",
    "id": "refresh",
    "name": "Refresh"
  },
  {
    "group": "spinner",
    "id": "spinner",
    "name": "Spinner"
  },
  {
    "group": "transportation",
    "id": "ambulance",
    "name": "Ambulance"
  },
  {
    "group": "transportation",
    "id": "bicycle",
    "name": "Bicycle"
  },
  {
    "group": "transportation",
    "id": "bus",
    "name": "Bus"
  },
  {
    "group": "transportation",
    "id": "car",
    "name": "Car"
  },
  {
    "group": "transportation",
    "id": "fighter-jet",
    "name": "Fighter Jet"
  },
  {
    "group": "transportation",
    "id": "motorcycle",
    "name": "Motorcycle"
  },
  {
    "group": "transportation",
    "id": "plane",
    "name": "Plane"
  },
  {
    "group": "transportation",
    "id": "rocket",
    "name": "Rocket"
  },
  {
    "group": "transportation",
    "id": "ship",
    "name": "Ship"
  },
  {
    "group": "transportation",
    "id": "space-shuttle",
    "name": "Space Shuttle"
  },
  {
    "group": "transportation",
    "id": "subway",
    "name": "Subway"
  },
  {
    "group": "transportation",
    "id": "taxi",
    "name": "Taxi"
  },
  {
    "group": "transportation",
    "id": "train",
    "name": "Train"
  },
  {
    "group": "transportation",
    "id": "truck",
    "name": "Truck"
  },
  {
    "group": "transportation",
    "id": "wheelchair",
    "name": "Wheelchair"
  },
  {
    "group": "transportation",
    "id": "wheelchair-alt",
    "name": "Wheelchair"
  },
  {
    "group": "text-editor",
    "id": "align-left",
    "name": "Align Left"
  },
  {
    "group": "text-editor",
    "id": "align-center",
    "name": "Align Center"
  },
  {
    "group": "text-editor",
    "id": "align-justify",
    "name": "Justify"
  },
  {
    "group": "text-editor",
    "id": "align-right",
    "name": "Align Right"
  },
  {
    "group": "text-editor",
    "id": "bold",
    "name": "Bold"
  },
  {
    "group": "text-editor",
    "id": "clipboard",
    "name": "Clipboard"
  },
  {
    "group": "text-editor",
    "id": "columns",
    "name": "Columns"
  },
  {
    "group": "text-editor",
    "id": "copy",
    "name": "Copy"
  },
  {
    "group": "text-editor",
    "id": "cut",
    "name": "Cut"
  },
  {
    "group": "text-editor",
    "id": "paste",
    "name": "Paste"
  },
  {
    "group": "text-editor",
    "id": "eraser",
    "name": "Eraser"
  },
  {
    "group": "text-editor",
    "id": "files-o",
    "name": "Files"
  },
  {
    "group": "text-editor",
    "id": "font",
    "name": "Font"
  },
  {
    "group": "text-editor",
    "id": "header",
    "name": "Header"
  },
  {
    "group": "text-editor",
    "id": "indent",
    "name": "Indent"
  },
  {
    "group": "text-editor",
    "id": "outdent",
    "name": "Outdent"
  },
  {
    "group": "text-editor",
    "id": "italic",
    "name": "Italic"
  },
  {
    "group": "text-editor",
    "id": "link",
    "name": "Link"
  },
  {
    "group": "text-editor",
    "id": "unlink",
    "name": "Unlink"
  },
  {
    "group": "text-editor",
    "id": "list",
    "name": "List"
  },
  {
    "group": "text-editor",
    "id": "list-alt",
    "name": "List"
  },
  {
    "group": "text-editor",
    "id": "list-ol",
    "name": "Ordered List"
  },
  {
    "group": "text-editor",
    "id": "list-ul",
    "name": "Unordered List"
  },
  {
    "group": "text-editor",
    "id": "paperclip",
    "name": "Paperclip"
  },
  {
    "group": "text-editor",
    "id": "paragraph",
    "name": "Paragraph"
  },
  {
    "group": "text-editor",
    "id": "repeat",
    "name": "Repeat"
  },
  {
    "group": "text-editor",
    "id": "undo",
    "name": "Undo"
  },
  {
    "group": "text-editor",
    "id": "save",
    "name": "Save"
  },
  {
    "group": "text-editor",
    "id": "strikethrough",
    "name": "Strikethrough"
  },
  {
    "group": "text-editor",
    "id": "subscript",
    "name": "Subscript"
  },
  {
    "group": "text-editor",
    "id": "superscript",
    "name": "Superscript"
  },
  {
    "group": "text-editor",
    "id": "table",
    "name": "Table"
  },
  {
    "group": "text-editor",
    "id": "text-height",
    "name": "Text Height"
  },
  {
    "group": "text-editor",
    "id": "text-width",
    "name": "Text Width"
  },
  {
    "group": "text-editor",
    "id": "th",
    "name": "Table Header"
  },
  {
    "group": "text-editor",
    "id": "th-large",
    "name": "TH Large"
  },
  {
    "group": "text-editor",
    "id": "th-list",
    "name": "TH List"
  },
  {
    "group": "text-editor",
    "id": "underline",
    "name": "Underline"
  },
  {
    "group": "video-player",
    "id": "arrows-alt",
    "name": "Arrows"
  },
  {
    "group": "video-player",
    "id": "backward",
    "name": "Backward"
  },
  {
    "group": "video-player",
    "id": "compress",
    "name": "Compress"
  },
  {
    "group": "video-player",
    "id": "eject",
    "name": "Eject"
  },
  {
    "group": "video-player",
    "id": "expand",
    "name": "Expand"
  },
  {
    "group": "video-player",
    "id": "fast-backward",
    "name": "Fast Backward"
  },
  {
    "group": "video-player",
    "id": "fast-forward",
    "name": "Fast Forward"
  },
  {
    "group": "video-player",
    "id": "forward",
    "name": "Forward"
  },
  {
    "group": "video-player",
    "id": "pause",
    "name": "Pause"
  },
  {
    "group": "video-player",
    "id": "pause-circle",
    "name": "Pause"
  },
  {
    "group": "video-player",
    "id": "pause-circle-o",
    "name": "Pause"
  },
  {
    "group": "video-player",
    "id": "play",
    "name": "Play"
  },
  {
    "group": "video-player",
    "id": "play-circle",
    "name": "Play"
  },
  {
    "group": "video-player",
    "id": "play-circle-o",
    "name": "Play"
  },
  {
    "group": "video-player",
    "id": "step-backward",
    "name": "Step Backward"
  },
  {
    "group": "video-player",
    "id": "step-forward",
    "name": "Step Forward"
  },
  {
    "group": "video-player",
    "id": "stop",
    "name": "Stop"
  },
  {
    "group": "video-player",
    "id": "stop-circle",
    "name": "Stop"
  },
  {
    "group": "video-player",
    "id": "stop-circle-o",
    "name": "Stop"
  },
  {
    "group": "video-player",
    "id": "youtube-play",
    "name": "YouTube Play"
  },
  {
    "group": "web-application",
    "id": "adjust",
    "name": "Adjust"
  },
  {
    "group": "web-application",
    "id": "anchor",
    "name": "Anchor"
  },
  {
    "group": "web-application",
    "id": "archive",
    "name": "Archive"
  },
  {
    "group": "web-application",
    "id": "arrows",
    "name": "Arrows"
  },
  {
    "group": "web-application",
    "id": "arrows-h",
    "name": "Arrows"
  },
  {
    "group": "web-application",
    "id": "arrows-v",
    "name": "Arrows"
  },
  {
    "group": "web-application",
    "id": "asterisk",
    "name": "Asterisk"
  },
  {
    "group": "web-application",
    "id": "at",
    "name": "At"
  },
  {
    "group": "web-application",
    "id": "balance-scale",
    "name": "Balance"
  },
  {
    "group": "web-application",
    "id": "ban",
    "name": "Ban"
  },
  {
    "group": "web-application",
    "id": "barcode",
    "name": "Barcode"
  },
  {
    "group": "web-application",
    "id": "bars",
    "name": "Bars"
  },
  {
    "group": "web-application",
    "id": "battery-empty",
    "name": "Battery"
  },
  {
    "group": "web-application",
    "id": "battery-quarter",
    "name": "Battery"
  },
  {
    "group": "web-application",
    "id": "battery-half",
    "name": "Battery"
  },
  {
    "group": "web-application",
    "id": "battery-full",
    "name": "Battery"
  },
  {
    "group": "web-application",
    "id": "bed",
    "name": "Bed"
  },
  {
    "group": "web-application",
    "id": "beer",
    "name": "Beer"
  },
  {
    "group": "web-application",
    "id": "bell",
    "name": "Bell"
  },
  {
    "group": "web-application",
    "id": "bell-o",
    "name": "Bell"
  },
  {
    "group": "web-application",
    "id": "bell-slash",
    "name": "Bell"
  },
  {
    "group": "web-application",
    "id": "bell-slash-o",
    "name": "Bell"
  },
  {
    "group": "web-application",
    "id": "binoculars",
    "name": "Binoculars"
  },
  {
    "group": "web-application",
    "id": "birthday-cake",
    "name": "Birthday Cake"
  },
  {
    "group": "web-application",
    "id": "bolt",
    "name": "Bolt"
  },
  {
    "group": "web-application",
    "id": "book",
    "name": "Book"
  },
  {
    "group": "web-application",
    "id": "bookmark",
    "name": "Bookmark"
  },
  {
    "group": "web-application",
    "id": "bookmark-o",
    "name": "Bookmark"
  },
  {
    "group": "web-application",
    "id": "bomb",
    "name": "Bomb"
  },
  {
    "group": "web-application",
    "id": "briefcase",
    "name": "Briefcase"
  },
  {
    "group": "web-application",
    "id": "bug",
    "name": "Bug"
  },
  {
    "group": "web-application",
    "id": "building",
    "name": "Building"
  },
  {
    "group": "web-application",
    "id": "building-o",
    "name": "Building"
  },
  {
    "group": "web-application",
    "id": "bullhorn",
    "name": "Bullhorn"
  },
  {
    "group": "web-application",
    "id": "bullseye",
    "name": "Bullseye"
  },
  {
    "group": "web-application",
    "id": "calculator",
    "name": "Calculator"
  },
  {
    "group": "web-application",
    "id": "calendar",
    "name": "Calendar"
  },
  {
    "group": "web-application",
    "id": "calendar-o",
    "name": "Calendar"
  },
  {
    "group": "web-application",
    "id": "calendar-check-o",
    "name": "Calendar"
  },
  {
    "group": "web-application",
    "id": "calendar-minus-o",
    "name": "Calendar"
  },
  {
    "group": "web-application",
    "id": "calendar-times-o",
    "name": "Calendar"
  },
  {
    "group": "web-application",
    "id": "camera",
    "name": "Camera"
  },
  {
    "group": "web-application",
    "id": "camera-retro",
    "name": "Camera Retro"
  },
  {
    "group": "web-application",
    "id": "caret-square-o-down",
    "name": "Caret Down"
  },
  {
    "group": "web-application",
    "id": "caret-square-o-left",
    "name": "Caret Left"
  },
  {
    "group": "web-application",
    "id": "caret-square-o-right",
    "name": "Caret Right"
  },
  {
    "group": "web-application",
    "id": "caret-square-o-up",
    "name": "Caret Up"
  },
  {
    "group": "web-application",
    "id": "cart-arrow-down",
    "name": "Cart Arrow Down"
  },
  {
    "group": "web-application",
    "id": "cart-plus",
    "name": "Cart Plus"
  },
  {
    "group": "web-application",
    "id": "certificate",
    "name": "Certificate"
  },
  {
    "group": "web-application",
    "id": "check",
    "name": "Check"
  },
  {
    "group": "web-application",
    "id": "check-circle",
    "name": "Check"
  },
  {
    "group": "web-application",
    "id": "check-circle-o",
    "name": "Check"
  },
  {
    "group": "web-application",
    "id": "child",
    "name": "Child"
  },
  {
    "group": "web-application",
    "id": "circle-thin",
    "name": "Circle"
  },
  {
    "group": "web-application",
    "id": "clock-o",
    "name": "Clock"
  },
  {
    "group": "web-application",
    "id": "clone",
    "name": "Clone"
  },
  {
    "group": "web-application",
    "id": "cloud",
    "name": "Cloud"
  },
  {
    "group": "web-application",
    "id": "cloud-download",
    "name": "Cloud Download"
  },
  {
    "group": "web-application",
    "id": "cloud-upload",
    "name": "Cloud Upload"
  },
  {
    "group": "web-application",
    "id": "code",
    "name": "Code"
  },
  {
    "group": "web-application",
    "id": "code-fork",
    "name": "Code Fork"
  },
  {
    "group": "web-application",
    "id": "coffee",
    "name": "Coffee"
  },
  {
    "group": "web-application",
    "id": "cogs",
    "name": "Cogs"
  },
  {
    "group": "web-application",
    "id": "comment",
    "name": "Comment"
  },
  {
    "group": "web-application",
    "id": "comment-o",
    "name": "Comment"
  },
  {
    "group": "web-application",
    "id": "comments",
    "name": "Comments"
  },
  {
    "group": "web-application",
    "id": "comments-o",
    "name": "Comments"
  },
  {
    "group": "web-application",
    "id": "commenting",
    "name": "Commenting"
  },
  {
    "group": "web-application",
    "id": "commenting-o",
    "name": "Commenting"
  },
  {
    "group": "web-application",
    "id": "compass",
    "name": "Compass"
  },
  {
    "group": "web-application",
    "id": "copyright",
    "name": "Copyright"
  },
  {
    "group": "web-application",
    "id": "credit-card",
    "name": "Credit Card"
  },
  {
    "group": "web-application",
    "id": "crop",
    "name": "Crop"
  },
  {
    "group": "web-application",
    "id": "crosshairs",
    "name": "Crosshairs"
  },
  {
    "group": "web-application",
    "id": "cube",
    "name": "Cube"
  },
  {
    "group": "web-application",
    "id": "cubes",
    "name": "Cubes"
  },
  {
    "group": "web-application",
    "id": "i-cursor",
    "name": "Cursor"
  },
  {
    "group": "web-application",
    "id": "cutlery",
    "name": "Cutlery"
  },
  {
    "group": "web-application",
    "id": "dashboard",
    "name": "Dashboard"
  },
  {
    "group": "web-application",
    "id": "database",
    "name": "Database"
  },
  {
    "group": "web-application",
    "id": "desktop",
    "name": "Desktop"
  },
  {
    "group": "web-application",
    "id": "diamond",
    "name": "Diamond"
  },
  {
    "group": "web-application",
    "id": "download",
    "name": "Download"
  },
  {
    "group": "web-application",
    "id": "edit",
    "name": "Edit"
  },
  {
    "group": "web-application",
    "id": "ellipsis-h",
    "name": "Ellipsis"
  },
  {
    "group": "web-application",
    "id": "ellipsis-v",
    "name": "Ellipsis"
  },
  {
    "group": "web-application",
    "id": "envelope",
    "name": "Envelope"
  },
  {
    "group": "web-application",
    "id": "envelope-o",
    "name": "Envelope"
  },
  {
    "group": "web-application",
    "id": "envelope-square",
    "name": "Envelope"
  },
  {
    "group": "web-application",
    "id": "eraser",
    "name": "Eraser"
  },
  {
    "group": "web-application",
    "id": "exchange",
    "name": "Exchange"
  },
  {
    "group": "web-application",
    "id": "exclamation",
    "name": "Exclamation"
  },
  {
    "group": "web-application",
    "id": "exclamation-circle",
    "name": "Exclamation"
  },
  {
    "group": "web-application",
    "id": "exclamation-triangle",
    "name": "Exclamation"
  },
  {
    "group": "web-application",
    "id": "external-link",
    "name": "External Link"
  },
  {
    "group": "web-application",
    "id": "external-link-square",
    "name": "External Link"
  },
  {
    "group": "web-application",
    "id": "eye",
    "name": "Eye"
  },
  {
    "group": "web-application",
    "id": "eye-slash",
    "name": "Eye"
  },
  {
    "group": "web-application",
    "id": "eyedropper",
    "name": "Eye Dropper"
  },
  {
    "group": "web-application",
    "id": "fax",
    "name": "Fax"
  },
  {
    "group": "web-application",
    "id": "female",
    "name": "Female"
  },
  {
    "group": "web-application",
    "id": "film",
    "name": "Film"
  },
  {
    "group": "web-application",
    "id": "filter",
    "name": "Filter"
  },
  {
    "group": "web-application",
    "id": "fire",
    "name": "Fire"
  },
  {
    "group": "web-application",
    "id": "fire-extinguisher",
    "name": "Fire Extinguisher"
  },
  {
    "group": "web-application",
    "id": "flag",
    "name": "Flag"
  },
  {
    "group": "web-application",
    "id": "flag-checkered",
    "name": "Flag"
  },
  {
    "group": "web-application",
    "id": "flag-o",
    "name": "Flag"
  },
  {
    "group": "web-application",
    "id": "flash",
    "name": "Flash"
  },
  {
    "group": "web-application",
    "id": "flask",
    "name": "Flask"
  },
  {
    "group": "web-application",
    "id": "folder",
    "name": "Folder"
  },
  {
    "group": "web-application",
    "id": "folder-open",
    "name": "Folder Open"
  },
  {
    "group": "web-application",
    "id": "folder-o",
    "name": "Folder"
  },
  {
    "group": "web-application",
    "id": "folder-open-o",
    "name": "Folder Open"
  },
  {
    "group": "web-application",
    "id": "futbol-o",
    "name": "Foot Ball"
  },
  {
    "group": "web-application",
    "id": "frown-o",
    "name": "Frown"
  },
  {
    "group": "web-application",
    "id": "gamepad",
    "name": "Gamepad"
  },
  {
    "group": "web-application",
    "id": "gavel",
    "name": "Gavel"
  },
  {
    "group": "web-application",
    "id": "gear",
    "name": "Gear"
  },
  {
    "group": "web-application",
    "id": "gears",
    "name": "Gears"
  },
  {
    "group": "web-application",
    "id": "gift",
    "name": "Gift"
  },
  {
    "group": "web-application",
    "id": "glass",
    "name": "Glass"
  },
  {
    "group": "web-application",
    "id": "globe",
    "name": "Globe"
  },
  {
    "group": "web-application",
    "id": "graduation-cap",
    "name": "Graduation Cap"
  },
  {
    "group": "web-application",
    "id": "group",
    "name": "Group"
  },
  {
    "group": "web-application",
    "id": "hand-lizard-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-paper-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-peace-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-pointer-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-rock-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-scissors-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hand-spock-o",
    "name": "Hand"
  },
  {
    "group": "web-application",
    "id": "hdd-o",
    "name": "HDD"
  },
  {
    "group": "web-application",
    "id": "hashtag",
    "name": "Hash Tag"
  },
  {
    "group": "web-application",
    "id": "headphones",
    "name": "Headphones"
  },
  {
    "group": "web-application",
    "id": "home",
    "name": "Home"
  },
  {
    "group": "web-application",
    "id": "hourglass-o",
    "name": "Hourglass"
  },
  {
    "group": "web-application",
    "id": "hourglass-start",
    "name": "Hourglass"
  },
  {
    "group": "web-application",
    "id": "hourglass-half",
    "name": "Hourglass"
  },
  {
    "group": "web-application",
    "id": "hourglass-end",
    "name": "Hourglass"
  },
  {
    "group": "web-application",
    "id": "hourglass",
    "name": "Hourglass"
  },
  {
    "group": "web-application",
    "id": "history",
    "name": "History"
  },
  {
    "group": "web-application",
    "id": "inbox",
    "name": "Inbox"
  },
  {
    "group": "web-application",
    "id": "industry",
    "name": "Industry"
  },
  {
    "group": "web-application",
    "id": "info",
    "name": "Info"
  },
  {
    "group": "web-application",
    "id": "info-circle",
    "name": "Info"
  },
  {
    "group": "web-application",
    "id": "key",
    "name": "Key"
  },
  {
    "group": "web-application",
    "id": "keyboard-o",
    "name": "Keyboard"
  },
  {
    "group": "web-application",
    "id": "language",
    "name": "Language"
  },
  {
    "group": "web-application",
    "id": "laptop",
    "name": "Laptop"
  },
  {
    "group": "web-application",
    "id": "leaf",
    "name": "Leaf"
  },
  {
    "group": "web-application",
    "id": "legal",
    "name": "Legal"
  },
  {
    "group": "web-application",
    "id": "lemon-o",
    "name": "Lemon"
  },
  {
    "group": "web-application",
    "id": "level-down",
    "name": "Level Down"
  },
  {
    "group": "web-application",
    "id": "level-up",
    "name": "Level Up"
  },
  {
    "group": "web-application",
    "id": "life-ring",
    "name": "Life Buoy"
  },
  {
    "group": "web-application",
    "id": "lightbulb-o",
    "name": "Lightbulb"
  },
  {
    "group": "web-application",
    "id": "location-arrow",
    "name": "Location Arrow"
  },
  {
    "group": "web-application",
    "id": "lock",
    "name": "Lock"
  },
  {
    "group": "web-application",
    "id": "magic",
    "name": "Magic"
  },
  {
    "group": "web-application",
    "id": "magnet",
    "name": "Magnet"
  },
  {
    "group": "web-application",
    "id": "mail-forward",
    "name": "Mail Forward"
  },
  {
    "group": "web-application",
    "id": "mail-reply",
    "name": "Mail Reply"
  },
  {
    "group": "web-application",
    "id": "mail-reply-all",
    "name": "Mail Reply All"
  },
  {
    "group": "web-application",
    "id": "male",
    "name": "Male"
  },
  {
    "group": "web-application",
    "id": "map",
    "name": "Map"
  },
  {
    "group": "web-application",
    "id": "map-o",
    "name": "Map"
  },
  {
    "group": "web-application",
    "id": "map-marker",
    "name": "Map Marker"
  },
  {
    "group": "web-application",
    "id": "map-pin",
    "name": "Map Pin"
  },
  {
    "group": "web-application",
    "id": "map-signs",
    "name": "Map Signs"
  },
  {
    "group": "web-application",
    "id": "meh-o",
    "name": "Meh"
  },
  {
    "group": "web-application",
    "id": "microphone",
    "name": "Microphone"
  },
  {
    "group": "web-application",
    "id": "microphone-slash",
    "name": "Microphone"
  },
  {
    "group": "web-application",
    "id": "minus",
    "name": "Minus"
  },
  {
    "group": "web-application",
    "id": "minus-circle",
    "name": "Minus"
  },
  {
    "group": "web-application",
    "id": "mobile",
    "name": "Mobile"
  },
  {
    "group": "web-application",
    "id": "mobile-phone",
    "name": "Mobile Phone"
  },
  {
    "group": "web-application",
    "id": "moon-o",
    "name": "Moon"
  },
  {
    "group": "web-application",
    "id": "mouse-pointer",
    "name": "Mouse Pointer"
  },
  {
    "group": "web-application",
    "id": "music",
    "name": "Music"
  },
  {
    "group": "web-application",
    "id": "newspaper-o",
    "name": "Newspaper"
  },
  {
    "group": "web-application",
    "id": "object-group",
    "name": "Object Group"
  },
  {
    "group": "web-application",
    "id": "object-ungroup",
    "name": "Object Ungroup"
  },
  {
    "group": "web-application",
    "id": "paint-brush",
    "name": "Paint Brush"
  },
  {
    "group": "web-application",
    "id": "paper-plane",
    "name": "Paper Plane"
  },
  {
    "group": "web-application",
    "id": "paper-plane-o",
    "name": "Paper Plane"
  },
  {
    "group": "web-application",
    "id": "paw",
    "name": "Paw"
  },
  {
    "group": "web-application",
    "id": "pencil",
    "name": "Pencil"
  },
  {
    "group": "web-application",
    "id": "pencil-square",
    "name": "Pencil"
  },
  {
    "group": "web-application",
    "id": "pencil-square-o",
    "name": "Pencil"
  },
  {
    "group": "web-application",
    "id": "phone",
    "name": "Phone"
  },
  {
    "group": "web-application",
    "id": "percent",
    "name": "Percent"
  },
  {
    "group": "web-application",
    "id": "phone-square",
    "name": "Phone"
  },
  {
    "group": "web-application",
    "id": "picture-o",
    "name": "Picture"
  },
  {
    "group": "web-application",
    "id": "plug",
    "name": "Plug"
  },
  {
    "group": "web-application",
    "id": "plus",
    "name": "Plus"
  },
  {
    "group": "web-application",
    "id": "plus-circle",
    "name": "Plus"
  },
  {
    "group": "web-application",
    "id": "power-off",
    "name": "Power Off"
  },
  {
    "group": "web-application",
    "id": "print",
    "name": "Print"
  },
  {
    "group": "web-application",
    "id": "puzzle-piece",
    "name": "Puzzle Piece"
  },
  {
    "group": "web-application",
    "id": "qrcode",
    "name": "QR Code"
  },
  {
    "group": "web-application",
    "id": "question",
    "name": "Question"
  },
  {
    "group": "web-application",
    "id": "question-circle",
    "name": "Question"
  },
  {
    "group": "web-application",
    "id": "question-circle-o",
    "name": "Question"
  },
  {
    "group": "web-application",
    "id": "quote-left",
    "name": "Quote Left"
  },
  {
    "group": "web-application",
    "id": "quote-right",
    "name": "Quote Right"
  },
  {
    "group": "web-application",
    "id": "random",
    "name": "Random"
  },
  {
    "group": "web-application",
    "id": "rebel",
    "name": "Rebel"
  },
  {
    "group": "web-application",
    "id": "recycle",
    "name": "Recycle"
  },
  {
    "group": "web-application",
    "id": "registered",
    "name": "Registered"
  },
  {
    "group": "web-application",
    "id": "reply",
    "name": "Reply"
  },
  {
    "group": "web-application",
    "id": "reply-all",
    "name": "Reply All"
  },
  {
    "group": "web-application",
    "id": "retweet",
    "name": "Retweet"
  },
  {
    "group": "web-application",
    "id": "road",
    "name": "Road"
  },
  {
    "group": "web-application",
    "id": "rss",
    "name": "RSS"
  },
  {
    "group": "web-application",
    "id": "rss-square",
    "name": "RSS Square"
  },
  {
    "group": "web-application",
    "id": "search",
    "name": "Search"
  },
  {
    "group": "web-application",
    "id": "search-minus",
    "name": "Search Minus"
  },
  {
    "group": "web-application",
    "id": "search-plus",
    "name": "Search Plus"
  },
  {
    "group": "web-application",
    "id": "server",
    "name": "Server"
  },
  {
    "group": "web-application",
    "id": "share",
    "name": "Share"
  },
  {
    "group": "web-application",
    "id": "share-alt",
    "name": "Share"
  },
  {
    "group": "web-application",
    "id": "share-alt-square",
    "name": "Share"
  },
  {
    "group": "web-application",
    "id": "share-square",
    "name": "Share"
  },
  {
    "group": "web-application",
    "id": "share-square-o",
    "name": "Share"
  },
  {
    "group": "web-application",
    "id": "shield",
    "name": "Shield"
  },
  {
    "group": "web-application",
    "id": "shopping-cart",
    "name": "Shopping Cart"
  },
  {
    "group": "web-application",
    "id": "shopping-bag",
    "name": "Shopping Bag"
  },
  {
    "group": "web-application",
    "id": "shopping-basket",
    "name": "Shopping Basket"
  },
  {
    "group": "web-application",
    "id": "sign-in",
    "name": "Sign In"
  },
  {
    "group": "web-application",
    "id": "sign-out",
    "name": "Sign Out"
  },
  {
    "group": "web-application",
    "id": "signal",
    "name": "Signal"
  },
  {
    "group": "web-application",
    "id": "sitemap",
    "name": "Sitemap"
  },
  {
    "group": "web-application",
    "id": "sliders",
    "name": "Sliders"
  },
  {
    "group": "web-application",
    "id": "smile-o",
    "name": "Smile"
  },
  {
    "group": "web-application",
    "id": "sort",
    "name": "Sort"
  },
  {
    "group": "web-application",
    "id": "sort-asc",
    "name": "Sort ASC"
  },
  {
    "group": "web-application",
    "id": "sort-desc",
    "name": "Sort DESC"
  },
  {
    "group": "web-application",
    "id": "sort-down",
    "name": "Sort Down"
  },
  {
    "group": "web-application",
    "id": "sort-up",
    "name": "Sort Up"
  },
  {
    "group": "web-application",
    "id": "sort-alpha-asc",
    "name": "Sort Alpha ASC"
  },
  {
    "group": "web-application",
    "id": "sort-alpha-desc",
    "name": "Sort Alpha DESC"
  },
  {
    "group": "web-application",
    "id": "sort-amount-asc",
    "name": "Sort Amount ASC"
  },
  {
    "group": "web-application",
    "id": "sort-amount-desc",
    "name": "Sort Amount DESC"
  },
  {
    "group": "web-application",
    "id": "sort-numeric-asc",
    "name": "Sort Numeric ASC"
  },
  {
    "group": "web-application",
    "id": "sort-numeric-desc",
    "name": "Sort Numeric DESC"
  },
  {
    "group": "web-application",
    "id": "spoon",
    "name": "Spoon"
  },
  {
    "group": "web-application",
    "id": "star",
    "name": "Star"
  },
  {
    "group": "web-application",
    "id": "star-half",
    "name": "Star Half"
  },
  {
    "group": "web-application",
    "id": "star-half-o",
    "name": "Star Half"
  },
  {
    "group": "web-application",
    "id": "star-half-empty",
    "name": "Star Half Empty"
  },
  {
    "group": "web-application",
    "id": "star-half-full",
    "name": "Star Half Full"
  },
  {
    "group": "web-application",
    "id": "star-o",
    "name": "Star"
  },
  {
    "group": "web-application",
    "id": "sticky-note",
    "name": "Sticky Note"
  },
  {
    "group": "web-application",
    "id": "sticky-note-o",
    "name": "Sticky Note"
  },
  {
    "group": "web-application",
    "id": "street-view",
    "name": "Street View"
  },
  {
    "group": "web-application",
    "id": "suitcase",
    "name": "Suitcase"
  },
  {
    "group": "web-application",
    "id": "sun-o",
    "name": "Sun"
  },
  {
    "group": "web-application",
    "id": "tablet",
    "name": "Tablet"
  },
  {
    "group": "web-application",
    "id": "tachometer",
    "name": "Tachometer"
  },
  {
    "group": "web-application",
    "id": "tag",
    "name": "Tag"
  },
  {
    "group": "web-application",
    "id": "tags",
    "name": "Tags"
  },
  {
    "group": "web-application",
    "id": "tasks",
    "name": "Tasks"
  },
  {
    "group": "web-application",
    "id": "television",
    "name": "Television"
  },
  {
    "group": "web-application",
    "id": "terminal",
    "name": "Terminal"
  },
  {
    "group": "web-application",
    "id": "thumb-tack",
    "name": "Thumb Tack"
  },
  {
    "group": "web-application",
    "id": "thumbs-down",
    "name": "Thumbs Down"
  },
  {
    "group": "web-application",
    "id": "thumbs-up",
    "name": "Thumbs Up"
  },
  {
    "group": "web-application",
    "id": "thumbs-o-down",
    "name": "Thumbs Down"
  },
  {
    "group": "web-application",
    "id": "thumbs-o-up",
    "name": "Thumbs Up"
  },
  {
    "group": "web-application",
    "id": "ticket",
    "name": "Ticket"
  },
  {
    "group": "web-application",
    "id": "times",
    "name": "Times"
  },
  {
    "group": "web-application",
    "id": "times-circle",
    "name": "Times"
  },
  {
    "group": "web-application",
    "id": "times-circle-o",
    "name": "Times"
  },
  {
    "group": "web-application",
    "id": "tint",
    "name": "Tint"
  },
  {
    "group": "web-application",
    "id": "toggle-down",
    "name": "Toggle Down"
  },
  {
    "group": "web-application",
    "id": "toggle-left",
    "name": "Toggle Left"
  },
  {
    "group": "web-application",
    "id": "toggle-right",
    "name": "Toggle Right"
  },
  {
    "group": "web-application",
    "id": "toggle-up",
    "name": "Toggle Up"
  },
  {
    "group": "web-application",
    "id": "toggle-off",
    "name": "Toggle Off"
  },
  {
    "group": "web-application",
    "id": "toggle-on",
    "name": "Toggle On"
  },
  {
    "group": "web-application",
    "id": "trademark",
    "name": "Trademark"
  },
  {
    "group": "web-application",
    "id": "trash",
    "name": "Trash"
  },
  {
    "group": "web-application",
    "id": "trash-o",
    "name": "Trash"
  },
  {
    "group": "web-application",
    "id": "tree",
    "name": "Tree"
  },
  {
    "group": "web-application",
    "id": "trophy",
    "name": "Trophy"
  },
  {
    "group": "web-application",
    "id": "tty",
    "name": "TTY"
  },
  {
    "group": "web-application",
    "id": "umbrella",
    "name": "Umbrella"
  },
  {
    "group": "web-application",
    "id": "university",
    "name": "University"
  },
  {
    "group": "web-application",
    "id": "unlock",
    "name": "Unlock"
  },
  {
    "group": "web-application",
    "id": "unlock-alt",
    "name": "Unlock"
  },
  {
    "group": "web-application",
    "id": "unsorted",
    "name": "Unsorted"
  },
  {
    "group": "web-application",
    "id": "upload",
    "name": "Upload"
  },
  {
    "group": "web-application",
    "id": "user",
    "name": "User"
  },
  {
    "group": "web-application",
    "id": "users",
    "name": "Users"
  },
  {
    "group": "web-application",
    "id": "user-plus",
    "name": "User: Add"
  },
  {
    "group": "web-application",
    "id": "user-times",
    "name": "User: Remove"
  },
  {
    "group": "web-application",
    "id": "user-secret",
    "name": "User: Password"
  },
  {
    "group": "web-application",
    "id": "video-camera",
    "name": "Video Camera"
  },
  {
    "group": "web-application",
    "id": "volume-down",
    "name": "Volume Down"
  },
  {
    "group": "web-application",
    "id": "volume-off",
    "name": "Volume Of"
  },
  {
    "group": "web-application",
    "id": "volume-up",
    "name": "Volume Up"
  },
  {
    "group": "web-application",
    "id": "warning",
    "name": "Warning"
  },
  {
    "group": "web-application",
    "id": "wifi",
    "name": "WiFi"
  },
  {
    "group": "web-application",
    "id": "wrench",
    "name": "Wrench"
  }
];

const pskIconChooserCss = "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('fontawesome-webfont.eot?v=4.6.3');src:url('fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('fontawesome-webfont.woff?v=4.6.3') format('woff'), url('fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}:host{font-size:20px;margin:.5rem;padding:.5rem}.icon.disable-color{color:#999 !important}span.icon{color:rgb(0, 0, 255)}.icon-chooser-header{display:flex}.icon-chooser-header select{margin-right:30px;width:fit-content !important}.icon-chooser-content{display:flex;flex-wrap:wrap}.icon-chooser-content div{margin:5px}.icon-chooser-content button{background-color:rgba(255, 255, 255, 0) !important;box-shadow:none !important;border:none !important;margin:0 !important}.icon-chooser-content button:hover{box-shadow:rgba(53, 79, 155, 0.35) 0 15px 30px -12px !important}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PskIconChooser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconsModelListToShow = null;
    this.value = null;
    this.groupSelection = {
      options: Array.from(new Set(iconModels.map(iconModel => iconModel.group))),
      value: ''
    };
    this.searchTextBox = {
      placeholder: 'Search ...',
      value: ''
    };
    this.__iconModelContainsSearchBoxString = (iconModel) => {
      let strLower = this.searchTextBox.value.toLowerCase();
      return iconModel.group.toLowerCase().includes(strLower) || iconModel.name.toLowerCase().includes(strLower);
    };
    this.__iconModelContainsCategory = (iconModel) => {
      return this.groupSelection.value === '' || iconModel.group.toLowerCase() === this.groupSelection.value.toLowerCase();
    };
    this.__getCategorySelections = () => {
      return this.groupSelection.options.map(this.__mapGroupToOption);
    };
    this.__mapGroupToOption = (group) => {
      return h("option", { value: group.toLowerCase() }, group);
    };
    this.__getIconDivArrayList = () => {
      return iconModels
        .filter(this.__iconModelContainsCategory)
        .filter(this.__iconModelContainsSearchBoxString)
        .map(this.__mapIconToDiv);
    };
    this.__mapIconToDiv = (iconModel) => {
      return h("div", null, h("psk-button", { eventName: 'icon-click', eventData: iconModel.id }, h("span", { style: { color: this.iconsColor, fontSize: this.iconsSize }, class: `icon fa fa-${iconModel.id}` })));
    };
    this.__inputHandler = (event) => {
      event.stopImmediatePropagation();
      this.searchTextBox.value = event.target.value;
      this.iconsModelListToShow = this.__getIconDivArrayList();
    };
    this.__iconClickListener = (event) => {
      event.stopImmediatePropagation();
      this.modelHandler.updateModel('value', event.data);
    };
    this.__categoryChangeListener = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.groupSelection.value = event.target.value;
      this.iconsModelListToShow = this.__getIconDivArrayList();
    };
  }
  componentDidLoad() {
    this.element.addEventListener("icon-click", this.__iconClickListener.bind(this));
  }
  componentWillLoad() {
    this.iconsModelListToShow = this.__getIconDivArrayList();
  }
  render() {
    if (!this.element.isConnected)
      return null;
    return h("div", null, h("div", { class: "icon-chooser-header" }, h("select", { class: "form-control", onChange: this.__categoryChangeListener.bind(this) }, h("option", { value: "" }, "All"), this.__getCategorySelections()), h("psk-input", { type: "text", value: this.searchTextBox.value, placeholder: this.searchTextBox.placeholder, specificProps: {
        onKeyUp: this.__inputHandler.bind(this),
        onChange: this.__inputHandler.bind(this)
      } })), h("div", { class: "icon-chooser-content" }, this.iconsModelListToShow));
  }
  get element() { return getElement(this); }
};
__decorate([
  BindModel()
], PskIconChooser.prototype, "modelHandler", void 0);
__decorate([
  CustomTheme()
], PskIconChooser.prototype, "element", void 0);
__decorate([
  TableOfContentProperty({
    isMandatory: false,
    propertyType: 'string',
    description: ['This property gives the color of the icons.']
  })
], PskIconChooser.prototype, "iconsColor", void 0);
__decorate([
  TableOfContentProperty({
    isMandatory: false,
    propertyType: 'string',
    description: ['This property gives the size of the icons.']
  })
], PskIconChooser.prototype, "iconsSize", void 0);
__decorate([
  TableOfContentProperty({
    description: [`Specifies the value of a psk-icon-chooser component.`, `This value is updated also in the model using the two-way binding.`],
    isMandatory: false,
    propertyType: 'string'
  })
], PskIconChooser.prototype, "value", void 0);
PskIconChooser.style = pskIconChooserCss;

export { PskIconChooser as psk_icon_chooser };
