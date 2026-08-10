import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
  response.json({
    ok: true,
    project: "Micro Investment in Overseas Funds",
    network: process.env.STELLAR_NETWORK ?? "testnet",
    rpcUrl: process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org",
  });
});
