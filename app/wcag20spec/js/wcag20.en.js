'use strict';
try {
    angular.module('wcag20spec');
} catch (e) {
   angular.module('wcag20spec', []);
}
/**
 * Originally created by Justin Marsan
 * https://github.com/justinmarsan/wcag.json
 */
angular.module('wcag20spec')
.factory('wcag20specEn', function () {
  return {
      "principles": [
          {
              "id": "WCAG2:perceivable",
              "num": "1",
              "handle": "Perceivable",
              "title": "Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.",
              "guidelines": [
                  {
                      "id": "WCAG2:text-equiv",
                      "num": "1.1",
                      "handle": "Text Alternatives",
                      "title": "Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Providing sign language videos for audio-only files (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:text-equiv-all",
                              "num": "1.1.1",
                              "level": "A",
                              "handle": "Non-text Content",
                              "text": "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Controls, Input:",
                                              "text": "If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to for additional requirements for controls and content that accepts user input.)"
                                          },
                                          {
                                              "handle": "Time-Based Media:",
                                              "text": "If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to for additional requirements for media.)"
                                          },
                                          {
                                              "handle": "Test:",
                                              "text": "If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content."
                                          },
                                          {
                                              "handle": "Sensory:",
                                              "text": "If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content."
                                          },
                                          {
                                              "handle": "CAPTCHA:",
                                              "text": "If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities."
                                          },
                                          {
                                              "handle": "Decoration, Formatting, Invisible:",
                                              "text": "If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology."
                                          }
                                      ]
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If a short description can serve the same purpose and present the same information as the non-text content:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G94"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA6"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA10"
                                                          },
                                                          {
                                                              "id": "TECH:G196"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH1"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH5"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH28"
                                                          },
                                                          {
                                                              "id": "TECH:H2"
                                                          },
                                                          {
                                                              "id": "TECH:H35"
                                                          },
                                                          {
                                                              "id": "TECH:H37"
                                                          },
                                                          {
                                                              "id": "TECH:H53"
                                                          },
                                                          {
                                                              "id": "TECH:H86"
                                                          },
                                                          {
                                                              "id": "TECH:PDF1"
                                                          },
                                                          {
                                                              "id": "TECH:SL5"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G95"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA15"
                                                          },
                                                          {
                                                              "id": "TECH:G73"
                                                          },
                                                          {
                                                              "id": "TECH:G74"
                                                          },
                                                          {
                                                              "id": "TECH:G92"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH2"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH11"
                                                          },
                                                          {
                                                              "id": "TECH:H45"
                                                          },
                                                          {
                                                              "id": "TECH:H53"
                                                          },
                                                          {
                                                              "id": "TECH:SL8"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: If non-text content is a control or accepts user input:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G82"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA6"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA9"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH6"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH25"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH27"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH29"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH30"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH32"
                                                          },
                                                          {
                                                              "id": "TECH:H24"
                                                          },
                                                          {
                                                              "id": "TECH:H30"
                                                          },
                                                          {
                                                              "id": "TECH:H36"
                                                          },
                                                          {
                                                              "id": "TECH:H44"
                                                          },
                                                          {
                                                              "id": "TECH:H65"
                                                          },
                                                          {
                                                              "id": "TECH:SL18"
                                                          },
                                                          {
                                                              "id": "TECH:SL26"
                                                          },
                                                          {
                                                              "id": "TECH:SL30"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:future1",
                                                              "title": "Providing a descriptive label using one of the following Short text alternative techniques for Situation D :"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA6"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA10"
                                                          },
                                                          {
                                                              "id": "TECH:G68"
                                                          },
                                                          {
                                                              "id": "TECH:G100"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation E: If non-text content is a CAPTCHA:",
                                                      "techniques": [
                                                          {
                                                              "and": [
                                                                  {
                                                                      "id": "TECH:G143"
                                                                  },
                                                                  {
                                                                      "id": "TECH:G144"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation F: If the non-text content should be ignored by assistive technology:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:future1",
                                                              "title": "Implementing or marking the non-text content so that it will be ignored by assistive technology using one of the following Techniques to indicate that text alternatives are not required for Situation F :"
                                                          },
                                                          {
                                                              "id": "TECH:C9"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH3"
                                                          },
                                                          {
                                                              "id": "TECH:H67"
                                                          },
                                                          {
                                                              "id": "TECH:PDF4"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": []
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F3"
                                          },
                                          {
                                              "id": "TECH:F13"
                                          },
                                          {
                                              "id": "TECH:F20"
                                          },
                                          {
                                              "id": "TECH:F30"
                                          },
                                          {
                                              "id": "TECH:F38"
                                          },
                                          {
                                              "id": "TECH:F39"
                                          },
                                          {
                                              "id": "TECH:F65"
                                          },
                                          {
                                              "id": "TECH:F67"
                                          },
                                          {
                                              "id": "TECH:F71"
                                          },
                                          {
                                              "id": "TECH:F72"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:media-equiv",
                      "num": "1.2",
                      "handle": "Time-based Media",
                      "title": "Provide alternatives for time-based media.",
                      "techniques": [
                          {
                              "advisory": []
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:media-equiv-av-only-alt",
                              "num": "1.2.1",
                              "level": "A",
                              "handle": "Audio-only and Video-only (Prerecorded)",
                              "text": "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Prerecorded Audio-only:",
                                              "text": "An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content."
                                          },
                                          {
                                              "handle": "Prerecorded Video-only:",
                                              "text": "Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content."
                                          }
                                      ]
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the content is prerecorded audio-only:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G158"
                                                          },
                                                          {
                                                              "id": "TECH:SL17"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If the content is prerecorded video-only:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G159"
                                                          },
                                                          {
                                                              "id": "TECH:G166"
                                                          },
                                                          {
                                                              "id": "TECH:SL17"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H96"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a transcript of a live audio only presentation after the fact (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Linking to textual information that provides comparable information (e.g., for a traffic Webcam, a municipality could provide a link to the text traffic report.) (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F30"
                                          },
                                          {
                                              "id": "TECH:F67"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-captions",
                              "num": "1.2.2",
                              "level": "A",
                              "handle": "Captions (Prerecorded)",
                              "text": "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G93"
                                          },
                                          {
                                              "id": "TECH:G87"
                                          },
                                          {
                                              "id": "TECH:G87",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM11"
                                                  },
                                                  {
                                                      "id": "TECH:SM12"
                                                  },
                                                  {
                                                      "id": "TECH:H95"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH9"
                                                  },
                                                  {
                                                      "id": "TECH:SL16"
                                                  },
                                                  {
                                                      "id": "TECH:SL28"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing a note saying \"No sound is used in this clip\" for video-only clips (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using SMIL 1.0 to provide captions for all languages for which there are audio tracks (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using SMIL 2.0 to provide captions for all languages for which there are audio tracks (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F8"
                                          },
                                          {
                                              "id": "TECH:F75"
                                          },
                                          {
                                              "id": "TECH:F74"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-audio-desc",
                              "num": "1.2.3",
                              "level": "A",
                              "handle": "Audio Description or Media Alternative (Prerecorded)",
                              "text": "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G69",
                                              "using": [
                                                  {
                                                      "id": "TECH:G58"
                                                  },
                                                  {
                                                      "id": "TECH:SL17"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Linking to the alternative for time-based media using one of the following techniques Using the body of the object element",
                                              "using": [
                                                  {
                                                      "id": "TECH:H53"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G78"
                                          },
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G78"
                                                  },
                                                  {
                                                      "id": "TECH:SL1"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G173",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM6"
                                                  },
                                                  {
                                                      "id": "TECH:SM7"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH26"
                                                  },
                                                  {
                                                      "id": "TECH:SL1"
                                                  },
                                                  {
                                                      "id": "TECH:future5",
                                                      "title": "Using any player that supports audio and video"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G8",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM1"
                                                  },
                                                  {
                                                      "id": "TECH:SM2"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH26"
                                                  },
                                                  {
                                                      "id": "TECH:SL1"
                                                  },
                                                  {
                                                      "id": "TECH:future5",
                                                      "title": "Using any player that supports audio and video"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G203"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H96"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing audio description in multiple languages in SMIL 1.0 (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing audio description in multiple languages in SMIL 2.0 (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-real-time-captions",
                              "num": "1.2.1",
                              "level": "AA",
                              "handle": "Captions (Live)",
                              "text": "Captions are provided for all live audio content in synchronized media.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G9"
                                                  },
                                                  {
                                                      "id": "TECH:G93"
                                                  }
                                              ]
                                          },
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G9"
                                                  },
                                                  {
                                                      "id": "TECH:G87"
                                                  }
                                              ]
                                          },
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G9"
                                                  },
                                                  {
                                                      "id": "TECH:G87"
                                                  }
                                              ],
                                              "using": [
                                                  {
                                                      "id": "TECH:SM11"
                                                  },
                                                  {
                                                      "id": "TECH:SM12"
                                                  }
                                              ]
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-audio-desc-only",
                              "num": "1.2.2",
                              "level": "AA",
                              "handle": "Audio Description (Prerecorded)",
                              "text": "Audio description is provided for all prerecorded video content in synchronized media.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G78"
                                          },
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G78"
                                                  },
                                                  {
                                                      "id": "TECH:SL1"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G173",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM6"
                                                  },
                                                  {
                                                      "id": "TECH:SM7"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH26"
                                                  },
                                                  {
                                                      "id": "TECH:future4",
                                                      "title": "Using any player that supports audio and video"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G8",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM1"
                                                  },
                                                  {
                                                      "id": "TECH:SM2"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH26"
                                                  },
                                                  {
                                                      "id": "TECH:future4",
                                                      "title": "Using any player that supports audio and video"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G203"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H96"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing audio description in multiple languages in SMIL 1.0 (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing audio description in multiple languages in SMIL 2.0 (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing audio description for live synchronized media (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-sign",
                              "num": "1.2.1",
                              "level": "AAA",
                              "handle": "Sign Language (Prerecorded)",
                              "text": "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G54"
                                          },
                                          {
                                              "id": "TECH:G81",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM13"
                                                  },
                                                  {
                                                      "id": "TECH:SM14"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": []
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-extended-ad",
                              "num": "1.2.2",
                              "level": "AAA",
                              "handle": "Extended Audio Description (Prerecorded)",
                              "text": "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G8",
                                              "using": [
                                                  {
                                                      "id": "TECH:SM1"
                                                  },
                                                  {
                                                      "id": "TECH:SM2"
                                                  },
                                                  {
                                                      "id": "TECH:future3",
                                                      "title": "Using any player that supports audio and video"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H96"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Adding extended audio description in multiple languages in SMIL 1.0 (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Adding extended audio description in multiple languages in SMIL 2.0 (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-text-doc",
                              "num": "1.2.3",
                              "level": "AAA",
                              "handle": "Media Alternative (Prerecorded)",
                              "text": "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the content is prerecorded synchronized media:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G69",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G58"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL17"
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "id": "TECH:future2",
                                                              "title": "Linking to the alternative for time-based media using one of the following techniques Using the body of the object element",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:H53"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If the content is prerecorded video-only:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G159"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H46"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a corrected script (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Adding detail to audio description (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F74"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:media-equiv-live-audio-only",
                              "num": "1.2.4",
                              "level": "AAA",
                              "handle": "Audio-only (Live)",
                              "text": "An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G151"
                                          },
                                          {
                                              "id": "TECH:G150"
                                          },
                                          {
                                              "id": "TECH:G157"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using metadata to associate text transcriptions with audio-only content (future link)Providing, in metadata, URI(s) that point to several text transcripts (English, French, Dutch) of an audio file."
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:content-structure-separation",
                      "num": "1.3",
                      "handle": "Adaptable",
                      "title": "Create content that can be presented in different ways (for example simpler layout) without losing information or structure.",
                      "techniques": [],
                      "successcriteria": [
                          {
                              "id": "WCAG2:content-structure-separation-programmatic",
                              "num": "1.3.1",
                              "level": "A",
                              "handle": "Info and Relationships",
                              "text": "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:ARIA11"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA12"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA13"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA16"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA17"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA20"
                                                          },
                                                          {
                                                              "and": [
                                                                  {
                                                                      "id": "TECH:G115"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H49"
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "id": "TECH:G117"
                                                          },
                                                          {
                                                              "id": "TECH:G140"
                                                          },
                                                          {
                                                              "id": "TECH:future10",
                                                              "title": "Making information and relationships conveyed through presentation programmatically determinable using the following techniques: Using semantic markup whenever color cues are used Using table markup to present tabular information Using caption elements to associate data table captions with data tables Specifying caption text for a DataGrid Using the summary attribute of the table element to give an overview of data tables Adding summary information to a DataGrid Using the scope attribute to associate header cells and data cells in data tables Using id and headers attributes to associate data cells with header cells in data tables Using the DataGrid component to associate column headers with cells Using label elements to associate text labels with form controls Using the title attribute to identify form controls when the label element cannot be used Using auto labeling to associate text labels with form controls Setting the label property for form components Labeling a form control by setting its accessible name Providing a label for groups of radio buttons or checkboxes using the fieldset and legend elements Using OPTGROUP to group OPTION elements inside a SELECT Using ol, ul and dl for lists Using h1-h6 to identify headings Using functions of the Document Object Model (DOM) to add content to a page",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G138"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H51"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF6"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF20"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H39"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH31"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H73"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH23"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H63"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H43"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH21"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H44"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H65"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF10"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF12"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH32"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH29"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH25"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H71"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL20"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL26"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H85"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H48"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H42"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF9"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SCR21"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF11"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF17"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF21"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H97"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G117"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH8"
                                                          },
                                                          {
                                                              "id": "TECH:future3",
                                                              "title": "Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques: Using standard text formatting conventions for paragraphs Using standard text formatting conventions for lists Using standard text formatting conventions for headings",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:T1"
                                                                  },
                                                                  {
                                                                      "id": "TECH:T2"
                                                                  },
                                                                  {
                                                                      "id": "TECH:T3"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:C22"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using CSS rather than tables for page layout (future link)"
                                          },
                                          {
                                              "id": "TECH:G162"
                                          },
                                          {
                                              "id": "TECH:ARIA1"
                                          },
                                          {
                                              "id": "TECH:ARIA2"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Providing labels for all form controls that do not have implicit labels (future link)"
                                          },
                                          {
                                              "id": "TECH:G141"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F2"
                                          },
                                          {
                                              "id": "TECH:F33"
                                          },
                                          {
                                              "id": "TECH:F34"
                                          },
                                          {
                                              "id": "TECH:F42"
                                          },
                                          {
                                              "id": "TECH:F43"
                                          },
                                          {
                                              "id": "TECH:F46"
                                          },
                                          {
                                              "id": "TECH:F48"
                                          },
                                          {
                                              "id": "TECH:F68"
                                          },
                                          {
                                              "id": "TECH:F87"
                                          },
                                          {
                                              "id": "TECH:F90"
                                          },
                                          {
                                              "id": "TECH:F91"
                                          },
                                          {
                                              "id": "TECH:F92"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:content-structure-separation-sequence",
                              "num": "1.3.2",
                              "level": "A",
                              "handle": "Meaningful Sequence",
                              "text": "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G57"
                                          },
                                          {
                                              "id": "TECH:G57",
                                              "using": [
                                                  {
                                                      "id": "TECH:H34"
                                                  },
                                                  {
                                                      "id": "TECH:H56"
                                                  },
                                                  {
                                                      "id": "TECH:C6"
                                                  },
                                                  {
                                                      "id": "TECH:C8"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:C27"
                                          },
                                          {
                                              "id": "TECH:FLASH15"
                                          },
                                          {
                                              "id": "TECH:PDF3"
                                          },
                                          {
                                              "id": "TECH:SL34"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a link to linearized rendering (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing a style switcher between style sheets that affect presentation order (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F34"
                                          },
                                          {
                                              "id": "TECH:F33"
                                          },
                                          {
                                              "id": "TECH:F32"
                                          },
                                          {
                                              "id": "TECH:F49"
                                          },
                                          {
                                              "id": "TECH:F1"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:content-structure-separation-understanding",
                              "num": "1.3.3",
                              "level": "A",
                              "handle": "Sensory Characteristics",
                              "text": "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "For requirements related to color, refer to ."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G96"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using an image with a text alternative for graphical symbols instead of a Unicode font glyph with the desired graphical appearance but different meaning (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F14"
                                          },
                                          {
                                              "id": "TECH:F26"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:visual-audio-contrast",
                      "num": "1.4",
                      "handle": "Distinguishable",
                      "title": "Make it easier for users to see and hear content including separating foreground from background.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Using readable fonts (future link)"
                                  },
                                  {
                                      "id": "TECH:future2",
                                      "title": "Making sure any text in images of text is at least 14 points and has good contrast (future link)"
                                  },
                                  {
                                      "id": "TECH:future3",
                                      "title": "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:visual-audio-contrast-without-color",
                              "num": "1.4.1",
                              "level": "A",
                              "handle": "Use of Color",
                              "text": "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "This success criterion addresses color perception specifically. Other forms of perception are covered in including programmatic access to color and other visual presentation coding."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G14"
                                                          },
                                                          {
                                                              "id": "TECH:G205"
                                                          },
                                                          {
                                                              "id": "TECH:G182"
                                                          },
                                                          {
                                                              "id": "TECH:G183"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If color is used within an image to convey information:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G111"
                                                          },
                                                          {
                                                              "id": "TECH:G14"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Conveying information redundantly using color (future link)"
                                          },
                                          {
                                              "id": "TECH:C15"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F13"
                                          },
                                          {
                                              "id": "TECH:F73"
                                          },
                                          {
                                              "id": "TECH:F81"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-dis-audio",
                              "num": "1.4.2",
                              "level": "A",
                              "handle": "Audio Control",
                              "text": "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See ."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G60"
                                          },
                                          {
                                              "id": "TECH:G170"
                                          },
                                          {
                                              "id": "TECH:G171"
                                          },
                                          {
                                              "id": "TECH:SL24"
                                          },
                                          {
                                              "id": "TECH:FLASH18"
                                          },
                                          {
                                              "id": "TECH:FLASH34"
                                          },
                                          {
                                              "id": "TECH:SL3"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing a site-wide preference to turn off audio in addition to providing a control near the top of the Web page that turns off sounds that play automatically (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F23"
                                          },
                                          {
                                              "id": "TECH:F93"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-contrast",
                              "num": "1.4.1",
                              "level": "AA",
                              "handle": "Contrast (Minimum)",
                              "text": "The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Large Text:",
                                              "text": "Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;"
                                          },
                                          {
                                              "handle": "Incidental:",
                                              "text": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
                                          },
                                          {
                                              "handle": "Logotypes:",
                                              "text": "Text that is part of a logo or brand name has no minimum contrast requirement."
                                          }
                                      ]
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G18"
                                                          },
                                                          {
                                                              "id": "TECH:G148"
                                                          },
                                                          {
                                                              "id": "TECH:G174"
                                                          },
                                                          {
                                                              "id": "TECH:SL13"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: text is at least 18 point if not bold and at least 14 point if bold",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G145"
                                                          },
                                                          {
                                                              "id": "TECH:G148"
                                                          },
                                                          {
                                                              "id": "TECH:G174"
                                                          },
                                                          {
                                                              "id": "TECH:SL13"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G156"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using a higher contrast value for text that is over a patterned background (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using Unicode text and style sheets instead of images of text (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using a higher contrast values for lines in diagrams (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Using greater contrast level for red-black text/background combinations (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Making icons using simple line drawings that meet the contrast provisions for text (future link)"
                                          },
                                          {
                                              "id": "TECH:future9",
                                              "title": "Providing sufficient contrast ratio in graphs and charts (future link)"
                                          },
                                          {
                                              "id": "TECH:future10",
                                              "title": "Using a 3:1 contrast ratio or higher as the default presentation (future link)"
                                          },
                                          {
                                              "id": "TECH:future11",
                                              "title": "Providing sufficient color contrast for empty text fields (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F24"
                                          },
                                          {
                                              "id": "TECH:F83"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-scale",
                              "num": "1.4.2",
                              "level": "AA",
                              "handle": "Resize text",
                              "text": "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G142"
                                          },
                                          {
                                              "id": "TECH:SL22"
                                          },
                                          {
                                              "id": "TECH:SL23"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Ensuring that text containers resize when the text resizes AND using measurements that are relative to other measurements in the content by using one or more of the following techniques: Specifying the size of text containers using em units Techniques for relative measurements Using percent for font sizes Using named font sizes Using em units for font sizes Techniques for text container resizing Calculating size and position in a way that scales with text size (Scripting) Using liquid layout",
                                              "using": [
                                                  {
                                                      "id": "TECH:C28"
                                                  },
                                                  {
                                                      "id": "TECH:future2",
                                                      "title": "Techniques for relative measurements Using percent for font sizes Using named font sizes Using em units for font sizes",
                                                      "using": [
                                                          {
                                                              "id": "TECH:C12"
                                                          },
                                                          {
                                                              "id": "TECH:C13"
                                                          },
                                                          {
                                                              "id": "TECH:C14"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "id": "TECH:future3",
                                                      "title": "Techniques for text container resizing Calculating size and position in a way that scales with text size (Scripting) Using liquid layout",
                                                      "using": [
                                                          {
                                                              "id": "TECH:SCR34"
                                                          },
                                                          {
                                                              "id": "TECH:G146"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G178"
                                          },
                                          {
                                              "id": "TECH:G179"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing large fonts by default (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using page-percent for container sizes (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Avoiding scaling font sizes smaller than the user-agent default (future link)The author won't actually know the font size, but should avoid percentage scaling that results in less than 100%"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Avoiding justified text (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Providing sufficient inter-line and inter-column spacing (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Providing different sizes for non-text content when it cannot have an equivalent accessible alternative (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Avoiding the use of text in raster images (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Using server-side scripts to resize images of text (future link)"
                                          },
                                          {
                                              "id": "TECH:C17"
                                          },
                                          {
                                              "id": "TECH:future10",
                                              "title": "Ensuring that text in raster images is at least 18pt (future link)"
                                          },
                                          {
                                              "id": "TECH:future11",
                                              "title": "Scaling text down to 50% (future link)"
                                          },
                                          {
                                              "id": "TECH:C20"
                                          },
                                          {
                                              "id": "TECH:C22"
                                          },
                                          {
                                              "id": "TECH:future14",
                                              "title": "Providing a mechanism to allow captions to be enlarged (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F69"
                                          },
                                          {
                                              "id": "TECH:F80"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-text-presentation",
                              "num": "1.4.3",
                              "level": "AA",
                              "handle": "Images of Text",
                              "text": "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "",
                                              "text": "Customizable: The image of text can be visually customized to the user's requirements;"
                                          },
                                          {
                                              "handle": "",
                                              "text": "Essential: A particular presentation of text is essential to the information being conveyed."
                                          }
                                      ]
                                  },
                                  {
                                      "type": "note",
                                      "text": "Logotypes (text that is part of a logo or brand name) are considered essential."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:C22"
                                          },
                                          {
                                              "id": "TECH:SL31"
                                          },
                                          {
                                              "id": "TECH:C30"
                                          },
                                          {
                                              "id": "TECH:G140"
                                          },
                                          {
                                              "id": "TECH:PDF7"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": []
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast7",
                              "num": "1.4.1",
                              "level": "AAA",
                              "handle": "Contrast (Enhanced)",
                              "text": "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Large Text:",
                                              "text": "Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;"
                                          },
                                          {
                                              "handle": "Incidental:",
                                              "text": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
                                          },
                                          {
                                              "handle": "Logotypes:",
                                              "text": "Text that is part of a logo or brand name has no minimum contrast requirement."
                                          }
                                      ]
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: text is less than 18 point if not bold and less than 14 point if bold",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G17"
                                                          },
                                                          {
                                                              "id": "TECH:G148"
                                                          },
                                                          {
                                                              "id": "TECH:G174"
                                                          },
                                                          {
                                                              "id": "TECH:SL13"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: text is as least 18 point if not bold and at least 14 point if bold",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G18"
                                                          },
                                                          {
                                                              "id": "TECH:G148"
                                                          },
                                                          {
                                                              "id": "TECH:G174"
                                                          },
                                                          {
                                                              "id": "TECH:SL13"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G156"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using a higher contrast value for text that is over a patterned background (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using Unicode text and style sheets instead of images of text (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using a higher contrast values for lines in diagrams (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Using greater contrast level for red-black text/background combinations"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Using colors that are composed predominantly of mid spectral components for the light and spectral extremes (blue and red wavelengths) for the dark"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Using a light pastel background rather than a white background behind black text to create sufficient but not extreme contrast (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Making icons using simple line drawings that meet the contrast provisions for text (future link)"
                                          },
                                          {
                                              "id": "TECH:future9",
                                              "title": "Providing sufficient contrast ratio in graphs and charts (future link)"
                                          },
                                          {
                                              "id": "TECH:future10",
                                              "title": "Using a 3:1 contrast ratio or higher as the default presentation (future link)"
                                          },
                                          {
                                              "id": "TECH:future11",
                                              "title": "Providing sufficient color contrast for empty text fields (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F24"
                                          },
                                          {
                                              "id": "TECH:F83"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-noaudio",
                              "num": "1.4.2",
                              "level": "AAA",
                              "handle": "Low or No Background Audio",
                              "text": "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "No Background:",
                                              "text": "The audio does not contain background sounds."
                                          },
                                          {
                                              "handle": "Turn Off:",
                                              "text": "The background sounds can be turned off."
                                          },
                                          {
                                              "handle": "20 dB:",
                                              "text": "The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds."
                                          }
                                      ]
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G56"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing a way for users to adjust auditory levels of foreground and background sound independently (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing an audio track for synchronized media that includes background sounds that are at least 20 decibels lower than speech (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-visual-presentation",
                              "num": "1.4.3",
                              "level": "AAA",
                              "handle": "Visual Presentation",
                              "text": "For the visual presentation of blocks of text, a mechanism is available to achieve the following:",
                              "details": [
                                  {
                                      "handle": "",
                                      "text": "Foreground and background colors can be selected by the user."
                                  },
                                  {
                                      "handle": "",
                                      "text": "Width is no more than 80 characters or glyphs (40 if CJK)."
                                  },
                                  {
                                      "handle": "",
                                      "text": "Text is not justified (aligned to both the left and the right margins)."
                                  },
                                  {
                                      "handle": "",
                                      "text": "Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing."
                                  },
                                  {
                                      "handle": "",
                                      "text": "Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": []
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using a hover effect to highlight a paragraph, list items, or table cells (CSS) (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Presenting text in sans serif font or providing a mechanism to achieve this (CSS) (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using vertical (bulleted or numbered) lists rather than inline lists (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using upper and lower case according to the spelling conventions of the text language (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Providing large fonts by default (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Avoiding the use of text in raster images (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Avoiding scaling font sizes smaller than the user-agent default (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Providing sufficient inter-column spacing (future link)"
                                          },
                                          {
                                              "id": "TECH:future9",
                                              "title": "Avoiding centrally aligned text (future link)"
                                          },
                                          {
                                              "id": "TECH:future10",
                                              "title": "Avoiding chunks of italic text (future link)"
                                          },
                                          {
                                              "id": "TECH:future11",
                                              "title": "Avoiding overuse of different styles on individual pages and in sites (future link)"
                                          },
                                          {
                                              "id": "TECH:future12",
                                              "title": "Making links visually distinct (future link)"
                                          },
                                          {
                                              "id": "TECH:future13",
                                              "title": "Providing expandable bullets (future link)"
                                          },
                                          {
                                              "id": "TECH:future14",
                                              "title": "Show/hide bullet points (future link)"
                                          },
                                          {
                                              "id": "TECH:future15",
                                              "title": "Putting an em-space or two spaces after sentences (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F24"
                                          },
                                          {
                                              "id": "TECH:F88"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:visual-audio-contrast-text-images",
                              "num": "1.4.4",
                              "level": "AAA",
                              "handle": "Images of Text (No Exception)",
                              "text": "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "Logotypes (text that is part of a logo or brand name) are considered essential."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:C22"
                                          },
                                          {
                                              "id": "TECH:SL31"
                                          },
                                          {
                                              "id": "TECH:C30"
                                          },
                                          {
                                              "id": "TECH:G140"
                                          },
                                          {
                                              "id": "TECH:PDF7"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": []
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "id": "WCAG2:operable",
              "num": "2",
              "handle": "Operable",
              "title": "Principle 2: Operable - User interface components and navigation must be operable.",
              "guidelines": [
                  {
                      "id": "WCAG2:keyboard-operation",
                      "num": "2.1",
                      "handle": "Keyboard Accessible",
                      "title": "Make all functionality available from a keyboard.",
                      "techniques": [
                          {
                              "advisory": []
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:keyboard-operation-keyboard-operable",
                              "num": "2.1.1",
                              "level": "A",
                              "handle": "Keyboard",
                              "text": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G202"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Ensuring keyboard control by using one of the following techniques. Using HTML form controls and links",
                                              "using": [
                                                  {
                                                      "id": "TECH:H91"
                                                  },
                                                  {
                                                      "id": "TECH:PDF3"
                                                  },
                                                  {
                                                      "id": "TECH:PDF11"
                                                  },
                                                  {
                                                      "id": "TECH:PDF23"
                                                  },
                                                  {
                                                      "id": "TECH:SL15"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G90",
                                              "using": [
                                                  {
                                                      "id": "TECH:SCR20"
                                                  },
                                                  {
                                                      "id": "TECH:SCR35"
                                                  },
                                                  {
                                                      "id": "TECH:SCR2"
                                                  },
                                                  {
                                                      "id": "TECH:SL9"
                                                  },
                                                  {
                                                      "id": "TECH:SL14"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:FLASH17",
                                              "using": [
                                                  {
                                                      "id": "TECH:FLASH22"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH16"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH14"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:SCR29"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing keyboard shortcuts to important links and form controls (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using unique letter combinations to begin each item of a list (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Choosing the most abstract event handler (future link) (Scripting)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Using the onactivate event (future link) (Scripting)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Avoiding use of common user-agent keyboard commands for other purposes (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F54"
                                          },
                                          {
                                              "id": "TECH:F55"
                                          },
                                          {
                                              "id": "TECH:F42"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:keyboard-operation-trapping",
                              "num": "2.1.2",
                              "level": "A",
                              "handle": "No Keyboard Trap",
                              "text": "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See ."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G21"
                                          },
                                          {
                                              "id": "TECH:FLASH17"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F10"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:keyboard-operation-all-funcs",
                              "num": "2.1.1",
                              "level": "AAA",
                              "handle": "Keyboard (No Exception)",
                              "text": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
                              "techniques": []
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:time-limits",
                      "num": "2.2",
                      "handle": "Enough Time",
                      "title": "Provide users enough time to read and use content.",
                      "techniques": [
                          {
                              "advisory": []
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:time-limits-required-behaviors",
                              "num": "2.2.1",
                              "level": "A",
                              "handle": "Timing Adjustable",
                              "text": "For each time limit that is set by the content, at least one of the following is true:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Turn off:",
                                              "text": "The user is allowed to turn off the time limit before encountering it; or"
                                          },
                                          {
                                              "handle": "Adjust:",
                                              "text": "The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or"
                                          },
                                          {
                                              "handle": "Extend:",
                                              "text": "The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, \"press the space bar\"), and the user is allowed to extend the time limit at least ten times; or"
                                          },
                                          {
                                              "handle": "Real-time Exception:",
                                              "text": "The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or"
                                          },
                                          {
                                              "handle": "Essential Exception:",
                                              "text": "The time limit is essential and extending it would invalidate the activity; or"
                                          },
                                          {
                                              "handle": "20 Hour Exception:",
                                              "text": "The time limit is longer than 20 hours."
                                          }
                                      ]
                                  },
                                  {
                                      "type": "note",
                                      "text": "This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If there are session time limits:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G133"
                                                          },
                                                          {
                                                              "id": "TECH:G198"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If a time limit is controlled by a script on the page:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G198"
                                                          },
                                                          {
                                                              "id": "TECH:G180"
                                                          },
                                                          {
                                                              "and": [
                                                                  {
                                                                      "id": "TECH:SCR16"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SCR1"
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "id": "TECH:FLASH19"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH24"
                                                          },
                                                          {
                                                              "id": "TECH:SL21"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: If there are time limits on reading:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G4"
                                                          },
                                                          {
                                                              "id": "TECH:G198"
                                                          },
                                                          {
                                                              "id": "TECH:SCR33"
                                                          },
                                                          {
                                                              "id": "TECH:SCR36"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using a script to poll the server and notify a user if a time limit is present (future link) (Scripting)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using sounds to focus user's attention (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F40"
                                          },
                                          {
                                              "id": "TECH:F41"
                                          },
                                          {
                                              "id": "TECH:F58"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:time-limits-pause",
                              "num": "2.2.2",
                              "level": "A",
                              "handle": "Pause, Stop, Hide",
                              "text": "For moving, blinking, scrolling, or auto-updating information, all of the following are true:",
                              "details": [
                                  {
                                      "type": "ulist",
                                      "items": [
                                          {
                                              "handle": "Moving, blinking, scrolling:",
                                              "text": "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and"
                                          },
                                          {
                                              "handle": "Auto-updating:",
                                              "text": "For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential."
                                          }
                                      ]
                                  },
                                  {
                                      "type": "note",
                                      "text": "For requirements related to flickering or flashing content, refer to .Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See .Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G4"
                                          },
                                          {
                                              "id": "TECH:SL11"
                                          },
                                          {
                                              "id": "TECH:SL12"
                                          },
                                          {
                                              "id": "TECH:SCR33"
                                          },
                                          {
                                              "id": "TECH:FLASH35"
                                          },
                                          {
                                              "id": "TECH:G11"
                                          },
                                          {
                                              "id": "TECH:G187"
                                          },
                                          {
                                              "id": "TECH:G152"
                                          },
                                          {
                                              "id": "TECH:SCR22"
                                          },
                                          {
                                              "id": "TECH:FLASH36"
                                          },
                                          {
                                              "id": "TECH:G186"
                                          },
                                          {
                                              "id": "TECH:G191"
                                          },
                                          {
                                              "id": "TECH:SL24"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing a mechanism to stop all content that blinks within a Web page (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing the user with a means to stop moving content even if it stops automatically within 5 seconds (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F16"
                                          },
                                          {
                                              "id": "TECH:F47"
                                          },
                                          {
                                              "id": "TECH:F4"
                                          },
                                          {
                                              "id": "TECH:F50"
                                          },
                                          {
                                              "id": "TECH:F7"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:time-limits-no-exceptions",
                              "num": "2.2.1",
                              "level": "AAA",
                              "handle": "No Timing",
                              "text": "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G5"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:time-limits-postponed",
                              "num": "2.2.2",
                              "level": "AAA",
                              "handle": "Interruptions",
                              "text": "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G75"
                                          },
                                          {
                                              "id": "TECH:G76"
                                          },
                                          {
                                              "id": "TECH:SCR14"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F40"
                                          },
                                          {
                                              "id": "TECH:F41"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:time-limits-server-timeout",
                              "num": "2.2.3",
                              "level": "AAA",
                              "handle": "Re-authenticating",
                              "text": "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing options to continue without loss of data using one of the following techniques: Saving data so that it can be used after a user re-authenticates Encoding user data as hidden data in re-authorization page",
                                              "using": [
                                                  {
                                                      "id": "TECH:G105"
                                                  },
                                                  {
                                                      "id": "TECH:G181"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F12"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:seizure",
                      "num": "2.3",
                      "handle": "Seizures",
                      "title": "Do not design content in a way that is known to cause seizures.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Ensuring that content does not violate spatial pattern thresholds (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:seizure-does-not-violate",
                              "num": "2.3.1",
                              "level": "A",
                              "handle": "Three Flashes or Below Threshold",
                              "text": "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See ."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G19"
                                          },
                                          {
                                              "id": "TECH:G176"
                                          },
                                          {
                                              "id": "TECH:G15"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Reducing contrast for any flashing content (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Avoiding fully saturated reds for any flashing content (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Reducing the number of flashes even if they do not violate thresholds (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing a mechanism to suppress any flashing content before it begins (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Freezing the image momentarily if 3 flashes within one second are detected (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Dropping the contrast ratio if 3 flashes within one second are detected (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Allowing users to set a custom flash rate limit (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:seizure-three-times",
                              "num": "2.3.1",
                              "level": "AAA",
                              "handle": "Three Flashes",
                              "text": "Web pages do not contain anything that flashes more than three times in any one second period.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G19"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Reducing contrast for any flashing content (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Avoiding fully saturated reds for any flashing content (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Reducing the number of flashes even if they don't violate thresholds (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Slowing down live material to avoid rapid flashes (as in flashbulbs) (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Freezing the image momentarily if 3 flashes within one second are detected (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Dropping the contrast ratio if 3 flashes within one second are detected (future link)"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:navigation-mechanisms",
                      "num": "2.4",
                      "handle": "Navigable",
                      "title": "Provide ways to help users navigate, find content, and determine where they are.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Limiting the number of links per page (future link)"
                                  },
                                  {
                                      "id": "TECH:future2",
                                      "title": "Providing mechanisms to navigate to different sections of the content of a Web page (future link)"
                                  },
                                  {
                                      "id": "TECH:future3",
                                      "title": "Making links visually distinct (future link)"
                                  },
                                  {
                                      "id": "TECH:future4",
                                      "title": "Highlighting search terms (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:navigation-mechanisms-skip",
                              "num": "2.4.1",
                              "level": "A",
                              "handle": "Bypass Blocks",
                              "text": "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Creating links to skip blocks of repeated material using one of the following techniques: Adding a link at the top of each page that goes directly to the main content area Adding a link at the beginning of a block of repeated content to go to the end of the block Adding links at the top of the page to each area of the content",
                                              "using": [
                                                  {
                                                      "id": "TECH:G1"
                                                  },
                                                  {
                                                      "id": "TECH:G123"
                                                  },
                                                  {
                                                      "id": "TECH:G124"
                                                  },
                                                  {
                                                      "id": "TECH:SL25"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques: Providing Heading elements at the beginning of each section of content Using frame elements to group blocks of repeated material AND Using the title attribute of the frame and iframe elements Using an expandable and collapsible menu",
                                              "using": [
                                                  {
                                                      "id": "TECH:ARIA11"
                                                  },
                                                  {
                                                      "id": "TECH:H69"
                                                  },
                                                  {
                                                      "id": "TECH:PDF9"
                                                  },
                                                  {
                                                      "and": [
                                                          {
                                                              "id": "TECH:H70"
                                                          },
                                                          {
                                                              "id": "TECH:H64"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "id": "TECH:SCR28"
                                                  },
                                                  {
                                                      "id": "TECH:SL29"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing keyboard access to important links and form controls (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing skip links to enhance page navigation (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing access keys (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using accessibility supported technologies which allow structured navigation by user agents and assistive technologies (future link)"
                                          },
                                          {
                                              "id": "TECH:C6"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-title",
                              "num": "2.4.2",
                              "level": "A",
                              "handle": "Page Titled",
                              "text": "Web pages have titles that describe topic or purpose.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G88",
                                              "using": [
                                                  {
                                                      "id": "TECH:H25"
                                                  },
                                                  {
                                                      "id": "TECH:PDF18"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G127"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Identifying the subject of the Web page (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing a meaningful name for identifying frames (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using unique titles for Web pages (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Providing a descriptive top-level page heading (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F25"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-focus-order",
                              "num": "2.4.3",
                              "level": "A",
                              "handle": "Focus Order",
                              "text": "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G59"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques: Creating a logical tab order through links, form controls, and objects Using the tabIndex property to specify a logical tab order in Flash Making the DOM order match the visual order",
                                              "using": [
                                                  {
                                                      "id": "TECH:H4"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH15"
                                                  },
                                                  {
                                                      "id": "TECH:C27"
                                                  },
                                                  {
                                                      "id": "TECH:PDF3"
                                                  },
                                                  {
                                                      "id": "TECH:SL34"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Changing a Web page dynamically using one of the following techniques: Inserting dynamic content into the Document Object Model immediately following its trigger element Creating custom dialogs in a device independent way Reordering page sections using the Document Object Model",
                                              "using": [
                                                  {
                                                      "id": "TECH:SCR26"
                                                  },
                                                  {
                                                      "id": "TECH:SCR37"
                                                  },
                                                  {
                                                      "id": "TECH:SCR27"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Creating alternative presentation orders (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F44"
                                          },
                                          {
                                              "id": "TECH:F85"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-refs",
                              "num": "2.4.4",
                              "level": "A",
                              "handle": "Link Purpose (In Context)",
                              "text": "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G91"
                                          },
                                          {
                                              "id": "TECH:H30"
                                          },
                                          {
                                              "id": "TECH:H24"
                                          },
                                          {
                                              "id": "TECH:FLASH27"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Allowing the user to choose short or long link text using one of the techniques below: Providing a control near the beginning of the Web page that changes the link text Using scripts to change the link text Using scripting to change control labels",
                                              "using": [
                                                  {
                                                      "id": "TECH:G189"
                                                  },
                                                  {
                                                      "id": "TECH:SCR30"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH7"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G53"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Providing a supplemental description of the purpose of a link using one of the following techniques: Supplementing link text with the title attribute Supplementing link text with hidden text",
                                              "using": [
                                                  {
                                                      "id": "TECH:H33"
                                                  },
                                                  {
                                                      "id": "TECH:C7"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques: Identifying the purpose of a link in a nested list using link text combined with the list item that the list is nested beneath",
                                              "using": [
                                                  {
                                                      "id": "TECH:ARIA7"
                                                  },
                                                  {
                                                      "id": "TECH:ARIA8"
                                                  },
                                                  {
                                                      "id": "TECH:H77"
                                                  },
                                                  {
                                                      "id": "TECH:H78"
                                                  },
                                                  {
                                                      "id": "TECH:H79"
                                                  },
                                                  {
                                                      "id": "TECH:H81"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G91",
                                              "using": [
                                                  {
                                                      "id": "TECH:PDF11"
                                                  },
                                                  {
                                                      "id": "TECH:PDF13"
                                                  },
                                                  {
                                                      "id": "TECH:SL18"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H2"
                                          },
                                          {
                                              "id": "TECH:FLASH5"
                                          },
                                          {
                                              "id": "TECH:H80"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F63"
                                          },
                                          {
                                              "id": "TECH:F89"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-mult-loc",
                              "num": "2.4.1",
                              "level": "AA",
                              "handle": "Multiple Ways",
                              "text": "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using two or more of the following techniques: Providing links to navigate to related Web pages Providing a Table of Contents Providing a Site Map Providing a search function to help users find content Providing a list of links to all other Web pages Linking to all of the pages on the site from the home page",
                                              "using": [
                                                  {
                                                      "id": "TECH:G125"
                                                  },
                                                  {
                                                      "id": "TECH:G64"
                                                  },
                                                  {
                                                      "id": "TECH:PDF2"
                                                  },
                                                  {
                                                      "id": "TECH:G63"
                                                  },
                                                  {
                                                      "id": "TECH:G161"
                                                  },
                                                  {
                                                      "id": "TECH:G126"
                                                  },
                                                  {
                                                      "id": "TECH:G185"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H59"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Including information about presentation modes in tables of contents and concept maps (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-descriptive",
                              "num": "2.4.2",
                              "level": "AA",
                              "handle": "Headings and Labels",
                              "text": "Headings and labels describe topic or purpose.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G130"
                                          },
                                          {
                                              "id": "TECH:G131"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using unique section headings in a Web Page (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Starting section headings with unique information (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-focus-visible",
                              "num": "2.4.3",
                              "level": "AA",
                              "handle": "Focus Visible",
                              "text": "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G149"
                                          },
                                          {
                                              "id": "TECH:C15"
                                          },
                                          {
                                              "id": "TECH:G165"
                                          },
                                          {
                                              "id": "TECH:G195"
                                          },
                                          {
                                              "id": "TECH:SCR31"
                                          },
                                          {
                                              "id": "TECH:FLASH20"
                                          },
                                          {
                                              "id": "TECH:SL2"
                                          },
                                          {
                                              "id": "TECH:SL7"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Highlighting a link or control when the mouse hovers over it (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F55"
                                          },
                                          {
                                              "id": "TECH:F78"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-location",
                              "num": "2.4.1",
                              "level": "AAA",
                              "handle": "Location",
                              "text": "Information about the user's location within a set of Web pages is available.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G65"
                                          },
                                          {
                                              "id": "TECH:G63"
                                          },
                                          {
                                              "id": "TECH:G128"
                                          },
                                          {
                                              "id": "TECH:G127",
                                              "using": [
                                                  {
                                                      "id": "TECH:H59"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:PDF14"
                                          },
                                          {
                                              "id": "TECH:PDF17"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing a link to the home page or main page (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing an easy-to-read version of information about the organization of a set of Web pages (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Providing a sign language version of information about the organization of a set of Web pages (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Providing an easy-to-read summary at the beginning of each section of content (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-link",
                              "num": "2.4.2",
                              "level": "AAA",
                              "handle": "Link Purpose (Link Only)",
                              "text": "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:ARIA8"
                                          },
                                          {
                                              "id": "TECH:G91"
                                          },
                                          {
                                              "id": "TECH:H30"
                                          },
                                          {
                                              "id": "TECH:H24"
                                          },
                                          {
                                              "id": "TECH:FLASH27"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Allowing the user to choose short or long link text using one of the techniques below: Providing a control near the beginning of the Web page that changes the link text Using scripts to change the link text Using scripting to change control labels",
                                              "using": [
                                                  {
                                                      "id": "TECH:G189"
                                                  },
                                                  {
                                                      "id": "TECH:SCR30"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH7"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Providing a supplemental description of the purpose of a link using one of the following techniques: Supplementing link text with hidden text",
                                              "using": [
                                                  {
                                                      "id": "TECH:C7"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Semantically indicating links using one of the following techniques:",
                                              "using": [
                                                  {
                                                      "id": "TECH:PDF11"
                                                  },
                                                  {
                                                      "id": "TECH:PDF13"
                                                  },
                                                  {
                                                      "id": "TECH:SL18"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H2"
                                          },
                                          {
                                              "id": "TECH:FLASH5"
                                          },
                                          {
                                              "id": "TECH:H33"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F84"
                                          },
                                          {
                                              "id": "TECH:F89"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:navigation-mechanisms-headings",
                              "num": "2.4.3",
                              "level": "AAA",
                              "handle": "Section Headings",
                              "text": "Section headings are used to organize the content.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "\"Heading\" is used in its general sense and includes titles and other ways to add a heading to different types of content. This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G141"
                                          },
                                          {
                                              "id": "TECH:H69"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using the 'live' property to mark live regions (future link) (ARIA)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing mechanisms to navigate to different sections of the content of a Web page (future link)"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "id": "WCAG2:understandable",
              "num": "3",
              "handle": "Understandable",
              "title": "Principle 3: Understandable - Information and the operation of user interface must be understandable.",
              "guidelines": [
                  {
                      "id": "WCAG2:meaning",
                      "num": "3.1",
                      "handle": "Readable",
                      "title": "Make text content readable and understandable.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Setting expectations about content in the page from uncontrolled sources (future link)"
                                  },
                                  {
                                      "id": "TECH:future2",
                                      "title": "Providing sign language interpretation for all content (future link)"
                                  },
                                  {
                                      "id": "TECH:future3",
                                      "title": "Using the clearest and simplest language appropriate for the content (future link)"
                                  },
                                  {
                                      "id": "TECH:future4",
                                      "title": "Avoiding centrally aligned text (future link)"
                                  },
                                  {
                                      "id": "TECH:future5",
                                      "title": "Avoiding text that is fully justified (to both left and right margins) in a way that causes poor spacing between words or characters (future link)"
                                  },
                                  {
                                      "id": "TECH:future6",
                                      "title": "Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left (future link)"
                                  },
                                  {
                                      "id": "TECH:future7",
                                      "title": "Limiting text column width (future link)"
                                  },
                                  {
                                      "id": "TECH:future8",
                                      "title": "Avoiding chunks of italic text (future link)"
                                  },
                                  {
                                      "id": "TECH:future9",
                                      "title": "Avoiding overuse of different styles on individual pages and in sites (future link)"
                                  },
                                  {
                                      "id": "TECH:future10",
                                      "title": "Making links visually distinct (future link)"
                                  },
                                  {
                                      "id": "TECH:future11",
                                      "title": "Using images, illustrations, video, audio, or symbols to clarify meaning (future link)"
                                  },
                                  {
                                      "id": "TECH:future12",
                                      "title": "Providing practical examples to clarify content (future link)"
                                  },
                                  {
                                      "id": "TECH:future13",
                                      "title": "Using a light pastel background rather than a white background behind black text (future link)"
                                  },
                                  {
                                      "id": "TECH:future14",
                                      "title": "Avoiding the use of unique interface controls unnecessarily (future link)"
                                  },
                                  {
                                      "id": "TECH:future15",
                                      "title": "Using upper and lower case according to the spelling rules of the text language (future link)"
                                  },
                                  {
                                      "id": "TECH:future16",
                                      "title": "Avoiding unusual foreign words (future link)"
                                  },
                                  {
                                      "id": "TECH:future17",
                                      "title": "Providing sign language versions of information, ideas, and processes that must be understood in order to use the content (future link)"
                                  },
                                  {
                                      "id": "TECH:future18",
                                      "title": "Making any reference to a location in a Web page into a link to that location (future link)"
                                  },
                                  {
                                      "id": "TECH:future19",
                                      "title": "Making references to a heading or title include the full text of the title (future link)"
                                  },
                                  {
                                      "id": "TECH:future20",
                                      "title": "Providing easy-to-read versions of basic information about a set of Web pages, including information about how to contact the Webmaster (future link)"
                                  },
                                  {
                                      "id": "TECH:future21",
                                      "title": "Providing a sign language version of basic information about a set of Web pages, including information about how to contact the Webmaster (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:meaning-doc-lang-id",
                              "num": "3.1.1",
                              "level": "A",
                              "handle": "Language of Page",
                              "text": "The default human language of each Web page can be programmatically determined.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:H57"
                                          },
                                          {
                                              "id": "TECH:FLASH13"
                                          },
                                          {
                                              "id": "TECH:PDF16"
                                          },
                                          {
                                              "id": "TECH:PDF19"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:SVR5"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using http or the Content-Language meta tag for metadata (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:meaning-other-lang-id",
                              "num": "3.1.1",
                              "level": "AA",
                              "handle": "Language of Parts",
                              "text": "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:H58"
                                          },
                                          {
                                              "id": "TECH:FLASH13"
                                          },
                                          {
                                              "id": "TECH:PDF19"
                                          },
                                          {
                                              "id": "TECH:SL4"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:SL27"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Making text that is not in the default human language of the Web page visually distinct (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Giving the names of any languages used in foreign passages or phrases (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing language markup on proper names to facilitate correct pronunciation by screen readers (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:meaning-idioms",
                              "num": "3.1.1",
                              "level": "AAA",
                              "handle": "Unusual Words",
                              "text": "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the word or phrase has a unique meaning within the Web page:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G101",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G55",
                                                                      "using": [
                                                                          {
                                                                              "id": "TECH:H40"
                                                                          },
                                                                          {
                                                                              "id": "TECH:H60"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "id": "TECH:G112",
                                                                      "using": [
                                                                          {
                                                                              "id": "TECH:H54"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "id": "TECH:G101",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G55",
                                                                      "using": [
                                                                          {
                                                                              "id": "TECH:H40"
                                                                          },
                                                                          {
                                                                              "id": "TECH:H60"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "id": "TECH:G62"
                                                                  },
                                                                  {
                                                                      "id": "TECH:G70"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If the word or phrase means different things within the same Web page:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G101",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G55",
                                                                      "using": [
                                                                          {
                                                                              "id": "TECH:H40"
                                                                          },
                                                                          {
                                                                              "id": "TECH:H60"
                                                                          }
                                                                      ]
                                                                  },
                                                                  {
                                                                      "id": "TECH:G112",
                                                                      "using": [
                                                                          {
                                                                              "id": "TECH:H54"
                                                                          }
                                                                      ]
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using markup and visual formatting to help users recognize words that have special meaning (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing a sign language dictionary to help users who are deaf find the necessary definitions (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing a mechanism for finding definitions for all words in text content (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Providing a mechanism to determine the meaning of each word or phrase in text content (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Avoiding unusual foreign words (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Using a series of dictionaries in cascading fashion to provide meanings (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:meaning-located",
                              "num": "3.1.2",
                              "level": "AAA",
                              "handle": "Abbreviations",
                              "text": "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the abbreviation has only one meaning within the Web page:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G102",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G97"
                                                                  },
                                                                  {
                                                                      "id": "TECH:G55"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H28"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF8"
                                                                  }
                                                              ]
                                                          },
                                                          {
                                                              "id": "TECH:G102",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G55"
                                                                  },
                                                                  {
                                                                      "id": "TECH:G62"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H60"
                                                                  },
                                                                  {
                                                                      "id": "TECH:G70"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H28"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF8"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If the abbreviation means different things within the same Web page:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G102",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:G55"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H28"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF8"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Using unique abbreviations in a Web page (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using visual formatting to help users recognize abbreviations (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing access to a talking dictionary to support users who might have difficulty decoding written definitions (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing a voice-enabled dictionary search so that users who have difficulty typing or spelling can speak the word whose definition they need (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:meaning-supplements",
                              "num": "3.1.3",
                              "level": "AAA",
                              "handle": "Reading Level",
                              "text": "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G86"
                                          },
                                          {
                                              "id": "TECH:G103"
                                          },
                                          {
                                              "id": "TECH:G79"
                                          },
                                          {
                                              "id": "TECH:G153"
                                          },
                                          {
                                              "id": "TECH:G160"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing text for navigational and landing pages that requires reading ability that is less advanced than the lower secondary education level (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing text for interior pages that requires reading ability at the lower secondary education level (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Including content summaries in metadata (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Using the clearest and simplest language appropriate for the content (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Using RDF to associate supplements with primary content (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Providing a clear representational image on the site's home page (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Clearly marking, by use of text or icon, content which has been optimized for easy reading (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Using sentences that contain no redundant words, that is, words that do not change the meaning of the sentence (future link)"
                                          },
                                          {
                                              "id": "TECH:future9",
                                              "title": "Using sentences that contain no more than two conjunctions (future link)"
                                          },
                                          {
                                              "id": "TECH:future10",
                                              "title": "Using sentences that are no longer than the typical accepted length for secondary education (Note: In English that is 25 words) (future link)"
                                          },
                                          {
                                              "id": "TECH:future11",
                                              "title": "Using sentences that do not contain complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence (future link)"
                                          },
                                          {
                                              "id": "TECH:future12",
                                              "title": "Providing summaries for different sections of text (future link)"
                                          },
                                          {
                                              "id": "TECH:future13",
                                              "title": "Using metadata to associate alternatives at different reading levels. (future link)"
                                          },
                                          {
                                              "id": "TECH:future14",
                                              "title": "Using the Dublin Core accessibility element to associate text content with text, graphical, or spoken supplements (future link)"
                                          },
                                          {
                                              "id": "TECH:future15",
                                              "title": "Using the ISO AfA accessibility element to associate text content with text, graphical, or spoken supplements (future link)"
                                          },
                                          {
                                              "id": "TECH:future16",
                                              "title": "Using the IMS accessibility element to associate text content with text, graphical, or spoken supplements (future link)"
                                          },
                                          {
                                              "id": "TECH:future17",
                                              "title": "Making metadata viewable by humans (future link)EXAMPLE: Providing, in metadata, URI(s) that point to a pre-primary-reading-level and a primary-reading-level text transcript of a new scientific discovery advanced-reading-level article.",
                                              "using": [
                                                  {
                                                      "id": "TECH:future1",
                                                      "title": "EXAMPLE: Providing, in metadata, URI(s) that point to a pre-primary-reading-level and a primary-reading-level text transcript of a new scientific discovery advanced-reading-level article."
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:future18",
                                              "title": "Providing progressive complexity for site and page content (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:meaning-pronunciation",
                              "num": "3.1.4",
                              "level": "AAA",
                              "handle": "Pronunciation",
                              "text": "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G120"
                                          },
                                          {
                                              "id": "TECH:G121"
                                          },
                                          {
                                              "id": "TECH:G62"
                                          },
                                          {
                                              "id": "TECH:G163"
                                          },
                                          {
                                              "id": "TECH:H62"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing pronunciations in a sound file, so that users can listen to the pronunciations of the word (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Providing a mechanism for finding pronunciations for all foreign words in text content (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing a mechanism to determine the pronunciations of each word or phrase in text content (future link)"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:consistent-behavior",
                      "num": "3.2",
                      "handle": "Predictable",
                      "title": "Make Web pages appear and operate in predictable ways.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Positioning labels to maximize predictability of relationships"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:consistent-behavior-receive-focus",
                              "num": "3.2.1",
                              "level": "A",
                              "handle": "On Focus",
                              "text": "When any component receives focus, it does not initiate a change of context.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G107"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Not causing persistent changes of state or value when a component receives focus, or providing an alternate means to reset any changes (future link)"
                                          },
                                          {
                                              "id": "TECH:G200"
                                          },
                                          {
                                              "id": "TECH:G201"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F52"
                                          },
                                          {
                                              "id": "TECH:F55"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:consistent-behavior-unpredictable-change",
                              "num": "3.2.2",
                              "level": "A",
                              "handle": "On Input",
                              "text": "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G80",
                                              "using": [
                                                  {
                                                      "id": "TECH:H32"
                                                  },
                                                  {
                                                      "id": "TECH:H84"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH4"
                                                  },
                                                  {
                                                      "id": "TECH:PDF15"
                                                  },
                                                  {
                                                      "id": "TECH:SL10"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:G13"
                                          },
                                          {
                                              "id": "TECH:SCR19"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G201"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F36"
                                          },
                                          {
                                              "id": "TECH:F37"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:consistent-behavior-consistent-locations",
                              "num": "3.2.1",
                              "level": "AA",
                              "handle": "Consistent Navigation",
                              "text": "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G61"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:PDF14"
                                          },
                                          {
                                              "id": "TECH:PDF17"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Using templates to ensure consistency across multiple Web pages (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Creating layout, positioning, layering, and alignment (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F66"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:consistent-behavior-consistent-functionality",
                              "num": "3.2.2",
                              "level": "AA",
                              "handle": "Consistent Identification",
                              "text": "Components that have the same functionality within a set of Web pages are identified consistently.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "and": [
                                                  {
                                                      "id": "TECH:G197"
                                                  },
                                                  {
                                                      "id": "TECH:text-equiv-all"
                                                  },
                                                  {
                                                      "id": "TECH:ensure-compat-rsv"
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Ensuring that the text alternative conveys the function of the component and what will happen when the user activates it (future link)"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Using the same non-text content for a given function whenever possible (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F31"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:consistent-behavior-no-extreme-changes-context",
                              "num": "3.2.1",
                              "level": "AAA",
                              "handle": "Change on Request",
                              "text": "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If the Web page allows automatic updates:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G76"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If automatic redirects are possible:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:SVR1"
                                                          },
                                                          {
                                                              "id": "TECH:G110",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:H76"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: If the Web page uses pop-up windows:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:future1",
                                                              "title": "Including pop-up windows using one of the following techniques: Using the target attribute to open a new window Using script to open a new window",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:H83"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SCR24"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation D: If using an onchange event on a select element:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:SCR19"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Opening new windows by providing normal hyperlinks without the target attribute (future link), because many user agents allow users to open links in another window or tab."
                                          },
                                          {
                                              "id": "TECH:G200"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F60"
                                          },
                                          {
                                              "id": "TECH:F61"
                                          },
                                          {
                                              "id": "TECH:F9"
                                          },
                                          {
                                              "id": "TECH:F22"
                                          },
                                          {
                                              "id": "TECH:F52"
                                          },
                                          {
                                              "id": "TECH:F41"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      "id": "WCAG2:minimize-error",
                      "num": "3.3",
                      "handle": "Input Assistance",
                      "title": "Help users avoid and correct mistakes.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Hiding optional form fields (future link)"
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:minimize-error-identified",
                              "num": "3.3.1",
                              "level": "A",
                              "handle": "Error Identification",
                              "text": "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If a form contains fields for which information from the user is mandatory.",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G83"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA21"
                                                          },
                                                          {
                                                              "id": "TECH:SCR18"
                                                          },
                                                          {
                                                              "id": "TECH:PDF5"
                                                          },
                                                          {
                                                              "id": "TECH:SL35"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If information provided by the user is required to be in a specific data format or of certain values.",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:ARIA18"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA19"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA21"
                                                          },
                                                          {
                                                              "id": "TECH:G84"
                                                          },
                                                          {
                                                              "id": "TECH:G85"
                                                          },
                                                          {
                                                              "id": "TECH:SCR18"
                                                          },
                                                          {
                                                              "id": "TECH:SCR32"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH12"
                                                          },
                                                          {
                                                              "id": "TECH:PDF22"
                                                          },
                                                          {
                                                              "id": "TECH:SL35"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G139"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Validating form submissions on the server (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Re-displaying a form with a summary of errors (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Providing error notification as the user enters information (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Including error notification information in the page title (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Highlighting or visually emphasizing errors where they occur (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Supplementing text with non-text content when reporting errors (future link)"
                                          },
                                          {
                                              "id": "TECH:G199"
                                          },
                                          {
                                              "id": "TECH:future9",
                                              "title": "Using sounds to focus user's attention (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:minimize-error-cues",
                              "num": "3.3.2",
                              "level": "A",
                              "handle": "Labels or Instructions",
                              "text": "Labels or instructions are provided when content requires user input.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G131",
                                              "using": [
                                                  {
                                                      "id": "TECH:ARIA1"
                                                  },
                                                  {
                                                      "id": "TECH:ARIA9"
                                                  },
                                                  {
                                                      "id": "TECH:ARIA17"
                                                  },
                                                  {
                                                      "id": "TECH:G89"
                                                  },
                                                  {
                                                      "id": "TECH:G184"
                                                  },
                                                  {
                                                      "id": "TECH:G162"
                                                  },
                                                  {
                                                      "id": "TECH:G83"
                                                  },
                                                  {
                                                      "id": "TECH:H90"
                                                  },
                                                  {
                                                      "id": "TECH:FLASH10"
                                                  },
                                                  {
                                                      "id": "TECH:PDF5"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:H44"
                                          },
                                          {
                                              "id": "TECH:FLASH32"
                                          },
                                          {
                                              "id": "TECH:FLASH29"
                                          },
                                          {
                                              "id": "TECH:FLASH25"
                                          },
                                          {
                                              "id": "TECH:PDF10"
                                          },
                                          {
                                              "id": "TECH:SL26"
                                          },
                                          {
                                              "id": "TECH:H71"
                                          },
                                          {
                                              "id": "TECH:FLASH8"
                                          },
                                          {
                                              "id": "TECH:H65"
                                          },
                                          {
                                              "id": "TECH:SL8"
                                          },
                                          {
                                              "id": "TECH:G167"
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G13"
                                          },
                                          {
                                              "id": "TECH:SL19"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Providing linear form design and grouping similar items (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F82"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:minimize-error-suggestions",
                              "num": "3.3.1",
                              "level": "AA",
                              "handle": "Error Suggestion",
                              "text": "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If a mandatory field contains no information:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G83"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA2"
                                                          },
                                                          {
                                                              "id": "TECH:PDF5"
                                                          },
                                                          {
                                                              "id": "TECH:SL35"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If information for a field is required to be in a specific data format:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:ARIA18"
                                                          },
                                                          {
                                                              "id": "TECH:G85"
                                                          },
                                                          {
                                                              "id": "TECH:G177"
                                                          },
                                                          {
                                                              "id": "TECH:SCR18"
                                                          },
                                                          {
                                                              "id": "TECH:SCR32"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH12"
                                                          },
                                                          {
                                                              "id": "TECH:PDF22"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: Information provided by the user is required to be one of a limited set of values:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:ARIA18"
                                                          },
                                                          {
                                                              "id": "TECH:G84"
                                                          },
                                                          {
                                                              "id": "TECH:G177"
                                                          },
                                                          {
                                                              "id": "TECH:SCR18"
                                                          },
                                                          {
                                                              "id": "TECH:SCR32"
                                                          },
                                                          {
                                                              "id": "TECH:FLASH12"
                                                          },
                                                          {
                                                              "id": "TECH:PDF22"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:G139"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Making error messages easy to understand and distinguishable from other text in the Web page (future link)"
                                          },
                                          {
                                              "id": "TECH:future3",
                                              "title": "Validating form submissions on the server (future link)"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "When mandatory information has not been provided, including descriptions or examples of correct information in addition to identifying the field as mandatory (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Repeating and emphasizing suggestions for correcting each input error in the context of its form field (future link)"
                                          },
                                          {
                                              "id": "TECH:future6",
                                              "title": "Providing a way for the user to skip from each item in a list of suggestions to its corresponding form field (future link)"
                                          },
                                          {
                                              "id": "TECH:future7",
                                              "title": "Providing additional contextual help for the form field requiring change (future link)"
                                          },
                                          {
                                              "id": "TECH:future8",
                                              "title": "Accepting input data in a variety of formats (future link)"
                                          },
                                          {
                                              "id": "TECH:G199"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:minimize-error-reversible",
                              "num": "3.3.2",
                              "level": "AA",
                              "handle": "Error Prevention (Legal, Financial, Data)",
                              "text": "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:",
                              "details": [
                                  {
                                      "handle": "Reversible:",
                                      "text": "Submissions are reversible."
                                  },
                                  {
                                      "handle": "Checked:",
                                      "text": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
                                  },
                                  {
                                      "handle": "Confirmed:",
                                      "text": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G164"
                                                          },
                                                          {
                                                              "id": "TECH:G98"
                                                          },
                                                          {
                                                              "id": "TECH:G155"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If an action causes information to be deleted:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G99"
                                                          },
                                                          {
                                                              "id": "TECH:G168"
                                                          },
                                                          {
                                                              "id": "TECH:G155"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: If the Web page includes a testing application:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G98"
                                                          },
                                                          {
                                                              "id": "TECH:G168"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Informing the user what irreversible action is about to happen (future link)"
                                          },
                                          {
                                              "id": "TECH:SCR18"
                                          },
                                          {
                                              "id": "TECH:SL35"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Placing focus in the field containing the error (future link)"
                                          },
                                          {
                                              "id": "TECH:future5",
                                              "title": "Avoiding use of the same words or letter combinations to begin each item of a drop-down list (future link)"
                                          },
                                          {
                                              "id": "TECH:G199"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:minimize-error-context-help",
                              "num": "3.3.1",
                              "level": "AAA",
                              "handle": "Help",
                              "text": "Context-sensitive help is available.",
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If a form requires text input:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G71"
                                                          },
                                                          {
                                                              "id": "TECH:G193"
                                                          },
                                                          {
                                                              "id": "TECH:G194"
                                                          },
                                                          {
                                                              "id": "TECH:G184"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If a form requires text input in an expected data format:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G89"
                                                          },
                                                          {
                                                              "id": "TECH:G184"
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:H89"
                                          },
                                          {
                                              "id": "TECH:future2",
                                              "title": "Checking byte of character and auto-converting to expected byte for text input if applicable (future link)"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:minimize-error-reversible-all",
                              "num": "3.3.2",
                              "level": "AAA",
                              "handle": "Error Prevention (All)",
                              "text": "For Web pages that require the user to submit information, at least one of the following is true:",
                              "details": [
                                  {
                                      "handle": "Reversible:",
                                      "text": "Submissions are reversible."
                                  },
                                  {
                                      "handle": "Checked:",
                                      "text": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
                                  },
                                  {
                                      "handle": "Confirmed:",
                                      "text": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:minimize-error-reversible"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "id": "WCAG2:robust",
              "num": "4",
              "handle": "Robust",
              "title": "Principle 4: Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.",
              "guidelines": [
                  {
                      "id": "WCAG2:ensure-compat",
                      "num": "4.1",
                      "handle": "Compatible",
                      "title": "Maximize compatibility with current and future user agents, including assistive technologies.",
                      "techniques": [
                          {
                              "advisory": [
                                  {
                                      "id": "TECH:future1",
                                      "title": "Avoiding deprecated features of W3C technologies (future link)"
                                  },
                                  {
                                      "id": "TECH:future2",
                                      "title": "Not displaying content that relies on technologies that are not accessibility-supported when the technology is turned off or not supported."
                                  }
                              ]
                          }
                      ],
                      "successcriteria": [
                          {
                              "id": "WCAG2:ensure-compat-parses",
                              "num": "4.1.1",
                              "level": "A",
                              "handle": "Parsing",
                              "text": "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "id": "TECH:G134"
                                          },
                                          {
                                              "id": "TECH:G192"
                                          },
                                          {
                                              "id": "TECH:H88"
                                          },
                                          {
                                              "id": "TECH:future4",
                                              "title": "Ensuring that Web pages can be parsed by using one of the following techniques: Ensuring that opening and closing tags are used according to specification AND Ensuring that id attributes are unique on a Web page AND Ensuring that elements do not contain duplicate attributes Ensuring that Web pages are well-formed",
                                              "using": [
                                                  {
                                                      "and": [
                                                          {
                                                              "id": "TECH:H74"
                                                          },
                                                          {
                                                              "id": "TECH:H93"
                                                          },
                                                          {
                                                              "id": "TECH:H94"
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "id": "TECH:H75"
                                                  }
                                              ]
                                          },
                                          {
                                              "id": "TECH:SL33"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F70"
                                          },
                                          {
                                              "id": "TECH:F77"
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              "id": "WCAG2:ensure-compat-rsv",
                              "num": "4.1.2",
                              "level": "A",
                              "handle": "Name, Role, Value",
                              "text": "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
                              "details": [
                                  {
                                      "type": "note",
                                      "text": "This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification."
                                  }
                              ],
                              "techniques": [
                                  {
                                      "sufficient": [
                                          {
                                              "situations": [
                                                  {
                                                      "title": "Situation A: If using a standard user interface component in a markup language (e.g., HTML):",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:ARIA14"
                                                          },
                                                          {
                                                              "id": "TECH:ARIA16"
                                                          },
                                                          {
                                                              "id": "TECH:G108",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:H91"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H44"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H64"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H65"
                                                                  },
                                                                  {
                                                                      "id": "TECH:H88"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation B: If using script or code to re-purpose a standard user interface component in a markup language:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:future1",
                                                              "title": "Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes using one of the following techniques:",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:ARIA16"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation C: If using a standard user interface component in a programming technology:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G135",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:FLASH32"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH29"
                                                                  },
                                                                  {
                                                                      "id": "TECH:FLASH30"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF10"
                                                                  },
                                                                  {
                                                                      "id": "TECH:PDF12"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL26"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL32"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      "title": "Situation D: If creating your own user interface component in a programming language:",
                                                      "techniques": [
                                                          {
                                                              "id": "TECH:G10",
                                                              "using": [
                                                                  {
                                                                      "id": "TECH:ARIA4"
                                                                  },
                                                                  {
                                                                      "id": "TECH:ARIA5"
                                                                  },
                                                                  {
                                                                      "id": "TECH:ARIA16"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL6"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL18"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL20"
                                                                  },
                                                                  {
                                                                      "id": "TECH:SL30"
                                                                  }
                                                              ]
                                                          }
                                                      ]
                                                  }
                                              ]
                                          }
                                      ]
                                  },
                                  {
                                      "advisory": [
                                          {
                                              "id": "TECH:future1",
                                              "title": "Providing labels for all form controls that do not have implicit labels (future link)"
                                          }
                                      ]
                                  },
                                  {
                                      "failure": [
                                          {
                                              "id": "TECH:F59"
                                          },
                                          {
                                              "id": "TECH:F15"
                                          },
                                          {
                                              "id": "TECH:F20"
                                          },
                                          {
                                              "id": "TECH:F68"
                                          },
                                          {
                                              "id": "TECH:F79"
                                          },
                                          {
                                              "id": "TECH:F86"
                                          },
                                          {
                                              "id": "TECH:F89"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
  };

});
