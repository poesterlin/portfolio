<script>
  import Entry from "$lib/Entry.svelte";
  export let name;

  const items = [];

  items.push({
    label: "Intro",
    content: [
      {
        header: "Introduction",
        body: "<b>Hi, I'm Philip.</b> I love to <pre style='display:inline;font-size:16px'>CODE</pre> and to solve problems. |I work best in open, creative and supportive environments. |This is a history of some projects I'm particulary proud of 😊.||{1}",
        list: [],
        links: [
          { href: "https://www.github.com", desc: "Github" },
          { href: "mailto:philip.oesterlin@gmail", desc: "Reach out" },
        ],
      },
    ],
  });

  items.push({
    label: "Ongoing",
    content: [
      {
        header: "Fullstack Developer at User Generated Design GmbH",
        body: `In September of 2022 I was hired by a startup in Constance called {0} or just UGD. 
        At UGD there a lots of different projects I get to work on. From a technical side it can range from fully featured, high performance desktop applications to a complete Azure cloud stack using cutting edge technology with different clients. UGD manly focuses on solving problems in the field of architecture and design for a range of different clients. This often requires mathematical solutions to problems, which took me some time to get an intuition for, but was quite satisfying once I got into it.         
        ||There are different requirements for every project that require creative solutions to be found and implemented in a user friendly way. Ideally with quick turnarounds of course. That is why choosing the right technology and architecture is essential for success. I gained a lot of experience working with customers directly and using different technologies in the agile ways of a startup.
        ||Projects I have worked on so far:`,
        list: [
          "_Margrid_: Generate shelf layouts for department stores with a large set of rules. (Unity, C#)",
          "_StoHome_: Interface between customer and painter. Preview your house before a renovation on different devices.",
        ],
        links: [
          { href: "https://www.ugdtodo.com/", desc: "User Generated Design" },
        ],
      },
    ],
  });

  items.push({
    label: "2023",
    content: [
      {
        header: "StoHome App",
        body: `StoHome is a project I worked on for a client at UGD. The goal was to create an app that allows customers to preview their house before a renovation. The app is available on Android, iOS and as a web app. I was able to lead a small team of 4 engineers, working with {0} and {1}. My team and I where able to bring complex image visualizations to the web. We are focused on supporting low-end hardware and mobile devices, which presents a unique challenge in terms of performance requirements and offline support. It was a lot of fun to work with such a great team and I learned a lot about the latest web technologies. ||The browser technologies used stand out the most:`,
        list: [
          "Web Workers with {2}",
          "Custom OpenCV WebAssembly Build, optimized for file size",
          "Origin Private File System API for offline support",
          "Offscreen Canvas for rendering",
        ],
        links: [
          { desc: "Three.js", href: "https://threejs.org/" },
          { desc: "Svelte", href: "https://svelte.dev/" },
          {
            desc: "Comlink",
            href: "https://github.com/GoogleChromeLabs/comlink",
          },
        ],
      },
    ],
  });

  items.push({
    label: "2022",
    content: [
      {
        header: "Internship at PTC",
        body: "In September of 2020 iOXP, the company I was working for as a working student, was taken over by {0}. I continued to work there since it was exiting to get to know a different and so much bigger company for the first time. ||My area of work shifted slightly and I got the opportunity to learn a lot about Cloud Development, Kubernetes and Continuous Integration. I even created a complex pipeline that could automatically deploy to AWS Lambda for a new product I helped to architect. After I finished my master degree I also did 3 months of full time work in a specialist position but ultimately decided to part ways and to go on a different carrier path. ||AWS Techologies used:",
        list: [
          "Lambda",
          "Cloudformation using {1}",
          "Elastic Kubernes Service",
          "Aurora Serverless",
          "API Gateway",
          "S3",
          "Simple Queue Service",
        ],
        links: [
          { href: "https://www.ptc.com/", desc: "PTC" },
          { href: "https://aws.amazon.com/de/cdk/", desc: "AWS CDK" },
        ],
      },
      {
        header: "Masters degree at University of Constance",
        body: `
        After my bachelors in 2019 I wanted to check out how studying in an environment more focused on research would be like and chose the University of Constance. After an extremely interesting course on Virtual Reality Applications for Mental Health I decided to pick VR research as my field for the thesis. In August of 2022 I completed my Masters degree at the University of Constance, with my thesis titled:
        "Evaluating Gesture Based Teleportation Techniques For Immersive Virtual Environments".
        
        Other fields of interest:`,
        list: [
          "Data Visualisation",
          "Machine Learning",
          "Data Science",
          "Human Computer Interaction",
        ],
        links: [],
      },
    ],
  });

  items.push({
    label: "2021",
    content: [
      {
        header: "Volleyball Registration App",
        body: "To comply with local Covid regulations I created a {0} for my universities Volleyball program. It has an easy and clean interface where users can register by name and check their registration status using a registration code. You can even get notified if someone cancels and you are no longer on the waitlist. For autherized users, there is also an admin area to manage the courses. The project is open source and avaliable on {1}. ||I was able to host everything for free using:",
        list: [
          "Netlify hosting",
          "Serverless MongoDB",
          "Serverless AWS Lambda Backend",
        ],
        links: [
          {
            href: "https://volleyballhtwg.netlify.app",
            desc: "registration app",
          },
          {
            href: "https://github.com/poesterlin/Volleyball",
            desc: "my Github page",
          },
        ],
        image: "volleyball.webp",
      },
      {
        header: "Sentiment Analisys for Corona Tweets",
        body: "For a practical data science project, my team and I were tasked to create an interactive data visualistion tool from the ground up. We started by collecting tweets from the twitter api where users were writing about the pandemic. Then we trained a neural network on some labeled data that was able to predict the mood the author was in. Together with data about the pandemic this was shown in an interactive map.|We deployed it in the universities kubernetes cluster.||Technologies used:",
        list: ["Svelte", "Python", "Tensorflow + Keras", "Postgis"],
        links: [],
        image: "moodvis.webp",
      },
      {
        header: "Ufo Sightings Map",
        body: "For a geo visualisation project we created a fun web tool were you could explore reports of ufo sighings collected by the {0}. We got over 90 thousand reports from their webseite and it's a lot of fun to explore in an interactive way.|You can find instructions and the code {1}.||Technologies used:",
        list: ["Angular", "Docker", "Postgis"],
        links: [
          {
            href: "http://www.nuforc.org/",
            desc: "National UFO Reporting Center",
          },
          { href: "https://github.com/poesterlin/UfoVis", desc: "here" },
        ],
        image: "ufovis.webp",
      },
    ],
  });

  items.push({
    label: "2020",
    content: [
      {
        header: "Image Search Engine",
        body: "For a university course my team and I created a search engine that can find similar images to a refrence image. We used an auto encoder model that is able to compress the information of on a 32x32 image to only 10 numbers. This vector can than be used to compare images. Without the abstraction of the model you can not directly compare images, since they can show almost the same things but have different pixel values. We used the {0} for this project. We also included a lot of evaluation methods and visualisations to test the results. |To get a closer look, {1}.",
        list: [],
        links: [
          {
            href: "https://pytorch.org/",
            desc: "Pytorch Machine Learning Framework",
          },
          {
            href: "https://github.com/poesterlin/MMR-Autoencoder",
            desc: "find the code here",
          },
        ],
        image: "pytorch.jpg",
      },
      {
        header: "Emoji Memory",
        body: "During the first weeks of the pandemic I got the idea to have some socially distant fun with friends by playing memory. I created an online memory that uses websockets for fast communication and random emojis on the cards. This was surprisingly fun and I still played it occasionally long after I created it. It uses workers in the backend so people are able to play mulitple games simulaniously and you can start a public game for anyone to join or create a private session. There are also quick-reactions to send to your oppenent which make it even more interactive and fun to use.",
        list: [],
        links: [],
        image: "memory.webp",
      },
    ],
  });

  items.push({
    label: "2019",
    content: [
      {
        header: "Fampedia",
        body: "During an international design thinking course, our team was tasked to develop a product that is related to graveyards. We had some initial problems because our ideas for graveyards, like for example a digital tombstone, all had the same problem: When and how do we collect information about the deceased person? This lead us on the path of families. After a lot of research and interviews, we came up with Fampedia. With Fampedia, a family can create their own private space, where they can collect moments. This information belongs to every family member and everything is saved for the future. This makes Fampedia different from traditional social networks and helps to bring all generations together. For example, less tech-savvy members can get help from other family members. | | Sadly the {1} was shut after the project ended, but you can {0}. |Or visit the {3} for a more insights. || Technologies used:",
        list: [
          "Angular",
          "Express",
          "Docker",
          "MongoDB",
          "GitLab CI",
          "Sharp.js",
          "Socket.io",
          "AWS & Netlify Hosting",
        ],
        links: [
          {
            href: "https://github.com/poesterlin/Fampedia",
            desc: "find the code here",
          },
          {
            href: "https://fampedia.de",
            desc: "site",
          },
          { href: "https://angular.io/", desc: "Angular" },
          {
            href: "https://inno-space.de/projects/fampedia/",
            desc: "project page",
          },
        ],
        image: "fampedia.png",
      },
    ],
  });

  items.push({
    label: "2018",
    content: [
      {
        header: "Webdevelopment at ioxp",
        body: "During my internship semester, I worked at {0} as a web developer. Since the team was tiny in the beginning, I was able to take a peek into a wide spectrum of tasks including <b>Design, Testing, System architecture and advanced Web APIs.</b> I love learning about new technologies and I was able to implement/apply many cutting edge techniques. I mainly worked with {1}. Since I couldn't leave all the stuff I build there behind, I continued to work for ioxp as a working student after the semester was over. || Here are some more technologies I worked with:",
        list: ["Typescript", "RxJs", "Adobe XD", "Testcafe", "D3.js"],
        links: [
          { href: "https://www.ioxp.de/en/", desc: "ioxp" },
          { href: "https://angular.io/", desc: "Angular" },
        ],
        image: "wm.jpg",
      },
      {
        header: "Smart Rockets",
        body: "During a course on machine learning, I build a version of the {0}. The rockets have to learn to hit a target and to avoid obstacles. The AI is based on a simulated evolutionary process. The population starts off with random genes and gets smarter over time. Like in nature, rockets that have a high success rate are able to survive to produce the next generation.",
        list: ["{1}", "{2}", "Created using {3}"],
        links: [
          {
            href: "http://blog.blprnt.com/blog/blprnt/project-smart-rockets",
            desc: "Smart Rockets",
          },
          {
            href: "https://poesterlin.github.io/MLE-uebungen/Woche2/index.html",
            desc: "Live Version",
          },
          {
            href: "https://github.com/poesterlin/MLE-uebungen/tree/master/Woche2",
            desc: "Code",
          },
          { href: "https://p5js.org/", desc: "p5.js" },
        ],
        image: "rockets.jpg",
      },
    ],
  });

  items.push({
    label: "2017",
    content: [
      {
        header: "Project Semester",
        body: "At the University of applied science in Mannheim, the fourth semester is always something special. For the first time students get to work with a real company on a real project but in a save environment. Our task was it to build a platform for {0}, a company that develops conversational commerce and AI software. Using this platform you were supposed to be able to configure text bots that can then be deployed to interact with customers. We worked for 10 weeks in a team of 4 design students and 6 computer science students. Since we had never done anything on that scale before everything was a little messy at first, but we were still proud of what we had achieved in such a short time. |The finished code is a little ruf around the edges but you can find it {1}. ||The technologies we used to make this happen were:",
        list: ["Vue.js", "Docker + Compose", "Node.js"],
        links: [
          { href: "https://www.liveperson.com/", desc: "Liveperson" },
          {
            href: "https://github.com/poesterlin/SEP-deploy",
            desc: "here",
          },
        ],
        image: "SEP.png",
      },
      {
        header: "Universal Vocabulary Test",
        body: "In school, I always used an app to learn for vocabulary tests. Sadly this app was no longer working on the latest version of Android. I took this opportunity to create a small web app, that had the same features as the app, but also the flexibility of a website. There you can import an Excel sheet of your vocabulary list and test yourself. || You can {0}.",
        list: ["{2}", "created using {1}"],
        links: [
          { href: "https://vok-test.netlify.com/", desc: "find it here" },
          { href: "https://vuejs.org/", desc: "Vue.js" },
          { href: "https://github.com/poesterlin/Vok", desc: "Code" },
        ],
        image: "vok.svg",
        background: true,
      },
    ],
  });

  items.push({
    label: "2015",
    content: [
      {
        header: "A* Pathfinding in Scratch",
        body: "In school, I programmed my first algorithms in {0}. It's a visual programming language designed for kids. But even though it looks basic, it secretly taught me a lot of advanced CS concepts and analytical thinking. For my A levels, I did a presentation of the {1} and presented a version programmed in Scratch. Sadly the file got lost over the years.",
        list: [],
        links: [
          { href: "https://scratch.mit.edu/", desc: "Scratch" },
          {
            href: "https://en.wikipedia.org/wiki/A*_search_algorithm",
            desc: "A* Pathfinding Algorithm",
          },
        ],
        image: "aStart.jpg",
      },
    ],
  });
</script>

<h1>A History of Philip</h1>

{#each items as year}
  <div class="item">
    <div class="label">{year.label}</div>
    <div class="spacer">
      {#each year.content as item}
        <Entry config={item} />
      {/each}
    </div>
  </div>
{/each}

<style>
  :global(body) {
    --accent: #62929e;
    --background: #393d3f;
    --borders: #546a7b;
    --links: #92cfdf;
    width: 1000px;
    max-width: 98vw;
    margin: auto;
    height: auto;
    color: #faf5f4;
    padding: 0;
    padding-bottom: 50px;
    background: linear-gradient(to left, black 5%, var(--background));
    background-size: 100%;
    background-repeat: no-repeat;
  }

  @media (prefers-color-scheme: light) {
    :global(body) {
      --accent: #61c89d;
      --links: #61c89d;
      --background: #f9f9f9;
      --borders: #00000052;
      color: #292929;
    }
    :global(a) {
      font-weight: 500;
    }
  }

  :global(body:before) {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    background: var(--background);
  }

  h1 {
    text-align: center;
    margin-bottom: 50px;
    padding-top: 150px;
  }

  .spacer {
    padding-left: 25px;
    border-left: 2px solid var(--accent);
    margin-left: 25px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent 5%,
      rgba(255, 255, 255, 0.05) 95%
    );
    min-height: calc(360px - 35vw);
  }

  .item {
    display: flex;
    position: relative;
  }

  .label::after {
    content: "";
    position: absolute;
    right: -31px;
    top: 6px;
    background: var(--accent);
    height: 10px;
    width: 10px;
  }

  .label {
    flex: 1 1 17%;
    margin-left: 4%;
    margin-bottom: 25px;
    margin-top: 23px;
    top: 22px;
    max-width: 17%;
    text-align: center;
    display: inline-table;
    position: sticky;
    word-break: break-word;
  }

  @media (max-width: 600px) {
    .label {
      flex: 1 1 10px;
      width: 10px;
      min-width: 10px;
      max-width: 10px;
    }
  }
</style>
