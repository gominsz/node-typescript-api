import bodyParser from 'body-parser';
import './util/modules-alias';
import { Server } from '@overnightjs/core';
import { ForecastController } from './controllers/forecast';


export class SetupServer extends Server {


  constructor(private port = 3000) {
    super();
  }

  public init (): void {
    this.SetupExpress();
    this.setupControllers();
  }

  private SetupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(){
    return this.app;
  }
}