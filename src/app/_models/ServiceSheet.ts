export class ServiceSheet {
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  problem_review: string;
  did_job: string;
  used_goods: string;
  price: string;
  day: string;
  report_uuid: string;
  uuid: string;

  constructor(customer_name: string, customer_address: string, customer_phone: string, problem_review: string, did_job: string, used_goods: string, price: string, day: string, report_uuid: string, uuid: string) {
    this.customer_name = customer_name;
    this.customer_address = customer_address;
    this.customer_phone = customer_phone;
    this.problem_review = problem_review;
    this.did_job = did_job;
    this.used_goods = used_goods;
    this.price = price;
    this.day = day;
    this.report_uuid = report_uuid;
    this.uuid = uuid;
  }
}
