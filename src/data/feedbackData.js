export const feedbackData = [
  {
    index: 1,
    title: "Add tags for solutions",
    text: "Easier to search for solutions based on a specific stack.",
    likes: 112,
    category: "Enhancement",
    status: "Planned",
    liked: false,
    commentsArray: [],
  },
  {
    index: 2,
    title: "Add a dark theme option",
    text: `It would help people with light sensitivities and who prefer dark mode.`,
    likes: 99,
    category: "Feature",
    status: "Planned",
    liked: false,
    commentsArray: [
      {
        id: 1,
        user: {
          name: "Elijah Moss",
          userName: "hexagon.bestagon",
          avatar: "ElijahMoss.png",
        },
        text: `Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.`,
        commentsArray: [],
      },
      {
        id: 2,
        user: {
          name: "James Skinner",
          userName: "hummingbird1",
          avatar: "JamesSkinner.png",
        },
        text: `Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.`,
        commentsArray: [
          {
            id: 3,
            user: {
              name: "Anne Valentine",
              userName: "annev1990",
              avatar: "AnneValentine.png",
            },
            text: `@hummingbird1  While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.`,
            commentsArray: [],
          },
          {
            id: 4,
            user: {
              name: "Ryan Welles",
              userName: "voyager.344",
              avatar: "RyanWelles.png",
            },
            text: "@annev1990  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
            commentsArray: [
              {
                id: 5,
                user: {
                  name: "Ryan Welles",
                  userName: "voyager.344",
                  avatar: "RyanWelles.png",
                },
                text: "Just a check!",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    index: 3,
    title: "Q&A within the challenge hubs",
    text: "Challenge-specific Q&A would make for easy reference.",
    likes: 65,
    category: "Feature",
    status: "In-Progress",
    liked: false,
    commentsArray: [],
  },
  {
    index: 4,
    title: "Allow image/video upload to feedback",
    text: "Images and screencasts can enhance comments on solutions.",
    likes: 51,
    category: "Enhancement",
    status: "In-Progress",
    liked: false,
    commentsArray: [],
  },
  {
    index: 5,
    title: "Ability to follow others",
    text: "Stay updated on comments and solutions other people post.",
    likes: 42,
    category: "Feature",
    status: "Live",
    liked: false,
    commentsArray: [],
  },
  {
    index: 6,
    title: "Preview images not loading",
    text: "Challenge preview images are missing when you apply a filter.",
    likes: 3,
    category: "Bug",
    status: "In-Progress",
    liked: false,
    commentsArray: [],
  },
  {
    index: 7,
    title:
      "Long_Text_No_Space.LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.LoremIpsumhasbeentheindustry'sstandarddummytexteversincethe1500s,whenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbook.Ithassurvivednotonlyfivecenturies,butalsotheleapintoelectronictypesetting,remainingessentiallyunchanged.Itwaspopularisedinthe1960swiththereleaseofLetrasetsheetscontainingLoremIpsumpassages,andmorerecentlywithdesktoppublishingsoftwarelikeAldusPageMakerincludingversionsofLoremIpsum.",
    text: "Long_Text_No_Space.LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.LoremIpsumhasbeentheindustry'sstandarddummytexteversincethe1500s,whenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbook.Ithassurvivednotonlyfivecenturies,butalsotheleapintoelectronictypesetting,remainingessentiallyunchanged.Itwaspopularisedinthe1960swiththereleaseofLetrasetsheetscontainingLoremIpsumpassages,andmorerecentlywithdesktoppublishingsoftwarelikeAldusPageMakerincludingversionsofLoremIpsum.",
    likes: 0,
    category: "Bug",
    status: "In-Progress",
    liked: false,
    commentsArray: [],
  },
  {
    index: 8,
    title:
      "Long Text with Space. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    text: "Long Text with Space. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    likes: 0,
    category: "Bug",
    status: "In-Progress",
    liked: false,
    commentsArray: [],
  },
];

export const currentUser = {
  name: "Batman",
  userName: "bat_man",
  avatar: "Batman.png",
};
