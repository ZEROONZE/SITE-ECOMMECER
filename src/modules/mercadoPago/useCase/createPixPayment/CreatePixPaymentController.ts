import { Request, Response } from "express";
import { CreatePixPaymentUseCase } from "./CreatePixPaymentUseCase";

class CreatePixPaymentController {
  constructor(private createPixPaymentUseCase: CreatePixPaymentUseCase) {}

  async handle(req: Request, res: Response) {
    const { value, description, cpf } = req.body;

    try {
      const payment = await this.createPixPaymentUseCase.execute({
        value,
        description,
        cpf,
      });
      res.status(201).json(payment);
    } catch (err) {
      res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}

export { CreatePixPaymentController };
