import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioCompilerExtension1 from "public/images/sidefolio-compiler-extension-1.png";
import sidefolioCompilerExtension2 from "public/images/sidefolio-compiler-extension-2.png";
import sidefolioAcronymChatbot1 from "public/images/sidefolio-acronym-chatbot-1.png";
import sidefolioAcronymChatbot2 from "public/images/sidefolio-acronym-chatbot-2.png";
import sidefolioHoosBuying1 from "public/images/sidefolio-hoosbuying-1.png";
import sidefolioHoosBuying2 from "public/images/sidefolio-hoosbuying-2.png";
import sidefolioSentimentAnalyzer1 from "public/images/sidefolio-sentiment-analyzer-1.png";
import sidefolioSentimentAnalyzer2 from "public/images/sidefolio-sentiment-analyzer-2.png";
import sidefolioSentimentAnalyzer3 from "public/images/sidefolio-sentiment-analyzer-3.png";

export const products = [
  {
    href: "https://github.com/DevangRay/FantasyFootballSentimentAnalyzer",
    title: "Fantasy Football Sentiment Analyzer",
    description:
      "Fantasy Football Tool ",
    thumbnail: sidefolioSentimentAnalyzer3,
    images: [sidefolioSentimentAnalyzer3, sidefolioSentimentAnalyzer1, sidefolioSentimentAnalyzer2],
    stack: ["NLI Deberta v3", "Flask", "Next.js"],
    slug: "sentiment-analyzer",
    content: (
      <div>
        <p>
          Designed and implemented a full-stack fantasy football analytics tool, building a Next.js frontend with TypeScript and Tailwind CSS and a Flask API to interface with the backend.
          Developed an end-to-end NLP pipeline to transcribe podcast audio, perform Named Entity Recognition and fuzzy matching to filter real NFL players, and analyzed sentiment using an entailment model.
          Researched and integrated optimal ML models for entity extraction and sentiment classification, white optimizing the pipeline for performance.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/DevangRay/Acronym-Chatbot",
    title: "Acronym ChatBot",
    description:
      "Hackathon winning chat bot helping new employees navigate corporate vernacular.",
    thumbnail: sidefolioAcronymChatbot1,
    images: [sidefolioAcronymChatbot1, sidefolioAcronymChatbot2],
    stack: ["OpenAI", "Flask", "Bootstrap"],
    slug: "chatbot",
    content: (
      <div>
        <p>
          I worked in a group of 4 interns to train a chat bot capable of defining acronyms and helping
          employees better communicate in professional settings. Using Flask to create an API and serve
          a dynamic frontend.{" "}
        </p>
        <p>
          This project was done over a 2-day hackathon at Swift, ending in a presention and product demo
          in front of senior management at Swift. Our group was awarded for having the best project, and we
          were able to implement our solution as a Microsoft Teams extension.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/DevangRay/HoosBuying",
    title: "HoosBuying",
    description:
      "HoosBuying is a web platform allowing users to post their goods and chat with others to barter and trade!",
    thumbnail: sidefolioHoosBuying1,
    images: [sidefolioHoosBuying1, sidefolioHoosBuying2],
    stack: ["Vue.js", "Bootstrap", "Flask", "SQLite", "Google Cloud SQL"],
    slug: "hoosbuying",
    content: (
      <div>
        <p>
          HoosBuying is a platform designed to allow users to barter and trade belongings they no
          longer have use for. I love using Facebook Marketplace, and appreciate the convenience it
          brings to me and other college students. As part of my Databases class, we were given the whole
          semester to design a product of our own, and I chose to create a platform similar to Facebook
          Marketplace that is designed with students in mind.{" "}
        </p>
        <p>
          I worked with a partner to develop this application. Our Vue.js frontend interacted with our MySQL database
          by calling on a RESTful API we developed using Flask. I am most proud of the security features we implemented,
          including username and password encryption, and manually developing sessions that would ensure the user would be
          logged out after 10 minutes of no use.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/DevangRay/compiler-extension",
    title: "TIP Compiler Extension",
    description:
      "Extended a basic compiler to correctly identify, code generate, and optimize new features.",
    thumbnail: sidefolioCompilerExtension1,
    images: [sidefolioCompilerExtension1, sidefolioCompilerExtension2],
    stack: ["C++", "Catch2 Testing", "LLVM", "ANTLR4"],
    slug: "compiler",
    content: (
      <div>
        <p>
          Working with a partner, we extended an existing compiler for an extremely simple language, TIP,
          to work with arrays, for-loops, boolean values, new binary operators, and include added syntactic sugar.{" "}
        </p>
        <p>
          The compiler was extended as a semester-long project, where I learned how to add features at all steps of the
          compilation process, starting with parsing, going to code generation, and ending with program optimization.
        </p>{" "}
      </div>
    ),
  },
];
