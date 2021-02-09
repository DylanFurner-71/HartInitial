export class StudentService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  checkAdmin() {
    return this.$http.post('/hclssurvey1/isadmin.json')
      .then(res => res.data);
  }

  getStudentInfo(smuId) {
    return this.$http.post('/hclssurvey1/getstudentinfo.json', {
      smuId,
    }).then(res => res.data);
  }
}
