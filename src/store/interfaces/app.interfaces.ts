import { IInsights, IRimak } from "../../shared/interfaces/rimak.interfaces";
import { IRimakRequest } from "../thunks/app.thunk";

export interface IAppState {
  productParam: string;
  data: IRimak[];
  request: IRimakRequest;
  dataInsights: IInsights[];
  loadingData: boolean;
}
