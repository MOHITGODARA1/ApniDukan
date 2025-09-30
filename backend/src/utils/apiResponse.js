class Apiresponse{
  constructor(
    statuscode,
    message="sucess"
  ){
    this.message=message,
    this.statuscode=statuscode
  }
}

export {Apiresponse}