import { MercadoPagoRepository } from "../../repositories/MercadoPagoRepository";
import { CreatePixPaymentUseCase } from "./CreatePixPaymentUseCase";
import { CreatePixPaymentController } from "./CreatePixPaymentController";

const mercadoPagoRepository = new MercadoPagoRepository();
const createPixPaymentUseCase = new CreatePixPaymentUseCase(
  mercadoPagoRepository
);
const createPixPaymentController = new CreatePixPaymentController(
  createPixPaymentUseCase
);

export { createPixPaymentController };
