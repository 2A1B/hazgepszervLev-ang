export class JobReport {
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  planned_delivery: string;
  problem_review: string;
  job_title: string;
  status: string;
  uuid: string;
  constructor(customer_name: string, customer_address: string, customer_phone: string, planned_delivery: string, problem_review: string, job_title: string, status: string, uuid: string) {
    this.customer_name = customer_name;
    this.customer_address = customer_address;
    this.customer_phone = customer_phone;
    this.planned_delivery = planned_delivery;
    this.problem_review = problem_review;
    this.job_title = job_title;
    this.status = status;
    this.uuid = uuid;
  }
}
