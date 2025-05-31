import TripleRBlogOneMain from "../assets/images/blog/TripleR-blogOneMain.jpeg";
import TripleRBlogTwoMain from "../assets/images/blog/TripleR-blogTwoMain.png";
import TripleRBlogThreeMain from "../assets/images/blog/TripleR-blogThreeMain.png";

export const blogs = [
  {
    image: TripleRBlogOneMain,
    category: "Artificial Intelligence",
    title: "How AI and Robotics Are Revolutionizing Waste Sorting",
    author: "Triple R Team",
    date: "May 1, 2025",
    readTime: "3 min read",
  },
  {
    image: TripleRBlogTwoMain,
    category: "Blockchain Recycling",
    title: "Blockchain in Waste Tracking: Transparent, Efficient, and Scalable",
    author: "Triple R Team",
    date: "May 1, 2025",
    readTime: "3 min read",
  },
  {
    image: TripleRBlogThreeMain,
    category: "Community Recycling",
    title: "Why Waste Literacy Is Key to Community Engagement",
    author: "Triple R Team",
    date: "May 1, 2025",
    readTime: "3 min read",
  },
];

export const previewBlogs = blogs.slice(0, 3);
