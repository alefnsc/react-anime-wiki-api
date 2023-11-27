import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import z from "zod";

const app = fastify();

const prisma = new PrismaClient();

app.get("/animes", async () => {
  const animes = await prisma.anime.findMany();
  return animes;
});

app.get("/animes/:id", async (request, reply) => {
  const id = request.params;
  const anime = await prisma.anime.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!anime) {
    return reply.status(404).send();
  }
  return anime;
});

app.post("/animes", async (request, reply) => {
  const createAnimeSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    release: z.string(),
    director: z.string(),
    episodes: z.number(),
    publication: z.string(),
  });

  const { id, name, description, release, director, episodes, publication } =
    createAnimeSchema.parse(request.body);

  await prisma.anime.create({
    data: {
      id,
      name,
      description,
      release,
      director,
      episodes,
      publication,
    },
  });
  return reply.status(201).send();
});

app.put("/animes/:id", async (request, reply) => {
  const id = request.params;
  const updateAnimeSchema = z.object({
    name: z.string(),
    description: z.string(),
    release: z.string(),
    director: z.string(),
    episodes: z.number(),
    publication: z.string(),
  });

  const { name, description, release, director, episodes, publication } =
    updateAnimeSchema.parse(request.body);

  await prisma.anime.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
      release,
      director,
      episodes,
      publication,
    },
  });
  return reply.status(204).send();
});

app.delete("/animes/:id", async (request, reply) => {
  const { id } = request.params as { id: number };
  await prisma.anime.delete({
    where: {
      id: Number(id),
    },
  });
  return reply.status(204).send();
});
app.get("/characters", async () => {
  const characters = await prisma.character.findMany();
  return characters;
});

app.post("/characters", async (request, reply) => {
  const createCharacterSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    characteristics: z.string(),
    prefix: z.string(),
    imageURL: z.string(),
    age: z.number(),
    animeId: z.number(),
  });

  const { id, name, characteristics, prefix, imageURL, age, animeId } =
    createCharacterSchema.parse(request.body);

  await prisma.character.create({
    data: {
      id,
      name,
      characteristics,
      prefix,
      imageURL,
      age,
      animeId,
    },
  });
  return reply.status(201).send();
});

app.put("/characters/:id", async (request, reply) => {
  const id = request.params;
  const updateCharacterSchema = z.object({
    name: z.string(),
    characteristics: z.string(),
    prefix: z.string(),
    imageURL: z.string(),
    age: z.number(),
    animeId: z.number(),
  });

  const { name, characteristics, prefix, imageURL, age, animeId } =
    updateCharacterSchema.parse(request.body);

  await prisma.character.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      characteristics,
      prefix,
      imageURL,
      age,
      animeId,
    },
  });
  return reply.status(204).send();
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => console.log("Server is running on port 3333"));
