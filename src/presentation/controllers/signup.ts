export default class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.name) {
      return {
        statusCode: 400
      }
    }
    return {}
  }
}
