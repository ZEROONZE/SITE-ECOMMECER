import { PaymentGetResponse } from "mercadopago/resources/payment";
import { MercadoPagoRepository } from "../../repositories/MercadoPagoRepository";

class StatusPaymentUseCase {
  constructor(private mercadoPagoRepository: MercadoPagoRepository) {}

  async execute(paymentid: number): Promise<PaymentGetResponse> {
    const payment = await this.mercadoPagoRepository.statusPayment(paymentid);
    return payment;
  }
}

export { StatusPaymentUseCase };
