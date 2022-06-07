import { MercadoPagoRepository } from "../../repositories/MercadoPagoRepository";
import { StatusPaymentUseCase } from "./StatusPaymentUseCase";
import { StatusPaymentController } from "./StatusPaymentController";

const mercadoPagoRepository = new MercadoPagoRepository();
const statusPaymentUseCase = new StatusPaymentUseCase(mercadoPagoRepository);
const statusPaymentController = new StatusPaymentController(
  statusPaymentUseCase
);

export { statusPaymentController };
