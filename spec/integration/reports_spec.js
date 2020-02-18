const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/reports/";
const sequelize = require("../../src/db/models/index").sequelize;
const Report = require("../../src/db/models").Report;

describe('routes: reports', () => {

    beforeEach((done) => {
        currentDate = new Date();
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

    describe('GET /reports/new', () => {
        
        it('should render a new report form', (done) => {
            request.get(`${base}new`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("New Daily Report");
                done();
            })
        });
        
    });

    describe('POST /reports/create', () => {
        const newReportDate = new Date();
        const options = {
            url: `${base}create`,
            form: {
                date: newReportDate
            }
        };

        it('should create a new report and redirect', (done) => {
            
            request.post(options,
                (err, res, body) => {
                    Report.findOne({where: {date: newReportDate}})
                    .then((report) => {
                        expect(res.statusCode).toBe(303);
                        done();
                    })
                    .catch((err) => {
                        console.log(err);
                        done();
                    })
                })
        });
        
    });

    describe('GET /reports/:id', () => {
        it('should render a view with the selected report', (done) => {
            request.get(`${base}${this.report.id}`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("currentDate");
            });
        });
        
    });
    
    
    
});
