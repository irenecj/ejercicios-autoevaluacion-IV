const request = require('supertest')
const app = require('../express/api-basica.js')

describe("PUT /asignatura/:iv", function() {
  it('should show the subject', function (done) {
    request(app)
      .put('/asignatura/iv')
      .expect('Content-Type', /json/)
      .expect(200,done);
  });
});

describe('GET /', function() {
  it('should shows a json', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        if(err){
          return done(err);
        }
        expect(res.body.mensaje).to.be('¡La página principal se muestra correctamente!.');
        return done();
      });
  });
});

describe('GET /bienvenida', function() {
  it('should shows a json', function(done) {
    request(app)
      .get('/bienvenida')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        if(err){
          return done(err);
        }
        expect(res.body.mensaje).to.be.equal('Bienvenid@ Irene');
        return done();
       });
  });
});
