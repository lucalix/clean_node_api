export default class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    return {}
  }
}
