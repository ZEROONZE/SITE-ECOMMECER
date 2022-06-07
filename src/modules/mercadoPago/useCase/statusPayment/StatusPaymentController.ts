import { Request, Response } from "express";

import { StatusPaymentUseCase } from "./StatusPaymentUseCase";

class StatusPaymentController {
  constructor(private statusPaymentUseCase: StatusPaymentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { paymentid } = req.body;

    try {
      const payment = await this.statusPaymentUseCase.execute(paymentid);
      return res.status(200).json(payment);
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
}

export { StatusPaymentController };
