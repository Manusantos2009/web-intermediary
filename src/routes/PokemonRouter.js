import { Router } from "express";
import PokemonController from "../controllers/PokemonController.js";

const pokemonRouter = Router();

pokemonRouter.get("/",PokemonController.getPokemon);
pokemonRouter.post("/",PokemonController.createdPokemon);
pokemonRouter.delete("/",PokemonController.deletePokemon);

export default pokemonRouter;