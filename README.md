# Aftonbladet-checker-nuxt

This is small Next.js (React) application that scapes Aftonbladet.se everyday - and has been since 2017 - for some silly information. This information is stored on Google Firebase and displayed on this site in different charts.

I have previously made a similar [application](https://github.com/danielv14/Aftonbladet-Checkr) back in 2017 - based on PHP framework Laravel and Vue.js - which stored scraped data in a Postgres database. This React-based application is simply a version 2 of the previous project - now in 100% TypeScript and React.

## Development

```
npm run dev             # Start next dev server

npm run build           # Build the next project

npm run start $PORT     # Start the next project in production mode

npm run lint            # Lint the entire project

```

## Testdata in development mode

When starting this project with `npm run dev` the `NODE.ENV` is set to development. Since there is a limit for amount of requests to the firebase database for the free plan testdata will be used when starting the application in development. The testdata is located in `src/utils/testData/checkersTestData.ts` and is real data gathered from 2017 to early 2020 - gathered from the previous projects database. 