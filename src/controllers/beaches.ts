import { Controller, Post } from '@overnightjs/core';
import { Beach } from '@src/models/beache';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

@Controller('beaches')
export class BeachesController {
  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const beach = new Beach(req.body);
      const result = await beach.save();
      res.status(201).send(result);
    } catch (error: unknown) {
      // 'unknown' para evitar o erro de tipo desconhecido
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: (error as Error).message });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
}
