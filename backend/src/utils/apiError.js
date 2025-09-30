class Apierror extends Error{
  constructor(
    statusCode,
    message="Something held wrong"
  ){
    super(message);
    this.message=message,
    this.statusCode=statusCode
  }

}
export {Apierror}