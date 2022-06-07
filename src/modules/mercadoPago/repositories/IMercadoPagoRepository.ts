import {
  PaymentCreateResponse,
  PaymentGetResponse,
} from "mercadopago/resources/payment";

interface ICreatePixPaymentDTO {
  value: number;
  description: string;
  cpf: string;
}

interface IMercadoPagoRepository {
  createPixPayment({
    value,
    description,
    cpf,
  }: ICreatePixPaymentDTO): Promise<PaymentCreateResponse>;

  statusPayment(paymentid: number): Promise<PaymentGetResponse>;
}

export { IMercadoPagoRepository, ICreatePixPaymentDTO };
