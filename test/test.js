const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server');
const expect = chai.expect;
const Category = require('../src/models/category');
chai.use(chaiHttp);

describe('categories', () =>{

    beforeEach((done) =>{
        Category.deleteMany({})
        .then(() => done());
    }
    );
    
it('get all', (done)  =>{
    chai.request(app)
    .get('/api/category')
    .then(response => {
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.equal(0);
        done();
    })
    .catch(err => {throw err;});
});

it('create category', (done)  =>{
    const categoryName="phone";
    chai.request(app)
    .put('/api/category')
    .send({ name: categoryName})
    .then(response => {
        expect(response.body.name).to.equal(categoryName);
        expect(response.status).to.equal(201);
        chai.request(app)
        .get('/api/category')
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body[0].name).to.equal(categoryName);
            done();
        })
    })
    .catch(err => {throw err;});
});
});