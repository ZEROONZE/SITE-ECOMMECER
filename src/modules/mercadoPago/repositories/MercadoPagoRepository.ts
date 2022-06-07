import mercadopago from "mercadopago";
import { CreatePaymentPayload } from "mercadopago/models/payment/create-payload.model";
import {
  PaymentCreateResponse,
  PaymentGetResponse,
} from "mercadopago/resources/payment";
import {
  ICreatePixPaymentDTO,
  IMercadoPagoRepository,
} from "./IMercadoPagoRepository";

class MercadoPagoRepository implements IMercadoPagoRepository {
  constructor() {
    mercadopago.configure({
      access_token:
        "TEST-3892058761100473-080307-6de1cecd3ae37bed3d1bdbb44e4658da-323877501",
    });
  }

  async createPixPayment({
    value,
    description,
    cpf,
  }: ICreatePixPaymentDTO): Promise<PaymentCreateResponse> {
    return new Promise((resolve, reject) => {
      var payment_data: CreatePaymentPayload = {
        transaction_amount: value,
        description: description,
        payment_method_id: "pix",
        payer: {
          email: "teste@gmail.com",
          identification: {
            type: "CPF",
            number: cpf,
          },
        },
        installments: 0,
      };
      mercadopago.payment
        .create(payment_data)
        .then((payment) => {
          resolve(payment);
        })
        .catch((error) => {
          reject(new Error(error));
        });
    });
  }

  async statusPayment(paymentid: number): Promise<PaymentGetResponse> {
    return new Promise((resolve, reject) => {
      try {
        const payment = mercadopago.payment.findById(paymentid);
        resolve(payment);
      } catch (error) {
        reject(new Error(error));
      }
    });
  }
}

export { MercadoPagoRepository };
