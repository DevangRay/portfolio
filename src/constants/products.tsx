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
      "Fantasy Football League Winner",
    thumbnail: sidefolioSentimentAnalyzer3,
    images: [sidefolioSentimentAnalyzer3, sidefolioSentimentAnalyzer1, sidefolioSentimentAnalyzer2],
    stack: ["NLP", "Flask", "Next.js"],
    slug: "sentiment-analyzer",
    content: (
      <div>
        <p>
          I love fantasy football, but I am unfortunately not very good at it. I have played 2 seasons, and have
          yet to make the playoffs. I felt that surely I could take advantage of my Computer Science degree to turn
          my team around this season. As my record shows, I am by no means an incredible football analyst, but I
          have seen videos from people who do this for jobs predicting which players will Boom and will players will Bust
          every season. And a lot of these analysts are involved in podcasts. As a type of long-form content, podcasts
          offer a deeper form of insight than I usually get from the shorter videos I see. But who has the time to listen
          to all these podcasts? And so I decided to build a tool that could do it for me.{" "}
        </p>
        <p>
          I built the website itself using Next.js and Tailwind CSS, and set-up a simple Flask API so that
          the frontend could communicate with the backend. I wanted to mimic how MonkeyType.com allows the user
          to seemingly type into the website rather than using a clear form of input, and I am happy with
          how my rendition came out.{" "}
        </p>
        <p>
          And in the backend, I built an end-to-end NLP pipeline that can take in an audio fie of whatever 
          podcast I want to learn from, and output every NFL player mentioned in the podcast, along with some
          sentiment scores indicating what the experts really thought of the player. However, transcription has 
          proven to be a very resource intensive process, and while I could optimize transcription, the accuracy 
          trade-offs often result in significantly worse sentiment insights. So I decided to start the 
          pipeline assuming the user provides a generated transcript.{" "}
        </p>
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
    stack: ["OpenAI API", "Flask", "Bootstrap"],
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
      "A full-stack app I made with a friend with a custom authentication process.",
    thumbnail: sidefolioHoosBuying1,
    images: [sidefolioHoosBuying1, sidefolioHoosBuying2],
    stack: ["Vue.js", "Bootstrap", "Flask", "SQLite", "Google Cloud SQL"],
    slug: "hoosbuying",
    content: (
      <div>
        <p>
          HoosBuying is a platform designed to allow users to barter and trade belongings they no
          longer have use for. I love using Facebook Marketplace, and appreciate the convenience it
          brings to me and other college students. As part of my Database Design class, we were given the whole
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
