<template>
  <section>
    <div class="info-container">
      <h1>技術<img class="microchip-icon" src="~/static/assets/icons/microchip-solid-icon.svg"/></h1>
      <p>アプリを作成する時に使用した事のある技術</p>
<ul>
        <h2>Programming Languages</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Java</li>
        <li>Python</li>

        <h2>Frameworks and Libraries</h2>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Nest.js</li>
        <li>EJS</li>
        <li>Chakra UI</li>
        <li>Tailwind CSS</li>
        <li>StyledComponents</li>
        <li>CSS Components</li>
        <li>CSS Modules in React</li>
        <li>Bootstrap</li>
        <li>Redux</li>
        <li>Zustand</li>
        <li>Jotai</li>
        <li>Recoil</li>
        <li>ReactQuery</li>
        <li>Apollo Client</li>
        <li>GraphQL</li>
        <li>Hasura</li>
        <li>Prisma</li>

        <h2>Cloud and DevOps Tools</h2>
        <li>AWS <span class="aws-services">(Amplify, ECS, S3, RDS, Fargate, EventBridge, Cognito)</span></li>
        <li>Terraform</li>
        <li>Docker</li>
        <li>Vercel</li>
        <li>Railway</li>

        <h2>Testing Tools</h2>
        <li>Jest</li>
        <li>Vitest</li>
        <li>K6</li>

        <h2>Version Control and CI/CD</h2>
        <li>Git</li>
        <li>Github</li>
        <li>Husky</li>
        <li>NPM</li>

        <h2>Databases</h2>
        <li>Postgres</li>
        <li>Supabase</li>
        <li>MongoDB</li>
        <li>Firebase</li>

        <h2>Operating Systems</h2>
        <li>Windows</li>
        <li>Linux</li>
        <li>MacOS</li>
        <li>IOS</li>

        <h2>Development Tools</h2>
        <li>VSCode</li>
        <li>Cursor</li>
        <li>Intellij</li>

        <h2>Browsers and Dev Tools</h2>
        <li>Chrome / Firefox and their dev tools</li>

        <h2>Productivity Tools</h2>
        <li>G-suite - Google Docs, Sheets, Slides, Drive, etc.</li>
        <li>Microsoft Office - Word, Excel, PowerPoint, Outlook, Teams, etc.</li>

        <h2>Media and Design Tools</h2>
        <li>Gimp</li>
        <li>Movie Maker</li>
        <li>iMovie</li>
        <li>OBS</li>
      </ul>
    </div>
  </section>
</template>
<style scoped>

section{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0.7rem;
    }
  

  h1{
    margin: 0;
   text-align: center;
   font-size: 1.75rem;
   text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
  }

  h2{
    margin:0.3rem;
    font-size: 1.2rem;
    color: rgba(3, 110, 250, 0.728);
  }

  img.microchip-icon{
  max-width: 2rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

p{
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
}
  ul{
    padding: 0;
    margin-top: 0rem;
  }
  li{
    list-style: none;
    font-weight: 600;
  }

  .info-container{
    box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
    padding: 0.5rem;
    border: 0.1rem double rgb(35, 35, 35);
    background-color: white;
    min-width: 40%;
    padding: 1rem;
  }

  .learning{
    color: rgb(255, 0, 64);
  }

  .aws-services{
    display: block;
    font-weight: 400;
    font-size: 0.8rem;
    color: rgb(0, 0, 0);
  }
</style>