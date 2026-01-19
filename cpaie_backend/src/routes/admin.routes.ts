import { Router } from "express";
import { checkJwt } from "../config/auth0.js";
import { syncOrCreateUser } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/roleCheck.middleware.js";
import { getAllUsers, updateContact, deleteContact, getStats } from "../controllers/admin.controller.js";

const router = Router();

// Toutes les routes admin nécessitent authentification et rôle admin
router.use(checkJwt);
router.use(syncOrCreateUser);
router.use(requireAdmin);

router.get("/contacts", getAllUsers);
router.get("/stats", getStats);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;
