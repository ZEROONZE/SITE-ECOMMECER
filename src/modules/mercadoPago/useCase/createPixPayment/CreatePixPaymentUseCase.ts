import { MercadoPagoRepository } from "../../repositories/MercadoPagoRepository";
import { PaymentCreateResponse } from "mercadopago/resources/payment";

interface IRequest {
  value: number;
  description: string;
  cpf: string;
}

class CreatePixPaymentUseCase {
  constructor(private mercadoPagoRepository: MercadoPagoRepository) {}

  async execute({
    value,
    description,
    cpf,
  }: IRequest): Promise<PaymentCreateResponse> {
    const payment = await this.mercadoPagoRepository.createPixPayment({
      value,
      description,
      cpf,
    });
    return payment;
  }
}

export { CreatePixPaymentUseCase };
