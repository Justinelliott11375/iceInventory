const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/reports/";
const sequelize = require("../../src/db/models/index").sequelize;
const Report = require("../../src/db/models").Report;

describe('routes: reports', () => {

    beforeEach((done) => {
        currentDate = Date.now();
        this.report;
        sequelize.sync({force: true}).then((res) => {
            Report.create({
                date: currentDate
            })
            .then((report) =>{
                this.report = report;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
    })
    
    describe('GET /reports', () => {
        
        it('should return a status code 200 and all reports', (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                expect(body).toContain(currentDate);
                done();
            })
        });
    });
});
