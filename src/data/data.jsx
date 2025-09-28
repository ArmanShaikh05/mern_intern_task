import HeroImage from "../assets/heroImage.png";
import UserIcon from "../assets/user.png";

export const PostData = [
  {
    id: 1,
    postImage: HeroImage,
    tag: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I've worked in UX for the better part of a decade. From now on, I plan to reitire now and start something new of my own.",
    userName: "Sarthak Kamra",
    userIcon: UserIcon,
    views: "1.4k",
    isJobPost: false,
    haveWebsiteLink: false,
    date: null,
    location: null,
    companyName: null,
  },
  {
    id: 2,
    postImage: HeroImage,
    tag: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I've worked in UX for the better part of a decade. From now on, I plan to reitire now and start something new of my own.",
    userName: "Sarah West",
    userIcon: UserIcon,
    views: "1.4k",
    isJobPost: false,
    haveWebsiteLink: false,
    date: null,
    location: null,
    companyName: null,
  },
  {
    id: 3,
    postImage: HeroImage,
    tag: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    description: null,
    userName: "Ronal Jones",
    userIcon: UserIcon,
    views: "1.4k",
    isJobPost: false,
    haveWebsiteLink: true,
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    companyName: null,
  },

  {
    id: 4,
    postImage: HeroImage,
    tag: "💼️ Job",
    title: "Software Developer",
    description: null,
    userName: "Joseph Gray",
    userIcon: UserIcon,
    views: "1.4k",
    isJobPost: true,
    haveWebsiteLink: false,
    date: null,
    location: "Noida, India",
    companyName: "Innovaccer Analytics Private Ltd.",
  },
];

export const RecommendedUsers = [
  {
    id: 1,
    name: "Leisure",
    userIcon: UserIcon,
    isFollowed: true,
  },
  {
    id: 2,
    name: "Activism",
    userIcon: UserIcon,
    isFollowed: false,
  },
  {
    id: 3,
    name: "MBA",
    userIcon: UserIcon,
    isFollowed: false,
  },
  {
    id: 4,
    name: "Philosophy",
    userIcon: UserIcon,
    isFollowed: true,
  },
];
