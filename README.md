# AnimeWiki Backend Documentation

## Overview

The AnimeWiki project is a full-stack application that allows users to explore anime and character information. The project comprises both frontend and backend components, utilizing a variety of libraries and technologies.

[View Frontend Repository](https://github.com/alefnsc/react-anime-wiki-web)

[CodeUp 180D Challenge - View Progress](https://github.com/alefnsc/CodeUp-180D/blob/main/180-days-of-code/log.md)

## Routes

- **Anime Endpoints:**

  - GET /animes: Retrieves a list of all anime.
  - GET /animes/:id: Retrieves details of a specific anime.
  - POST /animes: Creates a new anime.
  - PUT /animes/:id: Updates details of a specific anime.
  - DELETE /animes/:id: Deletes a specific anime.

- **Character Endpoints:**
  - GET /characters: Retrieves a list of all characters.
  - GET /characters/:id: Retrieves details of a specific character.
  - POST /characters: Creates a new character.
  - PUT /characters/:id: Updates details of a specific character.
  - DELETE /characters/:id: Deletes a specific character.
  - GET /charactersWithAnime: Retrieves a list of characters with associated anime.

## How to Run Locally

To run the project locally:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start` or `npm run dev` for development.

## Dependencies:

- **@fastify/cors:** ^8.4.1
- **@prisma/client:** ^5.6.0
- **fastify:** ^4.24.3
- **zod:** ^3.22.4

### DevDependencies:

- **@types/node:** ^20.10.0
- **prisma:** ^5.6.0
- **tsup:** ^8.0.1
- **tsx:** ^4.5.0
- **typescript:** ^5.3.2

## Contact

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
