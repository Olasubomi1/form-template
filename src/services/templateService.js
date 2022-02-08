import { apiUrl } from "../config.json";
import httpService from "./httpService";

const apiEndpoint =
  "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

export function getFormTemplate() {
  return httpService.get(apiEndpoint);
}
